/* Custom JS goes here */
let app;
(function(app)
{
    // Making the XHR variable
    let XHR;
    //Biography Function
    function Bio()
    {        
        try
        {
            // Get id
            let biography = document.getElementById("bio");
            // Get XMLHTTPRequest
            XHR = new XMLHttpRequest();
                XHR.addEventListener("readystatechange", function(){
                    if(this.status === 200) {
                    if(this.readyState === 4)  {
                        // get json data
                        bioParagraphs = JSON.parse(this.responseText);
                        // loop through json data
                        bioParagraphs.bioParagraphs.forEach(element => {
                        if(element.p != null)
                            biography.innerHTML += element.p + "</br>" + "</br>";
                        });
                    }
                    }
                });
                // Open json script
                XHR.open("GET", "./Scripts/paragraphs.json");
                // Send XHR information
                XHR.send();
        }
        catch(Exception)
        {
            console.log("error");
        }
        
    }
    // Projects function
    function ProjectsPage()
    {
        try
        {
            // GET ID
          let projects = document.getElementById("bookDescription");
          let matchDescription = document.getElementById("matchDescription"); 
          let switchDescription = document.getElementById("switchDescription"); 
            // GET XML request
            XHR = new XMLHttpRequest();
                XHR.addEventListener("readystatechange", function(){
                  if(this.status === 200) {
                    if(this.readyState === 4)  {
                        // get json data
                      projectsParagraphs = JSON.parse(this.responseText);
                      
                      // loop through paragraphs
                      projectsParagraphs.projectsParagraphs.forEach(element => {
                          if(element.p != null)
                            projects.innerHTML += element.p + "</br>" + "</br>";
                        if(element.m != null)
                            matchDescription.innerHTML += element.m + "</br>" + "</br>";
                        if(element.s != null)
                            switchDescription.innerHTML += element.s + "</br>" + "</br>";
                      });
                    }
                  }
                });
                XHR.open("GET", "./Scripts/paragraphs.json");
                XHR.send();
        }
        catch(Exception)
        {
            console.log("error");
        }        
    }
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
      /**
   * This function inserts HTML from a file or other location
   * into the specificied tag / element that exists on the 
   * index.html page
   *
   * @param {string} sourceURL
   * @param {string} destTag
   */
  function insertHTML(sourceURL, destTag) {
    let target = document.querySelector(destTag);
 
     XHR = new XMLHttpRequest();
     XHR.addEventListener("readystatechange", function(){
       if(this.status === 200) {
         if(this.readyState === 4)  {
           target.innerHTML = this.responseText;
           setActiveNavLink();
         }
       }
     });
     XHR.open("GET", sourceURL);
     XHR.send();
   }
    function Start()
    {
        insertHTML("./Views/partials/header.html", "header");
        // Title variable for each <title>
        var title = document.title;

        console.log("Application Started");
        console.info("----------------------");
        //console.warn("Title: " + title);
        try{
            // Calling to the <title> on start
            switch(title)
            {
                case "Biography":
                    setPageContent("./Views/content/bio.html");
                    setTimeout(Bio,100);
                    break;
                case "Project's Page":                
                    setPageContent("./Views/content/projects.html");
                    setTimeout(ProjectsPage,100);
                    break;
                case "Contact":
                    setPageContent("./Views/content/contact.html");
                    setTimeout(ContactContent,100);
                    break;
                default:
                    console.log("Title is not defined");
                    break;
            }
        }
        catch
        {
            //console.warn("Something went wrong!");
        }
        insertHTML("./Views/partials/footer.html", "footer");
    }
    function setPageContent(url) {
        insertHTML(url, "main");
      }
    function setActiveNavLink() {
        // clears the "active" class from each of the list items in the navigation
        document.querySelectorAll("li.nav-item").forEach(function(listItem){
          listItem.setAttribute("class", "nav-item");
        });
    
        // add the "active" class to the class attribute of the appropriate list item
        document.getElementById(document.title).classList.add("active");
    
    
      }      

    //On Page / window loaded
    window.addEventListener("load", Start);
})(app || (app = {}));