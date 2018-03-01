//Script for writing the menu bar to the nav element of each page
var l=''; // directory prefix

document.write('<h1><a id="intro" href="'+l+'avalon.html" class="brand d-block p-3 text-center bg-warning b4b">Avalon</a></h1>');
document.write('<header class="sticky-top"><nav class="navbar navbar-light" id="nav_menu" role="navigation">');
document.write('<a class="navbar-brand" href="'+l+'avalon.html">Avalon</a>');
document.write('<a class="navbar-brand" href="'+l+'about_mast.html">About MAST</a>');
document.write('<a class="navbar-brand" href="'+l+'about_tsa.html">About TSA</a>');
document.write('<a class="navbar-brand" href="'+l+'about_us.html">About Us</a>');
document.write('</nav></header>');
window.onscroll = function() {myFunction()};

// add jQuery fade-in to menu
function myFunction() {
    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
	height = document.getElementById("intro").offsetHeight;
	if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
	document.getElementById("nav_menu").className = "navbar navbar-light bg-bar bg-warning";
    } else {
	document.getElementById("nav_menu").className = "navbar navbar-light";
    }
}