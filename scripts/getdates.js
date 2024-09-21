// JavaScript to dynamically insert the current year and last modified date

// Function to get the current year and display it in the #currentyear span
const yearElement = document.getElementById("currentyear");
if (yearElement) {
    const currentYear = new Date().getFullYear();  // Get current year
    yearElement.textContent = currentYear;         // Insert current year into the span
}

// Function to get the last modified date of the document
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    const lastModified = document.lastModified;    // Get the last modified date of the document
    lastModifiedElement.textContent = 'lastModified: ${lastModified}'; // Insert it into the paragraph
}