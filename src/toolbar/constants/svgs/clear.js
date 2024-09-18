export function clearSvg(color) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Clear"><script xmlns=""/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link"/><style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style"/><style xmlns="" lang="en" type="text/css" id="dark-mode-native-style"/>
      <path fill="${color}" d="m29.32 24.615-.924-15.863a1 1 0 0 1 .998-1.055h5.212a1 1 0 0 1 .998 1.055l-.923 15.863Zm14.886 3H19.794a6.53 6.53 0 0 0-6.522 6.522v2.007h37.456v-2.007a6.53 6.53 0 0 0-6.522-6.522ZM13.272 56.303H19.8v-6.44a1.5 1.5 0 0 1 3 0v6.44h12.327V45.03a1.5 1.5 0 0 1 3 0v11.272h3.627V50.83a1.5 1.5 0 0 1 3 0v5.473h5.975V39.144H13.272Z" class="color222222 svgShape"/>
    <script xmlns="" async="false" type="text/javascript" src="chrome-extension://fnjhmkhhmkbjkkabndcnnogagogbneec/in-page.js"/></svg>
    `;
}
