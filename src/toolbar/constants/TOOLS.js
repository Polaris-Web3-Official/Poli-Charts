import { states } from "./STATES.js";
import { MODES } from "./MODES.js";
import { setMode } from "../functions/setMode.js";

import { downloadCanvas } from "../functions/downloadCanvas.js";
import { clearCanvas } from "../functions/clearCanvas.js";

import { arrowSvg } from "./svgs/arrow.js";
import { chartSvg } from "./svgs/chart.js";
import { drawSvg } from "./svgs/draw.js";
import { eraseSvg } from "./svgs/erase.js";
import { squareSvg } from "./svgs/square.js";
import { clearSvg } from "./svgs/clear.js";
import { downloadSvg } from "./svgs/download.js";

export const toolsCanvas = [
  {
    name: "draw",
    icon: drawSvg("#7eb8ed"),
    isActive: states.IS_DRAWING,
    action: () => {
      setMode(MODES.DRAW);
    },
  },
  {
    name: "erase",
    icon: eraseSvg("#7eb8ed"),
    isActive: states.IS_ERASING,
    action: () => {
      setMode(MODES.ERASE);
    },
  },
  {
    name: "arrow",
    icon: arrowSvg("#7eb8ed"),
    isActive: states.IS_ARROW,
    action: () => {
      setMode(MODES.ARROW);
    },
  },
  {
    name: "square",
    icon: squareSvg("#7eb8ed"),
    isActive: states.IS_SQUARE,
    action: () => {
      setMode(MODES.SQUARE);
    },
  },
  {
    name: "clear",
    icon: clearSvg("#7eb8ed"),
    isActive: states.IS_CLEAR,
    action: () => {
      setMode(MODES.CLEAR);
      clearCanvas();
    },
  },
  {
    name: "download",
    icon: downloadSvg("#7eb8ed"),
    isActive: states.IS_DOWNLOAD,
    action: () => {
      setMode(MODES.DOWNLOAD);
      downloadCanvas();
    },
  },
  {
    name: "chart",
    icon: chartSvg("#7eb8ed"),
    isActive: states.IS_CHART,
    action: () => {
      setMode(MODES.CHART);
    },
  },
];
