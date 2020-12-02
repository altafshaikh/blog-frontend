// let url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

// const getBlogs = async (url) => {
//   let response = await axios.get(url);
//   return response.data;
// };

// export let Blogs = getBlogs(url);

let url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

const getBlogs = async (url) => {
  let response = await fetch(url);
  let json = await response.json();
  return json;
};

export let Json = getBlogs(url);
console.log(Json);
