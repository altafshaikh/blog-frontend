import { renderNewBlog } from "../components/renderNewBlog.js";

//event delegation

export const handleClick = (event) => {
  if (event.target.tagName == "A") {
    renderNewBlog(event.target.parentElement.parentNode.id);
  } else if (event.target.tagName == "IMG") {
    renderNewBlog(event.target.parentNode.id);
  } else if (event.target.tagName == "P") {
    renderNewBlog(event.target.parentNode.id);
  } else if (event.target.className == "related-link") {
    renderNewBlog(event.target.id);
  } else {
    return;
  }
};
