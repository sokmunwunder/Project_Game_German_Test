const canvas = document.getElementById('play');
const context = canvas.getContext('2d');



class Game {
    constructor(game, x, y){
        game = this;
        this.x = x;
        this.y = y; 
    }
    runLogic(){
     console.log("test");
    };
    drawImage(){
    console.log('draw');
    //setTimeout(() =>{
        //console.log('every 1 sec');
   // },1000);
    };
}

const game = new Game(canvas);
game.runLogic();
game.drawImage();
//game.setTimeout();


//const canvasElement = document.querySelector('canvas');

//const game = new Game(canvasElement);

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