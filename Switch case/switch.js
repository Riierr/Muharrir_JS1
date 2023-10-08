// script.js

document.getElementById('tampilkanPopup').addEventListener('click', function() {
    let pilihan = prompt("Masukkan pilihan (pacaran, sahabat, atau HTS):");
    let hasil;

    switch (pilihan) {
        case 'Pacaran':
        case 'pacaran':
            hasil = "I LOVE YOU";
            break;
        case 'Sahabat':
        case 'sahabat':
            hasil = "Baiklah , sampai bertemu dio ketidaksengajaan berikutnya";
            break;
        case 'HTS':
        case 'hts':
            hasil = "mengagumimu adalah caraku , namun memilikimu bukan takdirku :( ";
            break;
        default:
            hasil = " BELOVED ME :)";
    }

    window.alert(hasil);
});
