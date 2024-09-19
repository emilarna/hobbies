function toggleImage() {
    const image = document.getElementById('toggle-image');
    const toggleButton = document.getElementById('toggle-button');
  
    if (toggleButton.checked) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  }
  