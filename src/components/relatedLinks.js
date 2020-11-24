import { findBlogById } from "../helper/findBlogById.js";

export const relatedLinks = (links) => {
  return links.map((link) => {
    const div = document.createElement("div");
    div.classList.add("related-link");
    div.setAttribute("id", link.id);

    const img = document.createElement("img");
    img.src = findBlogById(link.id).imageUrl;
    img.alt = "alt descp of img";

    const p = document.createElement("p");
    p.classList.add("link-title");

    const a = document.createElement("a");
    a.textContent = link.title;
    a.href = "#";

    p.appendChild(a);

    div.appendChild(img);
    div.appendChild(p);

    return div;
  });
};
