function Meeting (name, link, password) {
    this.name = name;
    this.link = link;
    this.password = password;
}
function Schedule (name) {
    this.name = name;
    this.entries = [[0,1],[1440,null]];
    //add starter
    this.addMeeting = function (meeting, time) {
        index = 0;
        var lastIndex;
        while (true){
            entry = this.entries[index];
            entryTime = entry[0];
            if (time > entryTime) {
                lastIndex = index;
                index = entry[1];
            }else if (time < entryTime) {
                this.entries[lastIndex][1] = this.entries.length;
                this.entries.push([time, index, meeting]);
                return;
            }else{
                //warning...will overwrite old meeting
                this.entries[index][2] = meeting;
                return;
            }
        }
    }
    this.findMeeting = function (time) {
        index = 0
        while (true) {
            entry = this.entries[index];
            entryTime = entry[0];
            if (time > entryTime) {
                index = entry[1];
            }else if (time < entryTime) {
                return;
            }else{
                return entry[2];
            }
        }
    }
}
function test () {
    var notify;
    if (!window.Notification) {
        console.log('Browser does not support notifications.');
        notify = false;
    } else {
        // check if permission is already granted
        if (Notification.permission === 'granted') {
            notify = true;
        } else {
            // request permission from user
            Notification.requestPermission().then(function(p) {
               if(p === 'granted') {
                   // show notification here
               } else {
                   console.log('User blocked notifications.');
                   notify = false;
               }
            }).catch(function(err) {
                console.error(err);
            });
        }
    }
    school = new Schedule ('A day');
    meetings = [];
    test = new Meeting ('Spanish','https://us04web.zoom.us/j/5160025555?pwd=SEJJZmpGbkNaSG9meWIBK1dpTTZYZz09','038832');
    school.addMeeting(test, 16*60+29);
    first = new Meeting('English','https://zoom.us/j/99755115418','Phillips');
    second = new Meeting('HOTA', 'https://zoom.us/j/92715886178', '469939');
    third = new Meeting('CS', 'https://zoom.us/j/4224978034?pwd=SVZpZFczdERoK08rWUFhb3o1SHMyQT09', '');
    fourth = new Meeting('Biology', 'https://zoom.us/j/95972463627?pwd=VjM1bFJxaTR6enB1dWZKTVRRM0RlUT09','');
    school.addMeeting(first, 7*60+55);
    school.addMeeting(second, 9*60+30);
    school.addMeeting(third, 11*60);
    school.addMeeting(fourth, 13*60+15);
    check = setInterval(() => {
        clock = new Date();
        time = clock.getHours()*60 + clock.getMinutes();
        currentMeeting = school.findMeeting(time);
        if (currentMeeting != null) {
            if (currentMeeting.password != null) {
                var notify = new Notification(currentMeeting.password);
                document.write(currentMeeting.password);
            }
            window.open(currentMeeting.link);
        }
    }, 60000);
}
test();
