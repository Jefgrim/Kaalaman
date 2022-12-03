import viewFullThread from "./viewFullThread.js"

const addEventListenerToChildrens = () => {
    let threadContent = document.querySelectorAll(".threadContent")
    for(let content of threadContent) {
        content.addEventListener("click", viewFullThread)
    }
}

export default addEventListenerToChildrens