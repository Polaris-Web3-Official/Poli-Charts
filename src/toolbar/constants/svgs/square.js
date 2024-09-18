export function squareSvg(color) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="Square">
      <rect width="256" height="256" fill="none"/>
      <rect width="176" height="176" x="40" y="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8" class="colorStroke000000 svgStroke"/>
    </svg>
  `;
}
