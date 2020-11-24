import { blogImage } from "./blogImage.js";
import { blogContent } from "./blogContent.js";

export const blogDetail = (blog) => {
  const blogDetailDiv = document.getElementsByClassName("blog-detail")[0];
  if (blogDetailDiv.textContent) {
    blogDetailDiv.textContent = "";
  }

  const div = document.createElement("div");
  div.classList.add("blog-container");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("blog-info");

  const h2 = document.createElement("h2");
  h2.classList.add("blog-title");
  h2.textContent = blog.title;

  const span = document.createElement("span");
  const i = document.createElement("i");
  i.setAttribute("class", "fa fa-user");

  span.classList.add("author");
  span.textContent = blog.author;
  span.appendChild(i);

  const imgDiv = blogImage(blog.imageUrl);
  const contentDiv = blogContent(blog.content);

  infoDiv.appendChild(h2);
  infoDiv.appendChild(span);
  div.appendChild(infoDiv);
  div.appendChild(imgDiv);
  div.appendChild(contentDiv);

  blogDetailDiv.appendChild(div);
};
