
//==========================================================================
const todoTwo= JSON.parse(localStorage.getItem('todoTwo')) || [];
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