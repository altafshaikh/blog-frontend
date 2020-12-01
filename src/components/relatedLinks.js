const findBlogById = (Blogs, blogID) => {
  return Blogs.find((blog) => {
    return blog.id == blogID;
  });
};

export const relatedLinks = (blogs, links) => {
  return links.map((link) => {
    const div = document.createElement("div");
    div.classList.add("related-link");
    div.setAttribute("id", link.id);

    const img = document.createElement("img");
    img.src = findBlogById(blogs, link.id).imageUrl;
    img.alt = "alt descp of img";

    const p = document.createElement("p");
    p.classList.add("link-title");

    const a = document.createElement("a");
    a.textContent = link.title;
    a.href = "#";

    p.appendChild(a);

    div.appendChild(img);
    div.appendChild(p);

    // this is done using Event Delegation
    // div.addEventListener("click", () => {
    //   renderNewBlog(link.id);
    // });

    return div;
  });
};
