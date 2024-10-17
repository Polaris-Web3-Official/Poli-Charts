export function truncateNumber(num) {
  try {
    if (num < 1) {
      // Truncar eliminando ceros irrelevantes pero manteniendo precisión
      const parts = num.toString().split(".");
      if (parts[1]) {
        let truncated = parts[0] + "." + parts[1].slice(0, 6); // Máximo 6 decimales
        return parseFloat(truncated); // Convertir de nuevo a número
      }
      return num; // Si no tiene decimales, retornar tal cual
    } else {
      // Truncar a 2 decimales para números >= 1
      return Math.floor(num * 100) / 100;
    }
  } catch (e) {
    console.error(
      `POLI-CHARTS REPORT: -> Error truncating number: ${num}. | Error: ${e}`
    );
    return num;
  }
}
