  
const  ChangeWindowSize = () =>{ 
 let hideSidebar = document.querySelector(".sidebar");
 let showSidebar = document.querySelector(".sideBar-toggle");
 let closeSidebar = document.querySelector(".sideBarBtn")
 showSidebar.addEventListener("click" ,ChangeWindowSize)
   

 closeSidebar.addEventListener("click",function(){
        hideSidebar.style.display = "none"
 })


}
       

export default ChangeWindowSize 