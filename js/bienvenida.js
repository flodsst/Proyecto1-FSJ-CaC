const user = JSON.parse(localStorage.getItem('login_succes')) || false
if(!user){
    window.location.href = "login.html"
}

const logout = document.querySelector("#logout")
logout.addEventListener('click', ()=> {
    alert('Goodbye!')
    localStorage.removeItem('login_succes')
    window.location.href = "login.html"

})