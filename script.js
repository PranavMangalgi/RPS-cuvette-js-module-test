const rules = document.querySelector('#rules-btn');
const showRules = document.querySelector('.game-rules');
const crossBtn = document.querySelector('#cross');
const play = document.querySelector('.play')

rules.addEventListener('click',showHideRules)
crossBtn.addEventListener('click',showHideRules)

function showHideRules(){
    showRules.style.right = showRules.style.getPropertyValue('right') === `1rem` ? '-25rem':'1rem';
    crossBtn.style.display = crossBtn.style.getPropertyValue('display') ==='inline-block'?'none':'inline-block';
}

const pcChoice = ['rock','paper','scissors']
const resultSection = document.querySelector('.result')
const selectedItem= document.querySelectorAll('.play div');
const playAgainBtn = document.querySelectorAll('.play-again-btn');

Array.from(selectedItem).forEach((input)=>{
    input.addEventListener('click',(e)=>{
        console.log(e.currentTarget.getAttribute('value'));

        const random = Math.floor(Math.random()*pcChoice.length);

        console.log();
        console.log(pcChoice[random]);

        checkWhoWon(e.currentTarget.getAttribute('value'),pcChoice[random]);

        // why are the below two lines not working?
        play.classList.add('inactive');
        resultSection.classList.remove('inactive')
    })
})

function checkWhoWon(player, computer){
    if(player=='rock'){
        if(computer=='rock'){
            updatePage(player, computer,'tie');
            
        }
        if(computer=='scissors'){
            updatePage(player, computer,'playerwins');
        }
        if(computer=='paper'){
            updatePage(player, computer,'pcwins');
        }
    }
    if(player=='scissors'){
        if(computer=='rock'){
            
            updatePage(player, computer,'pcwins');
            
        }
        if(computer=='scissors'){
            updatePage(player, computer,'tie');
        }
        if(computer=='paper'){
            updatePage(player, computer,'playerwins');
        }
    }
    if(player=='paper'){
        if(computer=='rock'){
            
            updatePage(player, computer,'playerwins');
            
        }
        if(computer=='scissors'){
            updatePage(player, computer,'pcwins');
        }
        if(computer=='paper'){
            updatePage(player, computer,'tie');
        }
    }
    
}

function updatePage(player, computer, status){
    const playerChoice = document.querySelector('.player-choice img')
    playerChoice.src = `./assets/${player}.png`
    const compChoice = document.querySelector('.pc-choice img')
    compChoice.src = `./assets/${computer}.png`

    const result = document.querySelector('.won-lost');
    result.textContent = ``
    if(status=='tie'){
        result.textContent = 'TIE UP';
        document.querySelector('.won-lost + div').classList.add('inactive')
    }
    else if(status=='playerwins'){
        result.textContent = 'YOU WON';
        document.querySelector('#next-btn').classList.remove('inactive');
        rules.style.marginRight = '6%';
    }else if(status=='pcwins'){
        result.textContent = 'YOU LOST'
    }
}

Array.from(playAgainBtn).forEach(btn=>{
    btn.addEventListener('click',()=>{
        window.location.reload();
    })
})

document.querySelector('#next-btn').addEventListener('click',()=>{
    play.classList.add('inactive');
    resultSection.classList.add('inactive');
    document.querySelector('header').classList.add('inactive');
    document.querySelector('.hurray').classList.remove('inactive')
    document.querySelector('#next-btn').classList.add('inactive');
    rules.style.marginRight = '0%';
})