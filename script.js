function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({});
  }
}