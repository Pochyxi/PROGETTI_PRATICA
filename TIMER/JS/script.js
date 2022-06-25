let box = document.createElement('div');
box.className = 'box';
document.getElementsByClassName('container')[0].appendChild(box);
let interval; 
function startTimer() {
    let timer = document.querySelector('.box');
    let sec = 0;
    let min = 0;

    interval = setInterval(() => {
        sec++
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (sec < 5 && min < 1) {
            timer.innerHTML = 'WELCOME TO THE TIMER BOX';
        } else {
            timer.innerHTML = 'TIMER : ' + min + ' minuti ' + sec + ' secondi';
        }
        

        if (sec >= 5) {
            timer.classList.add('boxFormat')
        } 
        if (sec >= 10) {
            timer.classList.add('boxBorder')
        }
        
        
    }, 1000);
    
}

startTimer();

let box2 = document.createElement('div');
box2.classList.add('box2')
document.getElementsByClassName('container')[0].appendChild(box2);

// faccio un ciclo per inserire 8 div dentro al box2 i quali avranno colori casuali

let arrayO = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'] 

function shuffle(a) {
    let currentIndex = a.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) { 
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

let arrayM = shuffle(arrayO);
console.log(arrayM);

for ( let i = 0; i < arrayM.length; i++ ) {
    
    let quadrato = document.createElement('div');
    quadrato.className = arrayM[i];
    document.getElementsByClassName('box2')[0].appendChild(quadrato);
}

let interva2

function startShuffle() {
    interva2 = setInterval(()=>{
        let arrayColor = ['black', 'red', 'green', 'yellow', 'blue', 'gray', 'violet'];
        let arrayColorShuffle = shuffle(arrayColor);
        let arrayColorIndexShuffle = Math.floor(Math.random() * arrayColor.length);
        let arrayColorElementSuffle = arrayColor[arrayColorIndexShuffle];
        console.log(arrayColorElementSuffle) // colori a random

        let arrayIndexShuffle = Math.floor(Math.random() * arrayM.length);
        let arrayElementShuffle = arrayM[arrayIndexShuffle]; // classi a random

        let classShuffle = document.getElementsByClassName(arrayElementShuffle)[0];
        console.log(classShuffle);
        classShuffle.style.backgroundColor = arrayColorElementSuffle;
        classShuffle.innerHTML = arrayColorElementSuffle;
        if (arrayColorElementSuffle == 'black' || arrayColorElementSuffle == 'blue') {
            classShuffle.style.color = 'white';
        } else {
            classShuffle.style.color = 'black';
        }
       
    }, 1000);
}
 startShuffle()