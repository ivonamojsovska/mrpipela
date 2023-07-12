"use strict"

const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav-links')



menu.addEventListener('click', function () {
    nav.classList.toggle('hidden')
})


