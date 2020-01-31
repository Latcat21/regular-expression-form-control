const name = document.getElementById('name');
const nameError = document.querySelector('.name-error');
const email = document.getElementById('email');
const emailError = document.querySelector('.email-error');
const password = document.getElementById('password');
const passwordError = document.querySelector('.password-error');
const passwordTwo = document.getElementById('password2')
const passwordTwoError = document.querySelector('password2-error');
const btn = document.getElementById('btn');


btn.addEventListener('click', subMit)
  

function subMit(e){
  console.log("you clicked me!")


  emailForm();
  nameForm();
  passChecker();
  e.preventDefault();
}
//////////////////////////////////////////////////////////////////////
function nameForm(){
  let containsNum = name.value.match(/[0-9]/g) 
  let whiteSpace = name.value.match(/\s/g);
    
    if(containsNum){
      nameError.innerHTML = "Why Does your name Have Numbers!!!???"
    }
    if(whiteSpace){
      nameError.innerHTML = "There should be spaces"
    }
    
    if(name.value.length < 4){
      nameError.innerHTML = "Please enter a password that is at lease 3 charcters"
    }

      setTimeout(() =>{
        nameError.innerHTML = ""
      }, 3000)
}
/////////////////////////////////////
function emailForm (){

    // Courtesy of https://emailregex.com/ ///
    let success = email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(!success){
        emailError.innerHTML = "Please Enter a Valid Email"
      }
      setTimeout(() =>{
        emailError.innerHTML = ""
      }, 3000)
}

////////////////////////////////////
function passChecker(){
  let capital = password.value.match(/[A-Z]/g);
  let specialCharcter = password.value.match(/[$-/:-?{-~!"^_`\[\]]/g);
  let numbers = password.value.match(/[0-9]/g)
  
  if(!capital){
    passwordError.innerHTML = 'Must contain at least one Capital letter';
  }
  if(password.value < 8){
    passwordError.innerHTML = 'Must be at least 8 charachter long';
  }
  if(!specialCharcter){
    passwordError.innerHTML = 'Must have at least one special Character';
  }
  if(!numbers){
    passwordError.innerHTML = 'Must have at least one number';
  }
  
  setTimeout(() =>{
    passwordError.innerHTML = ""
  }, 3000)

  if(password.value !== passwordTwo.value){
    passwordTwoError.innerHTML = 'Passwords dont match'

    setTimeout(() =>{
      passwordTwoError.innerHTML = ""
    }, 3000)
  }
  
}