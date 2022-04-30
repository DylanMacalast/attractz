// import Mustache from "mustache";
// import { initHome } from "./app";
// // import Map from "@arcgis/core/Map";
// // Default import
// // import WebMap from "@arcgis/core/WebMap";
// // import MapView from "@arcgis/core/views/MapView";

// // // Namespace import
// // import * as projection from "@arcgis/core/geometry/projection";

// export const showMap = async () => {
//   const main = document.getElementsByTagName("main")[0];
//   main.innerHTML = "";
//   const mapTemplate = document.getElementById("mapContainer").innerHTML;
//   const rendered = Mustache.render(mapTemplate, {});

//   main.innerHTML = rendered;

//   const map = new Map({
//     basemap: "arcgis-topographic",
//   });

//   const view = new MapView({
//     map: map,
//     center: [-118.805, 34.027], // Longitude, latitude
//     zoom: 13, // Zoom level
//     container: "my-map", // Div element
//   });

//   console.log(map);

//   const homeBtn = document.getElementById("goHome");

//   homeBtn.addEventListener("click", () => {
//     initHome();
//   });
// };
