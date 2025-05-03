
// Function to determine the scroll direction based on screen width
  function getDirection() {
    // If the screen width is 760px or less, return 'vertical'
    // Else, return 'horizontal'
    return window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  }

  // Initialize a new Swiper instance
  var swiper = new Swiper('.swiper', {
    // Number of slides visible at the same time
    slidesPerView: 3,

    // Space in pixels between each slide
    spaceBetween: 50,

    // Set direction (horizontal or vertical) depending on screen width
    direction: getDirection(),

    // Enable navigation buttons
    navigation: {
      nextEl: '.swiper-button-next', // Selector for the "Next" button
      prevEl: '.swiper-button-prev', // Selector for the "Previous" button
    },

    // Event listeners
    on: {
      // When the window is resized
      resize: function () {
        // Change the swiper direction based on new screen width
        swiper.changeDirection(getDirection());
      },
    },
  });
