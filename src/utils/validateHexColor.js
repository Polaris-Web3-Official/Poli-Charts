export function validateHexColor(color) {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (!hexRegex.test(color)) {
    throw new Error(
      `POLI-CHARTS REPORT: -> Invalid color detected: ${color}. Make sure it is in HEX format.`
    );
  }
}
