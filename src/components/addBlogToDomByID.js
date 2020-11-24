import { Blogs } from "../data.js";
import { blogDetail } from "./blogDetail.js";

export const addBlogToDomByID = (blogID) => {
  const blog = Blogs.find((blog) => {
    return blog.id == blogID;
  });
  blogDetail(blog);
};

window.addBlogToDomByID = addBlogToDomByID;
