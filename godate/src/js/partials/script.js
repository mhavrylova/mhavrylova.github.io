var validName = 'please provide us your name';
var validCountry = 'select a cuntry from the list!';
var validEmail = 'type the correct email!';
var validPassword = 'password muct contain at least 6 characters!';
var formName = document.getElementById('form_name');
var formCountry = document.getElementById('form_country');
var formEmail = document.getElementById('form_email');
var formPassword = document.getElementById('form_password');
var submitBut = document.getElementById('form_submit');

submitBut.addEventListener("click", function(event){
	event.preventDefault();

	if(!formName.value||formCountry.value == 0||!formEmail.value||!formPassword.value){
		if(!formName.value) {
			validationMessage(validName, formName);
		} 
		if(formCountry.value == 0) {
			validationMessage(validCountry, formCountry);
		} 
		if(!formEmail.value) {
			validationMessage(validEmail, formEmail);
		}
		if(!formPassword.value) {
			validationMessage(validPassword, formPassword);
		} 
		return false;		
	}

	document.getElementById('theForm').submit();		
	
});


function validationMessage(text, parent){
	var div = document.createElement('div');
	div.className = "validation";
	div.innerHTML = text;
	parent.parentNode.appendChild(div);
}