//Revision 1

var university = "AMDT";
console.log(university);

// Create another array variable and input 3 names of your friends
var friends = ["friend1","friend2","friend3"];
console.log(friends[2]);

// Check if your friends name starts with “C”, if it does print “Yes” else print “Nope”
if (friends[2].startsWith("C")) {
    console.log("Yes");
} 
else {
    console.log("Nope");
}

// remove everything from the array
friends = [];

friends.push("Cyril");

if (friends[2].startsWith("C")) {
    console.log("Yes");
} 
else {
    console.log("Nope");
}


