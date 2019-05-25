// function createtodo(){
//     window.location.href="./../todo/todo.html"
// }
// setTimeout(() => {
//     document.getElementById("divForShowData").style.display = "block"
//     document.getElementById("loading").style.display = "none"
// }, 900)



const dataBase = firebase.database().ref(`/`);
var userData = localStorage.getItem('userData');
userData = JSON.parse(userData)
dataBase.child("CurrentUser/"+userData.id+"/Post").on(`child_added`,(snap)=>{
    var data =  snap.val();
    data.id = snap.key;
    console.log(data.input)

    const createLi = document.createElement("li");
const createLiText = document.createTextNode(data.input)
createLi.appendChild(createLiText)

const createBr = document.createElement("br")
ul.appendChild(createBr)
ul.append(createLi)
})


function logout(){
    // Sweet alert
    swal({
        title: "Are you sure?",
        text: "You LogOut from the Home page !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Successfully LogOut From the Home Page", {
            icon: "success",
          });
          firebase.auth().signOut().then(() =>{
            window.location.assign("./../login/login.html");
        localStorage.removeItem("userData")
                })
        } else {
          swal("You not LogOut form the Home Page !");
        }
      });
    //   logout

}

document.getElementById("userName").innerHTML = userData.email.slice(0,-10).toUpperCase();
document.getElementById("userEmail").innerHTML = userData.email;
userEmail


















