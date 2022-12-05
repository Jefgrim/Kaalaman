import addEventListenerToChildrens from "./addEventListenerToChildrens.js";


const postThread = () => {
  let postList = JSON.parse(localStorage.getItem("postList"));
  if (postList == null) {
    postList = [];
  }
  let n = localStorage.getItem("postId")
  n = ++n;
  
  let thread = {
    selectedCategory: document.querySelector("#selectCategory").value,
    titleValue: document.querySelector("#titleInp").value,
    postText: document.querySelector("#threadInp").value,
    postId: `post${n}`,
    userName: "Current User"
  };

  if (thread.selectedCategory == "" || thread.titleValue == "" || thread.postText == "") {
    alert("Please complete all input field")
    return
  } else {

    localStorage.setItem("post", JSON.stringify(thread));
    localStorage.setItem("postId", n);
    postList.push(thread);
    localStorage.setItem("postList", JSON.stringify(postList));

    let threadContentContainer = document.querySelector(
      ".threadContentContainer"
    );

    let threadContent = document.createElement("div");
    threadContent.classList = `threadContent ${thread.selectedCategory}`;

    let avatarTextsContainer = document.createElement("div")
    avatarTextsContainer.classList = "avatarTextsContainer"

    let threadUserAvatar = document.createElement("div");
    threadUserAvatar.classList = "threadUserAvatar";

    let userImg = document.createElement("img");
    userImg.src = ".//images/Avatar Users2_20.png";

    let userName = document.createElement("span")
    userName.textContent = thread.userName

    let threadTextsContainer = document.createElement("div");
    threadTextsContainer.classList = "threadTextsContainer";

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

    let thumbsDownIcon = document.createElement("i")
    thumbsDownIcon.classList = "fa-regular fa-thumbs-down";

    let replyBtnContainer = document.createElement("div")
    replyBtnContainer.classList = "replyBtnContainer"
    replyBtnContainer.id = thread.postId;

    let replyIcon = document.createElement("i")
    replyIcon.classList = "fa-solid fa-comment-dots"

    threadContentContainer.insertAdjacentElement("afterbegin", threadContent);
    threadContent.insertAdjacentElement("afterbegin", avatarTextsContainer)
    avatarTextsContainer.insertAdjacentElement("afterbegin", threadUserAvatar);
    threadUserAvatar.insertAdjacentElement("afterbegin", userImg);
    threadUserAvatar.insertAdjacentElement("beforeend", userName)
    avatarTextsContainer.insertAdjacentElement("beforeend", threadTextsContainer);
    threadTextsContainer.insertAdjacentElement("afterbegin", threadTexts)
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



    let latestContent = document.querySelector(".latestContent")

    while (latestContent.hasChildNodes()) {
      latestContent.removeChild(latestContent.firstChild);
    }

    let contentbox = document.createElement("div")
    contentbox.classList = "content-box"
    let latestContentAvatar = document.createElement("img")
    latestContentAvatar.src = ".//images/Avatar Users2_20.png"
    latestContentAvatar.classList = "avatar"
    let textContainer = document.createElement("div")
    textContainer.classList = "text-container"
    let textTitle = document.createElement("p")
    textTitle.classList = "p-1"
    textTitle.textContent = thread.titleValue
    let uploader = document.createElement("h3")
    uploader.classList = "uploader"
    uploader.textContent = `By: ${thread.userName}`

    latestContent.insertAdjacentElement("afterbegin", contentbox)
    contentbox.insertAdjacentElement("afterbegin", latestContentAvatar)
    contentbox.insertAdjacentElement("beforeend", textContainer)
    textContainer.insertAdjacentElement("afterbegin", textTitle)
    textContainer.insertAdjacentElement("beforeend", uploader)
  }

  addEventListenerToChildrens();
};

const displayThread = () => {
  let postList = localStorage.getItem("postList");
  if (postList == null) {
    let postList = JSON.parse(localStorage.getItem("postList"));
    if (postList == null) {
      postList = [];
    }

    let thread = {
      selectedCategory: "Technology",
      titleValue: "Dummy Title",
      postText: "Dummy Text",
      postId: "post1",
      userName: "Dummy Poster 1"
    };

    localStorage.setItem("post", JSON.stringify(thread));
    localStorage.setItem("postId", 1);
    postList.push(thread);
    localStorage.setItem("postList", JSON.stringify(postList));

    let thread2 = {
      selectedCategory: "Technology",
      titleValue: "Dummy Title 2",
      postText: "Dummy Text 2",
      postId: "post2",
      userName: "Dummy Poster 2"
    };

    localStorage.setItem("post", JSON.stringify(thread2));
    localStorage.setItem("postId", 2);
    postList.push(thread2);
    localStorage.setItem("postList", JSON.stringify(postList));
    displayThread();
  }
  let parsedPostList = JSON.parse(postList);

  for (let i in parsedPostList) {
    let threadContentContainer = document.querySelector(
      ".threadContentContainer"
    );

    let threadContent = document.createElement("div");
    threadContent.classList = `threadContent ${parsedPostList[i].selectedCategory}`;

    let avatarTextsContainer = document.createElement("div")
    avatarTextsContainer.classList = "avatarTextsContainer"

    let threadUserAvatar = document.createElement("div");
    threadUserAvatar.classList = "threadUserAvatar";

    let userImg = document.createElement("img");
    if (parsedPostList[i].userName == "Current User") {
      userImg.src = ".//images/Avatar Users2_20.png"
    } else {
      userImg.src = ".//images/Avatar Users2_1.png";
    }
    
    let userName = document.createElement("span")
    userName.textContent = parsedPostList[i].userName

    let threadTextsContainer = document.createElement("div");
    threadTextsContainer.classList = "threadTextsContainer";

    let threadTexts = document.createElement("div");
    threadTexts.classList = "threadTexts";

    let postTitle = document.createElement("span");
    postTitle.style.fontSize = "larger";
    postTitle.textContent = parsedPostList[i].titleValue;

    let category = document.createElement("span");
    category.textContent = parsedPostList[i].selectedCategory;

    let postContent = document.createElement("span");
    postContent.textContent = parsedPostList[i].postText;

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

    let thumbsDownIcon = document.createElement("i")
    thumbsDownIcon.classList = "fa-regular fa-thumbs-down";

    let replyBtnContainer = document.createElement("div")
    replyBtnContainer.classList = "replyBtnContainer"
    replyBtnContainer.id = parsedPostList[i].postId;

    let replyIcon = document.createElement("i")
    replyIcon.classList = "fa-solid fa-comment-dots"

    threadContentContainer.insertAdjacentElement("afterbegin", threadContent);
    threadContent.insertAdjacentElement("afterbegin", avatarTextsContainer)
    avatarTextsContainer.insertAdjacentElement("afterbegin", threadUserAvatar);
    threadUserAvatar.insertAdjacentElement("afterbegin", userImg);
    threadUserAvatar.insertAdjacentElement("beforeend", userName)
    avatarTextsContainer.insertAdjacentElement("beforeend", threadTextsContainer);
    threadTextsContainer.insertAdjacentElement("afterbegin", threadTexts)
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

  try {
    let latestContent = document.querySelector(".latestContent")
    while (latestContent.hasChildNodes()) {
     latestContent.removeChild(latestContent.firstChild);
    }

    let contentbox = document.createElement("div")
    contentbox.classList = "content-box"
    let latestContentAvatar = document.createElement("img")
    if (parsedPostList[(parsedPostList.length-1)].userName == "Current User") {
      latestContentAvatar.src = ".//images/Avatar Users2_20.png"
    } else {
      latestContentAvatar.src = ".//images/Avatar Users2_1.png";
    }
    latestContentAvatar.classList = "avatar"
    let textContainer = document.createElement("div")
    textContainer.classList = "text-container"
    let textTitle = document.createElement("p")
    textTitle.classList = "p-1"
    textTitle.textContent = parsedPostList[(parsedPostList.length-1)].titleValue
    let uploader = document.createElement("h3")
    uploader.classList = "uploader"
    uploader.textContent = `By: ${parsedPostList[(parsedPostList.length-1)].userName}`

    latestContent.insertAdjacentElement("afterbegin", contentbox)
    contentbox.insertAdjacentElement("afterbegin", latestContentAvatar)
    contentbox.insertAdjacentElement("beforeend", textContainer)
    textContainer.insertAdjacentElement("afterbegin", textTitle)
    textContainer.insertAdjacentElement("beforeend", uploader)
  } catch (error) {
    location.reload();
  }

  
};

export { postThread, displayThread };
