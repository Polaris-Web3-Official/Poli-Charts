import { $newElement } from "../toolbar.js";

export function downloadCanvas() {
  const $downLoadCanvas = document.createElement("canvas");
  const ctxDownLoadCanvas = $downLoadCanvas.getContext("2d");

  import("https://cdn.jsdelivr.net/npm/html2canvas-pro@1.5.8/+esm")
    .then(({ default: html2canvas }) => {
      html2canvas($newElement).then((canvas) => {
        ctxDownLoadCanvas.drawImage(canvas, 0, 0);
        const imgUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = imgUrl;
        link.click();
      });
    })
    .catch((e) => {
      console.error(
        `POLI-CHARTS REPORT: -> Error in function downloadCanvas. | Error: ${e}`
      );
    });
}
