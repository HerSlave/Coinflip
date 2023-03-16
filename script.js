var flipButton = document.getElementById("flip-button");
var result = document.getElementById("result");

flipButton.addEventListener("click", function() {
	var randomNumber = Math.floor(Math.random() * 2);
	if (randomNumber === 0) {
		result.innerHTML = "Heads!";
	} else {
		result.innerHTML = "Tails!";
	}
});
