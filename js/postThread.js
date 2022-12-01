const postThread = () => {
  let postList = JSON.parse(localStorage.getItem("postList"));
  if (postList == null) {
    postList = [];
  }
  let n = localStorage.getItem("postId");
  n = ++n;

  let thread = {
    selectedCategory: document.querySelector("#selectCategory").value,
    titleValue: document.querySelector("#titleInp").value,
    postText: document.querySelector("#threadInp").value,
    postId: n,
  };

  localStorage.setItem("post", JSON.stringify(thread));
  localStorage.setItem("postId", n);
  postList.push(thread);
  localStorage.setItem("postList", JSON.stringify(postList));

  let threadContentContainer = document.querySelector(
    ".threadContentContainer"
  );

  let threadContent = document.createElement("div");
  threadContent.classList = `threadContent ${thread.selectedCategory}`;

  let threadImage = document.createElement("div");
  threadImage.classList = "thread-Image";

  let userImg = document.createElement("img");
  userImg.src = ".//images/Avatar Users2_1.png";
  userImg.classList = "avatar";

  let threadTitle = document.createElement("div");
  threadTitle.classList = "threadTitle";

  let postTitle = document.createElement("span");
  postTitle.style.fontSize = "larger";
  postTitle.textContent = thread.titleValue;

  let category = document.createElement("span");
  category.textContent = thread.selectedCategory;

  let postContent = document.createElement("span");
  postContent.textContent = thread.postText;

  let threadLikes = document.createElement("div");
  threadLikes.classList = "threadLikes";
  
  let thumbsUp = document.createElement("div");
  thumbsUp.classList ="thumbs-up";
  
  let thumbsUpIcon = document.createElement("i");
  thumbsUpIcon.classList ="fa-regular fa-thumbs-up";

  let thumbsDown = document.createElement("div");
  thumbsDown.classList = "thumbs-down";

  let thumbsDownIcon = document.createElement("i")
  thumbsDownIcon.classList = "fa-regular fa-thumbs-down";

  threadContentContainer.insertAdjacentElement("afterbegin", threadContent);
  threadContent.insertAdjacentElement("afterbegin", threadImage);
  threadImage.insertAdjacentElement("afterbegin", userImg);
  threadContent.insertAdjacentElement("beforeend", threadTitle);
  threadTitle.insertAdjacentElement("afterbegin", postTitle);
  threadTitle.insertAdjacentElement("beforeend", category);
  threadTitle.insertAdjacentElement("beforeend", postContent);
  threadContent.insertAdjacentElement("beforeend", threadLikes);
  threadLikes.insertAdjacentElement("afterbegin",thumbsUp);
  thumbsUp.insertAdjacentElement("afterbegin",thumbsUpIcon);
  threadLikes.insertAdjacentElement("beforeend",thumbsDown);
  thumbsDown.insertAdjacentElement("afterbegin",thumbsDownIcon);
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
      postId: 1,
    };

    localStorage.setItem("post", JSON.stringify(thread));
    localStorage.setItem("postId", 1);
    postList.push(thread);
    localStorage.setItem("postList", JSON.stringify(postList));

    let thread2 = {
        selectedCategory: "Technology",
        titleValue: "Dummy Title 2",
        postText: "Dummy Text 2",
        postId: 2,
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

    let threadImage = document.createElement("div");
    threadImage.classList = "thread-Image";

    let userImg = document.createElement("img");
    userImg.src = ".//images/Avatar Users2_1.png";
    userImg.classList = "avatar";

    let threadTitle = document.createElement("div");
    threadTitle.classList = "threadTitle";

    let postTitle = document.createElement("span");
    postTitle.style.fontSize = "larger";
    postTitle.textContent = parsedPostList[i].titleValue;

    let category = document.createElement("span");
    category.textContent = parsedPostList[i].selectedCategory;

    let postContent = document.createElement("span");
    postContent.textContent = parsedPostList[i].postText;

    let threadLikes = document.createElement("div");
    threadLikes.classList = "threadLikes";


    let thumbsUp = document.createElement("div");
    thumbsUp.classList ="thumbs-up";
    
    let thumbsUpIcon = document.createElement("i");
    thumbsUpIcon.classList ="fa-regular fa-thumbs-up";
  
    let thumbsDown = document.createElement("div");
    thumbsDown.classList = "thumbs-down";
  
    let thumbsDownIcon = document.createElement("i")
    thumbsDownIcon.classList = "fa-regular fa-thumbs-down";



    threadContentContainer.insertAdjacentElement("afterbegin", threadContent);
    threadContent.insertAdjacentElement("afterbegin", threadImage);
    threadImage.insertAdjacentElement("afterbegin", userImg);
    threadContent.insertAdjacentElement("beforeend", threadTitle);
    threadTitle.insertAdjacentElement("afterbegin", postTitle);
    threadTitle.insertAdjacentElement("beforeend", category);
    threadTitle.insertAdjacentElement("beforeend", postContent);
    threadContent.insertAdjacentElement("beforeend", threadLikes);
    threadLikes.insertAdjacentElement("afterbegin",thumbsUp);
    thumbsUp.insertAdjacentElement("afterbegin",thumbsUpIcon);
    threadLikes.insertAdjacentElement("beforeend",thumbsDown);
    thumbsDown.insertAdjacentElement("afterbegin",thumbsDownIcon);
  }
};

export { postThread, displayThread };
