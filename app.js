const name = document.getElementById('name');
const nameError = document.querySelector('.name-error');
const email = document.getElementById('email');
const emailError = document.querySelector('.email-error');
const password = document.getElementById('password');
const passwordError = document.querySelector('.password-error');
const passwordTwo = document.getElementById('password2')
const passwordTwoError = document.querySelector('password2.-error');
const btn = document.getElementById('btn');


btn.addEventListener('click', subMit)
  

function subMit(e){
  console.log("you clicked me!")


  nameForm()
  e.preventDefault();
}

function nameForm(){
  if(name.value.length < 7){
    nameError.innerHTML = "Please enter a password that is at lease 7 charcters"
  }
}