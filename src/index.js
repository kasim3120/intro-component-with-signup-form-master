let myForm = document.getElementById("myForm")
myForm.addEventListener('submit', function(e){
  e.preventDefault()
})

let userFirstName = document.getElementById('userFirstName');
let emptyFirstName = document.querySelector(".emptyFirstName");
let userLastName = document.getElementById('userLastName');
let emptyLastName = document.querySelector(".emptyLastName");
let userEmail = document.getElementById('userEmail');
let emptyEmail = document.querySelector(".emptyEmail");
let userPassword = document.getElementById('userPassword');
let emptyPassword = document.querySelector(".emptyPassword");
let submitData = document.querySelector('.submitData');
let errorIcon = document.querySelectorAll('.errorIcon');



function checkFirstName() {
  if(userFirstName.value === ''){
    emptyFirstName.textContent = 'First Name cannot be empty';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[0].style.visibility = 'hidden'){
        errorIcon[0].style.visibility = 'visible';
      }
    }
  }
  else{
    emptyFirstName.textContent = '';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[0].style.visibility = 'visible'){
        errorIcon[0].style.visibility = 'hidden';
      }
    }
  }
};

function checkLastName() {
  if(userLastName.value === ''){
    emptyLastName.textContent = 'Last Name cannot be empty';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[1].style.visibility = 'hidden'){
        errorIcon[1].style.visibility = 'visible';
      }
    }
  }else{
    emptyLastName.textContent = '';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[1].style.visibility = 'visible'){
        errorIcon[1].style.visibility = 'hidden';
      }
    }
  }
};

function checkEmail() {
  if(userEmail.value===''){
    emptyEmail.textContent = 'Looks like this is not an email';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[2].style.visibility = 'hidden'){
        errorIcon[2].style.visibility = 'visible';
      }
    }
  }else{
    emptyEmail.textContent = '';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[2].style.visibility = 'visible'){
        errorIcon[2].style.visibility = 'hidden';
      }
    }
  }
};

function checkPassword() {
  if(userPassword.value===''){
    emptyPassword.textContent = 'Password cannot be empty';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[3].style.visibility = 'hidden'){
        errorIcon[3].style.visibility = 'visible';
      }
    }
  }else{
    emptyPassword.textContent = '';
    for(i = 0; i < errorIcon.length; i++){
      if (errorIcon[3].style.visibility = 'visible'){
        errorIcon[3].style.visibility = 'hidden';
      }
    }
  }
};

submitData.addEventListener('click', checkFirstName,true)
submitData.addEventListener('click', checkLastName,true)
submitData.addEventListener('click', checkEmail,true)
submitData.addEventListener('click', checkPassword,false)
submitData.addEventListener('click', styleChange,false)

userLastName.addEventListener('blur',checkFirstName,true);
userFirstName.addEventListener('blur',checkLastName,true);
userEmail.addEventListener('blur',checkEmail,false);
userPassword.addEventListener('blur',checkPassword,false);
