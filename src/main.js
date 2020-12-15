import { Json } from "./data.js";
import { renderNewBlog } from "./components/renderNewBlog.js";
import { handleClick } from "./helper/handleClick.js";
import { toggleTheme, setTheme } from "./helper/darkTheme.js";

//webpack
import "../sass/style.scss";

// webpackend

window.onload = () => {
  Json.then((blogs) => {
    console.log(blogs);
    renderNewBlog(blogs[1].id);
  });

  document
    .getElementsByClassName("related-link-container")[0]
    .addEventListener("click", handleClick);
  document.getElementById("slider").addEventListener("change", toggleTheme);

  // Immediately invoked function to set the theme on initial load
  (function () {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
      document.getElementById("slider").checked = true;
    } else {
      setTheme("theme-light");
    }
  })();
};
