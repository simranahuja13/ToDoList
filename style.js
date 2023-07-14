const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const pInfo = document.querySelector(".p-info");
const ul = document.querySelector("ul");
const todoList =[...document.querySelectorAll("li")];

const editPopup = document.querySelector(".edit-popup")
const editpopupInput = document.querySelector(".edit-popup-input")
const popupSubmitBtn = document.querySelector(".submit-btn")
const popupDeleteBtn =document.querySelector(".cancel-btn")

//Add NEW TODO IN THE LIST --
const createNewTodo =()=>{
    if(todoInput.value.length){
        const liText =  todoInput.value.trim();
        const liTaskHTML = `${liText}
        <div class="icons"><button class="complete"><i class="fas fa-check"></i>
        </button>
        <button class="edit">EDIT</button>
        <button class="delete"><i class="fas fa-times"></i></button>
    </div>`;
        const liNode = document.createElement("li");
          liNode.innerHTML =  liTaskHTML;
         ul.appendChild(liNode);
        todoList.push("li");
        todoInput.value = "";
         noTaskAdded();
};
}
// IF TODO LIST NOT ADDED --(//EMPTY)
const noTaskAdded = () =>{
  if(!todoList.length){pInfo.style.display= "block";}
  else {pInfo.style.display= "none";}
}
noTaskAdded()


addBtn.addEventListener("click",createNewTodo)