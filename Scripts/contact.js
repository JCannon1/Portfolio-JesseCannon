// File name: contact.js 
// Author's name: Jesse Cannon 
// Web site name: http://jessecannon-miniportfolio.azurewebsites.net/contact.html 
// File description: contact page JavaScript for my mini portfolio 

// contact page JavaScript 

console.log("App Started");

var firstHeadingContact = document.getElementById("firstHeadingContact");

console.log(firstHeadingContact.textContent);

// connecting myContent to my contact.html page 
var FirstContactParagraph = document.getElementById("FirstContactParagraph");

var myContent = "If you would like to contact me for further information of my work please feel free to reach me by leaving your Name, Number and a short message of what you would like to discuss."

FirstContactParagraph.textContent = myContent;

// create a reference to the button on the page (index.html)
var submitButton = document.getElementById("submitButton");

// add an event listener - for the click event and call the Click function
submitButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
console.log("clicked");
}

case "Contact":
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let Email = document.getElementById("Email");
    let Message = document.getElementById("Message");
    let SendButton = document.getElementById("SendButton");

    SendButton.addEventListener("click", function(event){
        event.preventDefault();

        console.log(FullName);
        console.log(ContactNumber);
        console.log(Email);
        console.log(Message);
    });

    break;