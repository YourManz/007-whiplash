const toggled = JSON.parse(localStorage.getItem('toggled')) || {
  gaming:false,
  music:false,
  tech:false
};

function toggledCheck() {
  if (toggled.gaming === true) {
    document.querySelector(`.js-gaming-button`).classList.add('toggled-button');
  };
  if (toggled.music === true) {
    document.querySelector(`.js-music-button`).classList.add('toggled-button');
  };
  if (toggled.tech === true) {
    document.querySelector(`.js-tech-button`).classList.add('toggled-button');
  };
};

function toggleButton(a) {
  const buttonClass = document.querySelector(`.js-${a}-button`);
  //document.querySelector('.category-button').classList.remove('toggled-button');
  toggled[a] = (!toggled[a]);
  
  if (toggled[a] === true) {
    buttonClass.classList.add('toggled-button');
  } else {
    buttonClass.classList.remove('toggled-button');
  }
localStorage.setItem('toggled', JSON.stringify(toggled))
checkButtonToggle();
};

function checkButtonToggle() {
  if (toggled.gaming === true) {
    toggled.gaming = false;
    toggledCheck();
  }
  if (toggled.music === true) {
    toggled.gaming = false;
    toggledCheck();
  }
  if (toggled.tech === true) {
    toggled.gaming = false;
    toggledCheck();
  }
