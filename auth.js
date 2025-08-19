// protect dashboard

let user = sessionStorage.getItem('emails');
let pas = sessionStorage.getItem('passwords');

if(!user && !pas){
    window.location.href = 'index.html'
}

let logout = document.getElementById('logout-btn');
logout.addEventListener('click', function(){
    sessionStorage.removeItem('emails');
    sessionStorage.removeItem('passwords');
    window.location.href = 'index.html';
})