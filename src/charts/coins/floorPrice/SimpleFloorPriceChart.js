import ApexCharts from "apexcharts";
import { validateHexColor } from "../../../utils/validateHexColor.js";
import { validateObject } from "../../../utils/validateObject.js";
import { validateString } from "../../../utils/validateString.js";
import { parceDateFetchData } from "../../../utils/parceDateFethcData.js";
import { truncateNumber } from "../../../utils/truncateNumber.js";

// Crear selectores
const $ = (select) => document.querySelector(select); // -> selecciona un elemento

//------------------------------------------------------------------------------------------------------------------------
export async function SimpleFloorPriceChartCoinFunction(options) {
  const {
    elementId = "container_testing",
    backgroundColor = "#242424",
    chartColor = "#FF5733",
    fetchData = {
      tokenId: "0.0.1350444",
    },
  } = options;

  // Validar los parámetros
  validateObject(options, "options");
  validateString(options.elementId, "options.elementId");
  validateString(options.backgroundColor, "options.backgroundColor");
  validateString(options.chartColor, "options.chartColor");
  validateHexColor(options.backgroundColor, "options.backgroundColor");
  validateHexColor(options.chartColor, "options.chartColor");
  validateObject(options.fetchData, "options.fetchData");
  validateString(options.fetchData.tokenId, "options.fetchData.tokenId");

  let floorData = [];
  let loading = false;
  let error = false;

  const $element = $(`#${elementId}`);
  if (!$element) {
    throw new Error(`No se encontró el elemento con ID: ${elementId}`);
  }

  $element.style.display = "flex";
  $element.style.position = "relative";

  const $loading = document.createElement("div");
  $loading.style.position = "absolute";
  $loading.style.top = "0";
  $loading.style.left = "0";
  $loading.style.width = "100%";
  $loading.style.height = "100%";
  $loading.style.backgroundColor = "#242424";
  $loading.style.zIndex = "100";
  $loading.style.display = "flex";
  $loading.style.alignItems = "center";
  $loading.style.justifyContent = "center";

  const $loadingImg = document.createElement("img");
  $loadingImg.src =
    "https://cusoft.tech/wp-content/uploads/2024/05/loading.gif";
  $loadingImg.style.width = "200px";
  $loadingImg.style.height = "160px";
  $loading.appendChild($loadingImg);

  const $error = document.createElement("div");
  $error.style.position = "absolute";
  $error.id = "error";
  $error.style.top = "0";
  $error.style.left = "0";
  $error.style.width = "100%";
  $error.style.height = "100%";
  $error.style.backgroundColor = "#242424";
  $error.style.zIndex = "100";
  $error.style.display = "flex";
  $error.style.alignItems = "center";
  $error.style.justifyContent = "center";
  $error.style.flexDirection = "column";
  $error.style.fontSize = "20px";
  $error.style.color = "rgba(255,255,255, 0.5)";

  $error.innerHTML = `
    <img src="https://cusoft.tech/wp-content/uploads/2024/05/working.gif"
      alt=""
      title=""
      style="width: 200px; height: 200px;"
    />
    <span style="text-align: center; font-size: 20px;">
      Error al obtener los datos
    </span>
  `;

  // Función para obtener los datos
  async function fetchAPIData(tokenId, from, to, interval) {
    loading = true;
    $element.appendChild($loading);
    try {
      const url = `https://api.saucerswap.finance/tokens/prices/${tokenId}?from=${from}&to=${to}&interval=${interval}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          "Error al obtener los datos de la API: -->  " + response
        );
      }

      const result = await response.json();
      floorData = result.map((item) => {
        return [item.timestampSeconds * 1000, truncateNumber(item.closeUsd)];
      });
      console.log(floorData);

      loading = false;
      error = false;
      $element.removeChild($loading);
    } catch (e) {
      error = true;
      console.error(e);

      if ($element.contains($loading)) {
        $element.removeChild($loading);
      }

      $element.appendChild($error);
    } finally {
      loading = false;
      if (!error && $element.contains($loading)) {
        $element.removeChild($loading);
      }
    }
  }

  const dateData = [
    Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000), // From: Hace 30 días
    Math.floor(Date.now() / 1000), // To: Fecha actual
  ];

  // Obtener los datos iniciales
  await fetchAPIData(fetchData.tokenId, dateData[0], dateData[1], "DAY");

  if (!error) {
    const chartOptions = {
      chart: {
        type: "area",
        height: "100%",
        width: "100%",
        background: backgroundColor,
        toolbar: {
          show: false, // Desactiva las herramientas
        },
      },
      colors: [chartColor],
      theme: {
        mode: "dark",
      },
      series: [
        {
          name: "Floor Price (usd)",
          data: floorData,
        },
      ],
      dataLabels: {
        enabled: false, // Desactiva las etiquetas de los puntos de datos
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: true,
          format: "dd MMM",
        },
        axisBorder: {
          show: false, // Oculta el borde del eje X
        },
        axisTicks: {
          show: false, // Oculta las marcas del eje X
        },
      },
      yaxis: {
        show: false, // Oculta el eje Y para maximizar espacio
      },
      grid: {
        show: false, // Elimina la cuadrícula
      },
      tooltip: {
        theme: "dark",
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.9,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: chartColor, // Color inicial del área de fondo
              opacity: 0.5,
            },
            {
              offset: 100,
              color: `${chartColor}00`, // Color final del área de fondo
              opacity: 0.9,
            },
          ],
        },
      },
    };

    const $container = document.createElement("div");
    $container.id = `poli-chart_${fetchData.tokenId}_chart`;
    $container.style.position = "relative";
    $container.style.width = "100%";
    $container.style.height = "100%";
    $element.appendChild($container);

    const $watermark = document.createElement("div");
    $watermark.id = `poli-chart_area-${fetchData.tokenId}_watermark`;
    $watermark.style.position = "absolute";
    $watermark.style.top = "0";
    $watermark.style.left = "0";
    $watermark.style.width = "100%";
    $watermark.style.height = "100%";
    $watermark.style.backgroundColor = "rgba(0,0,0,0.0)";
    $watermark.style.backgroundImage = `url(https://cusoft.tech/wp-content/uploads/2024/05/P001.svg)`;
    $watermark.style.backgroundSize = "cover";
    $watermark.style.backgroundPosition = "center";
    $watermark.style.backgroundRepeat = "no-repeat";
    $watermark.style.backgroundSize = "200px";
    $watermark.style.opacity = "0.3";
    $watermark.style.zIndex = "100";
    $watermark.style.pointerEvents = "none";
    $element.appendChild($watermark);

    // Renderizar el gráfico con ApexCharts
    const chart = new ApexCharts($container, chartOptions);
    chart.render();
  }
}
