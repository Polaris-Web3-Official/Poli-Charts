import { COLORS } from "../toolbar.js";
import { ctx } from "../toolbar.js";
import { states } from "../constants/STATES.js";

export function square(offsetX, offsetY) {
  try {
    ctx.putImageData(states.IMAGE_DATA, 0, 0);
    ctx.globalCompositeOperation = "source-over";

    const width = offsetX - states.X.START_X;
    const height = offsetY - states.Y.START_Y;

    ctx.fillStyle = COLORS.BACKGROUND;
    ctx.fillRect(states.X.START_X, states.Y.START_Y, width, height);
    ctx.strokeStyle = "rgba(112, 158, 221, 0.0)";
    ctx.strokeRect(states.X.START_X, states.Y.START_Y, width, height);
  } catch (e) {
    console.error(`POLI-CHARTS REPORT: -> Error drawing square. | Error: ${e}`);
  }
}
