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