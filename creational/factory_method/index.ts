// factory method untuk membuat sebuah object 
// berdasarkan class yg berbeda-beda

// misal kita punya sebuah perusahaan yang mana untuk 
// sementara ini pengiriman logistik hanya menggunakan truck

class Truck {
    private qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log(`kirim ${this.qty} menggunakan truk`)
    }
}

// misal perusahaab kita berkembang dan metode pengiriman bertambah

class Ship {
    private qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliver(): void {
        console.log(`kirim ${this.qty} menggunakan kapal`)
    }
} 

let type = 'deliver_by_land';
if (type == 'deliver_by_land') {
    new Truck(100);
} else if (type == 'deliver_by_sea') {
    new Ship(100);
}

// jika perusahaan terus berkembang, maka baris if else akan terus bertambah
// akan jadi masalah bila terjadi di script berbeda juga
// hal tersebut membuat rumit dan script kita tidak maintainable