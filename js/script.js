/*          Top Button           */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  animateArticle();
  animateProgressBar();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").style.display = "flex";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*          DATE          */

// Add of the date (month/year) dynamically in the footer's copyright
let copyrightDate = document.querySelector(".copyrightDate");

let date = new Date();
let month = date.getMonth() + 1;
let currentYear = date.getFullYear();
switch (month) {
  case 1:
    month = "Janvier"
    break;
  case 2:
    month = "Février"
    break;
  case 3:
    month = "Mars"
    break;
  case 4:
    month = "Avril"
    break;
  case 5:
    month = "Mai"
    break;
  case 6:
    month = "Juin"
    break;
  case 7:
    month = "Juillet"
    break;
  case 8:
    month = "Août"
    break;
  case 9:
    month = "Septembre"
    break;
  case 10:
    month = "Octobre"
    break;
  case 11:
    month = "Novembre"
    break;
  case 12:
    month = "Décembre"
    break;

  default:
    month;
    break;
}
copyrightDate.innerHTML = ` ${month} ${currentYear}`;

/*         SOCIALS CONTAINER SHOW TOGGLE          */

// get the arrow icon container
let arrowShow = document.querySelector(".socials_container > .arrow_container");
// get the arrow icon
let arrowShowIcon = document.querySelector(".socials_container > .arrow_container i");
// get the social container
let socials_container = document.querySelector(".socials_container");

// add click event 
arrowShow.addEventListener("click",()=>{
  // toggle the socials_container_active class to the socials_container 
  socials_container.classList.toggle("socials_container_active");
  // toggle the arrow_active class to the arrow icon
  setTimeout(() => {
    arrowShowIcon.classList.toggle("arrow_active");
  }, 500);
})

/*  ARTICLES TITLES MOVE */

// get all the articles
let articles = document.querySelectorAll("article");
// get the height of the window
// (we use it for the article and the progress bars too)
let windowHeight = window.innerHeight;

function animateArticle() {
  articles.forEach((article,index)=>{
    index+=1;
    let articlePosition = Math.floor(article.getBoundingClientRect().top / .33);
    
    if(articlePosition < windowHeight){
      let badge = article.querySelector(".inner > span");
      let experienceName = article.querySelector(".inner > .title_container h1");
      let societyName = article.querySelector(".inner > .title_container h2");
      badge.classList.add("badge_active");
      experienceName.classList.add("experience_name_active");
      societyName.classList.add("society_name_active");
    }
    if(articlePosition > windowHeight){
      let badge = article.querySelector(".inner > span");
      let experienceName = article.querySelector(".inner > .title_container h1");
      let societyName = article.querySelector(".inner > .title_container h2");
      badge.classList.remove("badge_active");
      experienceName.classList.remove("experience_name_active");
      societyName.classList.remove("society_name_active");
    }
  })  
}

/*  SKILLS PROGRESS BAR FILL ANIMATION */

const progress_bars = document.querySelectorAll(".knowledge-item");

function animateProgressBar() {
  progress_bars.forEach((progress_bar,index)=>{
    index+=1;
    let progress_bar_position = Math.floor(progress_bar.getBoundingClientRect().bottom * 1.075);
    if (progress_bar_position < windowHeight) {
      let progress_bar_value = progress_bar.querySelector(".progress-bar > span");
      progress_bar_value.classList.add("progress-value");
   }
  })
}


