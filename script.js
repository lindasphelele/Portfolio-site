document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".navbar-menu")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      toggleHamburgerAnimation()
    })
  }

  // Navigation Link Active State
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")
      if (navMenu) {
        navMenu.classList.remove("active")
      }
    })
  })

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Scroll Effect - Update active nav link on scroll
  window.addEventListener("scroll", () => {
    updateActiveNavLink()
  })

  // Animate Client Logos on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.6s ease forwards"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".client-logo").forEach((logo) => {
    observer.observe(logo)
  })

  // Add animation keyframes dynamically
  const style = document.createElement("style")
  style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `
  document.head.appendChild(style)
})

// Helper function to toggle hamburger animation
function toggleHamburgerAnimation() {
  const hamburger = document.querySelector(".hamburger")
  const spans = hamburger.querySelectorAll("span")
  spans.forEach((span) => span.classList.toggle("active"))
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    const scrollPosition = window.scrollY

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"))
      const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`)
      if (activeLink) {
        activeLink.classList.add("active")
      }
    }
  })
}
