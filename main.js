// import {showSidebar ,hideSideBar} from "./js/sidebar.js";
// import toggleUserSection from "./js/userdropdown.js";
// import {technologyFilter, ecommerceFilter ,healthFilter, gamesFilter , foodFilter ,allfilter  } from "./js/filterCategories.js";
import {postThread, displayThread} from "./js/postThread.js"


// //categories btn
// let technologyBtn = document.querySelector("#technologyBtn")
// let ecommerceBtn = document.querySelector("#ecommerceBtn")
// let healthBtn = document.querySelector("#healthBtn")
// let gameBtn = document.querySelector("#gameBtn")
// let foodBtn = document.querySelector("#foodBtn")
// let allBtn =document.querySelector("#allBtn")



// //post btn

let postBtn = document.querySelector("#postBtn")

// //dropdown user
// let userdropdown =document.querySelector(".userDropDown")



// //sidebar categories
// let btn = document.querySelector("#sideBar-toggle")
// let CloseBtn =document.querySelector("#hideSidebar")



// //event listener
// btn.addEventListener("click",showSidebar)
// CloseBtn.addEventListener("click",hideSideBar)
// //event listener dropdown user
// userdropdown.addEventListener("click",toggleUserSection)
// //event listener categories
// technologyBtn.addEventListener("click",technologyFilter)
// ecommerceBtn.addEventListener("click",ecommerceFilter )
// healthBtn.addEventListener("click",healthFilter)
// gameBtn.addEventListener("click",gamesFilter)
// foodBtn.addEventListener("click",foodFilter)
// allBtn.addEventListener("click" , allfilter)


// //event listener postBtn
postBtn.addEventListener("click",postThread)

displayThread();










