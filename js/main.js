import fetch from "./http.js";
import isAuthorithed from "./auth.js";

const nav = document.querySelector("#menu");
setNavigation();

function setNavigation() {
  fetch("GET", "/navigation").then((navigation) => {
    navigation.forEach((element) => {
      if (!element.guard) {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.setAttribute("href", element.url);
        a.setAttribute("id", element.idName);
        a.textContent = element.name;
        li.append(a);
        nav.append(li);
      } else if (isAuthorithed() && element.guard && element.auth === "show") {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.setAttribute("href", element.url);
        a.setAttribute("id", element.idName);
        a.textContent = element.name;
        li.append(a);
        nav.append(li);
      }
    });
  });
}
