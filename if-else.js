var angka = prompt('masukkan angka');
if (angka % 2 === 0) {
    alert (angka + ' adalah bilangan genap');
} else if (angka % 1 === 0) {
    alert (angka + ' adalah bilangan ganjil');
} else {
    alert ('yang anda masukan bukan angka');
}