document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();
    console.log("Form submitted");

const Validusername = 'panda2107@gmail.com'
const Validpassword = 'cutu panda smile'

const Username= document.getElementById('username').value
const Password= document.getElementById('password').value

if(Username === Validusername && Password === Validpassword){
    window.location.href = 'dashboard.html'
}else{
    const errormsg =document.getElementById('error-message')
    errormsg.textContent= 'Invalid Username or Password'
    errormsg.style.display = 'block'
}

})