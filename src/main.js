import {Dom} from './assets/js/index'
import "./assets/css/style.css";

const button = document.getElementById('createTodo')
const inputTodo = document.querySelector('.input-todo')
const storageList = JSON.parse(localStorage.getItem("lists"));

const createElement = new Dom();

button.addEventListener('click',()=>{
  if(inputTodo.value){
    createElement.inputTodo = inputTodo.value
    createElement.createList('listTodo')
    Dom.setStorage('listTodo')
  }
})

document.addEventListener('click',(e)=>{
  const target = e.target;

  if(target.classList.contains('deletar')){
    target.parentNode.remove()
    Dom.setStorage('listTodo')
  }
  if(target.classList.contains('check-todo')){
    if(target.checked){
      target.parentNode.lastChild.classList.add('completed')
    }else{
      target.parentNode.lastChild.classList.remove('completed')
    }
    Dom.setStorage('listTodo')
  }
})

if(storageList?.length){
  createElement.setStorage = storageList;
  for (let index = 0; index < storageList.length; index++) {
    document.getElementById('listTodo').innerHTML += storageList[index]
    document.querySelectorAll('.completed').forEach((e)=>{
      e.parentElement.firstChild.checked = true
    })
  }
}