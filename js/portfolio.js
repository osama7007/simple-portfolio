let mailText = document.getElementById("myInput");
function copyEmail(){
  /* Select the text field */
  mailText.select();
  mailText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(mailText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + mailText.value);
}

