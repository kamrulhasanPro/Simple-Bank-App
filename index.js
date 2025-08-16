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


let password = document.getElementById('password')
let loginButton = document.getElementById('loginBtn')
let registrationButton = document.getElementById('registrationBtn')


