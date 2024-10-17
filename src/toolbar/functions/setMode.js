import { MODES } from "../constants/MODES.js";
import { states } from "../constants/STATES.js";

import { handleCanvasInteractivity } from "./handleCanvasInteractivity.js";

export function setMode(newMode) {
  try {
    Object.keys(states).forEach((key) => {
      if (key.startsWith("IS_")) states[key] = false;
    });

    // Activar el estado correspondiente al modo seleccionado
    switch (newMode) {
      case MODES.CHART:
        states.IS_CHART = true;
        break;
      case MODES.DRAW:
        states.IS_DRAWING = false;
        states.IS_ARROW = false;
        states.IS_SQUARE = false;
        states.IS_ERASING = false;
        break;
      case MODES.ERASE:
        states.IS_ERASING = false;
        states.IS_DRAWING = false;
        states.IS_ARROW = false;
        states.IS_SQUARE = false;
        break;
      case MODES.ARROW:
        states.IS_ARROW = false;
        states.IS_DRAWING = false;
        states.IS_ERASING = false;
        states.IS_SQUARE = false;
        break;
      case MODES.SQUARE:
        states.IS_SQUARE = false;
        states.IS_DRAWING = false;
        states.IS_ERASING = false;
        states.IS_ARROW = false;
        break;
      case MODES.CLEAR:
        states.IS_CLEAR = true;
        break;
      case MODES.DOWNLOAD:
        states.IS_DOWNLOAD = true;
        break;
    }

    states.MODE = newMode;
    handleCanvasInteractivity();
  } catch (e) {
    console.error(
      `POLI-CHARTS REPORT: -> Error in function setMode. | Error: ${e}`
    );
  }
}
