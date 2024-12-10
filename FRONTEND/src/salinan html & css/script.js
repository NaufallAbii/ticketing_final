document.getElementById('hamburger-menu').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// Ensure the same links are used for both desktop and mobile
document.getElementById('movie-link').addEventListener('click', function() {
    window.location.href = '#movie';
});
document.getElementById('trending-link').addEventListener('click', function() {
    window.location.href = '#trending';
});
document.getElementById('food-link').addEventListener('click', function() {
    window.location.href = '#food';
});