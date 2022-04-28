export default class Dom{
  constructor(textInput){
    this.textInput = textInput;
  }
  createList(idListTodo){
    let listTodo = document.getElementById(idListTodo)
    let elementLi = this.#createListElement();
    elementLi = this.#createDivElement(elementLi)
    elementLi = this.#createDeleteButton(elementLi)
    listTodo.appendChild(elementLi);
  }

  static setStorage(elementId){
    localStorage.clear();
    let listTodo = document.getElementById(elementId);
    let newArray = [];
    for (let index = 0; index < listTodo.children.length; index++) {
      newArray.push(listTodo.children[index].outerHTML)
      localStorage.setItem('lists',JSON.stringify(newArray));
    }
  }

  set inputTodo(value){
    this.textInput = value
  }

  #createListElement(){
    return document.createElement('li')
  }

  #createDivElement(listElement){
    let divElement = document.createElement('div')
    divElement = Dom.#createCheckBoxInput(divElement);
    divElement = Dom.#createTextTodo(divElement,this.textInput);
    listElement.appendChild(divElement);
    return listElement;
  }

  #createDeleteButton(listElement){
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deletar')
    listElement.appendChild(deleteButton)
    return listElement
  }

  static #createCheckBoxInput(divElement){
    let checkInput = document.createElement('input')
    checkInput.setAttribute('type','checkbox')
    checkInput.setAttribute('class','check-todo')
    if(!document.getElementById('checkBoxNaoConcluida').checked){
      checkInput.checked = true
    }
    divElement.appendChild(checkInput);
    return divElement
  }

  static #createTextTodo(divElement,textInput){
    let createSpan = document.createElement('span');
    if(!document.getElementById('checkBoxNaoConcluida').checked){
      createSpan.classList.add('completed')
    }
    const textTodo = document.createTextNode(textInput);
    createSpan.appendChild(textTodo);
    divElement.appendChild(createSpan);
    return divElement;
  }
}