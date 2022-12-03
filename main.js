import toggleUserSection from "./js/userdropdown.js";
import filterCategories from "./js/filterCategories.js";
import {postThread, displayThread} from "./js/postThread.js";
import Darkmode from "./js/darkmode.js"
import addEventListenerToChildrens from "./js/addEventListenerToChildrens.js"
import ChangeWindowSize from "./js/responsive.js"


  
      
    
    


  








displayThread();
addEventListenerToChildrens();
 ChangeWindowSize();

//darkmode
let darkModeBtn = document.querySelector("#darkmodeBtn");

//categories btn
let technologyBtn = document.querySelector("#technologyBtn")
let ecommerceBtn = document.querySelector("#ecommerceBtn")
let healthBtn = document.querySelector("#healthBtn")
let gameBtn = document.querySelector("#gameBtn")
let foodBtn = document.querySelector("#foodBtn")

// //post btn
let postBtn = document.querySelector("#postBtn")

//dropdown user
let userdropdown =document.querySelector(".userDropDown")

// //event listener dropdown user
userdropdown.addEventListener("click",toggleUserSection)

// //event listener categories
technologyBtn.addEventListener("change",filterCategories)
ecommerceBtn.addEventListener("change",filterCategories)
healthBtn.addEventListener("change",filterCategories)
gameBtn.addEventListener("change",filterCategories)
foodBtn.addEventListener("change",filterCategories)

// //event listener postBtn
postBtn.addEventListener("click",postThread)

//darkmode evemt listener
darkModeBtn.addEventListener("click" , Darkmode)