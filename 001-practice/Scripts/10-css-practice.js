const toggled = JSON.parse(localStorage.getItem('toggled')) || {
  gaming:false,
  music:false,
  tech:false
};
const categories = ['gaming', 'music', 'tech'];
loopThrough();

function toggleButton(a) {
  const buttonClass = document.querySelector(`.js-${a}-button`);
  //document.querySelector('.category-button').classList.remove('toggled-button');
  toggled[a] = (!toggled[a]);
  
  if (toggled[a] === true) {
    buttonClass.classList.add('toggled-button');
  } else {
    buttonClass.classList.remove('toggled-button');
  }
localStorage.setItem('toggled', JSON.stringify(toggled));
toggledCheck(a);
};

function toggledCheck(a) {
  if (a === 'gaming') {
    document.querySelector(`.js-gaming-button`).classList.add('toggled-button');
    toggled.music = false;
    toggled.tech = false;
    localStorage.setItem('toggled', JSON.stringify(toggled));
    loopThrough();
  };
  if (a === 'music') {
    document.querySelector(`.js-music-button`).classList.add('toggled-button');
    toggled.gaming = false;
    toggled.tech = false;
    localStorage.setItem('toggled', JSON.stringify(toggled));
    loopThrough();
  };
  if (a === 'tech') {
    document.querySelector(`.js-tech-button`).classList.add('toggled-button');
    toggled.gaming = false;
    toggled.music = false;
    localStorage.setItem('toggled', JSON.stringify(toggled));
    loopThrough();
  };
};

function loopThrough() {
  for (i = 0; i<categories.length; i++) {
    const buttonClass = document.querySelector(`.js-${categories[i]}-button`);
    if (toggled[categories[i]] === false) {
      buttonClass.classList.remove('toggled-button');
    } else if (toggled[categories[i]] === true) {
      buttonClass.classList.add('toggled-button');
    };
  };
};
