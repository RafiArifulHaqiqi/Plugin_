class Hewan100 {
    name!: string;
    kaki!: number;

    constructor(name: string, kaki: number) {
        this.kaki = kaki;
    }
}


class Hewan99 extends Hewan100{
    warna!: string;

    constructor(name: string, kaki: number, warna: string){
        super(name, kaki);
        this.warna = warna;
    }
}

const hewan01 = new Hewan99("Tikus", 6, "pink")
console.log(hewan01);
