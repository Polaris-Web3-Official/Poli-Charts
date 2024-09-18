import { COLORS } from "../toolbar";
import { ctx } from "../toolbar";
import { states } from "../constants/STATES";

export function arrow(offsetX, offsetY) {
  // Restaurar el estado anterior del canvas
  ctx.putImageData(states.IMAGE_DATA, 0, 0);
  ctx.globalCompositeOperation = "source-over";

  const startX = states.X.START_X;
  const startY = states.Y.START_Y;

  const dx = offsetX - startX;
  const dy = offsetY - startY;
  const angle = Math.atan2(dy, dx);

  ctx.strokeStyle = COLORS.BACKGROUND;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
  ctx.fillStyle = COLORS.LINE_COLOR;
  ctx.beginPath();
  ctx.moveTo(offsetX, offsetY);
  ctx.lineTo(
    offsetX - 10 * Math.cos(angle - Math.PI / 6),
    offsetY - 10 * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    offsetX - 10 * Math.cos(angle + Math.PI / 6),
    offsetY - 10 * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
