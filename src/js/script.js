//USERNAME VALIDATION
function checkUsername(){
	var username = document.getElementById('txtUsername').value;
	var usernameError = document.getElementById('txtUsernameError');

    if(!username.length){
        usernameError.innerHTML = "Fill this Field";
        return false;
    }
	if(username.indexOf(" ") > -1){
		usernameError.innerHTML = "Space not Allowed";
		return false;
	}
	if(username.length <= 3){
		usernameError.innerHTML = "Should be Greater than 3";
		return false;
	}
	if (username.length > 3 || (username.indexOf(" ") == -1)) {
        usernameError.innerHTML = "";
    }
}

//EMAIL VALIDATION
function checkEmail(){
	var email = document.getElementById('txtEmail').value;
	var emailError = document.getElementById('txtEmailError');

    if(!email.length){
        emailError.innerHTML = "Fill this Field";
        return false;
    }
	if (email.indexOf("@") == -1) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    if (email.length <= (email.indexOf("@") + 4)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }

	//CHECK IN LOCAL STORAGE
	emailError.innerHTML = "";
}

//PASSWORD VALIDATION
function checkPassword(){
	var password = document.getElementById('txtPassword').value;
	var passwordError = document.getElementById('txtPasswordError');

    if(!password.length){
        passwordError.innerHTML = "Fill this field";
        return false;
    }
	if (password.length < 6) {
        passwordError.innerHTML = "Must be Greater than 6";
    }
    
    var numberIs = false;
    var sChar = false;
    var letter = false;
   
    for (var i = 0; i < password.length; i++) {
        if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 90) {
            numberIs = true;
        }
        if ((password[i].charCodeAt() >= 33 && password[i].charCodeAt() <= 47) || (password[i].charCodeAt() >= 58 && password[i].charCodeAt() <= 64)) {
            sChar = true;
        }
        if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
            letter = true;
        }
    }
        if (numberIs == false) {
            passwordError.innerHTML = "Password Must Contain Numbers.";
            return false;
        }
        if (sChar == false) {
           passwordError.innerHTML = "Password Must Contain Special Charactrers.";
          return false;
        }
        if (letter == false) {
           passwordError.innerHTML = "Password Must Contain Alphabets.";
           return false;
        }

	   passwordError.innerHTML = "";
    }

//CONFIRM PASSWORD VALIDATION
function checkConfirmPassword(){
	var confirmPassword = document.getElementById('txtConfirmPassword').value;
	var confirmPasswordError = document.getElementById('txtConfirmPasswordError');
	var password = document.getElementById('txtPassword').value;

    if(!confirmPassword.length){
        confirmPasswordError.innerHTML = "Fill this field";
        return false;
    }
	if(confirmPassword != password){
		confirmPasswordError.innerHTML = "Password not Matched";
		return false;
	}

	confirmPasswordError.innerHTML = "";

}

//REGISTER ON SUBMIT
function onSubmit(){

	//INITIALIZING
	var username = document.getElementById('txtUsername').value;
	var email = document.getElementById('txtEmail').value;
	var password = document.getElementById('txtPassword').value;
	var confirmPassword = document.getElementById('txtConfirmPassword').value;
	var genders = document.getElementsByName('gender');
	
	var usernameError = document.getElementById('txtUsernameError');
	var emailError = document.getElementById('txtEmailError');
	var passwordError = document.getElementById('txtPasswordError');
	var confirmPasswordError = document.getElementById('txtConfirmPasswordError');
	var genderError = document.getElementById('txtGenderError');
    
    //CALLING ADD USER FUNCTION
    addUser();

    //NAVIGATE TO LOGIN PANEL
    alert("Register Successfully");
    window.location.href = "login.html";
    
    return false;
}

//ADD USER
function addUser() {

    //INITIALIZING
    var username = document.getElementById('txtUsername').value;
    var email = document.getElementById('txtEmail').value;
    var password = document.getElementById('txtPassword').value;
    var confirmPassword = document.getElementById('txtConfirmPassword').value;
    var genders = document.getElementsByName('gender');
    var male = document.getElementById('txtMale').checked;    
    var female = document.getElementById('txtFemale').checked;

    var usernameError = document.getElementById('txtUsernameError');
    var emailError = document.getElementById('txtEmailError');
    var passwordError = document.getElementById('txtPasswordError');
    var confirmPasswordError = document.getElementById('txtConfirmPasswordError');
    var genderError = document.getElementById('txtGenderError');    

    //STORE IN LOCAL STORAGE
    var myObj = {
        username_ : username,
        email_ : email,
        password_ : password,
        confirm_ : confirmPassword,
        male_ : male,
        female_ : female
    };

    var serialized = JSON.stringify(myObj);
    localStorage.setItem('myObj',serialized);

    var deserialized = JSON.parse(localStorage.getItem('myObj'));

    //EMPTY ERRORS
    usernameError.innerHTML = " ";
    emailError.innerHTML = " ";
    passwordError.innerHTML = " ";
    confirmPasswordError.innerHTML = " ";
    genderError.innerHTML = " ";
}

//ON LOGIN
function onLogin(){
    var deserialized = JSON.parse(localStorage.getItem('myObj'));

    var loginUsername = document.getElementById('txtLoginUsername').value;
    var loginPassword = document.getElementById('txtLoginPassword').value;

    var loginUsernameError = document.getElementById('txtLoginUsernameError');
    var loginPasswordError = document.getElementById('txtLoginPasswordError');

    loginUsernameError.innerHTML = "";
    loginPasswordError.innerHTML = "";

    //LOGIN USERNAME VALIDATION
    if(!loginUsername.length){
        loginUsernameError.innerHTML = "Fill this Field";
    }

    //LOGIN PASSWORD VALIDATION
    if(!loginPassword.length){
        loginPasswordError.innerHTML = "Fill this Field";
    }

    if(loginUsername != deserialized.username_ || loginPassword != deserialized.password_){
        alert("Invalid Username & Password");
    }   
    else{
        window.location.href = "home.html";
    }

    return false;
}

//GO TO LOGIN
function goToLogin(){
	window.location.href = "src/templates/login.html";
}

//GO TO REGISTER
function goToRegister(){
	window.location.href = "src/templates/register.html";
}

history.pushState(null, null, location.href);
        window.onpopstate = function () {
        history.go(1);
        };