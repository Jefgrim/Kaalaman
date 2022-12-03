  
const  ChangeWindowSize = () =>{ 
 let hideSidebar = document.querySelector(".sidebar");
 let showSidebar = document.querySelector(".sideBar-toggle");
 let closeSidebar = document.querySelector(".sideBarBtn")
    showSidebar.addEventListener("click" ,function(){
    hideSidebar.style.display = "flex";
    hideSidebar.style.position = "absolute";
    hideSidebar.style.width = "20%";
    hideSidebar.style.height = "300px";
})
 closeSidebar.addEventListener("click",function(){
        hideSidebar.style.display = "none"
 })
 
   }



       

export default ChangeWindowSize 