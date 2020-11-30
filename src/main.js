import { Blogs } from "./data.js";
import { renderNewBlog } from "./components/renderNewBlog.js";
import { handleClick } from "./helper/handleClick.js";
import { toggleTheme } from "./helper/darkTheme.js";

window.onload = () => {
  renderNewBlog("2rvqpdbpka3n3fhe");
  document
    .getElementsByClassName("related-link-container")[0]
    .addEventListener("click", handleClick);
  document.getElementById("slider").addEventListener("change", toggleTheme);
};

// https://niravkpatel28.github.io/json-data-server/blogs/blogs.json
