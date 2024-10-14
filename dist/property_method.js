"use strict";
class Hewan {
    constructor() {
        this.nama = '';
        this.kaki = 0;
    }
    bernafas() {
        console.log(`${this.nama} sedang bernafas, hewan ini mempunyai ${this.kaki}`);
    }
}
const hewan1 = new Hewan();
console.log(hewan1);
hewan1.nama = "ikan";
hewan1.kaki = 7;
console.log(hewan1);
hewan1.bernafas();
const hewan2 = new Hewan();
console.log(hewan2);
hewan2.nama = "paus";
hewan2.kaki = 2;
console.log(hewan2);
hewan2.bernafas();
