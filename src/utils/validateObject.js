export function validateObject(value, paramName) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(
      `POLI-CHARTS REPORT: -> Invalid parameter detected: ${paramName} must be an object.`
    );
  } else {
    console.log(`Valid ${paramName} object.`);
  }
}
