let myForm = document.getElementById("myForm")
myForm.addEventListener('submit', function(e){
  e.preventDefault()
})
//FirstName
let userFirstName = document.getElementById('userFirstName');
let emptyFirstName = document.querySelector(".emptyFirstName");
//LastName
let userLastName = document.getElementById('userLastName');
let emptyLastName = document.querySelector(".emptyLastName");
//UserEmail
let userEmail = document.getElementById('userEmail');
let emptyEmail = document.querySelector(".emptyEmail");
//userPassword
let userPassword = document.getElementById('userPassword');
let emptyPassword = document.querySelector(".emptyPassword");

let userFirstNameInput = document.querySelector('.userFirstNameInput');
let userLastNameInput = document.querySelector('.userLastNameInput');
let userEmailInput = document.querySelector('.userEmailInput');
let userPasswordInput = document.querySelector('.userPasswordInput');

let submitData = document.querySelector('.submitData');
let errorIcon = document.querySelectorAll('.errorIcon');

function validateUserFirstName(){
  if(userFirstName.value===''){
    for(i = 0; i < errorIcon.length; i++){
      errorIcon[0].style.visibility = 'visible';
      emptyFirstName.textContent = 'First Name cannot be empty';
      userFirstNameInput.style.border = '1px solid hsl(0, 100%, 74%) ';
      userFirstName.placeholder = '';
    }
  }else{
    emptyFirstName.textContent = '';
    errorIcon[0].style.visibility = 'hidden';
    userFirstNameInput.style.border = '1px solid #dbd9d9';
    userFirstName.placeholder = 'First Name';
  }
}

function validateUserLastName() {
  if(userLastName.value===''){
    for(i = 0; i < errorIcon.length; i++){
      errorIcon[1].style.visibility = 'visible';
      emptyLastName.textContent = 'Last Name cannot be empty';
      userLastNameInput.style.border = '1px solid hsl(0, 100%, 74%) ';
      userLastName.placeholder = '';
    }
  }else{
    emptyLastName.textContent = '';
    errorIcon[1].style.visibility = 'hidden';
    userLastNameInput.style.border = '1px solid #dbd9d9';
    userLastName.placeholder = 'Last Name';
  }
}

function validateUserEmail() {
  if(userEmail.value==='' || userEmail.value==='email@example.com'){
    for(i = 0; i < errorIcon.length; i++){
      errorIcon[2].style.visibility = 'visible';
      emptyEmail.textContent = 'Last Name cannot be empty';
      userEmailInput.style.border = '1px solid hsl(0, 100%, 74%)';
      userEmail.placeholder = 'email@example.com';
      userEmail.setAttribute('class', 'form-control change')
    }
  }else{
  emptyEmail.textContent = '';
    errorIcon[2].style.visibility = 'hidden';
    userEmailInput.style.border = '1px solid #dbd9d9';
    userEmail.placeholder = 'Email Address';
    userEmail.setAttribute('class', '')
  }
}

function validateUserPassword(e) {
  if(userPassword.value===''){
    for(i = 0; i < errorIcon.length; i++){
      errorIcon[3].style.visibility = 'visible';
      emptyPassword.textContent = 'Last Name cannot be empty';
      userPasswordInput.style.border = '1px solid hsl(0, 100%, 74%) ';
      userPassword.placeholder = '';
    }
  }else{
    emptyPassword.textContent = '';
    errorIcon[3].style.visibility = 'hidden';
    userPasswordInput.style.border = '1px solid #dbd9d9';
    userPassword.placeholder = 'Password';
  }
}

submitData.addEventListener('click', validateUserFirstName)
submitData.addEventListener('click', validateUserLastName)
submitData.addEventListener('click', validateUserEmail)
submitData.addEventListener('click', validateUserPassword)

let focusTarget = (e) => {
  e.currentTarget.style.border = '2px solid hsl(228, 45%, 44%)'
}

userFirstNameInput.addEventListener('click', focusTarget)
userFirstNameInput.addEventListener('focusout', validateUserFirstName)
userLastNameInput.addEventListener('click', focusTarget)
userLastNameInput.addEventListener('focusout', validateUserLastName)
userEmailInput.addEventListener('click', focusTarget)
userEmailInput.addEventListener('focusout', validateUserEmail)
userPasswordInput.addEventListener('click', focusTarget)
userPasswordInput.addEventListener('focusout', validateUserPassword)
