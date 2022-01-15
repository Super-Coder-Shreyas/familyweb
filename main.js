var images = [ "father.jpg" , "son.jpg",  "baby.jpg","mother.jpg"];
var names = ["Vinod Mane", "Shreyas Mane", "Archit Mane", "Vrushali Mane", ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = [images];
    
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
