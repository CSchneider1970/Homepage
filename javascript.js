function enableDarkMode () {
  document.body.style.backgroundColor = "#101010";
  document.body.style.color = "#dddddd";
}

function disableDarkMode () {
  document.body.style.backgroundColor = "#dddddd";
  document.body.style.color = "#101010";

}
function addMemberIntro() {
  // Get the input elements
  var nameInput = document.getElementById("memberName");
  var introTextarea = document.getElementById("memberIntro");
  
  // Get the values from the input and textarea
  var memberName = nameInput.value;
  var memberIntro = introTextarea.value;
  
  // If both input and textarea are not empty
  if (memberName !== "" && memberIntro !== "") {
    // Create a new list item
    var li = document.createElement("li");
    
    // Set the text of the list item to the member's name and introduction
    li.innerHTML = `<b>${memberName}</b>: ${memberIntro}`;
    
    // Get the list of members
    var ul = document.getElementById("memberList");
    
    // Add the new list item to the list
    ul.appendChild(li);
    
    // Clear the input field and textarea
    nameInput.value = "";
    introTextarea.value = "";
  }
}
