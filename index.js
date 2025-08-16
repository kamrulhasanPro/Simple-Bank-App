let startingArea = document.getElementById('start')
let loginBtn = document.getElementById('login-btn')
let registrationBtn = document.getElementById('registration-btn')
let loginArea = document.getElementById('login')
let registrationArea = document.getElementById('registration')
let back = document.getElementById('back-btn')
let back2 = document.getElementById('back-btn2')


loginBtn.addEventListener('click', function(){
    startingArea.style.display = 'none'
    loginArea.style.display = 'flex'
});
registrationBtn.addEventListener('click', function(){
    startingArea.style.display = 'none'
    registrationArea.style.display = 'flex'
});

back.addEventListener('click', function(){
    loginArea.style.display = 'none'
    registrationArea.style.display = 'none'
    startingArea.style.display = 'flex'
});
back2.addEventListener('click', function(){
    loginArea.style.display = 'none'
    registrationArea.style.display = 'none'
    startingArea.style.display = 'flex'
})

let emailData = ["kamrul116522@gmail.com"];
let pass = ["@1Kamrul1@"]

let registrationButton = document.getElementById('registrationBtn')
let firstN = document.getElementById('firstname')
let lastN = document.getElementById('lastname')

let fullName = firstN.value + lastN.value;
let email = document.getElementById('email')
let password = document.getElementById('Password')
// let emailValue = email.value
let user;
let pas;
registrationButton.addEventListener('click', function(){
    sessionStorage.setItem('emails', email.value)
     user = sessionStorage.getItem('emails');
     sessionStorage.setItem('passwords', password.value)
     pas = sessionStorage.getItem('passwords')
    for(let i = 0; i<emailData.length;i++){
        // if(emailData[i] !== email.value){
        //     // emailData.push(email.value)
        //     user = email.value
        //     alert('succes')
        // }
        if(user == email.value){
            alert ('succde')
        }
        if(pass[i] !== password.value){
            pass.push(password.value)
        }
    }
})


let userN = document.getElementById('username')
let loginPassword = document.getElementById('password')
let loginButton = document.getElementById('loginBtn')
let great = document.getElementById('gretting')
loginButton.addEventListener('click', function(){

    for(let i = 0; i<emailData.length; i++){
        if(user == userN.value && pas == loginPassword.value){
            window.location.href = "deshboard.html"
        }
        else if(userN.value == emailData[i] && loginPassword.value == pass[i]){
            window.location.href = 'deshboard.html'        
        }
        else if (userN.value == '' || loginPassword.value == ''){
            document.getElementById('wrong').style.display = 'block'
            document.getElementById('wrong').textContent = 'please fill this username and password'
        }
        else{
            document.getElementById('wrong').style.display = 'block'
            document.getElementById('wrong').textContent = 'not match enter correct email and password'
        }
    }
})


