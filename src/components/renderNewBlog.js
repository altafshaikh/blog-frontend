import { Json } from "../data.js";
import { blogDetail } from "./blogDetail.js";
import { relatedLinks } from "./relatedLinks.js";

export const renderNewBlog = (blogID) => {
  Json.then((blogs) => {
    const blog = blogs.find((blog) => {
      return blog.id == blogID;
    });

    blogDetail(blog);
    const sideContent = relatedLinks(blogs, blog.links);

    const sideContentDiv = document.getElementsByClassName(
      "related-link-container"
    )[0];

    if (sideContentDiv.textContent) {
      sideContentDiv.textContent = "";
    }

    sideContent.forEach((link) => {
      sideContentDiv.appendChild(link);
    });
  }).catch((err) => {
    console.log(err);
  });
};
