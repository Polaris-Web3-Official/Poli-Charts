import { MODES } from "./MODES.js";

// Estados
export const states = {
  IS_DRAWING: false,
  IS_ERASING: false,
  IS_ARROW: false,
  IS_SQUARE: false,
  IS_CLEAR: false,
  IS_DOWNLOAD: false,
  IS_CHART: true,
  IMAGE_DATA: [],
  X: { START_X: 0, LAST_X: 0 },
  Y: { START_Y: 0, LAST_Y: 0 },
  MODE: MODES.CHART,
};
