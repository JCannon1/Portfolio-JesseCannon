// File name: app.js 
// Author's name: Jesse Cannon 
// Web site name: http://jessecannon-miniportfolio.azurewebsites.net/index.html 
// File description: main page JavaScript for my mini portfolio 

// home page JavaScript 

console.log("App Started");

// declare/ initialize firstHeading variable 
var firstHeading = document.getElementById("firstHeading");

console.log(firstHeading.textContent);

// connecting myContent to my index.html page 
var FirstParagraph = document.getElementById("FirstParagraph");

var myContent = "Hello, my name is Jesse Cannon and my goal of this portfolio site is to show you all of my web design skills I have acquired from my time at Georgian College. My Projects page will display all of the top pieces of work I have done so far for visuals. While the Contact page will ask you for your contact information. I hope my page is of great use to you. Jesse Cannon.";

FirstParagraph.textContent = myContent;

// added a second paragraph section where my image went
var SecondParagraph = document.getElementById("SecondParagraph");
var myHTMLContent = "<h2>About Me</h2>";

SecondParagraph.innerHTML = myHTMLContent;
