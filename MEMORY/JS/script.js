// let card1 = document.querySelector('#card1');
// let card1Check = true;
// let card1Corr = false;

// card1.addEventListener('click',()=>{
//     if(card1Check == true){
//     card1.style.transform = 'rotateY(180deg)';
//     card1Check = false;
//     card1Corr= true;
//     } else {
//         card1.style.transform = 'rotateY(0deg)';
//         card1Check = true;
//         card1Corr = false;
//     }

//     if (card1Corr == true && card2Corr == true) {
//     card1.classList.add('verde')
//     card2.classList.add('verde')
//     }
// })

// let card2 = document.querySelector('#card2');
// let card2Check = true;
// let card2Corr = false;

// card2.addEventListener('click',()=>{
//     if(card2Check == true){
//     card2.style.transform = 'rotateY(180deg)';
//     card2Check = false;
//     card2Corr= true;
//     } else {
//         card2.style.transform = 'rotateY(0deg)';
//         card2Check = true;
//         card2Corr = false;
//     }

//     if (card1Corr == true && card2Corr == true) {
//         card1.classList.add('verde')
//         card2.classList.add('verde')
//         }
// })


let cards = document.querySelectorAll('.cards')
let card1 = cards[0]
let card2 = cards[1]
let card3 = cards[2]
let card4 = cards[3]

cards.forEach(function (e) {

    e.addEventListener('click', ()=>{
        if (e.style.transform == '' || e.style.transform == 'rotateY(0deg)') {
            e.style.transform = 'rotateY(180deg)'
        } else {
            e.style.transform = 'rotateY(0deg)'
        }
        if (card1.style.transform == 'rotateY(180deg)' && card3.style.transform == 'rotateY(180deg)'){
            card1.classList.add('verde')
            card3.classList.add('verde')
        }
        if (card2.style.transform == 'rotateY(180deg)' && card4.style.transform == 'rotateY(180deg)'){
            card2.classList.add('rosso')
            card4.classList.add('rosso')
        }
    })



})




