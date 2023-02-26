console.log('process.env.USERNAME: ', process.env.USERNAME);

var friends = ["friend1","friend2","friend3","friend4","friend5"];
console.log(friends);
friends.push("AR");
console.log(friends);
friends.pop();
console.log(friends);

//object

var friends2 = [{
    fname: "Jhon",
    lname: "Wick",
    age: 36

},
{
    fname: "Abdur",
    lname: "rahman",
    age: 20
}
]
console.log(friends2[1].lname);

// Keyword - for

for(var i = 0; i < 10; i++){
    console.log('-----------');
    console.log('hello world');
    console.log('-----------');
}
var randomArray = [1,2,3,4,5,6,7,8,9,10];
console.log(randomArray);

for (var i = 0; i < randomArray.length; i++){
    console.log(randomArray[i]);
}

// var str = 'AMDT';
// for (var i = 0; i < 1000; i++) {
// str += 'a';
// }
// console.log(str);