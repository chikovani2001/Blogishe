import fetch from "./http.js";
import isAuthorithed from "./auth.js";

const posts = document.querySelector("#posts");

fetch("GET", "/posts").then((items) => {
  items.forEach((post) => {
    const postTemplate = document.querySelector("#post-preview");
    const clone = postTemplate.content.cloneNode(true);
    const element = clone.children[0];
    const a = element.getElementsByTagName("a");
    a[0].setAttribute("href", `/post.html?id=${post.id}`);
    a[1].setAttribute("href", `/author.html?author=${post.author}`);
    clone.querySelector(".post-title").textContent = post.title;
    clone.querySelector(".post-subtitle").textContent = post.description;
    clone.querySelector(".author").textContent = post.author;
    clone.querySelector(".create-date").textContent = post.createDate;
    posts.append(clone);
    if (isAuthorithed()) {
      const secure = document.createElement("div");
      secure.innerHTML = `
      <button type="button" class="btn btn-outline-primary post-edit" data-id="${post.id}">Edit</button>
      <button type="button" class="btn btn-outline-danger post-delete" data-id="${post.id}">Delete</button>`;
      posts.append(secure);
      
    }
  });
});