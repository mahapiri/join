let dataUser = []
let dataLocal = JSON.parse(localStorage.getItem('datareg'))
if(dataLocal){
    dataUser = dataLocal
}
console.log(dataUser);
let form_log = document.getElementById('form_log');
form_log.onsubmit = validLogin;
let checkBox=document.getElementById('checkBox')
checkBox.checked


function validLogin(e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    let status = 'no';

    if (email && password) {
      const foundUser = dataUser.find((user) => user.email.includes(email));

      if (foundUser) {
          if (foundUser.password === password) {
              status = 'ok';
          } else {
              status = 'Error Password';
             
          }
      } else {
          status = 'Email not found';
        
      }
  

  if (status === 'ok') {
      window.location.href = "main.html";
  } else if (status === 'Error Password' || status === 'Email not found') {
      checkBox.checked = false;
      document.getElementById('email').style.border = `1px solid red`;
      document.getElementById('password').style.border = `1px solid red`;
  } 
}
}
       
         
   
     


//         const foundUser = dataUser.find((user) => {
//             if  (user.email.includes(email)){
//                 user.email.includes(email) && user.password.includes(password) ? status = 'ok' :
//                 user.email.includes(email) && !user.password.includes(password) ? status = 'erorPasword' :  status = 'no'      
//             }else if(!user.email.includes(email) && !user.password.includes(password))
//             {    status = 'no'  }
//         })
//         if (status === 'es') {
//             console.log(user);
//         }else if (status === 'erorPasword') {
//             e.target[0].style.border = `1px solid gren`
//             // document.getElementById('email_login').innerHTML='Error'
          
//             e.target[1].style.border=`1px solid red `
//             document.getElementById('password_login').innerHTML='Error'
//         }  else if(status === 'no'){
            
//         }

//     }else{
        
//     }
    
// }