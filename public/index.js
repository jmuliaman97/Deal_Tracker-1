// // button functionality for signing up and storing login in Local Storage
document.getElementById('signUp').addEventListener('click', event => {
    event.preventDefault()
    axios.post('/api/users', {
      name: document.getElementById('newUsername').value
    })
      .then(({ data }) => {
        // console.log(data)
        localStorage.setItem('users', data.id)
        window.location = '/deals.html'
      })
      .catch(err => console.error(err))
  })

  // button functionality for signing in and storing login in Local Storage
  document.getElementById('signIn').addEventListener('click', event => {
    event.preventDefault()
    axios.get(`api/login/${document.getElementById('username').value}`)
      .then(({ data }) => {
        // console.log(data)
        localStorage.setItem('users', data.id)
        window.location = '/deals.html'
      })
      .catch(err => console.error(err))
  })