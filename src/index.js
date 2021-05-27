console.log('Hello World')

const userList = document.querySelector('#users-list')
const restaurantList = document.querySelector('#restaurants-list')

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

const renderReserv = () => {}


const init = async () => {
  try{

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

window.addEventListener('hashchange', (ev)=>{
  
})

init()