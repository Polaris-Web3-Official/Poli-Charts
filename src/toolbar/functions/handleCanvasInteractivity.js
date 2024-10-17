import { states } from "../constants/STATES.js";
import { $canvas } from "../toolbar.js";
import { $container3 } from "../toolbar.js";
import { newChart } from "../toolbar.js";

export function handleCanvasInteractivity() {
  try {
    const isMoving = states.IS_CHART;
    if (isMoving) {
      // Permitir interacción con la gráfica
      newChart.updateOptions({
        chart: {
          zoom: { enabled: true },
          pan: { enabled: true },
        },
      });
      $canvas.style.cursor = "move";
      $container3.style.pointerEvents = "none";
    } else {
      // Desactivar interacción con la gráfica, permitiendo solo dibujar en el canvas
      newChart.updateOptions({
        chart: {
          zoom: { enabled: false },
          pan: { enabled: false },
        },
      });
      $canvas.style.cursor = "crosshair";
      $container3.style.pointerEvents = "auto";
    }
  } catch (e) {
    console.error(
      `POLI-CHARTS REPORT: -> Error in function handleCanvasInteractivity. | Error: ${e}`
    );
  }
}
