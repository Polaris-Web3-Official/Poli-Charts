export function validateHexColor(color) {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (!hexRegex.test(color)) {
    throw new Error(
      `INFORME POLI-CHARTS: -> Se detecto un color inválido: ${color}. Asegúrate de que esté en formato HEX.`
    );
  }
}
