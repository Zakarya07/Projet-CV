/*          Top Button           */ 


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
  navDisplay()

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


// Ajout de la date (mois/année) dans le copyright du Footer dynamiquement 
let copyrightDate=document.querySelector(".copyrightDate");

let date= new Date();
let month=date.getMonth()+1;
let currentYear=date.getFullYear();
switch (month) {
  case 1:
    month="Janvier"
    break;
  case 2:
    month="Février"
    break;
  case 3:
    month="Mars"
    break;
  case 4:
    month="Avril"
    break;
  case 5:
    month="Mai"
    break;
  case 6:
    month="Juin"
    break;
  case 7:
    month="Juillet"
    break;
  case 8:
    month="Août"
    break;
  case 9:
    month="Septembre"
    break;
  case 10:
    month="Octobre"
    break;
  case 11:
    month="Novembre"
    break;
  case 12:
    month="Décembre"
    break;

  default:
  month;
    break;
}

copyrightDate.innerHTML=` ${month} ${currentYear}`;
// alert(month);

