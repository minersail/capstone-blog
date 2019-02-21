let locations = [
	{left: "-120px", top: "0px"},
	{left: "-60px", top: "120px"},
	{left: "60px", top: "120px"},
	{left: "120px", top: "0px"},
]

let toggled = false;

function toggleMenu() {
	for (let i = 0; i < document.getElementsByClassName("menu-button").length; i++) {
		let el = document.getElementsByClassName("menu-button")[i];

		if (toggled) {
			el.style.left = "";
			el.style.top = "";
		}
		else {
			el.style.left = locations[i].left;
			el.style.top = locations[i].top;
		}
	}

	toggled = !toggled;
}