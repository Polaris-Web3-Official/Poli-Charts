import { $canvas } from "../toolbar.js";
import { toolsCanvas } from "../constants/TOOLS.js";
import { states } from "../constants/STATES.js";
import { ctx } from "../toolbar.js";

export function startDrawing(event) {
  try {
    const { offsetX, offsetY } = event;
    // Solo iniciar el dibujo si el modo activo es uno que requiere dibujo
    const activeTool = toolsCanvas.find((tool) => tool.isActive);

    if (activeTool) {
      [states.X.START_X, states.Y.START_Y] = [offsetX, offsetY];
      [states.X.LAST_X, states.Y.LAST_Y] = [offsetX, offsetY];
      $canvas.style.cursor = "crosshair";

      // Almacenar la imagen actual del canvas
      states.IMAGE_DATA = ctx.getImageData(0, 0, $canvas.width, $canvas.height);

      console.log(states.IMAGE_DATA);
      console.log(states.SHAPES);
      console.log(states.SELECTED_SHAPE);

      // Activar la herramienta adecuada
      switch (activeTool.name) {
        case "draw":
          states.IS_DRAWING = true;
          break;
        case "erase":
          states.IS_ERASING = true;
          break;
        case "arrow":
          states.IS_ARROW = true;
          break;
        case "square":
          states.IS_SQUARE = true;
          break;
        case "clear":
          states.IS_CLEAR = true;
          break;
        default:
          break;
      }
    }
  } catch (e) {
    console.error(
      `POLI-CHARTS REPORT: -> Error in function startDrawing. | Error: ${e}`
    );
  }
}
