import { Json } from "../data.js";

export const findBlogById = (blogID) => {
  return Json.then((blogs) => {
    return blogs.find((blog) => {
      return blog.id == blogID;
    });
  });
};
