const submit = document.getElementById('submit');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
submit.addEventListener('click', checkInputs)




function checkInputs() {
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	console.log(emailValue)

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'please enter valid email');
	} else {
		setSuccessFor(email)
	}

	if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be empty')
	} else if (!isValidPhone(phoneValue)) {
		setErrorFor(phone, 'please enter valid phone number')
	} else {
		setSuccessFor(phone)
	}
}


function setErrorFor(input, message) {
	const formCtrl = input.parentElement;
	const small = formCtrl.querySelector('small');
	formCtrl.className = 'form-ctrl error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formCtrl = input.parentElement;
	formCtrl.className = 'form-ctrl success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isValidPhone(phone) {
	 return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
}