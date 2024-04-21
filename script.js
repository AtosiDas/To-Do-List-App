console.log(JSON.parse(localStorage.getItem('items')));
let arrayOfItems = JSON.parse(localStorage.getItem('items')) || [];

displayItem();
function Add() {
    let todoElement = document.querySelector("#todo-input");
    let todoItem = todoElement.value;
    let todoDate = document.querySelector('#todo-date');
    let date = todoDate.value;
    arrayOfItems.push({item: todoItem,dueDate: date});
    displayItem();
    todoElement.value = '';
    todoDate.value = '';
}

function displayItem() {
    let strItems = JSON.stringify(arrayOfItems);
    // console.log(strItems);
    localStorage.setItem('items',strItems);
    let containerElement = document.querySelector(".item");
    let html = '';
    let count = 1;
    for(let i = 0; i < arrayOfItems.length; i++){
        html += `
        <div class="item-list">
        <span class="countList">(${count})</span>
        <span class="ItemList">${arrayOfItems[i].item}</span>
        <span class="ItemList">${arrayOfItems[i].dueDate}</span>
        <button class="button1" onClick="arrayOfItems.splice(${i}, 1);displayItem();">Delete</button>
        </div>
        `;
        count++;
    }
    containerElement.innerHTML = html;

}
