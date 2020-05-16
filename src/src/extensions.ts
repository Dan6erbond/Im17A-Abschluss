﻿declare global {
    interface Array<T> {
        shuffle(): Array<T>;
    }
}

if (!Array.prototype.hasOwnProperty('shuffle')) {
    Array.prototype.shuffle = function () {
        let array = Object.assign([], this);
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}

export {};