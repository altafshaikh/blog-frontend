import { Blogs } from "./data.js";
import { renderNewBlog } from "./components/renderNewBlog.js";
import { handleClick } from "./helper/handleClick.js";

window.onload = () => {
  renderNewBlog("2rvqpdbpka3n3fhe");
  document
    .getElementsByClassName("related-link-container")[0]
    .addEventListener("click", handleClick);
};
