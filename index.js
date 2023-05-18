const showButtonBTC = document.getElementById("bitcoin-button");
const btcPic = document.getElementById("BTC");

const showButtonYEC = document.getElementById("yec-button");
const yecPic = document.getElementById("YEC");

const showButtonSTX = document.getElementById("stx-button");
const stxPic = document.getElementById("STX");


showButtonBTC.addEventListener("click", () => {
    if (btcPic.style.display == "none") {
        btcPic.style.display = "block";
    } else {
        btcPic.style.display = "none";
        }
})

showButtonYEC.addEventListener("click", () => {
    if (yecPic.style.display == "none") {
        yecPic.style.display = "block";
    } else {
        yecPic.style.display = "none";
    }
})

showButtonSTX.addEventListener("click", () => {
    if (stxPic.style.display == "none") {
        stxPic.style.display = "block";
    } else {
        stxPic.style.display = "none";
    }
})

