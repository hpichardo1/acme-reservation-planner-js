/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const userList = document.querySelector('#users-list')\nconst restaurantList = document.querySelector('#restaurants-list')\nconst reservationLlist = document.querySelector('#reservations-list')\n\nconst renderUsers = (data) => {\n  const htmlUserList = data.map( userObj => \n     `\n    <li>\n    <a href='#${userObj.id}' id= ${userObj.id} class = \"users\">\n    ${userObj.name}\n    </a>\n    </li>\n    `  \n  ).join('')\n  userList.innerHTML = htmlUserList\n}\n\nconst renderRest = (data) => {\n  const htmlRestList = data.map( userObj => \n     `\n    <li id=${userObj.id}>\n    ${userObj.name}\n    </li>\n    `  \n  ).join('')\n  restaurantList.innerHTML = htmlRestList\n}\n\nconst renderReserv = (reservation) => {\n  const htmlReservationList = reservation.map( reservObj =>\n    `\n    <li id = ${reservObj.id}>\n    ${reservObj.restaurant.name}\n    <button id='#deleteButton'>X</button>\n    </li>\n    `\n    ).join('')\n    reservationLlist.innerHTML = htmlReservationList\n}\n\n\nconst init = async () => {\n  try {\n    const userResponse = await fetch('/api/users')\n    const userData = await userResponse.json()\n    \n    const restaurantResponse = await fetch('/api/restaurants')\n    const restaurantData = await restaurantResponse.json()\n    \n    renderUsers(userData)\n    renderRest(restaurantData)\n\n  } catch (err){\n    console.log(err)\n  }\n\n}\n\nwindow.addEventListener('hashchange', async (ev)=>{\n[...document.querySelectorAll(\".users\")].forEach(node=>node.style.backgroundColor='');  \n  const userId = window.location.hash.slice(1)\n  const userHighLight = document.getElementById(userId)\n  \n    userHighLight.style.backgroundColor = 'dodgerBlue'\n \n  const reservationsData = await fetch(`/api/users/${userId}/reservations`)\n  const reservationResponse = await reservationsData.json() \n  renderReserv(reservationResponse)\n})\n\nreservationLlist.addEventListener('click', async(event) =>{\n  const userId = window.location.hash.slice(1)\n  \n  if (event.target.tagName === 'BUTTON'){\n    event.target.parentNode.remove()\n\n    await fetch(`/api/reservations/${event.target.parentNode.id}`, {\n      method: 'DELETE'\n    }) \n  } \n  }\n)\n\nrestaurantList.addEventListener('click', async(event)=>{\n  const userId = window.location.hash.slice(1)\n\n  if (event.target.tagName === 'LI'){\n    const addReserv = await fetch(`/api/users/${userId}/reservations`, {\n      method: 'POST', \n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n      body: JSON.stringify({restaurantId: event.target.id}),\n    })\n    const added = await addReserv.json()\n    renderReserv(added)\n  }\n} \n)\n\n\n\ninit()\n\n//# sourceURL=webpack://acme-reservation-planner-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;