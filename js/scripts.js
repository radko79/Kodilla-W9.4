// scripts.js

var rows = prompt('Enter number of rows');

document.write('Nie umiem wywolywac funkcji.<br><br>');

for (var i = 1; i <= rows; i++) {
	for (var j = 1; j <= i; j++) {
		document.write('*');
	}
	document.write('<br>');
}

document.write('<br>');
document.write('<br>');

for (var i = 1; i <= rows; i++) {
	for (var j = i; j <= rows; j++) {
		document.write('&nbsp;&nbsp;');
	}
	for (var j = 1; j <= (2*i-1); j++) {
		document.write('*');
	}
	document.write('<br>');
}


