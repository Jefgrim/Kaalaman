
const viewFullThread = () => {
   removeThreadContent();
   removethreadNavContainer();
}

const removeThreadContent = () => {
    let threadContainer = document.querySelector(".threadContentContainer")
    while (threadContainer.hasChildNodes()) {
        threadContainer.removeChild(threadContainer.firstChild);
      }
    console.log(`removed the child nodes of thread container using ${event.currentTarget.id}`)
}

const removethreadNavContainer = () => {
    let threadNavContainer = document.querySelector(".threadNavContainer")
    threadNavContainer.remove()
    console.log("removed searchbar")
}

export default viewFullThread