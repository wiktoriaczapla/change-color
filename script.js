window.onload = () => {
  loadStyles();
  let themes = document.querySelectorAll(`[type="radio"]`);
  themes.forEach((el) => {
    el.addEventListener("click", (e) => {
      setColor(el.id); // setColor(e.target.id);
    });
  });
};

function setColor(color) {
  localStorage.setItem("theme", color);
}

function loadStyles() {
  let themes = document.querySelectorAll(`[type="radio"]`);
  let curTheme = localStorage.getItem("theme");

  themes.forEach((el) => {
    if (el.id === curTheme) {
      el.checked = true;
    }
  });
}
