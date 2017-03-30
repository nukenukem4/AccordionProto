
var headings = document.getElementsByClassName("head");
function showPanel(e) {
	var heading = e.target;
	var panel = heading.parentNode.parentNode.nextElementSibling;
    var arrow = heading.parentNode.parentNode.getElementsByClassName("icon")[0];
    arrow.classList.toggle("rotate");
    panel.classList.toggle("show");
};
for(var i = 0; i < headings.length; i++) {
	headings[i].onclick = showPanel;
};