function validateForm(){

var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var country=document.getElementById("country").value;

if(name=="" || email=="" || country==""){
alert("Please fill all required fields");
return false;
}

alert("Thank you! Your enquiry has been submitted.");
return true;

}
