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

    var getAccusation = createAccusation(i);

    h3.addEventListener('click', getAccusation);
    
};

function createAccusation(i) {
    var randomFriend = friend[Math.floor(i%5)];
    var randomLocations = locations[Math.floor(i%10)]
    var randomWeapon = weapon[Math.floor(i%20)]
    function displayAlert() {
        alert(`${this.innerHTML}: I accuse ${randomFriend}, with the ${randomWeapon} in the ${randomLocations}!`)
    }
    return displayAlert;
}

function getRandomFriend() {
    var randomFriend = friend[Math.floor(i%20)]
    return randomFriend;
   
};

function getRandomLocations() {
    var randomLocations = locations[Math.floor(i%10)];
    return randomLocations;
};

function getRandomWeapon() {
    var randomWeapon = weapon[Math.floor(i%5)];
    return randomWeapon;
}