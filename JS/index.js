let startLink = document.querySelector("#startLink");
let getStarted = document.querySelector("#getStarted");

startLink.addEventListener("click", navigategetstarted, false);
function navigategetstarted(e){
  getStarted.scrollIntoView({
    behavior:"smooth"
  });
}
let tipsLink = document.querySelector("#tipsLink");
let tips = document.querySelector("#tips");

tipsLink.addEventListener("click",navigatetips, false);
function navigatetips(e){
    tips.scrollIntoView({
        behavior:"smooth"
    })
}

let likeLink = document.querySelector("#likeLink");
let like = document.querySelector("#like");

likeLink.addEventListener("click",navigatelike, false);
function navigatelike(e){
    like.scrollIntoView({
        behavior:"smooth"
    })
}