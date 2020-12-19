import { renderNewBlog } from "./components/renderNewBlog.js";
import { handleClick } from "./helper/handleClick.js";
import { toggleTheme, setTheme } from "./helper/darkTheme.js";
import { endpoint } from "./endpoints.js";
import { logout } from "./auth/logout.js";

//webpack
import "../sass/style.scss";

// webpackend

window.onload = () => {
  document
    .getElementsByClassName("related-link-container")[0]
    .addEventListener("click", handleClick);
  document.getElementById("slider").addEventListener("change", toggleTheme);
  document.getElementById("logout").addEventListener("click", logout);

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

document.addEventListener("DOMContentLoaded", () => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer " + document.cookie.split(";")[0].split("=")[1]
  );
  fetch(endpoint, { headers: myHeaders, mode: "cors" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      window.location.href = `${document.location.origin}/login.html`;
      throw new Error("Please Login to continue");
    })
    .then(({ blogs, currentUser }) => {
      renderNewBlog(blogs[1].blogID);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
