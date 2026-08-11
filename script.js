// ==============================
// PEMAIN
// ==============================

const players = [
    {
        name: "Merah",
        icon: "🔴",
        piece: "red1"
    },

    {
        name: "Hijau",
        icon: "🟢",
        piece: "green1"
    },

    {
        name: "Kuning",
        icon: "🟡",
        piece: "yellow1"
    },

    {
        name: "Biru",
        icon: "🔵",
        piece: "blue1"
    }
];


// ==============================
// DATA GAME
// ==============================

let currentPlayer = 0;

let diceNumber = 0;

let position = 0;


// ==============================
// LEMPAR DADU
// ==============================

function rollDice() {

    diceNumber =
        Math.floor(Math.random() * 6) + 1;


    // Tampilkan angka dadu

    document.getElementById("dice")
        .textContent = diceNumber;


    // Tampilkan pesan

    document.getElementById("message")
        .textContent =
        players[currentPlayer].icon +
        " mendapatkan angka " +
        diceNumber;


    // Ambil bidak pemain

    const piece =
        document.getElementById(
            players[currentPlayer].piece
        );


    // Efek bidak

    piece.classList.add("moving");


    // Gerakkan bidak setelah sebentar

    setTimeout(function () {

        movePiece(
            players[currentPlayer].piece,
            diceNumber
        );

    }, 500);

}


// ==============================
// GERAK BIDAK
// ==============================

function movePiece(pieceId, steps) {

    position += steps;


    // Membatasi posisi sementara

    if (position > 12) {

        position = 12;

    }


    // Daftar kotak

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


    // Bidak

    const piece =
        document.getElementById(pieceId);


    // Hilangkan efek

    piece.classList.remove("moving");


    // Ambil kotak

    const target =
        document.getElementById(
            cells[position - 1]
        );


    // Pindahkan bidak

    if (target) {

        target.appendChild(piece);

    }


    // Ganti pemain

    setTimeout(nextPlayer, 1000);

}


// ==============================
// GANTI PEMAIN
// ==============================

function nextPlayer() {

    currentPlayer++;

    if (currentPlayer >= players.length) {

        currentPlayer = 0;

    }


    document.getElementById("turn")
        .textContent =
        "Giliran " +
        players[currentPlayer].icon +
        " " +
        players[currentPlayer].name;

}
