const userList = document.querySelector('#users-list')
const restaurantList = document.querySelector('#restaurants-list')
const reservationLlist = document.querySelector('#reservations-list')

const renderUsers = (data) => {
  const htmlUserList = data.map( userObj => 
     `
    <li>
    <a href='#${userObj.id}' id= ${userObj.id} class = "users">
    ${userObj.name}
    </a>
    </li>
    `  
  ).join('')
  userList.innerHTML = htmlUserList
}

const renderRest = (data) => {
  const htmlRestList = data.map( userObj => 
     `
    <li id=${userObj.id}>
    ${userObj.name}
    </li>
    `  
  ).join('')
  restaurantList.innerHTML = htmlRestList
}

const renderReserv = (reservation) => {
  const htmlReservationList = reservation.map( reservObj =>
    `
    <li id = ${reservObj.id}>
    ${reservObj.restaurant.name}
    <button id='#deleteButton'>X</button>
    </li>
    `
    ).join('')
    reservationLlist.innerHTML = htmlReservationList
}


const init = async () => {
  try {
    const userResponse = await fetch('/api/users')
    const userData = await userResponse.json()
    
    const restaurantResponse = await fetch('/api/restaurants')
    const restaurantData = await restaurantResponse.json()
    
    renderUsers(userData)
    renderRest(restaurantData)

  } catch (err){
    console.log(err)
  }

}

window.addEventListener('hashchange', async (ev)=>{
[...document.querySelectorAll(".users")].forEach(node=>node.style.backgroundColor='');  
  const userId = window.location.hash.slice(1)
  const userHighLight = document.getElementById(userId)
  
    userHighLight.style.backgroundColor = 'dodgerBlue'
 
  const reservationsData = await fetch(`/api/users/${userId}/reservations`)
  const reservationResponse = await reservationsData.json() 
  renderReserv(reservationResponse)
})

reservationLlist.addEventListener('click', async(event) =>{
  const userId = window.location.hash.slice(1)
  
  if (event.target.tagName === 'BUTTON'){
    event.target.parentNode.remove()

    await fetch(`/api/reservations/${event.target.parentNode.id}`, {
      method: 'DELETE'
    }) 
  } 
  }
)

restaurantList.addEventListener('click', async(event)=>{
  const userId = window.location.hash.slice(1)

  if (event.target.tagName === 'LI'){
    const addReserv = await fetch(`/api/users/${userId}/reservations`, {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({restaurantId: event.target.id}),
    })
    const added = await addReserv.json()
    renderReserv(added)
  }
} 
)

init()