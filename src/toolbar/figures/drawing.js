import { COLORS } from "../toolbar.js";
import { ctx } from "../toolbar.js";
import { states } from "../constants/STATES.js";

export function drawing(offsetX, offsetY) {
  try {
    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath();
    ctx.moveTo(states.X.LAST_X, states.Y.LAST_Y);
    ctx.lineTo(offsetX, offsetY);
    ctx.lineWidth = 3;
    ctx.strokeStyle = COLORS.LINE_COLOR;
    ctx.stroke();

    states.X.LAST_X = offsetX;
    states.Y.LAST_Y = offsetY;
  } catch (e) {
    console.error(
      `POLI-CHARTS REPORT: -> Error drawing drawing. | Error: ${e}`
    );
  }
}
