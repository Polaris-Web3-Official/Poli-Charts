import { states } from "./STATES";
import { MODES } from "./MODES";
import { setMode } from "../functions/setMode";

import { downloadCanvas } from "../functions/downloadCanvas";
import { clearCanvas } from "../functions/clearCanvas";

import { arrowSvg } from "./svgs/arrow";
import { chartSvg } from "./svgs/chart";
import { drawSvg } from "./svgs/draw";
import { eraseSvg } from "./svgs/erase";
import { squareSvg } from "./svgs/square";
import { clearSvg } from "./svgs/clear";
import { downloadSvg } from "./svgs/download";

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
