'use strict';

function collapsExpand(event) {
    event.preventDefault();
    event.stopPropagation();
    let parent = this.closest(".folder-list__item");
    parent.classList.toggle('is-open');
}

function selectFolder(event) {
    event.preventDefault();
    event.stopPropagation();

    if(event.shiftKey){
        this.classList.toggle('is-selected');
    } else {
        let selected = document.querySelectorAll(".is-selected");
        for (let i = 0; i < selected.length; i++) {
            selected[i].classList.remove('is-selected');
        }
        this.classList.add('is-selected');
    }
}

function removeSelection() {
    let selected = document.querySelectorAll(".is-selected");
    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.remove('is-selected');
    }
}

let folders = document.querySelectorAll(".folder-list__item");

let foldersClickers = document.querySelectorAll(".folder__clicker-arrow");

for (let i = 0; i < foldersClickers.length; i++) {
    foldersClickers[i].addEventListener('click', collapsExpand);
}

for (let i = 0; i < folders.length; i++) {
    folders[i].addEventListener('click', selectFolder);
}

document.addEventListener('click', removeSelection);