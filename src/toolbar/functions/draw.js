import { states } from "../constants/STATES.js";
import { drawing } from "../figures/drawing.js";
import { erasing } from "../figures/erasing.js";
import { arrow } from "../figures/arrow.js";
import { square } from "../figures/aquare.js";

export function draw(event) {
  const { offsetX, offsetY } = event;
  if (states.IS_DRAWING) {
    drawing(offsetX, offsetY);
  } else if (states.IS_ERASING) {
    erasing(offsetX, offsetY);
  } else if (states.IS_ARROW) {
    arrow(offsetX, offsetY);
  } else if (states.IS_SQUARE) {
    square(offsetX, offsetY);
  }
}
