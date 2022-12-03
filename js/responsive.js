  
const  ChangeWindowSize = () =>{ 
 let hideSidebar = document.querySelector(".sidebar")
 let showSidebar = document.querySelector(".sideBar-toggle")
 let hidePostThread = document.querySelector (".rightContainer")
 let expandThread = document.querySelector (".threadContainer")
    
    if (window.innerWidth < 800){
       showSidebar.style.display ="flex";
       hideSidebar.style.display = "none"
       hidePostThread.style.display = "none"
       expandThread.style.width  = "100%";

    }

    else {
       showSidebar.style.display = "none";
       hideSidebar.style.display ="flex"
       hidePostThread.style.display = "flex"
       expandThread.style.width = "none"

    }

    showSidebar.addEventListener("click" ,function(){
    hideSidebar.style.display = "flex"
    hideSidebar.style.position = "absolute"
    hideSidebar.style.width = "20%"
        

     })
       

   }






       

export default ChangeWindowSize 