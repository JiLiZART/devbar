
export const appendCssUrl = (url) => {
  const linkNode = document.createElement("link");
  linkNode.type = "text/css";
  linkNode.rel = "stylesheet";
  linkNode.href = url;
  document.head.appendChild(linkNode);
}
