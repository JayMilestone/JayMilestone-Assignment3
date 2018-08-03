let bio;
(function (bio)
{
    let XHR;
    //Biography Function
    function Bio()
    {
        try
        {
          let biography = document.getElementById("bio");
            XHR = new XMLHttpRequest();
                XHR.addEventListener("readystatechange", function(){
                  if(this.status === 200) {
                    if(this.readyState === 4)  {
                      bioParagraphs = JSON.parse(this.responseText);
                      
                      bioParagraphs.bioParagraphs.forEach(element => {
                        biography.innerHTML += element.p + "</br>" + "</br>";
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
    bio.Bio = Bio;
})(bio || (bio = {}));