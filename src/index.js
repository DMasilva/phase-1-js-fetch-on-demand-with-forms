const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (e)=>{
    e.preventDefault()
   const input = document.querySelector('#searchByID')
   console.log(input.value)

   fetch(`http://localhost:3000/movies/${input.value}`)
  .then(res=>{
    return res.json()
  })
  .then(data=>{
    const title = document.querySelector('#title')
    const summary = document.querySelector('#summary')
    title.textContent = data.title
    summary.textContent = data.summary
   // console.log(data);
  })
  })
  
}

document.addEventListener('DOMContentLoaded', init);