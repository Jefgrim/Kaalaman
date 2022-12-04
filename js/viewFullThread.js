const viewFullThread = () => {
  removeThreadContent();
  removethreadNavContainer();
  showSelectedPostContent();
  showAllReply();
};

const removeThreadContent = () => {
  let threadContainer = document.querySelector(".threadContentContainer");
  while (threadContainer.hasChildNodes()) {
    threadContainer.removeChild(threadContainer.firstChild);
  }
  console.log(
    `removed the child nodes of thread container using ${event.currentTarget.id}`
  );
};

const removethreadNavContainer = () => {
  let threadNavContainer = document.querySelector(".threadNavContainer");
  threadNavContainer.remove();
  console.log("removed searchbar");
};

const showSelectedPostContent = () => {
  let threadContentContainer = document.querySelector(
    ".threadContentContainer"
  );

  let threadList = JSON.parse(localStorage.getItem("postList"));

  for (const thread of threadList) {
    if (thread.postId == event.currentTarget.id) {
      let threadContentContainer = document.querySelector(
        ".threadContentContainer"
      );

      let threadContent = document.createElement("div");
      threadContent.classList = `threadContent ${thread.selectedCategory}`;
      threadContent.id = thread.postId;

      let avatarTextsContainer = document.createElement("div");
      avatarTextsContainer.classList = "avatarTextsContainer";

      let threadUserAvatar = document.createElement("div");
      threadUserAvatar.classList = "threadUserAvatar";

      let userImg = document.createElement("img");
      if (thread.userName == "Current User") {
        userImg.src = ".//images/Avatar Users2_20.png"
      } else {
        userImg.src = ".//images/Avatar Users2_1.png";
      }

      let userName = document.createElement("span")
      userName.textContent = thread.userName

      let threadTextsContainer = document.createElement("div");
      threadTextsContainer.classList = "selectedThreadTextsContainer";

      let threadTexts = document.createElement("div");
      threadTexts.classList = "threadTexts";

      let postTitle = document.createElement("span");
      postTitle.style.fontSize = "larger";
      postTitle.textContent = thread.titleValue;

      let category = document.createElement("span");
      category.textContent = thread.selectedCategory;

      let postContent = document.createElement("span");
      postContent.textContent = thread.postText;

      let threadReaction = document.createElement("div");
      threadReaction.classList = "threadReaction";

      let thumbsUpDownContainer = document.createElement ("div")
      thumbsUpDownContainer.classList = "thumbsUpDownContainer"

      let threadThumbsUp = document.createElement("div");
      threadThumbsUp.classList = "threadThumbsUp";

      let thumbsUpIcon = document.createElement("i");
      thumbsUpIcon.classList = "fa-regular fa-thumbs-up";

      let threadThumbsDown = document.createElement("div");
      threadThumbsDown.classList = "threadThumbsDown";

      let thumbsDownIcon = document.createElement("i");
      thumbsDownIcon.classList = "fa-regular fa-thumbs-down";

      let replyBtnContainer = document.createElement("div")
      replyBtnContainer.classList = "replyBtnContainer"

      let replyIcon = document.createElement("i")
      replyIcon.classList = "fa-solid fa-reply"

      threadContentContainer.insertAdjacentElement("afterbegin", threadContent);
      threadContent.insertAdjacentElement("afterbegin", avatarTextsContainer);
      avatarTextsContainer.insertAdjacentElement(
        "afterbegin",
        threadUserAvatar
      );
      threadUserAvatar.insertAdjacentElement("afterbegin", userImg);
      threadUserAvatar.insertAdjacentElement("beforeend", userName)
      avatarTextsContainer.insertAdjacentElement(
        "beforeend",
        threadTextsContainer
      );
      threadTextsContainer.insertAdjacentElement("afterbegin", threadTexts);
      threadTexts.insertAdjacentElement("afterbegin", category);
      threadTexts.insertAdjacentElement("beforeend", postTitle);
      threadTexts.insertAdjacentElement("beforeend", postContent);
      threadContent.insertAdjacentElement("beforeend", threadReaction);
      threadReaction.insertAdjacentElement("afterbegin", thumbsUpDownContainer)
      thumbsUpDownContainer.insertAdjacentElement("afterbegin", threadThumbsUp);
      threadThumbsUp.insertAdjacentElement("afterbegin", thumbsUpIcon);
      thumbsUpDownContainer.insertAdjacentElement("beforeend", threadThumbsDown);
      threadThumbsDown.insertAdjacentElement("afterbegin", thumbsDownIcon);
      threadReaction.insertAdjacentElement("beforeend", replyBtnContainer)
      replyBtnContainer.insertAdjacentElement("afterbegin", replyIcon)
    }
  }
};

const showAllReply = () => {
  let threadList = JSON.parse(localStorage.getItem("postList"));

  const getUserName = () => {
    for (const thread of threadList) {
        if (thread.postId == event.currentTarget.id) {
          return thread.userName
        }
      }
    }

  const getTextContent = () => {
    for (const thread of threadList) {
        if (thread.postId == event.currentTarget.id) {
          return thread.postText
        }
      }
    }   

  let replyList = localStorage.getItem("replyList");

  let parsedReplyList = JSON.parse(replyList)

  for (let i in parsedReplyList) {
    let threadContentContainer = document.querySelector(".threadContentContainer")

    let replyContent = document.createElement("div")
    replyContent.classList = "replyContent"
    replyContent.id = parsedReplyList[i].replyId

    let avatarTextsContainer = document.createElement("div")
    avatarTextsContainer.classList = "avatarTextsContainer"

    let replyUserAvatar = document.createElement("div")
    replyUserAvatar.classList = "replyUserAvatar"

    let userImg = document.createElement("img")
    userImg.src = ".//images/Avatar Users2_29.png"

    let userName = document.createElement("span")
    userName.textContent = parsedReplyList[i].userName

    let replyTexts = document.createElement("replyTexts")
    replyTexts.classList = "replyTexts"

    let repliedTo = document.createElement("div")
    repliedTo.classList = ("repliedTo")

    let repliedToUserName = document.createElement("span")
    repliedToUserName.textContent =  `${getUserName()} said:`

    let repliedToText = document.createElement("span")
    repliedToText.textContent = getTextContent()

    let reply = document.createElement("div")
    reply.classList = "reply"

    let replyText = document.createElement("span")
    replyText.textContent = parsedReplyList[i].replyText

    let replyReaction = document.createElement("div")
    replyReaction.classList = "replyReaction"

    let thumbsUpDownContainer = document.createElement ("div")
    thumbsUpDownContainer.classList = "thumbsUpDownContainer"

    let replyThumbsUp = document.createElement("div")
    replyThumbsUp.classList = "replyThumbsUp"

    let thumbsUpIcon = document.createElement("i")
    thumbsUpIcon.classList = "fa-regular fa-thumbs-up"

    let replyThumbsDown = document.createElement("div")
    replyThumbsDown.classList = "replyThumbsUp"

    let thumbsDownIcon = document.createElement("i")
    thumbsDownIcon.classList = "fa-regular fa-thumbs-down"

    let replyBtnContainer = document.createElement("div")
    replyBtnContainer.classList = "replyBtnContainer"

    let replyIcon = document.createElement("i")
    replyIcon.classList = "fa-solid fa-reply"


    if (parsedReplyList[i].replyToId == event.currentTarget.id) {
      threadContentContainer.insertAdjacentElement("beforeend", replyContent)
      replyContent.insertAdjacentElement("afterbegin", avatarTextsContainer)
      avatarTextsContainer.insertAdjacentElement("afterbegin", replyUserAvatar)
      replyUserAvatar.insertAdjacentElement("afterbegin", userImg)
      replyUserAvatar.insertAdjacentElement("beforeend", userName)
      avatarTextsContainer.insertAdjacentElement("beforeend", replyTexts)
      replyTexts.insertAdjacentElement("afterbegin", repliedTo)
      repliedTo.insertAdjacentElement("afterbegin", repliedToUserName)
      repliedTo.insertAdjacentElement("beforeend", repliedToText)
      replyTexts.insertAdjacentElement("beforeend", reply)
      reply.insertAdjacentElement("afterbegin", replyText)
      replyContent.insertAdjacentElement("beforeend", replyReaction)
      replyReaction.insertAdjacentElement("afterbegin", thumbsUpDownContainer)
      thumbsUpDownContainer.insertAdjacentElement("afterbegin", replyThumbsUp)
      replyThumbsUp.insertAdjacentElement("afterbegin", thumbsUpIcon)
      thumbsUpDownContainer.insertAdjacentElement("beforeend", replyThumbsDown)
      replyThumbsDown.insertAdjacentElement("afterbegin", thumbsDownIcon)
      replyReaction.insertAdjacentElement("beforeend", replyBtnContainer)
      replyBtnContainer.insertAdjacentElement("afterbegin", replyIcon)
    }
}

};

export { viewFullThread, showAllReply }
