import { states } from "../constants/STATES";
import { $canvas } from "../toolbar";
import { ctx } from "../toolbar";

export function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  states.IS_DRAWING = false;
  states.IS_ERASING = false;
  states.IS_ARROW = false;
  states.IS_SQUARE = false;
  states.IS_CLEAR = false;
}
