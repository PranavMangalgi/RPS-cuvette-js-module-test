const rules = document.querySelector('#rules-btn');
const showRules = document.querySelector('.game-rules');
const crossBtn = document.querySelector('.cross');

rules.addEventListener('click',showHide)
crossBtn.addEventListener('click',showHide)

function showHide(){
    showRules.style.right = showRules.style.getPropertyValue('right') === `1rem` ? '-19rem':'1rem';
    crossBtn.style.display = showRules.style.getPropertyValue('right')=='-19rem'?'none':'inline-block';
}