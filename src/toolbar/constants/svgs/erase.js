export function eraseSvg(color) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Erase">
      <path d="m29.66 10.78.14.12 9.07 9.1a2.63 2.63 0 0 1 0 3.69L27.42 35.25h8v2.62H15.3l-6.17-6.21a2.64 2.64 0 0 1 0-3.7L26.08 10.9a2.63 2.63 0 0 1 3.58-.12ZM13.89 26.89 11 29.81l5.4 5.44h5.86l-8.36-8.36Zm14.05-14.14L15.74 25l9.09 9.1L37 21.88l-9.07-9.13Z" fill="${color}" class="color000000 svgShape"/>
    </svg>
  `;
}
