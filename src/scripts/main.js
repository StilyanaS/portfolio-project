function appearOnScroll() {
  let introElements = document.querySelectorAll(".card")
  introElements.forEach((introElement) => {
    let introPosition = introElement.getBoundingClientRect().top
    let screenPos = window.innerHeight / 1.2

    if (introPosition < screenPos) {
      introElement.classList.add("card-appear")
    }
  })
}

window.addEventListener("scroll", appearOnScroll)
