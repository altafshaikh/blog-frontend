export const blogImage = (imageUrl) => {
  const div = document.createElement("div");
  div.classList.add("blog-img");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "alt descp of img";

  div.appendChild(img);

  return div;
};
