const decrement = document.getElementById(`decrement`);
const count = document.getElementById(`count`);



let num = count.textContent;

decrement.addEventListener(`click`, () => {
count.textContent = +count.textContent - 1 + '';
})