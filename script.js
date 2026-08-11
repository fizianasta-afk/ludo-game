// =============================
// DATA PEMAIN
// =============================

const players = [
    {
        name: "Merah",
        icon: "🔴"
    },
    {
        name: "Hijau",
        icon: "🟢"
    },
    {
        name: "Kuning",
        icon: "🟡"
    },
    {
        name: "Biru",
        icon: "🔵"
    }
];


// =============================
// PEMAIN SAAT INI
// =============================

let currentPlayer = 0;


// =============================
// FUNGSI LEMPAR DADU
// =============================

function rollDice() {

    // Mengambil angka acak 1 sampai 6
    const diceNumber =
        Math.floor(Math.random() * 6) + 1;


    // Menampilkan angka dadu
    document.getElementById("dice").textContent =
        diceNumber;


    // Menampilkan informasi
    document.getElementById("turn").textContent =
        players[currentPlayer].icon +
        " " +
        players[currentPlayer].name +
        " mendapatkan angka " +
        diceNumber;


    // Pindah pemain
    setTimeout(nextPlayer, 1500);
}


// =============================
// GANTI PEMAIN
// =============================

function nextPlayer() {

    currentPlayer++;

    // Kalau sudah pemain terakhir
    if (currentPlayer >= players.length) {

        currentPlayer = 0;

    }


    // Tampilkan giliran berikutnya
    document.getElementById("turn").textContent =
        "Giliran " +
        players[currentPlayer].icon +
        " " +
        players[currentPlayer].name;
}
