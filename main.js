document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.read-more-btn');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const fullText = this.previousElementSibling;
        const excerpt = fullText.previousElementSibling;
  
        if (fullText.style.display === 'none' || fullText.style.display === '') {
          fullText.style.display = 'block';
          excerpt.style.display = 'none';
          this.textContent = 'Read Less';
        } else {
          fullText.style.display = 'none';
          excerpt.style.display = 'block';
          this.textContent = 'Read More';
        }
      });
    });
  });
  