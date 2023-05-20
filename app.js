let list = document.querySelectorAll('li');
let nav = document.querySelector('.navbar');
let menu = document.querySelector('#menu');
let content = document.querySelector('.content');

function effect() {
    list.forEach(item => {
        item.classList.remove('hovered');
        this.classList.add('hovered');
    });
}
list.forEach(item => {
    item.addEventListener('mouseover', effect);
});

menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    content.classList.toggle('open');
});