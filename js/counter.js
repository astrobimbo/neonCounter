const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const decrementBtn = document.getElementById('decrement');

let counterValue = 0;
incrementBtn.addEventListener('click', ()=> {
    counterValue += 1;
    counter.innerHTML = counterValue;
})

decrementBtn.addEventListener('click', ()=> {
    counterValue -= 1;
    counter.innerHTML = counterValue;
})

resetBtn.addEventListener('click', ()=> {
    counterValue = 0;
    counter.innerHTML = counterValue;
})
