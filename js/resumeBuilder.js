/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $('#main').append('Heather Conley');

 // var awesomeThoughts = "My name is Heather and I am awesome.";
 // console.log(awesomeThoughts);



 // var funThoughts = awesomeThoughts.replace('awesome', 'fun');

 // console.log(funThoughts);
 // $('#main').append(funThoughts);
var name = "Heather Conley";
var formattedName = HTMLheaderName.replace("%data%", "Heather Conley");

var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role;

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
