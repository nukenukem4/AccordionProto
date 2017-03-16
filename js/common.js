
var headings = document.getElementsByClassName("head");

function showPanel(e) {
	var heading = e.target;
	var panel = heading.nextElementSibling;
	panel.classList.toggle("show");

};

for(var i = 0; i < headings.length; i++) {
	headings[i].onclick = showPanel;
};

//var ali = document.getElementsByClassName("icon")
//
//function arrow(event) {
//	console.log(event.target);
//	event.target.classList.toggle("qwe");
//
//};
//
//
//
//for( var i = 0; i < ali.length; i++) {
//	ali[i].onclick = arrow;
//}

