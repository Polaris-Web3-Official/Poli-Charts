
//NFT Charts
import { SimpleFloorPriceChartFunction } from "./src/charts/nfts/floorPrice/SimpleFloorPriceChart.js";
import { ComplexFloorPriceChartFunction } from "./src/charts/nfts/floorPrice/ComplexFloorPriceChart.js";

import { SimpleVolumeChartFunction } from "./src/charts/nfts/volume/SimpleVolumeChart.js";
import { ComplexVolumeChartFunction } from "./src/charts/nfts/volume/ComplexVolumeChart.js";

import { OwnersBarChartFunction } from "./src/charts/nfts/owners/OwnersBarChart.js";
import { OwnersListFunction } from "./src/charts/owners/nfts/OwnersList.js";


export const OwnersList = OwnersListFunction;
export const OwnersBarChart = OwnersBarChartFunction;
export const SimpleVolumeChart = SimpleVolumeChartFunction;
export const ComplexVolumeChart = ComplexVolumeChartFunction;
export const SimpleFloorPriceChart = SimpleFloorPriceChartFunction;
export const ComplexFloorPriceChart = ComplexFloorPriceChartFunction;

// Usage functions
//SimpleFloorPriceChart({
//  elementId: "container_testing",
//  backgroundColor: "#242424",
//  chartColor: "#FF5733",
//  fetchData: {
//    apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
//    tokenId: "0.0.1350444",
//  },
//});

//ComplexFloorPriceChart({
//  elementId: "container_testing_2",
//  backgroundColor: "#242424",
//  chartColor: "#FF5733",
//  fetchData: {
//    apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
//    tokenId: "0.0.2179656",
//  },
//  fontConfig: {
//    size: "12px",
//    color: "#fff",
//  },
//});

//SimpleVolumeChart({
//  elementId: "container_testing",
//  backgroundColor: "#242424",
//  chartColor: "#FF5733",
//  fetchData: {
//    apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
//    tokenId: "0.0.1350444",
//  },
//});

//ComplexVolumeChart({
//  elementId: "container_testing",
//  backgroundColor: "#242424",
//  chartColor: "#FF5733",
//  fetchData: {
//    apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
//    tokenId: "0.0.2179656",
//  },
//  fontConfig: {
//    size: "12px",
//    color: "#fff",
//  },
//});

//OwnersBarChart({
//  elementId: "container_testing",
//  backgroundColor: "#000000",
//  barColor: "#5c8ab4",
//  fetchData: {
//    apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
//    tokenId: "0.0.2179656",
//    amount: 50,
//  },
//  fontConfig: {
//    size: "12px",
//    color: "#fff",
//  },
//});

//OwnersList({
//  elementId: "container_testing",
//  fetchData: {
//    apiKey: "35996d57-04b1-4091-9e6f-68337a0c2c1f",
//    tokenId: "0.0.2179656",
//    amount: 100,
//  },
//  menuStyles: {
//    background: "#28384b80",
//    textColor: "#ffffff",
//    iconColor: "#ffffff",
//  },
//  listStyles: {
//    background: "#28384b10",
//    borderColor: "#c8c8c8",
//    textColor: "#ffffff",
//    hoverColor: "#28384b40",
//  },
//});
