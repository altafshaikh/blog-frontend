export const logout = () => {
  document.cookie = "jwt=";
  window.location.href = `${document.location.origin}/blog-frontend/login.html`;
};
