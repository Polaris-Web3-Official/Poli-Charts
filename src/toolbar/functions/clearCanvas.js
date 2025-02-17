import { states } from "../constants/STATES.js";
import { $canvas } from "../toolbar.js";
import { ctx } from "../toolbar.js";

export function clearCanvas() {
  try {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    states.IS_DRAWING = false;
    states.IS_ERASING = false;
    states.IS_ARROW = false;
    states.IS_SQUARE = false;
    states.IS_CLEAR = false;
  } catch (e) {
    console.error(
      `POLI-CHARTS REPORT: -> Error in function clearCanvas. | Error: ${e}`
    );
  }
}
