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

eval("console.log('Hello World')\n\nconst userList = document.querySelector('#users-list')\nconst restaurantList = document.querySelector('#restaurants-list')\n\nconst renderUsers = (data) => {\n  const htmlUserList = data.map( userObj => \n     `\n    <li>\n    <a href='#${userObj.id}'>\n    ${userObj.name}\n    </a>\n    </li>\n    `  \n  ).join('')\n  userList.innerHTML = htmlUserList\n}\n\nconst renderRest = (data) => {\n  const htmlRestList = data.map( userObj => \n     `\n    <li>\n    <a href='#${userObj.id}'>\n    ${userObj.name}\n    </a>\n    </li>\n    `  \n  ).join('')\n  restaurantList.innerHTML = htmlRestList\n}\n\nconst renderReserv = () => {}\n\n\nconst init = async () => {\n  try{\n\n    const userResponse = await fetch('/api/users')\n    const userData = await userResponse.json()\n\n    const restaurantResponse = await fetch('/api/restaurants')\n    const restaurantData = await restaurantResponse.json()\n    \n    renderUsers(userData)\n    renderRest(restaurantData)\n\n  } catch (err){\n    console.log(err)\n  }\n\n}\n\nwindow.addEventListener('hashchange', (ev)=>{\n  \n})\n\ninit()\n\n//# sourceURL=webpack://acme-reservation-planner-js/./src/index.js?");

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