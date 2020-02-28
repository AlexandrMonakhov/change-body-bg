'use strict';

const p = document.querySelector('.color'),
    btn = document.querySelector('#new-color'),
    body = document.querySelector('body');

const getBodyRGB = () => {
    const bodyBgRGB = getComputedStyle(body).backgroundColor.match((/(\d){1,3}/g));
    let r = parseInt(bodyBgRGB[0]).toString(16),
        g = parseInt(bodyBgRGB[1]).toString(16),
        b = parseInt(bodyBgRGB[2]).toString(16),
        hex = `#${r+g+b}`;

p.textContent = hex;
};

getBodyRGB();

btn.addEventListener('click', () => {
    body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    btn.style.color = body.style.backgroundColor;
    getBodyRGB();
});