toggle();
window.onresize = function() {
	toggle();
}
function toggle() {
	if (window.innerWidth < 480 && window.innerHeight < 800) {
		document.getElementById('generated-table').style.display = "none";
	} else {
		document.getElementById('generated-table').style.display = "block";
	}
}