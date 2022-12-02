const form = document.querySelector('#rating-form')
const ratingCard = document.querySelector('#rating-card')
const thankCard = document.querySelector('#thank-you-card')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  document.querySelector('#rating-value').innerText = formData.get('rating')

  ratingCard.classList.add('card--hidden')
  thankCard.classList.remove('card--hidden')
})
