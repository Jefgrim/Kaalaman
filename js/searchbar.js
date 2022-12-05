const searchBar = () => {

    const searchInput = document.querySelector("[data-search]")
    const threadContentContainer = document.querySelector(".threadContentContainer")
   

     searchInput.addEventListener("keyup", (e) =>{
         const value = e.target.value
            console.log(value)
   
         
         for (const child of threadContentContainer.children){
                // console.log(child.firstChild.lastChild.firstChild.childNodes)
                const category =child.firstChild.lastChild.firstChild.childNodes[0].innerText
                const title = child.firstChild.lastChild.firstChild.childNodes[1].innerHTML
                const text =child.firstChild.lastChild.firstChild.childNodes[2].innerHTML
                //  console.log(text)
           
           if (value ==  category){
                child.style.display = "flex"
                
            }
            else{
                child.style.display = "none"
             
            }

            
            if(value == ""){
                child.removeAttribute("style")
            }
        }

         })
        









}

export default searchBar



