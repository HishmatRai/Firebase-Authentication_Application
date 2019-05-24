let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let showError = document.getElementById("showError");


const dataBase = firebase.database().ref(`/`);

 btn.addEventListener('click', ()=>{     
    let obj = {
        email : email.value,
        password : password.value
    }
    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
    .then((res)=>{
dataBase.child(`CurrentUser/${res.user.uid}`).set(obj);
// Sweet alert
swal({
    title: "Sucessfully Sign Up",
    icon: "success",
    button: "Ok",
  });

window.location.href = './../login/login.html';

console.log(res);


    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        showError.innerHTML = "Please Enter Correct Email & Password"
     
      });

 }
 )

 
