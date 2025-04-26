"use client"

export function initScrollReveal() {
  if (typeof window !== "undefined") {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal")

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealElements)
    revealElements() // Initial check

    return () => {
      window.removeEventListener("scroll", revealElements)
    }
  }
}
