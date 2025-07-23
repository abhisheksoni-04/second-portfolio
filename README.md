Abhishek Soni | Personal Portfolio
This is a personal portfolio website for Abhishek Soni, a BCA student passionate about web development and UI design. The website showcases his skills, projects, and provides a way to contact him.

Features
Responsive Design: Optimized for various screen sizes (desktop, tablet, mobile).

Navigation Bar: Sticky header with smooth scrolling to different sections.

Hamburger Menu: Responsive navigation for mobile devices.

Hero Section: Introduces Abhishek Soni as a Web Developer.

About Section: Detailed information about Abhishek's background, skills, and goals.

Projects Section: A carousel showcasing various projects with hover effects and links.

Contact Form: A form for visitors to send messages (currently saves to local storage, see "Important Note on Contact Form" below).

Scroll-to-Top Button: A convenient button to quickly scroll back to the top of the page.

Technologies Used
HTML5: Structure and content of the website.

CSS3: Styling and layout, including responsive design and animations.

JavaScript (ES6+):

Hamburger menu functionality.

Scroll-to-top button logic.

Image carousel navigation (manual and swipe gestures).

Contact form handling (data collection and local storage persistence).

Project Structure
index.html: The main HTML file containing the structure of the portfolio.

style.css: Contains all the CSS rules for styling the website.

script.js: Contains all the JavaScript logic for interactive elements.

assests/: (Assumed directory) Contains images used in the portfolio (e.g., Abhiimg.png, portfolioproject.jpeg, netflixproject.png, newproj.png).

How to Run Locally
To view this project on your local machine, follow these simple steps:

Clone the repository (if applicable) or download the files:
If this project is hosted on GitHub, you can clone it using Git:

git clone <repository-url>
cd <repository-name>

Otherwise, ensure you have index.html, style.css, and script.js (and the assests folder with images) in the same directory.

Open index.html:
Simply open the index.html file in your preferred web browser. You can do this by double-clicking the file.

The website should load in your browser, and you can interact with all its features.

Important Note on Contact Form
The contact form in this project currently uses JavaScript to save submitted messages to the browser's Local Storage. This means:

Messages are saved only on the visitor's browser. You, as the portfolio owner, will not receive these messages directly.

This implementation is primarily for demonstration purposes of client-side data handling.

To make the contact form fully functional and receive messages, you would need to integrate a backend service or a third-party form provider. Examples include:

Backend: Node.js with Express, Python with Flask/Django, PHP, etc., to handle form submissions and send emails.

Third-Party Services: Formspree, Netlify Forms, Getform, etc., which provide endpoints to receive form data and forward it to your email.

Customization
Content: Edit index.html to update text, links, and project details.

Styling: Modify style.css to change colors, fonts, layout, and other visual aspects.

JavaScript: Adjust script.js for any changes in interactive behavior or to integrate a live contact form solution.

© 2025 Abhishek Soni. All rights reserved.
