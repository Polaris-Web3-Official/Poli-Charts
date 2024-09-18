import { states } from "../constants/STATES";
import { drawing } from "../figures/drawing";
import { erasing } from "../figures/erasing";
import { arrow } from "../figures/arrow";
import { square } from "../figures/aquare";

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
