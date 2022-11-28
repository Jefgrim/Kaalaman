
const postThread = () => {

let selectedCategory = document.querySelector("#selectCategory").value 
let titleValue = document.querySelector("#titleInp").value
let postText = document.querySelector ("#threadInp").value
let threadContentContainer  = document.querySelector(".threadContentContainer")


 let threadContent = document.createElement("div")
 threadContent.classList=`threadContent ${selectedCategory}`

 let threadImage = document.createElement("div")
 threadImage.classList="thread-Image"

 let userImg = document.createElement("img")
 userImg.src = ".//images/Avatar Users2_1.png"
 userImg.classList="avatar"

 let threadTitle = document.createElement("div")
 threadTitle.classList="threadTitle"

 let postTitle =document.createElement("span")
 postTitle.style.fontSize = "larger"
 postTitle.textContent= titleValue

 let category = document.createElement("span")
 category.textContent = selectedCategory

 let postContent = document.createElement("span")
 postContent.textContent= postText

 let threadDate = document.createElement("div")
 threadDate.classList="threadDate"

 threadContentContainer.insertAdjacentElement("afterbegin", threadContent)
 threadContent.insertAdjacentElement("afterbegin",threadImage)
 threadImage.insertAdjacentElement("afterbegin",userImg)
 threadContent.insertAdjacentElement("beforeend",threadTitle)
 threadTitle.insertAdjacentElement("afterbegin",postTitle)
 threadTitle.insertAdjacentElement("beforeend",category)
 threadTitle.insertAdjacentElement("beforeend",postContent)
 threadContent.insertAdjacentElement("beforeend",threadDate)

}





export default postThread