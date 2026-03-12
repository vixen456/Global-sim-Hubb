window.onload = function() {

if(sessionStorage.getItem("visited")){

document.getElementById("intro").style.display = "none";
document.getElementById("main").style.display = "block";

}else{

sessionStorage.setItem("visited", "true");

setTimeout(function(){

document.getElementById("intro").style.display = "none";
document.getElementById("main").style.display = "block";

},5000);

}

}