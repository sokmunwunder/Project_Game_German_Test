const canvas = document.querySelector('canvas');
//const context = canvas.getContext('2d');

const game = new Game(canvas);

const triggerPlayElement = document.getElementById('trigger-take-test');
const triggerPlayAgainElement = document.getElementById('trigger-test-again');

const screenStartElement = document.getElementById('test-start');
const screenFailedTestElement = document.getElementById('screen-failed-test');
const screenPlayElement = document.getElementById('test-ongoing');
const screenPassTestElement = document.getElementById('screen-passed-test');

triggerPlayElement.addEventListener('click', () => {
  screenStartElement.style.display = 'none';
  screenPlayElement.style.display = 'initial';
  console.log('click for test starts activated');
  game.active = true;
  //game.reset();
  game.loop();
});

triggerPlayAgainElement.addEventListener('click', () => {
  screenFailedTestElement.style.display = 'none';
  screenStartElement.style.display = 'none';
  screenPlayElement.style.display = 'initial';
  console.log('retest');
  //game.active = true;
  game.reset();
  game.loop();
});
