// showing login and registration  page 

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


// Registration page 
let form = document.getElementById('myform')
let registrationButton = document.getElementById('registrationBtn')
let firstN = document.getElementById('firstname')
let lastN = document.getElementById('lastname')
let wrong1 = document.getElementById('wrong1')
// let fullName = firstN + lastN;
let email = document.getElementById('email')
let password = document.getElementById('Password')
let confirmPassword = document.getElementById('confirm-password')

let userData = [
    {name:'Kamrul Hasan', email:'kamrul116522@gmail.com', password:'kamrul11'},
    {name:'Kamrul Miazi', email:'miazi@gmail.com', password:'kamrul12'},
];
let userEmail = [];
// let emailValue = email.value
for(let i of userData){
        userEmail.push(i.email)
    }
registrationButton.addEventListener('click', function(){

    
        // if(emailData[i] !== email.value){
            //     // emailData.push(email.value)
            //     user = email.value
            //     alert('succes')
            // }
        // if(user == email.value){
        //     alert ('succde')
        // }

        if(firstN.value == ''){
            wrong1.style.display = 'block';
            wrong1.style.color = 'red'
             wrong1.style.fontWeight = 'normal'
            return wrong1.textContent = 'please enter your name'
        }
        if(email.value == '' || !email.value.includes('@')){
            wrong1.style.display = 'block';
            wrong1.style.color = 'red'
             wrong1.style.fontWeight = 'normal'
            return wrong1.textContent = 'please enter your email and @'
        }
        if(password.value.length < 8 || password.value == ''){
            wrong1.style.display = 'block';
            wrong1.style.color = 'red'
             wrong1.style.fontWeight = 'normal'
            return wrong1.textContent = 'please password must be 8 cerecter'
        }
        if(userEmail.includes(email.value)){
            wrong1.style.display = 'block';
            wrong1.style.color = 'red'
             wrong1.style.fontWeight = 'normal'
            return wrong1.textContent = 'already created with this email'
        }
        if(confirmPassword.value !== password.value || confirmPassword.value === ''){
            wrong1.style.display = 'block';
            wrong1.style.color = 'red'
             wrong1.style.fontWeight = 'normal'
            return wrong1.textContent = 'not match password. Enter confirm password'
        }
        if(!userEmail.includes(email.value)){
            userData.push({name:firstN.value +" " + lastN.value, email:email.value, password:password.value})
            userEmail.push(email.value)
             wrong1.style.display = 'block';
             wrong1.style.color = 'green'
             wrong1.style.fontWeight = 'bold'
             form.reset()
            return wrong1.textContent = 'Account Create Successful, Please Login'
        }
        // if(pass[i] !== password.value){
        //     pass.push(password.value)
        // }
    
})


// login setup
let userN = document.getElementById('username')
let loginPassword = document.getElementById('password')
let loginButton = document.getElementById('loginBtn')
let great = document.getElementById('gretting')
loginButton.addEventListener('click', function(){
    
    for(let i = 0; i<userData.length; i++){
            
        // if(user == userN.value && pas == loginPassword.value){
        //     window.location.href = "deshboard.html"
        // }
        if(userN.value === userData[i].email && loginPassword.value == userData[i].password){
            sessionStorage.setItem('emails', userData[i].email)
            sessionStorage.setItem('passwords', userData[i].password)
            window.location.href = "dashboard.html"
        }
        else if (userN.value == '' || loginPassword.value == ''){
            document.getElementById('wrong').style.display = 'block'
            document.getElementById('wrong').textContent = 'please fill this username and password'
        }
        else if(userN.value !== userData[i].email && loginPassword.value !== userData[i].password){
            document.getElementById('wrong').style.display = 'block'
            document.getElementById('wrong').textContent = 'not match email and password'
        }
        else if(userN.value !== userData[i].email){
            document.getElementById('wrong').style.display = 'block'
            document.getElementById('wrong').textContent = 'not match email enter correct email'
        }
        else if(loginPassword.value !== userData[i].password){
            document.getElementById('wrong').style.display = 'block'
            document.getElementById('wrong').textContent = 'not match password enter correct password'
        }
    }
})


