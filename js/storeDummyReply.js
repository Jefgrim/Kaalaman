 const storeDummReply = () => {
    let replyList = localStorage.getItem("replyList");

    if (replyList == null) {
      let replyList = [];
  
      let dummyReply = {
        replyId: "reply1",
        replyToId: "post1",
        replyToText: "Dummy Text",
        replyText: "This is a dummy reply for Post1",
        userName: "Dummy Replier 1",
      };
  
      localStorage.setItem("reply", JSON.stringify(dummyReply));
      localStorage.setItem("replyId", 1);
      replyList.push(dummyReply);
      localStorage.setItem("replyList", JSON.stringify(replyList));
  
      let dummyReply2 = {
        replyId: "reply2",
        replyToId: "post2",
        replyToText: "Dummy Text 2",
        replyText: "This is a dummy reply for Post2",
        userName: "Dummy Replier 2",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply2));
      localStorage.setItem("replyId", 2);
      replyList.push(dummyReply2);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply3 = {
        replyId: "reply3",
        replyToId: "post2",
        replyToText: "Dummy Text 3",
        replyText: "This is a dummy reply for Post2",
        userName: "Dummy Replier 3",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply3));
      localStorage.setItem("replyId", 3);
      replyList.push(dummyReply3);
      localStorage.setItem("replyList", JSON.stringify(replyList));

      let dummyReply4 = {
        replyId: "reply3",
        replyToId: "post3",
        replyToText: "Dummy Text 4",
        replyText: "This is a dummy reply for Post3",
        userName: "Dummy Replier 4",
      };

      localStorage.setItem("reply", JSON.stringify(dummyReply4));
      localStorage.setItem("replyId", 4);
      replyList.push(dummyReply4);
      localStorage.setItem("replyList", JSON.stringify(replyList));
    }
 }

 export default storeDummReply