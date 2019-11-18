function SunRotate() {
 	let sun;
	sundeg = sundeg + 0.1;
	sun = document.getElementById('sun');
	sun.style.transform = "rotate("+sundeg+"deg)";
	if (sundeg == 360) {
		sundeg = 0;
	}
	return sundeg;
}
setInterval(SunRotate, 50);

let sundeg;
sundeg = 0;