const counterBtn = document.querySelectorAll('.btn__counter')
const popup = document.querySelectorAll('.popup')
const counter = document.querySelectorAll('.popup__counter')
const closePopupBtn = document.querySelectorAll('.btn__close')
const resetBtn = document.querySelectorAll('.btn__reset')
const storageKey = 'btnClicks'

for (let i = 0; i < counterBtn.length; i++) {
  let clicks = localStorage.getItem(storageKey[i])
  
  counterBtn[i].addEventListener('click', () => {
      popup[i].classList.add('active')
      clicks++
      counter[i].innerHTML = clicks + ' times'
      localStorage.setItem(storageKey[i], clicks)
      if (clicks > 5) {
        resetBtn[i].classList.add('visible')
        resetBtn[i].addEventListener('click', () => {
          clicks = 0
          resetBtn[i].classList.add('clicked')
          resetBtn[i].innerHTML = 'Counter restarted'
        })
      } else {
        resetBtn[i].classList.remove('visible', 'clicked')
        resetBtn[i].innerHTML = 'Reset counter'
      }
  })
}

closePopupBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.forEach((popup) => {
      popup.classList.remove('active')
    })
  })
})

popup.forEach((popupBg) => {
  popupBg.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      popupBg.classList.remove('active');
    }
  })
})
