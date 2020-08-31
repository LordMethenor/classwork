var a = [];
a[0] = 'First Item';
a[1] = 'Second Item';
a[2] = 'Third Item';
a[-1] = 'Fourth Item';
a['n'] = 'Fifth Item';
a['x'] = 'Sixth Item';
/*
output = '<strong>More Values</strong><br /><b>Contents: </b><br /><ul>';
for (var x in a) {
  output = output + "<li>" + x + " : " + a[x] + '</li>';
}
output = output + '</ul><b>Length: </b>'+ a.length;
document.getElementById('values').innerHTML = output;
*/
console.log(a);
console.log(a.length);