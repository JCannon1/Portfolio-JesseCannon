// File name: contact.js 
// Author's name: Jesse Cannon 
// Web site name: http://jessecannon-miniportfolio.azurewebsites.net/projects.html 
// File description: contact page JavaScript for my mini portfolio 

// project page JavaScript

console.log("App Started");

var firstHeadingProjects = document.getElementById("firstHeadingProjects");

console.log(firstHeadingProjects.textContent);

// created variable for "Project 1" text content 
var FirstProject = document.getElementById("FirstProject");
var myContent = "This first project is one of my favourites as it has a unique design to it and displays my ability to grab data from a database and display it in a table. This project also demonstrates my ability to create working register and login applications as well as adding in authorization and authentication to my pages. I also like the use of the background image to add to the overall theme.";
FirstProject.textContent = myContent;

// created variable for "Project 2" text content 
var SecondProject = document.getElementById("SecondProject");
var myHTMLContent = "My second project shows my design skills with many features such as Bootstrap carousel, accordian and dropdowns.There are many interactive features on this page that were made all form HTML, CSS and JavaScript.";
SecondProject.innerHTML = myHTMLContent;

// created variable for "Project 3" text content 
var ThirdProject = document.getElementById("ThirdProject");
var myThirdContent = "This next project is more of a design piece to show my knowledge of typography and layout. The purpose of this project was to take an image and recreate a movie poster from just the background image.";
ThirdProject.textContent = myThirdContent;

// created variable for "Project 4" text content 
var ThirdProject = document.getElementById("FourthProject");
var myThirdContent = "This last project shows my ability with CSS in order to design for mobile first so the page can effectively be manipulated into different sized formats. As the page dimensions become smaller, the image shrinks to fit the size and a hamburger navigation icon takes over for the original navbar.";
ThirdProject.textContent = myThirdContent;

