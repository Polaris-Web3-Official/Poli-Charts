//Const
import { toolsCanvas } from "./constants/TOOLS.js";

import { startDrawing } from "./functions/startDrawing.js";
import { draw } from "./functions/draw.js";
import { stopDrawing } from "./functions/stopDrawing.js";

export let $newElement;
export const $canvas = document.createElement("canvas");
export const ctx = $canvas.getContext("2d");
export const $container3 = document.createElement("div");
export let newChart;
export const COLORS = {
  LINE_COLOR: "rgba(112, 158, 221, 1)",
  BACKGROUND: "rgba(112, 158, 221, 0.1)",
};

export async function toolbar($element, $container1, chart) {
  newChart = chart;
  $newElement = $element;

  $container3.id = `poli-chart_canvas`;
  $container3.style.position = "absolute";
  $container3.style.width = "calc(100% - 40px)";
  $container3.style.height = "100%";
  $container3.style.top = "0";
  $container3.style.left = "50px";
  $container3.style.zIndex = "9999";
  $container3.style.pointerEvents = "none"; // Permite hacer click en el canvas
  $container3.style.overflow = "hidden";
  $container3.style.cursor = "crosshair";
  $element.appendChild($container3);

  // Crear y configurar el canvas para dibujo
  $canvas.style.position = "absolute";
  $canvas.style.top = "0";
  $canvas.style.left = "0";
  $container3.appendChild($canvas);

  // Asegurarse de que el canvas tenga el tamaño correcto
  $canvas.width = $container3.clientWidth;
  $canvas.height = $container3.clientHeight;

  // crer las tools
  toolsCanvas.forEach((tool) => {
    const $tool = document.createElement("div");
    $tool.id = `poli-chart_tool-${tool.name}`;
    $tool.style.width = "25px";
    $tool.style.height = "25px";
    $tool.style.marginLeft = "-4px";
    $tool.style.borderRadius = "5px";
    $tool.style.cursor = "pointer";
    $tool.style.display = "flex";
    $tool.style.position = "relative";
    $tool.style.alignItems = "center";
    $tool.style.justifyContent = "center";
    $tool.style.zIndex = "100";
    $tool.style.cursor = "pointer";
    $tool.style.backgroundColor = tool.isActive
      ? "rgba(92,138,180, 0.4)"
      : "rgba(0,0,0,0.0)";
    $tool.addEventListener("click", () => {
      toolsCanvas.forEach((t) => {
        t.isActive = t.name === tool.name;
        const toolElem = document.getElementById(`poli-chart_tool-${t.name}`);
        if (toolElem) {
          toolElem.style.backgroundColor = t.isActive
            ? "rgba(92,138,180, 0.4)"
            : "rgba(0,0,0,0.0)";
        }
      });
    });

    $tool.addEventListener("click", tool.action);
    const $img = document.createElement("div");
    $img.style.width = "20px";
    $img.style.height = "20px";
    $img.innerHTML = tool.icon;
    $tool.appendChild($img);

    $container1.appendChild($tool);
  });

  // Eventos
  $element.addEventListener("resize", () => {
    $canvas.width = $container3.clientWidth;
    $canvas.height = $container3.clientHeight;
  });

  $canvas.addEventListener("mousedown", (e) => startDrawing(e));
  $canvas.addEventListener("mousemove", (e) => draw(e));
  $canvas.addEventListener("mouseup", (e) => stopDrawing(e));
  $canvas.addEventListener("mouseleave", (e) => stopDrawing(e));
}
