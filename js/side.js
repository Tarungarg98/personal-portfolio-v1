var x = window.matchMedia("(max-width: 767px)")



function openNav() {
	if (x.matches){
	  document.getElementById("mySidebar").style.width = "100vw";
	}

  }

function closeNav() {

  document.getElementById("mySidebar").style.width = "0";

  
}

function closeNavMobile() {
	if (x.matches){
		  document.getElementById("mySidebar").style.width = "0";
	}
}

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
    // // coll[i].classList.toggle("active");
  // coll[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    // var content = this.nextElementSibling;
    // if (content.style.maxHeight){
      // content.style.maxHeight = null;
    // } else {
      // content.style.maxHeight = content.scrollHeight + "px";
    // } 
  // });
// }