export function validateObject(value, paramName) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(
      `INFORME POLI-CHARTS: -> Se detecto un Parámetro inválido: ${paramName} debe ser un objeto.`
    );
  } else {
    console.log(`Objecto ${paramName} válido.`);
  }
}
