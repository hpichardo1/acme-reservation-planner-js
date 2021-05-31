const userList = document.querySelector('#users-list')
const restaurantList = document.querySelector('#restaurants-list')
const reservationLlist = document.querySelector('#reservations-list')

const renderUsers = (data) => {
  const htmlUserList = data.map( userObj => 
     `
    <li>
    <a href='#${userObj.id}'>
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
    <li>
    <a href='#${userObj.id}'>
    ${userObj.name}
    </a>
    </li>
    `  
  ).join('')
  restaurantList.innerHTML = htmlRestList
}

const renderReserv = (reservation) => {
  const htmlReservationList = reservation.map( reservObj =>
    `
    <li>
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
  const userId = window.location.hash.slice(1)
  
  const reservationsData = await fetch(`/api/users/${userId}/reservations`)
  const reservationResponse = await reservationsData.json() 
  renderReserv(reservationResponse)
})

reservationLlist.addEventListener('click', (event) =>{
  if (event.target.tagName === 'BUTTON'){
    event.target.parentNode.remove()
    
  }
})

console.log(window.location.hash)
init()