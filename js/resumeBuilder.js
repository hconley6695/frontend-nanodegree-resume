/*
This is empty on purpose! Your code to build the resume will go here.
 */

var funThoughts = "Hi, my name is " + "Heather, " + "I am fun.";
console.log(funThoughts);

 var awesomeThoughts = funThoughts.replace('fun', 'awesome');
 console.log(awesomeThoughts);

 // $('#main').append(awesomeThoughts);

var name = "Heather Conley";
 var formattedName =  HTMLheaderName.replace('%data%', name);

var role = "Junior Front End Developer";
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'ReactJS'];

var bio = {
    'name': 'Heather Conley',
    'role': 'Junior Front End Developer',
    'contact_information': {
        'email': 'hconley6695@gmail.com',
        'mobile': '678-697-3248'
        },
    'pictureURL': 'http://placehold.it/350x350',
    'welcomeMsg': 'Hello, welcome to my page!',
    'skills': skills
}


$('#main').append(bio.name);
$('#main').append(bio.role);
$('#main').append(bio.contact_information);
$('#main').append(bio.pictureURL);
$('#main').append(bio.welcomeMsg);
$('#main').append(bio.skills);










/////////////////////////////
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var letter = s[1].toUpperCase();
    console.log(letter);  

    var string = s.slice(2, s.length);
    console.log(string);

    var newStr = letter + string;
    console.log(newStr);
};

udacityizer(s);

/////////////////////
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];

    var last = _array[_array.length - 1];
    var increaseLast = last + 1;
    _array.pop();
    _array.push(increaseLast);
    newArray = _array;

    return newArray;

};

console.log(incrementLastArrayElement(sampleArray));


// //////////////////

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;

    var array = finalName.split(" ");
    var firstName = array[0];
    var changeToLow = firstName.toLowerCase();
    var separate = changeToLow.split('');
    var upperFirstLetter = separate[0].toUpperCase();
    separate.shift();
    separate.unshift(upperFirstLetter);
    firstName = separate.join('');

    var lastName = array[1];
    lastName = lastName.toUpperCase();

    finalName = firstName + " " + lastName;

    

    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));





