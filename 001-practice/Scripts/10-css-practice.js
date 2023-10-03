const toggled = JSON.parse(localStorage.getItem('toggled')) || {
  gaming:false,
  music:false,
  tech:false
};
const categories = ['gaming', 'music', 'tech'];
let pressedButton = '';


function toggleButton(a) {
  const buttonClass = document.querySelector(`.js-${a}-button`);
  //document.querySelector('.category-button').classList.remove('toggled-button');
  pressedButton = `${a}`;
  toggled[a] = (!toggled[a]);
  
  if (toggled[a] === true) {
    buttonClass.classList.add('toggled-button');
  } else {
    buttonClass.classList.remove('toggled-button');
  }
localStorage.setItem('toggled', JSON.stringify(toggled))
toggledCheck(a);
};

function toggledCheck(a) {
  if (a === 'gaming') {
    document.querySelector(`.js-gaming-button`).classList.add('toggled-button');
    toggled.music = false;
    toggled.tech = false;
    loopThrough();
  };
  if (a === 'music') {
    document.querySelector(`.js-music-button`).classList.add('toggled-button');
    toggled.gaming = false;
    toggled.tech = false;
    loopThrough();
  };
  if (a === 'tech') {
    document.querySelector(`.js-tech-button`).classList.add('toggled-button');
    toggled.gaming = false;
    toggled.music = false;
    loopThrough();
  };
};

function loopThrough() {
  for (i = 0; i<=2; i++) {
    const buttonClass = document.querySelector(`.js-${categories[i]}-button`);
    console.log(categories[i]);
    if (toggled.categories[i] === false) {
      buttonClass.classList.remove('toggled-button');
    };
  }
};
