export const logout = () => {
  document.cookie = "jwt=";
  window.location.href = `${document.location.origin}/login.html`;
};
