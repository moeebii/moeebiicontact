// script.js

// Function to check if the screen width is greater than 768 pixels (tablet or desktop)
function isDesktopOrTablet() {
    return window.innerWidth > 768;
  }
  
  // Function to redirect to the specified page
  function redirectIfDesktopOrTablet() {
    if (isDesktopOrTablet()) {
      window.location.href = "https://moeebii.github.io/moeebiiworks/";
    }
  }
  
  // Call the redirection function when the window is loaded
  window.onload = function () {
    redirectIfDesktopOrTablet();
  };
  
  // Call the redirection function when the window is resized
  window.onresize = function () {
    redirectIfDesktopOrTablet();
  };
  