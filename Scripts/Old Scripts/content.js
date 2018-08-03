let contact;
(function (contact)
{
    // User input capture function
    function OutputFormDataToConsole()
    {
        // User input variables
        let FullName = document.getElementById("FullName");
        let ContactNumber = document.getElementById("ContactNumber");
        let EmailAddress = document.getElementById("EmailAddress");
        let Message = document.getElementById("Message");

        // Output to console
        console.log("Form Data");
        console.log('%c_________________________________', "color: blue;");
        console.log('%cFull Name: ' + FullName.value, "font-weight: bold; color: green");
        console.log('%cContact Number: ' + ContactNumber.value, "font-weight: bold; color: orange");
        console.log('%cEmail Address: ' + EmailAddress.value, "font-weight: bold; color: red");
        console.log('%cMessage: ' + Message.value, "font-weight: bold; color: purple");
        console.log('%c_________________________________', "color: blue;");
    }
    function ContactContent()
    {
        console.log("Contact Content Accessed....");
        //document.getElementsByClassName("card-title")[0].textContent = "Contact You";
        
        //Created button
        let cancelButton = document.createElement("button");
        //Set attributes of buttons
        cancelButton.setAttribute("class", "btn btn-danger");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function(event)
        {
            //prevents submit behaviour originally made and changes it
            event.preventDefault();
            window.open("index.html", "_parent");
        });
        // Adds to end of button created
        document.forms[0].appendChild(cancelButton);
        // Send Buttons functionality
        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {
            event.preventDefault();
            OutputFormDataToConsole();
        })
    }
    contact.ContactContent = ContactContent;
})(contact || (contact = {}));