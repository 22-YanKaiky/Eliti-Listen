const btn = document.querySelector('button#button-add');
const btnEmpty = document.querySelector('button#button-empty');
const ul = document.querySelector('ul#list');
let li = document.createAttribute('li');

btn.addEventListener('click', () => {
    const value = document.querySelector('input#value').value;

    if(value) {
        li = value;
        ul.innerHTML += `${li}</br>`;
    }
})

btnEmpty.addEventListener('click', () => {
    ul.innerHTML = ''
})
