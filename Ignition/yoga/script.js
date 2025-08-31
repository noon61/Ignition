document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".accordion-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
