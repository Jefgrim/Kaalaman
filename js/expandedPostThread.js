import addEventListenerToChildrens from "./addEventListenerToChildrens.js";
import {closeThreadPost} from "./expandBtn.js";
const expandedPostThread = () => {
    let postList = JSON.parse(localStorage.getItem("postList"));
    if (postList == null) {
      postList = [];
    }
    let n = localStorage.getItem("postId")
    n = ++n;
    
    let thread = {
      selectedCategory: document.querySelector("#expandedSelectCategory").value,
      titleValue: document.querySelector("#expandedTitleInp").value,
      postText: document.querySelector("#expandedThreadInp").value,
      postId: `post${n}`,
      userName: "Current User"
    };
  
    if (thread.selectedCategory == "" || thread.titleValue == "" || thread.postText == "") {
      console.log("Please Input something")
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
      userImg.src = ".//images/Avatar Users2_1.png";
  
      let userName = document.createElement("span")
      userName.textContent = thread.userName
  
      let threadTextsContainer = document.createElement("div");
      threadTextsContainer.classList = "threadTextsContainer";
      threadTextsContainer.id = thread.postId;
  
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
  
      let threadThumbsUp = document.createElement("div");
      threadThumbsUp.classList = "threadThumbsUp";
  
      let thumbsUpIcon = document.createElement("i");
      thumbsUpIcon.classList = "fa-regular fa-thumbs-up";
  
      let threadThumbsDown = document.createElement("div");
      threadThumbsDown.classList = "threadThumbsDown";
  
      let thumbsDownIcon = document.createElement("i")
      thumbsDownIcon.classList = "fa-regular fa-thumbs-down";
  
      threadContentContainer.insertAdjacentElement("afterbegin", threadContent);
      threadContent.insertAdjacentElement("afterbegin", avatarTextsContainer)
      avatarTextsContainer.insertAdjacentElement("afterbegin", threadUserAvatar)
      threadUserAvatar.insertAdjacentElement("afterbegin", userImg);
      threadUserAvatar.insertAdjacentElement("beforeend", userName)
      avatarTextsContainer.insertAdjacentElement("beforeend", threadTextsContainer);
      threadTextsContainer.insertAdjacentElement("afterbegin", threadTexts)
      threadTexts.insertAdjacentElement("afterbegin", category);
      threadTexts.insertAdjacentElement("beforeend", postTitle);
      threadTexts.insertAdjacentElement("beforeend", postContent);
      threadContent.insertAdjacentElement("beforeend", threadReaction);
      threadReaction.insertAdjacentElement("afterbegin", threadThumbsUp);
      threadThumbsUp.insertAdjacentElement("afterbegin", thumbsUpIcon);
      threadReaction.insertAdjacentElement("beforeend", threadThumbsDown);
      threadThumbsDown.insertAdjacentElement("afterbegin", thumbsDownIcon);
    }
  
    addEventListenerToChildrens();
    closeThreadPost();
  

  };


  export default expandedPostThread