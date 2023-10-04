function greeting() {
  console.log('hello');
}
greeting();
 
const function1 = function() {
  console.log('hello2');
};

[
'first example',
'second example',
'third axample'
].forEach(function(value, index) {
  console.log(`${index + 1} ${value}`);
})

const arrowFunction = () => {
  console.log('hello');
}
arrowFunction();

const buttonElement = document.querySelector('.js-button');

buttonElement.addEventListener('click', () => {
  console.log('Ahem');
  document.querySelector('body').innerHTML += '<div>Word </div>'
});