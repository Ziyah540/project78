var images=["dad.png",
                "family.jpg",
                 "mom.png",
                  "nafia.jpeg",
                  "ziyah.jpeg"];

var names=["Family Book",
                  "Ziyah Virani",
                  "Nafia Virani",
                  "Abida Virani",
                  "Salim Virani"];

var i=0;
function update()
{
    i++;

var family_of_members_in_array=5
if (i > family_of_members_in_array )
{
    i=0
}
var updatedimage= images[i];
var updatedname= names[i];
document.getElementById("family_members_images").src= url=updatedimage;
document.getElementById("family_members_names").innerHTML= updatedname;
}