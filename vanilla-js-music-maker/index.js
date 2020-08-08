window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];


  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      if (index <= 2 && index < pads.length) {
        createBubblesLeft(index);
      } else if (index >= 3 && index < pads.length) {
        createBubblesRight(index);
      }
    });
  });

  // Create a funciton that makes bubbles
  const createBubblesLeft = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump-left 1s ease';  
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  }

  const createBubblesRight = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump-right 1s ease';  
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  }

});
