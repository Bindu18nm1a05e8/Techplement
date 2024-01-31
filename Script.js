// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask(){
//        if(inputBox.value === ''){
//         alert("You must write something!");
//        }
//        else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//        }
//        inputBox.value = "";
       
// }
// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName === "LI"){
//         e.target,this.classList.toggle("checked");
//         saveData();
//     }
//      else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data",listcontainer.innerHTML);
// }
// function showTask(){
//     listcontainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function() {
      // Implement the edit functionality here
      let newText = prompt("Edit task:", li.innerHTML);
      if (newText !== null) {
        li.innerHTML = newText;
      }
      saveData();
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
      li.remove();
      saveData();
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    // Do nothing here as the button click is handled separately
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
