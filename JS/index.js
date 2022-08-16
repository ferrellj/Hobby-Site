
let returnLink2 = document.querySelector("#returnLink2");
let secondaryHeader = document.querySelector(".secondaryHeader");

returnLink2.addEventListener("click", navigatesecdonaryHeader, false);
function navigatesecdonaryHeader(e){
  secondaryHeader.scrollIntoView({
    behavior:"smooth"
  });
}


let returnLink = document.querySelector("#returnLink");
let secondaryNav = document.querySelector(".secondaryNav");

returnLink.addEventListener("click",navigatesecondaryNav,false);
function navigatesecondaryNav(e){
  secondaryNav.scrollIntoView({
    behavior:"smooth"
  });
}

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

