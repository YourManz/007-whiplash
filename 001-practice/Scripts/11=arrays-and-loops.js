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