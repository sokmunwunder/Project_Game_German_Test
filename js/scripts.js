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
//screenGameOverElement.style.display ='none';
//screenPlayElement.style.display = 'initial';
//game.reset();
// console.log('you are retaking the test');
//game.loop();

//game.runLogic();
//game.drawImage();
//game.setTimeout();

//const triggerPlayElement = document.getElementById('trigger-play');
//const triggerPlayAgainElement = document.getElementById('trigger-play-again');

//const screenStartElement = document.getElementById('screen-start');
//const screenSuccessEndElement = document.getElementById ('screen-passed-test');
//const screenGameOverElement = document.getElementById('screen-failed-test');
//const screenPlayElement = document.getElementById('screen-play');

//triggerPlayElement.addEventListener('click', ()=>{
//screenStartElement.style.display = "none";
//screenPlayElement.style.display = "initial";

//game.loop();
//});

//triggerPlayAgainElement.addEventListener('click', () => {
// screenGameOverElement.style.display = "none";
//screenPlayElement.style.display = "initial";

//game.reset();
//game.loop();
//});
