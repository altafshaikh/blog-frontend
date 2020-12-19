const findBlogById = (Blogs, blogID) => {
  return Blogs.find((blog) => {
    return blog.blogID == blogID;
  });
};

export const relatedLinks = (blogs, links) => {
  return links.map((link) => {
    const blog = findBlogById(blogs, link.blogID);

    const div = document.createElement("div");
    div.classList.add("related-link");
    div.setAttribute("id", blog.blogID);

    const img = document.createElement("img");
    img.src = blog.imageUrl;
    img.alt = "alt descp of img";

    const p = document.createElement("p");
    p.classList.add("link-title");

    const a = document.createElement("a");
    a.textContent = blog.title;
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
