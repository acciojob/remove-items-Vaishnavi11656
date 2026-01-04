//your JS code here. If required.

const color = document.getElementById("colorSelect");
const button = document.querySelector("input[type='button']");

button.addEventListener("click", function(){
	const selectedIndex = color.selectedIndex;
	if(selectedIndex !== -1){
		color.remove(selectedIndex);
	}
});
