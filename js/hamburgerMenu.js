const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    // Add click event listener to toggle the 'active' class
    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });