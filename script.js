let todoInput = document.querySelector(".todo-input")
let todoButton = document.querySelector(".todo-button")
let filterTodo = document.querySelector(".todo-filter")
let todoList = document.querySelector(".todo-list")



todoButton.addEventListener("click",addTodo)
todoList.addEventListener('click',deleteCheck);
filterTodo.addEventListener('change',filter)



// function
function addTodo(event) {
    event.preventDefault();
    if(!todoInput.value.trim()) return;
    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    let span1 = document.createElement("span")
    span1.innerText = todoInput.value
    todoDiv.append(span1)
    let span2 = document.createElement("span")
    span2.innerHTML += `<i class="fa-solid fa-check"></i>`
    span2.innerHTML += `<i class="fa-solid fa-trash"></i>`
    todoDiv.append(span2)
    todoInput.value = ""
    todoList.append(todoDiv)
    saveInLocalStorage(todoInput.value)

}
function deleteCheck(event){
    let item = event.target;
if(item.classList[1] === 'fa-check'){
    let todo =item.parentElement.parentElement;
    todo.classList.toggle('completed')
   
}
if(item.classList[1]=== 'fa-trash'){
    let todo = item.parentElement.parentElement;
    todo.classList.toggle('completed1');
    todo.addEventListener('transitionend',()=>
    {
        todo.remove()
    })
}
}
function filter(event){
    let todos = document.querySelectorAll('.todo');
   todos.forEach(e => {
    switch(event.target.value){
        case 'all':
            e.style.display ='flex'
            break
            case 'completed':
        if(e.classList.contains('completed')){
            e.style.display ='flex'
        }else{
            e.style.display = 'none'
        }
        break
case'uncompleted':
if(!e.classList.contains('completed')){
    e.style.display = 'flex'
}else{
    e.style.display = 'none'
}
break;
default:
    e.style.display ='flex'


    }
    
   });

}
function saveInLocalStorage(text){
    if(localStorage.getItem('todos')===null){
        todos =[]
    }
localStorage.setItem('todos',JSON.stringify(todo))
    
}
