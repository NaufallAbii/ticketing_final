let walletChosen = "";

    function setWallet(wallet) {
        walletChosen = wallet;
        document.getElementById('wallet').textContent = walletChosen;
        console.log("${walletChosen} has been chosen");
    }