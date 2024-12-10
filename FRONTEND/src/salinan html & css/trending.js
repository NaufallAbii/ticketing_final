function showTrailer() {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerFrame');
    iframe.src = 'https://www.youtube.com/embed/rrwBnlYOp4g'; // Ganti dengan URL trailer
    modal.style.display = 'flex';
  }
  
  function closeTrailer() {
    const modal = document.getElementById('trailerModal');
    const iframe = document.getElementById('trailerFrame');
    iframe.src = '';
    modal.style.display = 'none';
  }
  