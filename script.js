var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonRandom1 = document.querySelector(".random1");
var initialBackgroundColor = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.textContent = initialBackgroundColor;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

addEventListener("click", function(event) {
	console.log(EventTarget);
})

// function setRandomColor(){
// 	var firstColor = '#' + (Math.random().toString(16)+ "000000").substring(2, 8);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);