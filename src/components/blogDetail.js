import { blogImage } from "./blogImage.js";
import { blogContent } from "./blogContent.js";

export const blogDetail = (blog) => {
  const blogDetailDiv = document.getElementsByClassName("blog-detail")[0];
  const h2 = document.createElement("h2");
  h2.classList.add("blog-title");
  h2.textContent(blog.title);

  const span = document.createElement("span");
  span.classList.add("author");
  span.textContent(blog.author);

  const imgDiv = blogImage(blog.imageUrl);
  const contentDiv = blogContent(blog.content);

  blogDetailDiv.appendChild(h2);
  blogDetailDiv.appendChild(span);
  blogDetailDiv.appendChild(imgDiv);
  blogDetailDiv.appendChild(contentDiv);
};
