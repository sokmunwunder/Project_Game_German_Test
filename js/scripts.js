const canvas = document.getElementById('play');
const context = canvas.getContext('2d');

const game = new Game(canvas);
game.runLogic();
game.drawImage();


const triggerPlayElement = document.getElementById('trigger-take-test');
const triggerPlayAgainElement = document.getElementById('trigger-test-again');

const screenStartElement=document.getElementById('test-start');
const screenGameOverElement = document.getElementById('screen-failed-test');
const screenPlayElement = document.getElementById('test-ongoing');

triggerPlayElement.addEventListener('click', () =>{
    //screenStartElement.style.display='none';
    //screenPlayElement.style.display ="initial";
    //game.loop();
    console.log('click for test starts activated');
})

triggerPlayAgainElement.addEventListener('click', ()=>{
    //screenGameOverElement.style.display ='none';
    //screenPlayElement.style.display = 'initial';
    //game.reset();
    console.log('you are retaking the test');
    //game.loop();
})


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