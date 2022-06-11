const header = document.querySelector('header')
const navbar = document.querySelector('header nav')
const skillsSection = document.getElementById('skills')

function getMiddleOfElement(element) {
  let pos = element.getBoundingClientRect()
  return pos.top + ((pos.bottom - pos.top) / 2)
}

document.addEventListener('scroll', e => {
  if (window.scrollY >= window.innerHeight / 2)
    navbar.classList.add('scrolled')
  else
    navbar.classList.remove('scrolled')

  if (getMiddleOfElement(skillsSection) <= window.innerHeight) {
    for (e of document.getElementsByClassName('progress-bar'))
      e.classList.add('progress-bar-animation')
  }
})
