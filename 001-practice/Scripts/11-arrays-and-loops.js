const todoOne= JSON.parse(localStorage.getItem('todoOne')) || [];
function addItem1() {
  todoOne.push(document.querySelector('.js-input-1').value);
  localStorage.setItem('todoOne', JSON.stringify(todoOne));
  document.querySelector('.js-input-1').value = '';
}

function consoleLogArray() {
  console.log(todoOne);
}

function clearList() {
  const listLngth = todoOne.length;
  todoOne.splice(0, listLngth);
  localStorage.setItem('todoOne', JSON.stringify(todoOne));
}
//==========================================================================
const todoTwo= JSON.parse(localStorage.getItem('todoTwo')) || [];
function addItem2() {
  const todoInput = document.querySelector('.js-input-2');
  const date = document.querySelector('.js-date').value;

  todoTwo.push({'todo':todoInput.value, 'date':date});// gets value out of item and pushes it into the todoTwo array
  localStorage.setItem('todoTwo', JSON.stringify(todoTwo)); //stores array in localStorage
  
  document.querySelector('.js-input-2').value = '';
  document.querySelector('.js-date').value = ''; //clears relevent html fields before looping items in
  document.querySelector('.js-todo-list-two').innerHTML = ``;

  addSecondList();
}

function addSecondList() {
  for (index = 0; index <= todoTwo.length-1; index++) {
    const date = document.querySelector('.js-date').value;
    document.querySelector('.js-todo-list-two').innerHTML += `<p>${todoTwo[index].todo} ${todoTwo[index].date} <button onclick="deleteSingleItem(${index})">Delete</button></p> `;
  };
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
}


function calculateArray(a) {
  let runningTotal = 0; 
  for (let i=0; i < a.length; i++) {
    if (typeof a[i] === 'number') {
      runningTotal += a[i];
      };
    };
  };

