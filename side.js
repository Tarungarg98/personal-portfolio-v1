var x = window.matchMedia("(max-width: 600px)")
Nav()
function Nav() {
	if (x.matches){
	  document.getElementById("navigate").value="☰";
	}
	else{
	document.getElementById("navigate").value="☰ Navigate";
	}
  }



function openNav() {
	if (x.matches){
	  document.getElementById("mySidebar").style.width = "100vw";
	}
	else{
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
	}
  }

function closeNav() {

  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  
}

function closeNavMobile() {
	if (x.matches){
		  document.getElementById("mySidebar").style.width = "0";
	}
}