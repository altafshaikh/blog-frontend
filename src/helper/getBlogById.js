import { endpoint } from "../endpoints.js";

export const getBlogById = async (blogID) => {
  let response = await fetch(endpoint + blogID);
  console.log(response);
  return response;
};
