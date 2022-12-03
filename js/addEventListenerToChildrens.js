import {viewFullThread} from "./viewFullThread.js"

const addEventListenerToChildrens = () => {
    let threadContent = document.querySelector(".threadContentContainer").children
    for (let x of threadContent){
        let threadTextsContainer = x.firstChild.lastChild
        threadTextsContainer.addEventListener("click", viewFullThread)
    }
}

export default addEventListenerToChildrens