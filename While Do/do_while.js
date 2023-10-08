// script.js

document.getElementById('tampilkanPopupWhile').addEventListener('click', function() {
    let pesan = "Iterasi (While): ";
    let i = 1;

    while (i <= 5) {
        pesan += i + " ";
        i++;
    }

    window.alert(pesan);
});

document.getElementById('tampilkanPopupDoWhile').addEventListener('click', function() {
    let pesan = "Iterasi (Do While): ";
    let i = 1;

    do {
        pesan += i + " ";
        i++;
    } while (i <= 5);

    window.alert(pesan);
});
