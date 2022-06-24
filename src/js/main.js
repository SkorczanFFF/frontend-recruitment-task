const counterBtn = document.querySelectorAll('.btn__counter')
const popup = document.querySelectorAll('.popup')
const popupWrapper = document.querySelectorAll('.popup__wrapper')
const counter = document.querySelectorAll('.popup__counter')
const closePopupBtn = document.querySelectorAll('.btn__close')
const resetBtn = document.querySelectorAll('.btn__reset')
const storageKey = 'btnClicks'
const endpointURL = "https://jsonplaceholder.typicode.com/users"
const loading = document.querySelector('.loader')
const table = document.querySelector('.table')

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
      popupBg.classList.remove('active')
    }
})



async function fetchData() {
  const res = await fetch(endpointURL)
  const users = await res.json()
  if (!res.ok) {
    const msg = `Error: ${res.status}! Can't get user data`
    alert(msg)
    throw new Error(msg)
  }
  users.map(user => {
    let userData =  
      `<tr class="row">
        <td>${user.name}</td>
        <td>${user.email}</td> 
        <td>${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
      </tr>`
    table.insertAdjacentHTML('afterbegin', userData)
  })
} 
  
  fetchData().catch(err => {
    err.msg
  })
  loading.style.display = 'none'
  table.style.display = 'block'
})
