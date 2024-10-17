import { states } from "../constants/STATES.js";

export function stopDrawing() {
  try {
    states.IS_DRAWING = false;
    states.IS_ERASING = false;
    states.IS_ARROW = false;
    states.IS_SQUARE = false;
    states.IS_CLEAR = false;
  } catch (e) {
    console.error(
      `POLI-CHARTS REPORT: -> Error in function stopDrawing. | Error: ${e}`
    );
  }
}
