export function validateNumber(value, paramName) {
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error(
      `POLI-CHARTS REPORT: -> Invalid parameter detected: ${paramName} must be a number.`
    );
  } else {
    console.log(`Valid ${paramName} number.`);
  }
}
