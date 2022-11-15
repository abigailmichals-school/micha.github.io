
let stars = document.querySelectorAll(".star");
  let container = document.querySelector(".wrapper");
  // place our blobs randomly
  stars.forEach(function (star) {
    star.style.right = (100 * Math.random()) + '%';
    star.style.top = (100 * Math.random()) + '%';
  });
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("star")) {
      event.target.remove();
    }
  });