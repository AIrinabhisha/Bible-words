// JavaScript for responsive layout adjustments
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".genesis, .exodus, .leviticus, .numbers, .deuteronomy, .judges, .joshua, .ruth");
  
    function adjustLayout() {
      const screenWidth = window.innerWidth;
  
      // For desktop view
      if (screenWidth > 768) {
        cards.forEach((card) => {
          card.style.width = "30%"; // 30% width for desktop
          card.style.margin = "20px"; // Spacing between cards
          card.style.textAlign = "left"; // Align text to the left for better readability
        });
      } else {
        // For mobile view
        cards.forEach((card) => {
          card.style.width = "90%"; // 90% width for mobile
          card.style.margin = "10px auto"; // Center the cards with auto margins
          card.style.textAlign = "center"; // Center-align text for mobile
        });
      }
    }
  
    // Adjust layout on page load and when resizing the window
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
  });
  