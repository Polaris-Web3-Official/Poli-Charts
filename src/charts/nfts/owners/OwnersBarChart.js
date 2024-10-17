import ApexCharts from "apexcharts";

import { validateHexColor } from "../../../utils/validateHexColor.js";
import { validateObject } from "../../../utils/validateObject.js";
import { validateString } from "../../../utils/validateString.js";
import { validateNumber } from "../../../utils/validateNumber.js";

const $ = (select) => document.querySelector(select); // -> selecciona un elemento
const $$ = (select) => document.querySelectorAll(select); // -> selecciona varios elementos

//------------------------------------------------------------------------------------------------------------------------
export async function OwnersBarChartFunction(options) {
  const {
    elementId = "container_testing",
    backgroundColor = "#000000",
    barColor = "#5c8ab4",
    fetchData = {
      apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
      tokenId: "0.0.2179656",
      amount: 50,
    },
    fontConfig = {
      size: "12px",
      color: "#fff",
    },
  } = options;

  // Validar los parámetros
  validateObject(options, "options");
  validateString(options.elementId, "options.elementId");
  validateHexColor(options.backgroundColor, "options.backgroundColor");
  validateHexColor(options.barColor, "options.barColor");
  validateObject(options.fetchData, "options.fetchData");
  validateString(options.fetchData.apiKey, "options.fetchData.apiKey");
  validateString(options.fetchData.tokenId, "options.fetchData.tokenId");
  validateNumber(options.fetchData.amount, "options.fetchData.amount");
  validateObject(options.fontConfig, "options.fontConfig");
  validateString(options.fontConfig.size, "options.fontConfig.size");
  validateHexColor(options.fontConfig.color, "options.fontConfig.color");

  let tokenOwnersData = [];

  // Función para obtener los datos
  async function fetchTokenOwners(apiKey, tokenId, amount) {
    const response = await fetch(
      `https://api.sentx.io/v1/public/token/owners?apikey=${apiKey}&token=${tokenId}&amount=${amount}`
    );
    const result = await response.json();
    tokenOwnersData = result.owners.map((owner) => ({
      label: owner.account,
      value: owner.balance,
    }));
  }

  // Obtener los datos iniciales
  await fetchTokenOwners(fetchData.apiKey, fetchData.tokenId, fetchData.amount);

  // Configurar los datos para ApexCharts
  const chartOptions = {
    chart: {
      type: "bar",
      height: "100%",
      width: "100%",
      background: backgroundColor,
    },
    theme: {
      mode: "dark",
    },
    plotOptions: {
      bar: {
        borderRadius: 4, // Ajusta este valor para cambiar el radio del borde redondeado
        horizontal: false,
      },
    },
    series: [
      {
        name: "Balance",
        data: tokenOwnersData.map((d) => d.value),
      },
    ],
    xaxis: {
      categories: tokenOwnersData.map((d) => d.label), // Asignar las etiquetas correctas
      title: {
        text: "",
      },
      labels: {
        show: false,
      },
      tickAmount: 0,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      lines: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "",
      },
      axisBorder: {
        show: false, // Oculta la línea del borde del eje Y
      },
      axisTicks: {
        show: false, // Oculta las muescas en el eje Y
      },
      labels: {
        style: {
          colors: fontConfig.color,
          fontSize: fontConfig.size,
        },
      },
    },
    colors: [barColor],
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    dataLabels: {
      enabled: false, // Desactivar las etiquetas de datos
    },
  };

  // Renderizar la gráfica
  const $element = $(`#${elementId}`);
  if (!$element) {
    throw new Error(`No se encontró el elemento con ID: ${elementId}`);
  }

  const $container = document.createElement("div");
  $container.id = `poli-chart_bar-${fetchData.tokenId}`;
  $container.style.position = "relative";
  $container.style.width = "100%";
  $container.style.height = "100%";
  $element.appendChild($container);

  // Define la función de actualización del gráfico
  async function updateChart(chart) {
    await fetchTokenOwners(
      fetchData.apiKey,
      fetchData.tokenId,
      fetchData.amount
    );
    chart.updateSeries([
      {
        name: "Balance",
        data: tokenOwnersData.map((d) => d.value),
      },
    ]);
  }

  // Configura y renderiza el gráfico usando el proxy
  async function renderChart() {
    const chart = new ApexCharts($container, chartOptions);
    await updateChart(chart);
    chart.render();
  }

  renderChart();
}
