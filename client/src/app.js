import Mustache from "mustache";
import "./index.css";
// import { showMap } from "./map";

// weird stroing it here but hey!
let data = null;

export const initHome = async () => {
  const main = document.getElementsByTagName("main")[0];
  const homeTemplate = document.getElementById("home").innerHTML;
  const spotTemplate = document.getElementById("spot").innerHTML;
  const ruleTemplate = document.getElementById("rule").innerHTML;
  const spotHtml = [];
  const ruleHtml = [];
  const rendered = Mustache.render(homeTemplate, {});

  main.innerHTML = rendered;

  if (data == null) {
    data = await getData();
  }

  if (data?.rules) {
    data.rules.forEach((rule) => {
      ruleHtml.push(
        Mustache.render(ruleTemplate, {
          id: rule.id,
          content: rule.content,
        })
      );
    });
  }

  if (data?.hotspots) {
    data.hotspots.forEach((spot) => {
      spotHtml.push(
        Mustache.render(spotTemplate, {
          id: spot.id,
          title: spot.title,
          content: spot.content,
        })
      );
    });
  }

  const spotsContainer = document.getElementById("spots-container");
  spotsContainer.innerHTML = spotHtml.join(" ");

  const rulesContainer = document.getElementById("rules-container");
  rulesContainer.innerHTML = ruleHtml.join(" ");

  // const mapBtn = document.getElementById("goMap");

  // mapBtn.addEventListener("click", (e) => {
  //   showMap();
  // });
};

const getData = async () => {
  const response = await fetch("http://localhost:3000/attractz");

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const payload = await response.json();
  // const attract = payload.attractz[0];
  const attract = {};
  return attract;
};

initHome();
