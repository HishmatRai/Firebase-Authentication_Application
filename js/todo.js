function homePage(){
    window.location.href="./../home/home.html"
}
let input = document.getElementById("input");
let btn =  document.getElementById("btn");
let ul = document.getElementById("ul")
// time out
setTimeout(() => {
    document.getElementById("divForShowData").style.display = "block"
    document.getElementById("loading").style.display = "none"
}, 1000)

const dataBase = firebase.database().ref(`/`);
var userData = localStorage.getItem('userData');
userData = JSON.parse(userData)
btn.addEventListener('click', function(){
    let obj = {
        input : input.value
    }
    dataBase.child("CurrentUser/"+userData.id+"/Todo").push(obj);
})
dataBase.child("CurrentUser/"+userData.id+"/Todo").on(`child_added`,(snap)=>{
    var data =  snap.val();
    data.id = snap.key;
    console.log(data.input)

    const createLi = document.createElement("li");
const createLiText = document.createTextNode(data.input)
createLi.appendChild(createLiText)

const createBr = document.createElement("br")
createLi.appendChild(createBr)
// ul.appendChild(createBr)
const delBtn = document.createElement("button")
const updataBtn = document.createElement("button")
const delText = document.createTextNode("Delete")
delBtn.appendChild(delText)
const updateText = document.createTextNode("Update")
updataBtn.appendChild(updateText)
// createLi.appendChild(createTextNode);
createLi.appendChild(delBtn)
createLi.appendChild(updataBtn)
ul.append(createLi)

delBtn.addEventListener("click", ()=>{


    dataBase.child("CurrentUser/"+userData.id+"/Todo/" + data.id).remove()
createLi.remove();
})


updataBtn.addEventListener("click", ()=>{
const cretePrompt = prompt("Update Your data")
createLi.innerHTML = cretePrompt;
createLi.appendChild(createBr)
createLi.appendChild(delBtn)
createLi.appendChild(updataBtn)
dataBase.child("CurrentUser/"+userData.id+"/Todo/" + data.id).update({input:cretePrompt})


    })

})


function logout(){
 // Sweet alert
 swal({
    title: "Are you sure?",
    text: "You LogOut from the Todo page !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Successfully LogOut From the Todo Page", {
        icon: "success",
      });
      firebase.auth().signOut().then(() =>{
        window.location.assign("./../login/login.html");
    localStorage.removeItem("userData")
            })
    } else {
      swal("You not LogOut form the Todo Page !");
    }
  });
}
document.getElementById("userName").innerHTML = userData.email.slice(0,-10)
