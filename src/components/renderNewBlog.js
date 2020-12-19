import { blogDetail } from "./blogDetail.js";
import { relatedLinks } from "./relatedLinks.js";
import { endpoint } from "../endpoints.js";

export const renderNewBlog = (blogID) => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer " + document.cookie.split(";")[0].split("=")[1]
  );
  fetch(endpoint, { headers: myHeaders, mode: "cors" })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      // window.location.href = `${document.location.origin}/blog-frontend/login.html`;
      throw new Error("Please Login to continue");
    })
    .then(({ blogs, currentUser }) => {
      // console.log(blogs);
      const blog = blogs.find((blog) => {
        return blog.blogID == blogID;
      });

      blog.author = currentUser.firstName;

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
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
