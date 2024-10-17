export function validateString(value, paramName) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `POLI-CHARTS REPORT: -> Invalid parameter detected: ${paramName} must be a non-empty string.`
    );
  } else {
    console.log(`Valid string ${paramName}.`);
  }
}
