document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("last-modified");

    // Set current year
    yearElement.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedElement.textContent = document.lastModified;

    // Hamburger menu functionality
    const hamburgerButton = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburgerButton.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        hamburgerButton.textContent = menu.classList.contains("hidden") ? '☰' : '✖';
    });
});