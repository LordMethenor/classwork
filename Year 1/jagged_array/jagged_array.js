function convertTime (time) {
  time = time.split(':')
  if (time[1].slice(-3) === ' PM') {
    time[0] = parseInt(time[0]) + 12;
  }
  time[1] = time[1].slice(0, -3);
  time = parseInt(time[1]) + time[0] * 60;
  return time
}
var schedule = [
  ['morning', convertTime('6:30 AM'), convertTime('7:10 AM'), 'Brush teeth', 'Go to school', 'Eat breakfast', 'Walk the dog'],
  ['afternoon', convertTime('4:00 PM'), convertTime('7:30 PM'), 'Work on homework', 'Eat a snack', 'Walk the dog', 'Have dinner'],
  ['evening', convertTime('7:31 PM'), convertTime('9:30 PM'), 'Pack for school', 'Shower', 'Brush teeth', 'Walk the dog', 'Go to bed']
];
var input = prompt('What time is it? (ex: 7:30 PM)');
var time = convertTime(input);
var output = '';
schedule.forEach((item, i) => {
  if (item[1] <= time && item[2] >= time) {
    alert('The time is ' + input.slice(0, -3) + ' in the ' + item[0] + '.');
    output = 'You have to: ';
    for (var _i = 3; _i < item.length; _i++) {
      output = output + '\n' + (_i - 2) + '. ' + item[_i];
    }
  }
});
if (output === '' | output === 'You have to: ') {
  alert('You are currently free!');
} else {
  alert(output);
}
