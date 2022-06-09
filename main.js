const skillsSection = document.getElementById('skills')
let skillsSectionPosition = 0

document.addEventListener('scroll', e => {
  skillsSectionPosition = skillsSection.getBoundingClientRect()
  skillsSectionPosition = skillsSectionPosition.top + ((skillsSectionPosition.bottom - skillsSectionPosition.top) / 2)
  console.log(skillsSectionPosition)
  if (skillsSectionPosition <= window.innerHeight) {
    for (e of document.getElementsByClassName('progress-bar')) {
      e.classList.add('progress-bar-animation')
    }
  }
})
