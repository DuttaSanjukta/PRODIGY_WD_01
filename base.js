window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'yellow';
    } else {
      navbar.style.backgroundColor = 'white';
    }
  });
  