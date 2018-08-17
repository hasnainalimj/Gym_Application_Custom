//ADD IN SELECT ELEMENT
function addExerciseInSelect(){
	var txtexercise = document.getElementById('txtexercise').value;
	var selectbox = document.getElementById('selectbox');
	var allExercises = [];
	allExercises.push(txtexercise);

	for(var i=0; i<allExercises.length; i++){
		var option = document.createElement('option');
		option.setAttribute('value',txtexercise);
		option.innerHTML = allExercises[i];
		selectbox.appendChild(option);
	}
	alert("Add Successfully.....");
	document.getElementById('txtexercise').value = "";
}

//DISPLAY REST FIELD
function showRest(){
	var checkOne = document.getElementById('checkedrestOne');
	var checkTwo = document.getElementById('checkedrestTwo');
	var txtRest = document.getElementById('txtrests');

	checkOne.style.display = "none";
	checkTwo.style.display = "block";
	txtRest.style.display = "block";
}

//HIDE REST FIELD
function hideRest(){
	var checkOne = document.getElementById('checkedrestOne');
	var checkTwo = document.getElementById('checkedrestTwo');
	var txtRest = document.getElementById('txtrests');

	checkOne.style.display = "block";
	checkTwo.style.display = "none";
	txtRest.style.display = "none";	
}

//ADDING IN TABLES
var allValues = [];


function addingExercises(){

	//INTIALIZING MANAGE EXERCISE DETAILS
	var selectbox = document.getElementById('selectbox').value;
	var raps = document.getElementById('txtexerciseraps').value;
	var rests = document.getElementById('txtrests').value;

	if(!raps.length){
		alert("Enter Raps.....");
	}

	else{
		var abc = [selectbox,raps,rests]
	
		allValues.push(abc);
		alert("Added Successfully.....");
		console.log(allValues);
		document.getElementById('txtexerciseraps').value = "";
		document.getElementById('txtrests').value = "";
	}	
}

//GO TO MY EXERCISES
function gotoMyExercises(){
	window.location.href = "seemanageexercises.html";
	localStorage.setItem("exercise",JSON.stringify(allValues));
}

//BACK TO HOME

function backToHome(){
	window.location.href = "home.html";
}




