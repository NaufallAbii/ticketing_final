let ticketPrice = 0;

    function setPrice(harga) {
      ticketPrice = harga;
      document.getElementById('harga').textContent = ticketPrice;
      console.log(`Price set to: $${ticketPrice}`); // Useful for debugging
    }


