import { ctx } from "../toolbar";

export function erasing(offsetX, offsetY) {
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = 1200;
  ctx.beginPath();
  ctx.arc(offsetX, offsetY, 60, 0, Math.PI * 2); // Dibuja un círculo para borrar
  ctx.fill();
}
