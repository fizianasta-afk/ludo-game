let position = 0;

const cells = [
    "cell1",
    "cell2",
    "cell3",
    "cell4",
    "cell5",
    "cell6",
    "cell7",
    "cell8",
    "cell9",
    "cell10",
    "cell11",
    "cell12"
];


function rollDice() {

    // Membuat angka 1 sampai 6

    const dice =
        Math.floor(Math.random() * 6) + 1;


    // Tampilkan dadu

    document.getElementById("dice")
        .textContent = dice;


    // Tambahkan posisi

    position = position + dice;


    // Kalau melewati kotak terakhir

    if (position > cells.length) {

        position = cells.length;

    }


    // Ambil bidak

    const piece =
        document.getElementById("redPiece");


    // Ambil kotak tujuan

    const target =
        document.getElementById(
            cells[position - 1]
        );


    // Pindahkan bidak

    target.appendChild(piece);


    // Tampilkan pesan

    document.getElementById("message")
        .textContent =
        "🔴 Bidak bergerak " +
        dice +
        " langkah!";
}
