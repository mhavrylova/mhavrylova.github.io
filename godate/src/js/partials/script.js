var validName = 'please provide us your name';
var validCountry = 'select a cuntry from the list!';
var validEmail = 'type the correct email!';
var validPassword = 'password must contain at least 6 characters!';
var validAge = 'you should accept terms and conditions';
var formName = document.getElementById('form_name');
var formCountry = document.getElementById('form_country');
var formEmail = document.getElementById('form_email');
var formPassword = document.getElementById('form_password');
var submitBut = document.getElementById('form_submit');
var theForm = document.getElementById('the-form');
var ageCheck = document.getElementById('isadult');


function validate(form) {

      resetError(formName);
		if(!formName.value) {
			validationMessage(validName, formName);
		}

      resetError(formCountry);
		if(formCountry.value == 0) {
			validationMessage(validCountry, formCountry);
		}

      resetError(formEmail);
		if(!formEmail.value||formEmail.value.indexOf('@') == -1) {
			validationMessage(validEmail, formEmail);
		}

      resetError(formPassword);
		if(!formPassword.value||formPassword.value.length < 6) {
			validationMessage(validPassword, formPassword);
		} 

      resetError(ageCheck);
		if(ageCheck.checked == false) {
			validationMessage(validAge, ageCheck);
		}

		var errors = document.querySelectorAll('.validation');
		if (errors.length == 0) {
			theForm.submit();
		}
 }

function validationMessage(text, parent) {
	var div = document.createElement('div');
	div.className = "validation";
	div.innerHTML = text;
	parent.parentNode.appendChild(div);
} 

function resetError(parent) {
	var parentEl = parent.parentNode;
    if (parentEl.lastChild.className == "validation") {
       parentEl.removeChild(parentEl.lastChild);
    }
}