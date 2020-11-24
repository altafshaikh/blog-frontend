import { Blogs } from "../data.js";

export const findBlogById = (blogID) => {
  return Blogs.find((blog) => {
    return blog.id == blogID;
  });
};
