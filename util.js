function createBox() {
  //creating dom elements
  let stickyPad = document.createElement("div");
  let nav = document.createElement("div");
  let minimize = document.createElement("div");
  let closeBtn = document.createElement("div");
  let content = document.createElement("div");

  // setting attributes
  stickyPad.setAttribute("class", "stickyPad");
  nav.setAttribute("class", "nav");
  minimize.setAttribute("class", "minimize");
  closeBtn.setAttribute("class", "close");
  content.setAttribute("class", "content");p

  //appending elements
  stickyPad.append(nav);
  stickyPad.append(content);
  nav.append(minimize);PP
  nav.append(closeBtn);

  document.body.append(stickyPad);

  let isStickyHolded = false;
  let initialX;
  let initialY;
  nav.addEventListener("mousedown", function (e) {
    isStickyHolded = true;
    initialX = e.clientX;
    initialY = e.clientY;
  });

  window.addEventListener("mousemove", function (e) {
    if (isStickyHolded) {
      let finalX = e.clientX;
      let finalY = e.clientY;

      let dx = finalX - initialX;
      let dy = finalY - initialY;

      let { top, left } = stickyPad.getBoundingClientRect();
      stickyPad.style.top = top + dy + "px";
      stickyPad.style.left = left + dx + "px";
      initialX = finalX;
      initialY = finalY;
    }
  });

  nav.addEventListener("mouseup", function (e) {
    isStickyHolded = false;
  });

  closeBtn.addEventListener("click", function () {
    stickyPad.remove();
  });
  let isMinimized = false;
  minimize.addEventListener("click", function () {
    if (isMinimized) {
      content.style.display = "block";
      isMinimized = !isMinimized;
    } else {
      content.style.display = "none";
      isMinimized = !isMinimized;
    }
  });
  return content;
}
