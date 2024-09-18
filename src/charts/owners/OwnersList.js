import { validateHexColor } from "../../utils/validateHexColor";
import { validateRGBAColor } from "../../utils/validateRGBAColor";
import { validateNumber } from "../../utils/validateNumber";
import { validateString } from "../../utils/validateString";
import { validateObject } from "../../utils/validateObject";

// Crear selectores
const $ = (select) => document.querySelector(select); // -> selecciona un elemento

//------------------------------------------------------------------------------------------------------------------------
export async function OwnersList(options) {
  const {
    elementId = "container_testing",
    menuStyles = {
      background: "rgba(40,56,75, 0.5)",
      textColor: "#fff",
      iconColor: "#fff",
    },
    listStyles = {
      background: "rgba(40, 56, 75, 0.1)",
      borderColor: "rgba(200,200,200,1)",
      textColor: "#fff",
      hoverColor: "rgba(40, 56, 75, 0.4)",
    },
    fetchData = {
      apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
      tokenId: "0.0.2179656",
      amount: 50,
    },
  } = options;

  // Validar los parámetros
  validateString(options.elementId, "options.elementId");

  validateObject(options.fetchData, "options.fetchData");
  validateString(options.fetchData.apiKey, "options.fetchData.apiKey");
  validateString(options.fetchData.tokenId, "options.fetchData.tokenId");
  validateNumber(options.fetchData.amount, "options.fetchData.amount");

  validateObject(options.menuStyles, "options.menuStyles");
  validateString(
    options.menuStyles.background,
    "options.menuStyles.background"
  );
  validateString(options.menuStyles.textColor, "options.menuStyles.textColor");
  validateString(options.menuStyles.iconColor, "options.menuStyles.iconColor");

  validateObject(options.listStyles, "options.listStyles");
  validateString(
    options.listStyles.background,
    "options.listStyles.background"
  );
  validateString(
    options.listStyles.borderColor,
    "options.listStyles.borderColor"
  );
  validateString(options.listStyles.textColor, "options.listStyles.textColor");
  validateString(
    options.listStyles.hoverColor,
    "options.listStyles.hoverColor"
  );

  async function fetchTokenOwners(apiKey, tokenId, amount) {
    const response = await fetch(
      `https://api.sentx.io/v1/public/token/owners?apikey=${apiKey}&token=${tokenId}&amount=${amount}`
    );
    const result = await response.json();
    return result;
  }

  const OwnersData = await fetchTokenOwners(
    fetchData.apiKey,
    fetchData.tokenId,
    fetchData.amount
  );

  const $father = $(`#${elementId}`);
  if (!$father) {
    throw new Error(`No se encontró el elemento con ID: ${elementId}`);
  }

  const $child = document.createElement("div");
  $child.id = `poli-chart_list-${fetchData.tokenId}`;
  $child.style.position = "relative";
  $child.style.width = "100%";
  $child.style.height = "100%";
  $child.style.overflow = "auto";
  $child.style.borderRadius = "5px";
  $child.style.border = `1px solid rgba(200,200,200,1)`;
  $child.style.scrollbarWidth = "thin";
  $child.style.scrollbarColor = `rgba(40, 56, 75, 0.6) rgba(40, 56, 75, 0.1)`;

  $father.appendChild($child);

  const $nav = document.createElement("nav");
  $nav.style.position = "relative";
  $nav.style.minWidth = "700px";
  $nav.style.height = "50px";
  $nav.style.background = menuStyles.background;
  $nav.style.padding = "5px";
  $nav.style.display = "flex";
  $nav.style.justifyContent = "space-between";
  $nav.style.overflowY = "hidden";
  $nav.style.overflowX = "auto";

  $child.appendChild($nav);

  let originalOwners = [...OwnersData.owners]; // Guardar el estado original
  let sortedAscending = false;

  const sortOwners = (property) => {
    if (!sortedAscending) {
      OwnersData.owners.sort((a, b) => (a[property] > b[property] ? 1 : -1));
      sortedAscending = true;
    } else {
      OwnersData.owners.sort((a, b) => (a[property] < b[property] ? 1 : -1));
      sortedAscending = false;
    }
    renderOwners(); // Actualizar la visualización
  };

  // Resetear los datos de los propietarios
  const resetOwners = () => {
    OwnersData.owners = [...originalOwners];
    renderOwners();
  };

  const navButtons = [
    {
      text: "Rank",
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="Crown">
          <path fill="${menuStyles.iconColor}" d="M115.1,35.8c-5.9,0.1-10.8,5.3-10.5,11.2c0.1,3.3,1.7,6.1,4.1,8c-12.4,16.6-25,17.9-39.6-9.6
          c5.2-2.6,8.1-9.2,4.3-15.8c-1.8-3.2-5.5-4.8-9.2-4.6c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.2,0c-3.7-0.1-7.3,1.4-9.2,4.6
          c-3.8,6.6-0.9,13.2,4.3,15.8C44.3,72.9,31.7,71.6,19.3,55c2.4-1.9,4-4.8,4.1-8c0.2-5.9-4.6-11.1-10.5-11.2c-6.1-0.1-11,4.7-11,10.8
          c0,5.9,4.8,10.8,10.8,10.8c0.4,0,0.9,0,1.3-0.1l4.1,40.2c0.3,3.2,3,5.6,6.2,5.6H64h39.7c3.2,0,5.9-2.4,6.2-5.6l4.1-40.2
          c0.4,0.1,0.8,0.1,1.3,0.1c5.9,0,10.8-4.8,10.8-10.8C126.1,40.5,121.1,35.7,115.1,35.8z" class="color3c4652 svgShape"></path>
        </svg>
      `,
      action: () => sortOwners("rank"),
    },
    {
      text: "Accounts",
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user">
          <path fill="${menuStyles.iconColor}" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/>
        </svg>
      `,
      action: () => sortOwners("account"),
    },
    {
      text: "Balance",
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="wallet">
          <path fill="${menuStyles.iconColor}" d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z"/>
        </svg>
      `,
      action: () => sortOwners("balance"),
    },
    {
      text: "Decimals",
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="code-branch">
          <path fill="${menuStyles.iconColor}" d="M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.91 3.91 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06Zm-10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/>
        </svg>
      `,
      action: () => sortOwners("decimals"),
    },
    {
      text: "Pct",
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="constructor">
          <path fill="${menuStyles.iconColor}" d="M20,9.67V9.5a7.95,7.95,0,0,0-5.59-7.62l-.06,0a8.32,8.32,0,0,0-2.59-.36A8.21,8.21,0,0,0,4,9.67a3,3,0,0,0,0,5.66,8,8,0,0,0,8,7.17h.23a8.13,8.13,0,0,0,7.68-7.16A3,3,0,0,0,20,9.67ZM12.18,20.5a6,6,0,0,1-6.09-5H17.86A6.09,6.09,0,0,1,12.18,20.5Zm6.82-7H5a1,1,0,0,1,0-2H7a1,1,0,0,0,0-2H6A6.4,6.4,0,0,1,9,4.35V7.5a1,1,0,0,0,2,0V3.59a7.34,7.34,0,0,1,.82-.09H12a6.64,6.64,0,0,1,1,.09V7.5a1,1,0,0,0,2,0V4.32a6.65,6.65,0,0,1,1.18.87A6,6,0,0,1,18,9.5H17a1,1,0,0,0,0,2h2a1,1,0,0,1,0,2Z"/>
        </svg>
      `,
      action: () => sortOwners("pct"),
    },
  ];

  navButtons.forEach((button) => {
    const $button = document.createElement("button");
    $button.style.cursor = "pointer";
    $button.style.height = "40px";
    $button.style.width = "200px";
    $button.style.display = "flex";
    $button.style.justifyContent = "center";
    $button.style.alignItems = "center";
    $button.style.gap = "8px";
    $button.style.border = `1px solid rgba(0,0,0,0.0)`;

    $button.style.background = "rgba(0,0,0,0.0)";
    $button.addEventListener("click", button.action);
    $nav.appendChild($button);

    const $span = document.createElement("span");
    $span.innerText =
      button.text.charAt(0).toUpperCase() + button.text.slice(1);
    $span.style.fontSize = "16px";
    $span.style.color = menuStyles.textColor;
    $button.appendChild($span);

    const $img = document.createElement("div");
    $img.innerHTML = button.icon;
    $img.style.width = "18px";
    $button.appendChild($img);
  });

  const $list = document.createElement("div");
  $list.style.display = "flex";
  $list.style.flexDirection = "column";
  $list.style.minWidth = "700px";
  $list.style.height = $child.clientHeight - $nav.clientHeight - 10;
  $list.style.background = listStyles.background;
  $list.style.gap = "0px";

  $child.appendChild($list);

  const renderOwners = () => {
    $list.innerHTML = ""; // Limpiar la lista antes de volver a renderizar
    OwnersData.owners.forEach((owner) => {
      const $owner = document.createElement("div");
      $owner.style.display = "flex";
      $owner.style.alignItems = "center";
      $owner.style.padding = "5px";
      $owner.style.backgroundColor = "rgba(40, 56, 75, 0.1)";
      $owner.style.borderBottom = `1px solid ${listStyles.borderColor}`;
      $owner.style.height = "50px";
      $owner.style.justifyContent = "space-between";
      $owner.style.overflowX = "auto";
      $owner.style.overflowY = "hidden";
      $owner.style.cursor = "pointer";

      $owner.addEventListener("mouseenter", () => {
        $owner.style.backgroundColor = listStyles.hoverColor;
      });
      $owner.addEventListener("mouseleave", () => {
        $owner.style.backgroundColor = listStyles.background;
      });

      const properties = ["rank", "account", "balance", "decimals", "pct"];
      properties.forEach((prop) => {
        const $div = document.createElement("div");
        $div.style.display = "flex";
        $div.style.flexDirection = "column";
        $div.style.alignItems = "center";
        $div.style.justifyContent = "center";
        $div.innerText = owner[prop];
        $div.style.width = "250px";
        $div.style.height = "100%";
        $div.style.fontSize = "14px";
        $div.style.color = listStyles.textColor;
        $owner.appendChild($div);
      });

      $list.appendChild($owner);
    });
  };

  // Agregar el botón
  const $scrollTopButton = document.createElement("button");
  $scrollTopButton.style.position = "sticky";
  $scrollTopButton.style.bottom = "20px";
  $scrollTopButton.style.left = "20px";
  $scrollTopButton.style.width = "50px";
  $scrollTopButton.style.height = "50px";
  $scrollTopButton.style.borderRadius = "50%";
  $scrollTopButton.style.backgroundColor = menuStyles.background;
  $scrollTopButton.style.border = `0px solid rgba(0,0,0,0.0)`;
  $scrollTopButton.style.cursor = "pointer";
  $scrollTopButton.style.display = "none";
  $scrollTopButton.style.zIndex = "100";

  const $imgScrollTop = document.createElement("div");
  $imgScrollTop.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="play">
      <path fill="${menuStyles.iconColor}" d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/>
    </svg>
  `;
  $imgScrollTop.style.width = "20px";
  $imgScrollTop.style.height = "20px";
  $imgScrollTop.style.margin = "auto";
  $imgScrollTop.style.transform = "rotate(-90deg)";
  $scrollTopButton.appendChild($imgScrollTop);

  $child.appendChild($scrollTopButton);

  // Hacer scroll hasta arriba
  $scrollTopButton.addEventListener("click", () => {
    $child.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll suave
    });
  });

  // Mostrar/Ocultar el botón según el scroll
  $child.addEventListener("scroll", () => {
    if ($child.scrollTop > 50) {
      $scrollTopButton.style.display = "block";
    } else {
      $scrollTopButton.style.display = "none";
    }
  });

  renderOwners();
}
