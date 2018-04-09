// 5 friends
var friend = ['Daniel', 'Jose', 'Sean', 'Cameron', 'James'];
// 10 locations
var locations = ['Living Room', 'Dining Room', 'Kitchen', 'Laundry Room', 'Hallway', 'Master Bedroom', 'Master Bathroom', 'Guest Room', 'Bathroom', 'Study'];
// 20 weapons
var weapon = ['pen', 'pencil', 'notebook', 'chair', 'table', 'laptop', 'powercord', 'textbook', 'stool', 'pistol', 'knife', 'baseball bat', 'shotgun', 'sword', 'spoon', 'rock', 'stick', 'toothbrush', 'desk', 'bucket'];







//start loop


for (var i = 1; i < 100; i++) {
    var h3 = document.createElement('h3');
    var h3Text = document.createTextNode(`Accusation ${i}`);
    h3.appendChild(h3Text);
    document.body.appendChild(h3);
    h3.addEventListener('click', function(){
        var randomFriend = getRandomFriend();
        var randomLocations = getRandomLocations();
        var randomWeapon = getRandomWeapon();
        alert(`${this.innerHTML}: I accuse ${randomFriend}, with the ${randomWeapon} in the ${randomLocations}!`)
    })
    
};


function getRandomFriend() {
    var randomFriend = friend[Math.floor(Math.random()*friend.length)];
    return randomFriend;
   
};

function getRandomLocations() {
    var randomLocations = locations[Math.floor(Math.random()*locations.length)];
    return randomLocations;
};

function getRandomWeapon() {
    var randomWeapon = weapon[Math.floor(Math.random()*weapon.length)];
    return randomWeapon;
}