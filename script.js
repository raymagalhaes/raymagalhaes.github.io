function scroll(element, duration) {
  let start = null;
  var easing = function(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  window.requestAnimationFrame(
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let percent = Math.min(progress / duration, 1);
      percent = easing(percent);
      element.style = "padding-left: " + percent * 500 + "px; padding-top: " + percent * 10 + "px";
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        scroll(document.querySelectorAll(".codigo")[0], 3000);
      }
    }
  );
}
scroll(document.querySelectorAll(".title")[0], 1000);