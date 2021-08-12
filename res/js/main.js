//First checking js is linked successful or not
console.log("js linking successful");

function myNavToggle()
{
  // NavBar Icon 
  let x = document.getElementById("menu-bar");
  // Menu that wrapping the list of nav link
  let menu = document.getElementById("menu");
  //condtion checking for nav toggle
  if(x.classList.contains("fa-bars")){
    x.classList.toggle("fa-times"); // fa-times means cross icon
    x.classList.remove("fa-bars");  // fa-bars means hamburger icon
    menu.style.display = "block";
  }else if (x.classList.contains("fa-times")) {
    x.classList.toggle("fa-bars");
    x.classList.remove("fa-times");
    menu.style.display = "none";
  }
  // Now here check if any nav link is clicked or not 
  // If clicked the menu will collpase means that menu will close
  // "".js-close" class is added on every link of nav 
  let menuLinks = document.querySelectorAll(".js-close");
  menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", navToggle);
     }
  )
}
// Added date in footer
function crDate()
{
  // crDate means CopyRights Date
  let d = new Date(),
      fromDateElement = document.getElementById("fromDate"),
      toDateElement = document.getElementById("toDate"),
      hyphen = document.getElementById("hyphen");
  let d1 = d.getFullYear(),
      dt1 = fromDateElement.innerHTML,
      dt2 = toDateElement.innerHTML;
  // First hiding hyphen 
  hyphen.innerHTML = "";
  
  if (d1 != dt1) {
    hyphen.innerHTML = "-";
    toDateElement.innerHTML = d1;
  }
}