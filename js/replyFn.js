import { showAllReply } from "./viewFullThread.js"
// let selectedPostId = ""
const replyFn = () => {
    // selectedPostId = event.currentTarget.id
    console.log(event.currentTarget.classList[1])
    console.log(`Replying to ${getUserName()}`)
    showReplyInput()
}

const getUserName = () => {
    let threadList = JSON.parse(localStorage.getItem("postList"));
    let replyList = JSON.parse(localStorage.getItem("replyList"));

    for (const thread of threadList) {
        if (thread.postId == event.currentTarget.id) {
          return thread.userName
        }
    }

    for (const thread of replyList) {
        if (thread.replyId == event.currentTarget.id) {
            return thread.userName
        }
    }
}
const getReplyToText = () => {
    let threadList = JSON.parse(localStorage.getItem("postList"));
    let replyList = JSON.parse(localStorage.getItem("replyList"));

    for (const thread of threadList) {
        if (thread.postId == event.currentTarget.id) {
          return thread.postText
        }
    }

    for (const thread of replyList) {
        if (thread.replyId == event.currentTarget.id) {
            return thread.replyText
        }
    }
}

const getPostId = () => {
    return event.currentTarget.id
}

const showReplyInput = () => {
    let mainContainer = document.querySelector(".mainContainer")
    let replyInputMainContainer = document.createElement("div")
    replyInputMainContainer.classList = "replyInputMainContainer"
    let replyInputSubContainer = document.createElement("div")
    replyInputSubContainer.classList = "replyInputSubContainer"
    let replyToH3 = document.createElement("h3")
    replyToH3.textContent = `Reply to ${getUserName()}`
    let replyInp = document.createElement("textarea")
    replyInp.placeholder = "Enter Your Reply"
    replyInp.classList = "replyInp"
    let replyBtnsContainer = document.createElement("replyBtnsContainer")
    replyBtnsContainer.classList = "replyBtnsContainer"
    let replyCancelBtn = document.createElement("span")
    replyCancelBtn.classList = "replyCancelBtn"
    replyCancelBtn.textContent = "Cancel"
    replyCancelBtn.addEventListener("click", closeReplyInputField)
    let replySubmitBtn = document.createElement("span")
    replySubmitBtn.classList = "replySubmitBtn"
    replySubmitBtn.textContent = "Submit"
    replySubmitBtn.id = event.currentTarget.id
    replySubmitBtn.classList  = event.currentTarget.classList[1]
    replySubmitBtn.addEventListener("click", submitReply)

    mainContainer.insertAdjacentElement("beforeend", replyInputMainContainer)
    replyInputMainContainer.insertAdjacentElement("afterbegin", replyInputSubContainer)
    replyInputSubContainer.insertAdjacentElement("afterbegin", replyToH3)
    replyInputSubContainer.insertAdjacentElement("beforeend", replyInp)
    replyInputSubContainer.insertAdjacentElement("beforeend", replyBtnsContainer)
    replyBtnsContainer.insertAdjacentElement("afterbegin", replySubmitBtn)
    replyBtnsContainer.insertAdjacentElement("beforeend", replyCancelBtn)
}

const submitReply = () => {
 console.log("Submitted Reply")
 console.log(event.currentTarget.classList[1])
 let replyList = JSON.parse(localStorage.getItem("replyList"));
 let replyInp = document.querySelector(".replyInp").value
 let n = localStorage.getItem("replyId")
 n = ++n;
 
 let reply = {
    replyId: `reply${n}`,
    replyToId: event.currentTarget.id,
    replyToBatchClass: event.currentTarget.classList[0],
    replyToText: getReplyToText(),
    replyText: replyInp,
    userName: "Current User",
 };

 if (replyInp == "") {
    alert("Please complete all input field")
    return
  } else {
    localStorage.setItem("reply", JSON.stringify(reply));
    localStorage.setItem("replyId", n);
    replyList.push(reply);
    localStorage.setItem("replyList", JSON.stringify(replyList));
  }
    closeReplyInputField()
}

const closeReplyInputField = () => {
    let mainContainer = document.querySelector(".mainContainer")
    mainContainer.lastChild.remove()
}

export default replyFn