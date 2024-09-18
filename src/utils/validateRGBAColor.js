export function validateRGBAColor(color) {
  if (color === "transparent") {
    return;
  }

  const rgbaRegex =
    /^rgba?\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(0|1|0?\.\d+)?\)$/;
  if (!rgbaRegex.test(color)) {
    throw new Error(
      `INFORME POLI-CHARTS: -> Se detecto un Color inválido: ${color}. Asegúrate de que esté en formato RGBA.`
    );
  } else {
    console.log(`Color RGBA válido.`);
  }
}
