export function validateNumber(value, paramName) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error(
      `INFORME POLI-CHARTS: -> Se detecto un Parámetro inválido: ${paramName} debe ser un número.`
    );
  } else {
    console.log(`Número ${paramName} válido.`);
  }
}
