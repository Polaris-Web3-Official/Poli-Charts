import { ctx } from "../toolbar.js";

export function erasing(offsetX, offsetY) {
  try {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 1200;
    ctx.beginPath();
    ctx.arc(offsetX, offsetY, 60, 0, Math.PI * 2); // Dibuja un círculo para borrar
    ctx.fill();
  } catch (e) {
    console.error(`POLI-CHARTS REPORT: -> Error erasing. | Error: ${e}`);
  }
}
