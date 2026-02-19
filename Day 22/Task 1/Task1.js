let likes = 0;
let dislikes = 0;

function addLike(){
    likes++;

    document.getElementById("likeCount").textContent = likes;
}

function addDislike(){
    dislikes++;

    document.getElementById("dislikeCount").textContent = dislikes;
}