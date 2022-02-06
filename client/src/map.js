import Mustache from "mustache";
import { initHome } from "./app";

export const showMap = async () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  const mapTemplate = document.getElementById("mapContainer").innerHTML;
  const rendered = Mustache.render(mapTemplate, {});

  main.innerHTML = rendered;

  const homeBtn = document.getElementById("goHome");

  homeBtn.addEventListener("click", () => {
    initHome();
  });
};
