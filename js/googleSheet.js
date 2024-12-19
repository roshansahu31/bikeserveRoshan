const scriptURL = 'https://script.google.com/macros/s/AKfycbyvrcn32n6k7QtEIIYwsR6egyk2VahWn-jsMaga8i_5pj5Ue5375rDP8jXSuAf21lBZ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})