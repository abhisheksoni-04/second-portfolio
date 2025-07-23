document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links');

    // Hamburger menu toggle
    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburgerButton.classList.toggle('active'); // Optional: Add active class for hamburger animation
        });

        // Hide menu when a link is clicked (for single-page sites)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerButton.classList.remove('active'); // Remove active class for hamburger animation
                }
            });
        });
    }

    // Scroll to Top Button
    const scrollBtn = document.getElementById("scrollBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = "flex"; // Use flex to center the arrow
        } else {
            scrollBtn.style.display = "none";
        }
    };

    // Scroll to top function (global, called by onclick in HTML)
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Image Carousel Functionality
    const carouselTrack = document.getElementById('carousel-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const slides = Array.from(carouselTrack.children);
    let currentIndex = 0;

    // Function to calculate the current slide width and set the track position
    function setSlidePosition() {
        // Ensure slides exist before trying to get width
        if (slides.length === 0 || !carouselTrack) {
            return;
        }
        // Recalculate slideWidth every time this function is called.
        // This is crucial for responsiveness across media queries.
        const currentSlideWidth = slides[0].getBoundingClientRect().width;
        carouselTrack.style.transform = `translateX(-${currentIndex * currentSlideWidth}px)`;
    }

    // Add event listeners only if buttons exist
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            setSlidePosition();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Ensure positive index
            setSlidePosition();
        });
    }

    // Auto-slide (Optional - commented out as per previous code, but here for reference)
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % slides.length;
    //     setSlidePosition();
    // }, 5000); // Change slide every 5 seconds

    // Initial positioning and re-positioning on resize
    setSlidePosition(); // Set initial position on load
    window.addEventListener('resize', setSlidePosition); // Recalculate and set position on window resize


    // Swipe functionality for carousel (mobile friendly)
    let touchStartX = 0;
    let touchEndX = 0;

    if (carouselTrack) {
        carouselTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        carouselTrack.addEventListener('touchmove', (e) => {
            touchEndX = e.touches[0].clientX;
        });

        carouselTrack.addEventListener('touchend', () => {
            const minSwipeDistance = 50; // Minimum distance for a recognized swipe

            if (touchEndX < touchStartX - minSwipeDistance) {
                // Swiped left, go to next slide
                currentIndex = (currentIndex + 1) % slides.length;
                setSlidePosition();
            } else if (touchEndX > touchStartX + minSwipeDistance) {
                // Swiped right, go to previous slide
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                setSlidePosition();
            }
            // Reset touch points to prevent accidental re-triggering
            touchStartX = 0;
            touchEndX = 0;
        });
    }
});

















  // Wait for the DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      // Get form field values
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      // Create an object with the contact info
      const contactInfo = {
        name: name,
        email: email,
        message: message,
        submittedAt: new Date().toLocaleString()
      };

      // Get any previous submissions or initialize an empty array
      let submissions = JSON.parse(localStorage.getItem("contactSubmissions")) || [];

      // Add the new submission
      submissions.push(contactInfo);

      // Store back in localStorage
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      // Optional: Show a message or reset form
      alert("Your message has been saved locally!");
      form.reset();
    });
  });

