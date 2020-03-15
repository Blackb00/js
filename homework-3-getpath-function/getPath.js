function getPath(htmlEl) {
  const tagName = htmlEl.tagName;
  const className = htmlEl.className;
  const id = htmlEl.id;
  let uniqCssSelector;
  if (
    id &&
    document.querySelectorAll("#" + id).length === 1 &&
    document.querySelectorAll("#" + id)[0] === htmlEl
  ) {
    uniqCssSelector = "#" + id;
  } else if (tagName && document.querySelectorAll(tagName)[0] === htmlEl) {
    uniqCssSelector = tagName;
  } else if (className && document.querySelectorAll(className)[0] === htmlEl) {
    uniqCssSelector = className;
  }
  return uniqCssSelector;
}
getPath($0);
