let url = "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";

const getBlogs = async (url) => {
  let response = await axios.get(url);
  return response.data;
};

export let Blogs = getBlogs(url);
