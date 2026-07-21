// Countdown Timer
function startCountdown() {
  const eventDate = new Date("August 15, 2026 09:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerHTML = "<h2>الحدث بدأ! 🎉</h2>";
      clearInterval(timer);
      return;
    }

    document.getElementById("days").textContent =
      String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
    document.getElementById("hours").textContent =
      String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    document.getElementById("minutes").textContent =
      String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    document.getElementById("seconds").textContent =
      String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
  }, 1000);
}

// FAQ Accordion
function setupFAQ() {
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

// Registration Form
function setupForm() {
  const select = document.getElementById("specialtySelect");
  const otherField = document.getElementById("otherField");
  const customInput = document.getElementById("customSpecialty");

  // Show/hide the "other" input field when selection changes
  select.addEventListener("change", () => {
    if (select.value === "other") {
      otherField.classList.add("visible");
      customInput.required = true;       // Make the custom field required
      customInput.focus();               // Auto-focus the custom input
    } else {
      otherField.classList.remove("visible");
      customInput.required = false;
      customInput.value = "";
    }
  });

  // Handle form submission
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // If "other" is selected, use the typed value; otherwise use the selected option text
    const specialty = select.value === "other"
      ? customInput.value.trim()
      : select.options[select.selectedIndex].text;

    console.log("Registered specialty:", specialty); // Visible in Developer Tools
    alert(`✅ تم التسجيل بنجاح!\nالتخصص: ${specialty}\nسيتم التواصل معك قريباً. 🎉`);
    e.target.reset();
    otherField.classList.remove("visible");
    customInput.required = false;
    closeDrawer(); // Close drawer after successful submission
  });
}

// Side Drawer
function openDrawer() {
  document.getElementById("registerDrawer").classList.add("open");
  document.getElementById("drawerOverlay").classList.add("active");
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  document.getElementById("registerDrawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("active");
  document.body.classList.remove("drawer-open");
}

function setupDrawer() {
  // Open triggers
  document.getElementById("openDrawerHero").addEventListener("click", openDrawer);
  document.getElementById("openDrawerNav").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent anchor scroll
    openDrawer();
  });

  // Close triggers
  document.getElementById("closeDrawer").addEventListener("click", closeDrawer);
  document.getElementById("drawerOverlay").addEventListener("click", closeDrawer);

  // Close with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}

// Navbar Scroll Effect
function setupNavbar() {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(17, 24, 39, 0.95)"; // --dark color
    } else {
      navbar.style.background = "rgba(17, 24, 39, 0.8)";  // --dark color
    }
  });
}

// Scroll Reveal Animation
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".about-card, .prize-card, .timeline-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Particles Background
function setupParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    alpha: Math.random()
  }));

  canvas.style.cssText = "position:absolute;top:0;left:0;z-index:1;pointer-events:none;";

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`; // --primary color (Golden Amber)
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Initialize All
document.addEventListener("DOMContentLoaded", () => {
  startCountdown();
  setupFAQ();
  setupForm();
  setupDrawer();
  setupNavbar();
  setupScrollReveal();
  setupParticles();
});