

document.getElementById('tampilkanPopup').addEventListener('click', function() {
  let nilai = prompt("Masukkan nilai:");

  if (nilai === null || nilai === "") {
      window.alert("Nilai tidak ditemukan");
  } else {
      nilai = parseInt(nilai);

      if (nilai >= 90) {
          window.alert("Nilai Anda adalah A");
      } else if (nilai >= 70) {
          window.alert("Nilai Anda adalah B");
      } else if (nilai >= 50) {
          window.alert("Nilai Anda adalah C");
      } else {
          window.alert("Anda perlu belajar lebih keras.");
      }
  }
});
