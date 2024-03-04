const signUp = document.getElementById('signUp');
const check = document.getElementById('checkbox');
const trasparenterDiv = document.querySelector('.trasparenter_div');
check.onchange = () => check.value === 'no' ? check.value = 'yes' : check.value = 'no';
signUp.onsubmit = onsubmitFor

let dataUser = []
let dataLocal = JSON.parse(localStorage.getItem('datareg'))
if (dataLocal) {
    dataUser = dataLocal
}


function addtoLocal(arr, key) {
    console.log('addLoc');
    localStorage.setItem(key, JSON.stringify(arr))
}

function onsubmitFor(e) {
    console.log(e);
    e.preventDefault()
    let name = e.target[0].value
    let email = e.target[1].value
    let password = e.target[2].value
    let confirmPassword = e.target[3].value
    let checkBox = e.target[4].value
    // let btn = e.target[5]
    if (name && email && password && confirmPassword && checkBox === 'yes') {
        validForm({ name, email, password, confirmPassword }, e)

    } else {
        check.value==='no'
         document.getElementById('errorPassword').innerText='Please accept the privacy policy!'

    }
}


function validForm({ name, email, password, confirmPassword }, e) {
    console.log(password.includes(confirmPassword));
    if (password.includes(confirmPassword)) {
        let user = dataUser.find((el) => el.email === email)
        if (user) {
            document.getElementById('errorPassword').innerText = 'The email is already registered'//
        } else {
            dataUser.push({ name, email, password, id: new Date().getTime() })
            addtoLocal(dataUser, 'datareg')
            if (window.innerWidth<=400) {
                trasparenterDiv.style.display = 'flex';
                // Code für den Fall, dass die Fensterbreite 600 Pixel oder weniger beträgt
                console.log("Kleiner als 400px");
            }else{
            trasparenterDiv.style.display = 'flex';
            setTimeout(function () {
                trasparenterDiv.style.display = 'none';
                window.location.href = '../index.html'
            }, 2000)
        }
        }
    } else {
        e.target[3].style.border = '4px solid red';
        document.getElementById('errorPassword').innerText = 'The password is not corect';
       
    }

}  


  

let backPicture = document.querySelector('.backLogin_picture')
backPicture.onclick = backToRegister;

function backToRegister() {
     JSON.parse(localStorage.getItem('stop'))
    window.location.href = '../index.html';
}


document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passwordInput');
    const passwordImage = document.getElementById('passwordBlock')
    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.trim() !== '') {
            passwordImage.src = '../assets/img/anmeldung Image/blockPassword.svg'
            passwordImage.onclick = function () {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text'
                    passwordImage.src = '../assets/img/anmeldung Image/passwordLock.svg'
                } else {
                    passwordInput.type = 'password'
                    passwordImage.src = '../assets/img/anmeldung Image/blockPassword.svg'
                }
            }
        } else {
            passwordInput.value.trim() === ''
            passwordImage.src = '../assets/img/anmeldung Image/lock.png'
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const confirmInput = document.getElementById('confirmInput');
    const confirmImage = document.getElementById('confirmBlock')
    confirmInput.addEventListener('input', function () {
        if (confirmInput.value.trim() !== '') {
            confirmImage.src = '../assets/img/anmeldung Image/blockPassword.svg'
            confirmImage.onclick = function () {
                if (confirmInput.type === 'password') {
                    confirmInput.type = 'text'
                    confirmImage.src = '../assets/img/anmeldung Image/passwordLock.svg'
                } else {
                    confirmInput.type = 'password'
                    confirmImage.src = '../assets/img/anmeldung Image/blockPassword.svg'
                }
            }
        }
        else {
            confirmInput.value.trim() === ''
            confirmImage.src = '../assets/img/anmeldung Image/lock.png'
        }
    })
})