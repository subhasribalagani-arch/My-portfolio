// Toggle mobile menu
const toggleBtn = document.getElementById("toggle-btn");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting me! I will reply soon.");
  e.target.reset();
});
