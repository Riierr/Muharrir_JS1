// script.js

document.getElementById('tampilkanPopup').addEventListener('click', function() {
    let pesan = "Iterasi: ";
    for (let i = 1; i <= 5; i++) {
        pesan += i + " ";
    }

    window.alert(pesan);
});
