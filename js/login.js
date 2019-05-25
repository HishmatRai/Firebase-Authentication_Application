
function signup(){
    window.location.href="./../signup/signup.html"
}

let email = document.getElementById("email");
let password =  document.getElementById("password");
let btn = document.getElementById("btn");
let showError = document.getElementById("showError");
const database =  firebase.database().ref('/')


btn.addEventListener('click',()=>{
    

    let obj = {
        email : email.value,
        password : password.value
    }
    firebase.auth().signInWithEmailAndPassword(obj.email, obj.password)
    .then((res)=>{
    obj.id = res.user.uid;
    localStorage.setItem("userData" , JSON.stringify(obj));
    swal({
      title: "Sucessfully Sign in",
      icon: "success",
      button: "Ok",
    });
//    Sweet alert


setTimeout(()=>{
  
  window.location.href = './../home/home.html'
},2000)

  // Sweet end
    console.log(res);
    
    
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        console.log(errorCode)
        showError.innerHTML = "Please Enter Correct Email & Password"
      
      });
    
    })