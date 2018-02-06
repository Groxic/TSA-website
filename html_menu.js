//Script for writing the menu bar to the nav element of each page
var l=''; // directory prefix
//var check = document.getElementById('checker');

//if(!check) { //does this document have a specific element that makes it a doc not in a sub-folder of the main project folder?
//	l='../';
//}
document.write('<h1><a id="intro" href="'+l+'website.html" class="d-block p-3 text-center text-white bg-danger b4b">Avalon</a></h1>');
document.write('<header><nav class="navbar navbar-toggleable-md navbar-light bg-faded bd-navbar container w-100">');
// document.write('<a class="navbar-brand" href="'+l+'website.html">Home</a>');
document.write('<a class="navbar-brand" href="'+l+'avalon.html">Avalon</a>');
document.write('<a class="navbar-brand" href="'+l+'about_mast.html">About MAST</a>');
document.write('<a class="navbar-brand" href="'+l+'about_tsa.html">About TSA</a>');
document.write('<a class="navbar-brand" href="'+l+'about_avalon.html">About Us</a>');
document.write('</nav></header>');