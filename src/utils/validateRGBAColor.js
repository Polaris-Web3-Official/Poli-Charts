export function validateRGBAColor(color) {
  if (color === "transparent") {
    return;
  }

  const rgbaRegex =
    /^rgba?\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(0|1|0?\.\d+)?\)$/;
  if (!rgbaRegex.test(color)) {
    throw new Error(
      `POLI-CHARTS REPORT: -> Invalid color detected: ${color}. Make sure it is in RGBA format.`
    );
  } else {
    console.log(`Valid RGBA color.`);
  }
}
