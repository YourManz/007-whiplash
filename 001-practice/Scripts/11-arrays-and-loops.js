
//=========================================================================
const todoTwo = JSON.parse(localStorage.getItem('todoTwo')) || [];
const addButton = document.querySelector('.js-add-button');
const clearButton = document.querySelector('.js-clear-button');
const inputKey  = document.querySelector('.js-input-2');
const inputDate  = document.querySelector('.js-date');

addButton.addEventListener('click', () => {
   addItem2()
  });
clearButton.addEventListener('click', () => {
    clearListTwo()
  });
inputKey.addEventListener('keypress', (event) => {
  event.code === 'Enter' && addItem2();
});
inputDate.addEventListener('keypress', (event) => {
  event.code === 'Enter' && addItem2();
});

addSecondList();
function addItem2() {
  const todoInput = document.querySelector('.js-input-2');
  const date = document.querySelector('.js-date').value;

  todoTwo.push({'todo':todoInput.value, 'date':date});// gets value out of item and pushes it into the todoTwo array
  localStorage.setItem('todoTwo', JSON.stringify(todoTwo)); //stores array in localStorage
  
  document.querySelector('.js-input-2').value = '';
  document.querySelector('.js-date').value = ''; //clears relevent html fields before looping items in
  document.querySelector('.js-todo-list-two').innerHTML = ``;

  addSecondList();
};

function addSecondList() {
  todoTwo.forEach((value, index) => {
      const date = document.querySelector('.js-date').value;
      document.querySelector('.js-todo-list-two').innerHTML += `<div class="basic-text">${todoTwo[index].todo}</div> <div class="basic-text">${todoTwo[index].date}</div> <button onclick="deleteSingleItem(${index})" class="red-button">Delete</button> <div></div>`;
    });
  };

function deleteSingleItem(i) {
  todoTwo.splice(i, 1);
  localStorage.setItem('todoTwo', JSON.stringify(todoTwo));
  document.querySelector('.js-todo-list-two').innerHTML = '';
  addSecondList();
};

function clearListTwo() {
  const listLngth = todoTwo.length;
  todoTwo.splice(0, listLngth);
  localStorage.setItem('todoTwo', JSON.stringify(todoTwo));
  document.querySelector('.js-todo-list-two').innerHTML = ``;
  document.querySelector('.js-input-2').value = ``;
  document.querySelector('.js-date').value = ``;
};