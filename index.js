//NFT Charts
import { SimpleFloorPriceChartFunction } from "./src/charts/nfts/floorPrice/SimpleFloorPriceChart.js";
import { ComplexFloorPriceChartFunction } from "./src/charts/nfts/floorPrice/ComplexFloorPriceChart.js";
import { SimpleVolumeChartFunction } from "./src/charts/nfts/volume/SimpleVolumeChart.js";
import { OwnersBarChartFunction } from "./src/charts/nfts/owners/OwnersBarChart.js";
import { OwnersListFunction } from "./src/charts/nfts/owners/OwnersList.js";

//Coins Charts
import { SimpleFloorPriceChartCoinFunction } from "./src/charts/coins/floorPrice/SimpleFloorPriceChart.js";
import { ComplexFloorPriceChartCoinFunction } from "./src/charts/coins/floorPrice/ComplexFloorPriceChart.js";
import { TradingFloorPriceChartCoinFunction } from "./src/charts/coins/floorPrice/TradingFloorPriceChart.js";
import { SimpleVolumeChartCoinFunction } from "./src/charts/coins/volume/SimpleVolumeChart.js";

//NFTs exports
export const NFTOwnersList = OwnersListFunction;
export const NFTOwnersBarChart = OwnersBarChartFunction;
export const NFTSimpleVolumeChart = SimpleVolumeChartFunction;
export const NFTSimpleFloorPriceChart = SimpleFloorPriceChartFunction;
export const NFTComplexFloorPriceChart = ComplexFloorPriceChartFunction;

//COINs exports
export const CoinSimpleFloorPriceChart = SimpleFloorPriceChartCoinFunction;
export const CoinComplexFloorPriceChart = ComplexFloorPriceChartCoinFunction;
export const CoinTradingFloorPriceChart = TradingFloorPriceChartCoinFunction;
export const CoinSimpleVolumeChart = SimpleVolumeChartCoinFunction;
