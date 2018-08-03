let projects;
(function (projects){

    let XHR;
    //Project's Page function
    function ProjectsPage()
    {
        try
        {
          let projects = document.getElementById("bookDescription");
          let matchDescription = document.getElementById("matchDescription"); 
          let switchDescription = document.getElementById("switchDescription"); 

            XHR = new XMLHttpRequest();
                XHR.addEventListener("readystatechange", function(){
                  if(this.status === 200) {
                    if(this.readyState === 4)  {
                      projectsParagraphs = JSON.parse(this.responseText);
                      
                      projectsParagraphs.projectsParagraphs.forEach(element => {
                        projects.innerHTML += element.p + "</br>";
                        if(element.m != null)
                        {
                            matchDescription.innerHTML += element.m + "</br>";
                        }
                        if(element.s != null)
                        {
                            switchDescription.innerHTML += element.s + "</br>";
                        }
                      });
                    }
                  }
                });
                XHR.open("GET", "paragraphs.json");
                XHR.send();
        }
        catch(Exception)
        {
            console.log("error");
        }        
    }
    // Declaring projects page as the constructor for projects --  I think it is about the same since we are turning it into the main object of projects --
    projects.ProjectsPage = ProjectsPage;
})(projects || (projects = {}));