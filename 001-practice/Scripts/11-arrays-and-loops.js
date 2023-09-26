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
  const listLngth = todoTwo.length;

  todoTwo.push(todoInput.value);
  localStorage.setItem('todoOne', JSON.stringify(todoTwo));
  document.querySelector('.js-input-2').value = '';
  document.querySelector('.js-todo-list-two').innerHTML = ``;
  
  todoTest = [
    'one',
    'two',
    'three'
  ]
  
  for (index = 0; todoTest.length - 1; index++) {
    document.querySelector('.js-todo-list-two').innerHTML = `${todoTest[index]}\n`;
    console.log(todoTest[index]);
  }
  
}

function consoleLogArray() {
  console.log(todoOne);
}

function clearList() {
  const listLngth = todoOne.length;
  todoOne.splice(0, listLngth);
  localStorage.setItem('todoOne', JSON.stringify(todoOne));
}
