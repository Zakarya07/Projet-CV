/*          Top Button           */ 


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
  navDisplay()

};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

 let styleOfNav=" display: -webkit-box;display: -ms-flexbox; display: flex; height: 70px; position: fixed;width: 100%; z-index: 100; background-color: rgba(0, 0, 0, 0.91);";

//  function navDisplay(){
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("nav").style="display:none;";
//   } 
//   else {
//     document.getElementById("nav").style=`${styleOfNav}`;

//   }
// }

