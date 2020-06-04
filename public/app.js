// button functionality for signing out 
// document.getElementById('signOut').addEventListener('click', event => {
//   event.preventDefault()
//   axios.get(`api/logout/${document.getElementById('username').value}`)
//     .then(({ data }) => {
//       // console.log(data)
//       localStorage.setItem('users', data.id)
//       window.location = '/index.html'
//     })
//     .catch(err => console.error(err))
// })

document.getElementById('signOut').addEventListener('click', event => {
  event.preventDefault()
  localStorage.clear();
  window.location = '/index.html'
})

// Listen for click on "+ Add a Deal" button on 'Lead' stage and open modal with fields for creating a new deal:
document.getElementById('addDealButton').addEventListener('click', event => {
  event.preventDefault()
  $('.ui.modal').modal('show')
  // Give functionality to dropdown in form:
  $('.selection.dropdown')
    .dropdown()
    ;
})



//button functionality for adding a new deal for specific user
  document.getElementById('submitDeal').addEventListener('click', event => {
    event.preventDefault()
    axios.post(`api/deals`, {
      dealName: document.getElementById('dealName').value,
      value: document.getElementById('dealValue').value,
      organization: document.getElementById('dealOrg').value,
      contact: document.getElementById('dealContact').value,
      phone: document.getElementById('dealPhone').value,
      email: document.getElementById('dealEmail').value,
      notes: document.getElementById('dealNotes').value,
      stage: document.getElementById('dealStage').value,
      userId: localStorage.getItem("user")
    })
    .then(({data}) => {
      console.log(data)
      let dealElem = document.createElement('div')
      dealElem.innerHTML = `
      <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="${data.id}">
        <div class="content">
          <div class="header">${document.getElementById('dealName').value}</div>
            <div class="description">
              <h5>Value: ${document.getElementById('dealValue').value}</h5>
            </div>
          </div>
            <div class="extra content">
              <p><strong>Organization: </strong>${document.getElementById('dealOrg').value}</p>
              <p><strong>Contact: </strong>${document.getElementById('dealContact').value}</p>
              <p><strong>Phone: </strong>${document.getElementById('dealPhone').value}</p>
              <p><strong>Email: </strong>${document.getElementById('dealEmail').value}</p>
              <p><strong>Notes: </strong>${document.getElementById('dealNotes').value}</p>
            </div>
      </div>`
      console.log(dealElem)
      document.getElementById(`${data.stage}`).append(dealElem)
      // document.getElementById('dealName').value = ''
      // document.getElementById('dealValue').value = ''
      // document.getElementById('dealOrg').value = ''
      // document.getElementById('dealContact').value = ''
      // document.getElementById('dealPhone').value = ''
      // document.getElementById('dealEmail').value = ''
      // document.getElementById('dealNotes').value = ''
      // document.getElementById('dealStage').value = ''
      // location.reload()
    })
    .catch(err => console.log(err))
  })
//show all deals for user
function showDealsbyUser(userId){
   userId = 1   //// fake user change for the logged user
  axios.get("/api/deals/" + userId)  
  .then(({data}) => {
    console.log(data)
let array = data
array.map(data=>{
  let dealElem = document.createElement('div')
  dealElem.innerHTML = `
  <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="${data.id}">
    <div class="content">
      <div class="header">${data.dealName}</div>
        <div class="description">
          <h5>Value: ${data.value}</h5>
        </div>
      </div>
        <div class="extra content">
          <p><strong>Organization: </strong>${data.organization}</p>
          <p><strong>Contact: </strong>${data.contact}</p>
          <p><strong>Phone: </strong>${data.phone}</p>
          <p><strong>Email: </strong>${data.email}</p>
          <p><strong>Notes: </strong>${data.notes}</p>
        </div>
  </div>`
  console.log(dealElem)
  document.getElementById(`${data.stage}`).append(dealElem)
})
})

}

showDealsbyUser(1)
  //button functionality for adding a new CONTACTED deal for specific user
  // document.getElementById('addContacted').addEventListener('click', event => {
  //   event.preventDefault()
  //   $('.ui.modal').modal('show')
  //   axios.post(`api/users/:id`, {
  //     dealName: document.getElementById('dealName').value,
  //     value: document.getElementById('dealValue').value,
  //     organization: document.getElementById('dealOrg').value,
  //     contact: document.getElementById('dealContact').value,
  //     phone: document.getElementById('dealPhone').value,
  //     email: document.getElementById('dealEmail').value,
  //     notes: document.getElementById('dealNotes').value,
  //     stage: document.getElementById('dealStage').value,
  //     userId: localStorage.getItem(data.id)
  //   })
  //   .then(({data}) => {
  //     let dealElem = document.createElement('li')
  //     dealElem.textContent = `
  //     <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="deal1">
  //       <div class="content">
  //         <div class="header">${document.getElementById('dealName').value}</div>
  //           <div class="description">
  //             <h5>Value: ${document.getElementById('dealValue').value}</h5>
  //           </div>
  //         </div>
  //           <div class="extra content">
  //             <p><strong>Organization: </strong>${document.getElementById('dealOrg').value}</p>
  //             <p><strong>Contact: </strong>${document.getElementById('dealContact').value}</p>
  //             <p><strong>Phone: </strong>${document.getElementById('dealPhone').value}</p>
  //             <p><strong>Email: </strong>${document.getElementById('dealEmail').value}</p>
  //             <p><strong>Notes: </strong>${document.getElementById('dealNotes').value}</p>
  //           </div>
  //     </div>`
  //     document.getElementById(`${dealStage}`).append(dealElem)
  //     document.getElementById('dealName').value = ''
  //     document.getElementById('dealValue').value = ''
  //     document.getElementById('dealOrg').value = ''
  //     document.getElementById('dealContact').value = ''
  //     document.getElementById('dealPhone').value = ''
  //     document.getElementById('dealEmail').value = ''
  //     document.getElementById('dealNotes').value = ''
  //     document.getElementById('dealStage').value = ''
  //     location.reload()
  //   })
  //   .catch(err => console.log(err))
  // })

  //button functionality for adding a new QUALIFIED deal for specific user
  // document.getElementById('addQualified').addEventListener('click', event => {
  //   event.preventDefault()
  //   $('.ui.modal').modal('show')
  //   axios.post(`api/users/:id`, {
  //     dealName: document.getElementById('dealName').value,
  //     value: document.getElementById('dealValue').value,
  //     organization: document.getElementById('dealOrg').value,
  //     contact: document.getElementById('dealContact').value,
  //     phone: document.getElementById('dealPhone').value,
  //     email: document.getElementById('dealEmail').value,
  //     notes: document.getElementById('dealNotes').value,
  //     stage: document.getElementById('dealStage').value,
  //     userId: localStorage.getItem(data.id)
  //   })
  //   .then(({data}) => {
  //     let dealElem = document.createElement('li')
  //     dealElem.textContent = `
  //     <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="deal1">
  //       <div class="content">
  //         <div class="header">${document.getElementById('dealName').value}</div>
  //           <div class="description">
  //             <h5>Value: ${document.getElementById('dealValue').value}</h5>
  //           </div>
  //         </div>
  //           <div class="extra content">
  //             <p><strong>Organization: </strong>${document.getElementById('dealOrg').value}</p>
  //             <p><strong>Contact: </strong>${document.getElementById('dealContact').value}</p>
  //             <p><strong>Phone: </strong>${document.getElementById('dealPhone').value}</p>
  //             <p><strong>Email: </strong>${document.getElementById('dealEmail').value}</p>
  //             <p><strong>Notes: </strong>${document.getElementById('dealNotes').value}</p>
  //           </div>
  //     </div>`
  //     document.getElementById(`${dealStage}`).append(dealElem)
  //     document.getElementById('dealName').value = ''
  //     document.getElementById('dealValue').value = ''
  //     document.getElementById('dealOrg').value = ''
  //     document.getElementById('dealContact').value = ''
  //     document.getElementById('dealPhone').value = ''
  //     document.getElementById('dealEmail').value = ''
  //     document.getElementById('dealNotes').value = ''
  //     document.getElementById('dealStage').value = ''
  //     location.reload()
  //   })
  //   .catch(err => console.log(err))
  // })

//button functionality for adding a new PROPOSAL deal for specific user
// document.getElementById('addProposal').addEventListener('click', event => {
//   event.preventDefault()
//   $('.ui.modal').modal('show')
//   axios.post(`api/users/:id`, {
//     dealName: document.getElementById('dealName').value,
//     value: document.getElementById('dealValue').value,
//     organization: document.getElementById('dealOrg').value,
//     contact: document.getElementById('dealContact').value,
//     phone: document.getElementById('dealPhone').value,
//     email: document.getElementById('dealEmail').value,
//     notes: document.getElementById('dealNotes').value,
//     stage: document.getElementById('dealStage').value,
//     userId: localStorage.getItem(data.id)
//   })
//   .then(({data}) => {
//     let dealElem = document.createElement('li')
//     dealElem.textContent = `
//     <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="deal1">
//       <div class="content">
//         <div class="header">${document.getElementById('dealName').value}</div>
//           <div class="description">
//             <h5>Value: ${document.getElementById('dealValue').value}</h5>
//           </div>
//         </div>
//           <div class="extra content">
//             <p><strong>Organization: </strong>${document.getElementById('dealOrg').value}</p>
//             <p><strong>Contact: </strong>${document.getElementById('dealContact').value}</p>
//             <p><strong>Phone: </strong>${document.getElementById('dealPhone').value}</p>
//             <p><strong>Email: </strong>${document.getElementById('dealEmail').value}</p>
//             <p><strong>Notes: </strong>${document.getElementById('dealNotes').value}</p>
//           </div>
//     </div>`
//     document.getElementById(`${dealStage}`).append(dealElem)
//     document.getElementById('dealName').value = ''
//     document.getElementById('dealValue').value = ''
//     document.getElementById('dealOrg').value = ''
//     document.getElementById('dealContact').value = ''
//     document.getElementById('dealPhone').value = ''
//     document.getElementById('dealEmail').value = ''
//     document.getElementById('dealNotes').value = ''
//     document.getElementById('dealStage').value = ''
//     location.reload()
//   })
//   .catch(err => console.log(err))
// })

//button functionality for adding a new WON deal for specific user
// document.getElementById('addWon').addEventListener('click', event => {
//   event.preventDefault()
//   $('.ui.modal').modal('show')
//   axios.post(`api/users/:id`, {
//     dealName: document.getElementById('dealName').value,
//     value: document.getElementById('dealValue').value,
//     organization: document.getElementById('dealOrg').value,
//     contact: document.getElementById('dealContact').value,
//     phone: document.getElementById('dealPhone').value,
//     email: document.getElementById('dealEmail').value,
//     notes: document.getElementById('dealNotes').value,
//     stage: document.getElementById('dealStage').value,
//     userId: localStorage.getItem(data.id)
//   })
//   .then(({data}) => {
//     let dealElem = document.createElement('li')
//     dealElem.textContent = `
//     <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="deal1">
//       <div class="content">
//         <div class="header">${document.getElementById('dealName').value}</div>
//           <div class="description">
//             <h5>Value: ${document.getElementById('dealValue').value}</h5>
//           </div>
//         </div>
//           <div class="extra content">
//             <p><strong>Organization: </strong>${document.getElementById('dealOrg').value}</p>
//             <p><strong>Contact: </strong>${document.getElementById('dealContact').value}</p>
//             <p><strong>Phone: </strong>${document.getElementById('dealPhone').value}</p>
//             <p><strong>Email: </strong>${document.getElementById('dealEmail').value}</p>
//             <p><strong>Notes: </strong>${document.getElementById('dealNotes').value}</p>
//           </div>
//     </div>`
//     document.getElementById(`${dealStage}`).append(dealElem)
//     document.getElementById('dealName').value = ''
//     document.getElementById('dealValue').value = ''
//     document.getElementById('dealOrg').value = ''
//     document.getElementById('dealContact').value = ''
//     document.getElementById('dealPhone').value = ''
//     document.getElementById('dealEmail').value = ''
//     document.getElementById('dealNotes').value = ''
//     document.getElementById('dealStage').value = ''
//     location.reload()
//   })
//   .catch(err => console.log(err))
// })

//button functionality for adding a new LOST deal for specific user
// document.getElementById('addLost').addEventListener('click', event => {
//   event.preventDefault()
//   $('.ui.modal').modal('show')
//   axios.post(`api/users/:id`, {
//     dealName: document.getElementById('dealName').value,
//     value: document.getElementById('dealValue').value,
//     organization: document.getElementById('dealOrg').value,
//     contact: document.getElementById('dealContact').value,
//     phone: document.getElementById('dealPhone').value,
//     email: document.getElementById('dealEmail').value,
//     notes: document.getElementById('dealNotes').value,
//     stage: document.getElementById('dealStage').value,
//     userId: localStorage.getItem(data.id)
//   })
//   .then(({data}) => {
//     let dealElem = document.createElement('li')
//     dealElem.textContent = `
//     <div class="ui raised card" draggable="true" ondragstart="drag(event)" id="deal1">
//       <div class="content">
//         <div class="header">${document.getElementById('dealName').value}</div>
//           <div class="description">
//             <h5>Value: ${document.getElementById('dealValue').value}</h5>
//           </div>
//         </div>
//           <div class="extra content">
//             <p><strong>Organization: </strong>${document.getElementById('dealOrg').value}</p>
//             <p><strong>Contact: </strong>${document.getElementById('dealContact').value}</p>
//             <p><strong>Phone: </strong>${document.getElementById('dealPhone').value}</p>
//             <p><strong>Email: </strong>${document.getElementById('dealEmail').value}</p>
//             <p><strong>Notes: </strong>${document.getElementById('dealNotes').value}</p>
//           </div>
//     </div>`
//     document.getElementById(`${dealStage}`).append(dealElem)
//     document.getElementById('dealName').value = ''
//     document.getElementById('dealValue').value = ''
//     document.getElementById('dealOrg').value = ''
//     document.getElementById('dealContact').value = ''
//     document.getElementById('dealPhone').value = ''
//     document.getElementById('dealEmail').value = ''
//     document.getElementById('dealNotes').value = ''
//     document.getElementById('dealStage').value = ''
//     location.reload()
//   })
//   .catch(err => console.log(err))
// })

  //button functionality for edit/update deal for specific user
  // document.getElementById('editDeal').addEventListener('click', event => {
  //   event.preventDefault()
  //   $('.ui.modal').modal('show')
  //   axios.put(`api/users/:id`, {
  //     dealName: document.getElementById('dealName').value,
  //     value: document.getElementById('dealValue').value,
  //     organization: document.getElementById('dealOrg').value,
  //     contact: document.getElementById('dealContact').value,
  //     phone: document.getElementById('dealPhone').value,
  //     email: document.getElementById('dealEmail').value,
  //     notes: document.getElementById('dealNotes').value,
  //     stage: document.getElementById('dealStage').value,
  //     userId: localStorage.getItem(data.id)
  //   })
  //   .then(({data}) => {
  //     location.reload()
  //   })
  //   .catch(err => console.log(err))
  // })

  //button functionality for delete deal for specific user
  // document.getElementById('deleteDeal').addEventListener('click', event => {
  //   event.preventDefault()
  //   $('.ui.modal').modal('show')
  //   axios.delete(`api/deals/:id`, {
  //     dealName: document.getElementById('dealName').value,
  //     value: document.getElementById('dealValue').value,
  //     organization: document.getElementById('dealOrg').value,
  //     contact: document.getElementById('dealContact').value,
  //     phone: document.getElementById('dealPhone').value,
  //     email: document.getElementById('dealEmail').value,
  //     notes: document.getElementById('dealNotes').value,
  //     stage: document.getElementById('dealStage').value,
  //     userId: localStorage.getItem(data.id)
  //   })
  //   .then(({data}) => {
  //     location.reload()
  //   })
  //   .catch(err => console.log(err))
  // })