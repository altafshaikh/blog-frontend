import { blogDetail } from "./blogDetail.js";
import { findBlogById } from "../helper/findBlogById.js";

export const renderNewBlog = (blogID) => {
  const blog = findBlogById(blogID);
  blogDetail(blog);
};

window.renderNewBlog = renderNewBlog;
