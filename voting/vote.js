function initParty (item) {
  return [item, item.charAt(0)];
}
function initCandidate (item) {
  return [item[0], item[1], item[2]];
}

function initRace (item) {
  race = new Race(item);
  return race;
}

function addToRaces (item) {
  for (var i = 0; i < item[2].length; i++) {
    this.races[item[2][i]].addCandidate(item);
  }
}
function Race (name) {
  this.name = name;
  this.writeins = [];
  this.votes = 0;
  this.candidates = [];
  this.addCandidate = function (candidate) {
    this.candidates.push([candidate,0]);
  };
  this.vote = function (index) {
    this.candidates[index][1] ++;
    this.votes ++;
  };
  this.wVote = function (index) {
    this.writeins[index][1] ++;
    this.votes++;
  };
  this.getResults = function () {
    this.writeins.forEach(function(item){
      item[0] = [item[0], null];
    });
    var output = '';
    var all = this.candidates.concat(this.writeins);
    all.sort(function(a,b){return b[1]-a[1]});
    all.forEach(function (item) {
      output = output + item[0][0];
      if(item[0][1] !== null) {
        output = output +
        ' ('+parties[item[0][1]][1]+')';
      }
      if (this.votes > 0) {
        if (item[1] == 1){
          output = output +' - 1 vote ('+Math.round((item[1]/this.votes)*100)+'%)<BR>';
        }else{
          output = output +' - '+item[1]+' votes ('+Math.round((item[1]/this.votes)*100)+'%)<BR>';
        }
      }
      else{
        output = output +' - 0 Votes<BR>';
      }
    },this);
    return output;
  };
  this.downBallot = function (party) {
    for (var i = 0; i < this.candidates.length; i++) {
      if (this.candidates[i][0][1] == party) {
        this.vote(i);
        break;
      }
      
    }
  };
  this.writeIn = function (name) {
    for (var i = 0; i < this.candidates; i++) {
      if (this.candidates[i][0][0] == name) {
        this.vote(i);
        return;
      }
    }
    for (var i = 0; i < this.writeins; i++) {
      if (this.writeins[i][0] == name) {
        this.wVote(i);
        return;
      }
    }
    this.writeins.push([name,0]);
    this.wVote(this.writeins.length-1);
  };
}
function ID (admin, voters) {
  this.voters = voters;
  this.admin = admin;
  this.checkID = function (key) {
    if (key == this.admin){
      return true;
    }
    else{
      for (i = 0; i < this.voters.length; i++) {
        if (key == this.voters[i][1]) {
          var x = this.voters[i][0]
          this.voters.splice(i, 1);
          return x;
        }
      }
      return null;
    }
  };
}
function SETUP () {
  parties = ['Democratic Party','Republican Party','Libertarian Party', 'Independent'];
  //[[name]...]
  candidates = [['Donald Trump', 1, [0]],['Bernie Biden',0,[0]], ['Vermin Supreme',2,[0]], ['Ted Cruz',1,[2]], ["Beto O'Rourke",0,[2]],['John Cornyn',1,[1]],["Satan",3,[1]]];
  //[[name,party index, [race index...]]...]
  races = ['President','Senate Seat 1','Senate Seat 2'];
  //[name...]
  displayMax = 5;
  NEW(races,parties,candidates);
}
function NEW (inRaces,inParties,inCandidates) {
  parties = inParties.map(initParty);
  candidates = inCandidates.map(initCandidate);
  races = inRaces.map(initRace);
  candidates.forEach(addToRaces);
  start();
}
function partyLine (form){
    var selected;
    for (i = 0; i < parties.length-1; i++) {
      if (form.parties[i].checked) {
        selected = i;
        break;
      }
    }
    if (selected === null){
      alert('No party selected. Please try again, or change your voting method.');
      return null;
    }else{
      test = confirm("Submit your ballot? This action is final.");
      if (test === true){
        races.forEach(function(item){item.downBallot(selected)});
      }else{
        return null;
      }
    }
    document.getElementById("ballot").innerHTML = null;
    document.getElementById("heading").innerHTML = "Your ballot has been recorded.";
    start();
}
function manualLine (form){
  var selected;
  var empty = 0;
  var votes = [];
  for (var u = 0; u < races.length; u++) {
    selected = null;
    for (var i = 0; i < eval('form.race'+u+'.length')-1; i++) {
      if (eval('form.race'+u+'['+i+'].checked')) {
        selected = i;
        break;
      }
    }
    if (selected === null) {
      if(eval('form.race'+u+'[form.race'+u+'.length-1].checked')) {
        votes.push([u,form.other[u].value]);
      }else{
        votes.push([u,null]);
        empty ++;
      }
    }else{
      votes.push([u,selected]);
    }
  }
  if (empty === 0) {
    test = confirm("Submit your ballot? This action is final.");
    return testVote(test,votes);

  }
  else if (empty === races.length){
    alert('No candidates selected. Please try again, or change your voting method.');
    return null;
  }else {
    test = confirm("Some races are still empty. Are you sure you want to make your final submission?");
    return testVote(test,votes);
  }
}
function testVote (test,votes) {
  if (test === true){
    votes.forEach(function (item){
      if (item[1] !== null){
        if (typeof item[1] == 'string'){
          races[item[0]].writeIn(item[1]);
        }else{
          races[item[0]].vote(item[1]);
        }
      }
    });
  }else{
    return null;
  }
  document.getElementById("ballot").innerHTML = null;
  document.getElementById("heading").innerHTML = "Your ballot has been recorded.";
  start();
}
function start () {
  document.getElementById("ballot").innerHTML =
  '<FORM NAME="myform" ACTION="" METHOD="GET">Enter your key: <BR>'+
  '<INPUT TYPE="password" NAME="inputbox" VALUE=""><P>'+
  '<INPUT TYPE="button" NAME="button" Value="Submit" onClick="verify(this.form.inputbox.value)">'+
  '</FORM>';
}
function verify (key) {

  result = identify.checkID(key);
  if (result === null) {
    alert("Incorrect passkey. Please try again.");
  }else if (result === true) {
    document.getElementById("heading").innerHTML = null;
    document.getElementById("ballot").innerHTML = null;
    admin();
  }else{
    document.getElementById("heading").innerHTML = null;
    document.getElementById("ballot").innerHTML = null;
    voter(result);
    
  }
}
function voter (name) {
  document.getElementById("heading").innerHTML = '<h2>Welcome, ' + name + '!</h2>' +
  '<label for="method">Voting method: </label>'+
  '<select id="method" onchange="changeMethod()">'+
  '<option selected value="0">Manual (default)</option>'+
  '<option value="1">Party</option>'+
  '</select>';
  changeMethod();
}
function changeMethod () {
  var x = document.getElementById("method").value;
  if (x == '0') {
    manualSetup();
  }else if (x == '1'){
    partySetup();
  }
  
}
function partySetup() {
  output = '<FORM NAME="partyVote" ACTION="" METHOD="GET">';
  if (parties.length-1 < displayMax){
    max = parties.length-1;
  }else {
    max = displayMax;
  }
  for (var i = 0; i < max; i++) {
    output = output +
    '<label for="'+i+'">'+parties[i][0]+'</label>'+
    '<INPUT TYPE="radio" NAME="parties" Value="'+i+'" onClick=0><BR>';
  }
  output = output +
  '<BR><INPUT TYPE="button" NAME="button" Value="Submit" onClick="partyLine(partyVote)"> <INPUT TYPE="button" NAME="button" Value="Deselect" onClick="changeMethod()"><BR> <BR>'+
  '</FORM> <br'+
  'By pressing submit, the preferred candidate of the selected party will recieve your vote in all competing races.';
  document.getElementById("ballot").innerHTML = output;
}
function manualSetup() {
  output = '<FORM NAME="manualVote" ACTION="" METHOD="GET">';
  for (var u = 0; u < races.length; u++) {
    output = output + '<b>'+races[u].name+'</b><BR>';
    if (races[u].candidates.length < displayMax){
      max = races[u].candidates.length;
    }else {
      max = displayMax;
    }
    for (var i = 0; i < max; i++) {
      output = output +
      '<label for="'+i+'">'+races[u].candidates[i][0][0]+' ('+parties[races[u].candidates[i][0][1]][1]+')</label>'+
      '<INPUT TYPE="radio" id = "'+i+'"NAME="race'+u+'"Value="'+i+'" onClick=0><BR>';
    }
    output = output + '<label for="written">Write-in</label>'+
    '<INPUT TYPE="radio" id = "written" NAME="race'+u+'" Value=""><input type="text" name="other" /> <BR>';
  }
  output = output +
  '<INPUT TYPE="button" NAME="button" Value="Submit" onClick="manualLine(manualVote)"><INPUT TYPE="button" NAME="button" Value="Deselect" onClick="changeMethod()"> <BR><BR>'+
  '</FORM>';
  document.getElementById("ballot").innerHTML = output;
}
function admin () {
  var warning = confirm("WARNING: Confirming this prompt will end voting and display the results.")
  output = "";
  if (warning === true) {
    document.getElementById("heading").innerHTML = "<h3>Results</h3>"
    for (var u = 0; u < races.length; u++) {
      a = races[u].getResults();
      output = output + '<b>' +races[u].name+'</b> <BR>'
      output = output + a;
    }
    document.getElementById("ballot").innerHTML = output;
  }else{
    start();
  }
}
const identify = new ID ('r00t', [['Joe Mama', 'password'], ['Jane Doe', 'numbersandsymbols'], ['Barack Obama','betterthanTrump'], ['Peter Parker', 'spooderman'],['John Wayne', 'imbatman']]);
var parties = [];
var races = [];
var candidates = [];
var displayMax;
SETUP();
