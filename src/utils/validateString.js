export function validateString(value, paramName) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `INFORME POLI-CHARTS: -> Se detecto un Parámetro inválido: ${paramName} debe ser una cadena no vacía.`
    );
  } else {
    console.log(`Cadena ${paramName} válida.`);
  }
}
