import { blogDetail } from "./blogDetail.js";
import { findBlogById } from "../helper/findBlogById.js";
import { relatedLinks } from "./relatedLinks.js";

export const renderNewBlog = (blogID) => {
  const blog = findBlogById(blogID);
  blogDetail(blog);
  const sideContent = relatedLinks(blog.links);

  const sideContentDiv = document.getElementsByClassName(
    "related-link-container"
  )[0];

  if (sideContentDiv.textContent) {
    sideContentDiv.textContent = "";
  }

  sideContent.forEach((link) => {
    sideContentDiv.appendChild(link);
  });
};

window.renderNewBlog = renderNewBlog;
