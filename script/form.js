let email = document.getElementById("email");
// let error = document.getElementById("error");
let pwd = document.getElementById("pass");
let repass =   document.getElementById("repass");
let mobnum = document.getElementById("mobnum");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/ 
    
    if(fname.value.trim()==""){
        alert("Field cannot be Blank");
        return false;
    }
    else if(lname.value.trim()==""){
        alert("Field cannot be Blank");
        return false;
    }
    else if(email.value.trim()==""){
         alert("Fields cannot be empty");
         return false;
    }
    else if(phone.value.trim()==""){
        alert("Field cannot be Blank");
        return false;
    }
    else if(pwd.value.trim()==""){
        alert("Password cannot be Blank");
        return false;
    }   
    else if(cpwd.value==""){
        alert("Password cannot be Blank");
        return false;
    }   
    else if(pwd.value.length<8){
        alert("Minimum 8 Characters Needed");
        return false;
    }
    else if (pwd.value!=cpwd.value){
        alert("Password not same");
        return false;
    }
    // else if(phone.value.length<10 || phone.value.length>10){
    //     alert("Please Enter Correct Number");
    //     return false;

    // }
    
    // else if(allnumeric(phone.value)){
    //     let phonno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})(d{10})$/
    //     if(phone.value.match(phonno)){

    //         return true;
    //     }
    //     else
    //     {
    //         alert("Please Enter Correct Number");
    //         return false;
    //     }
    // } 

    else if(regexp.test(email.value)){
         email.innerHTML = "Valid";
         email.style.color = "green";
         return true;
     }
     else{
         email.innerHTML = "Invalid email";
         email.style.color = "red";
         return false;
     }

}
function phonevalidate(){
	// Function of Phone Number validation
	let regexp=/^([0-9]{3})([\.-]{0,1})([0-9]{3})([\.-]{0,1})([0-9]{4})$/
    if(regexp.test(mobnum.value))
    {
        return true;
    }
    else{
        //alert("please enter a valid phone number")
        return false;
	}

}





