// Static values for temperature and wind speed (for this example)
const temperatureCelsius = 10; // Temperature in Celsius
const windSpeedKmh = 4.8;        // Wind speed in km/h

// Function to calculate wind chill factor
function calculateWindChill(temp, speed) {
  // Wind chill formula for Celsius
  return (
    (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed / 3.6, 0.16)) + (0.3965 * temp * Math.pow(speed / 3.6, 0.16)))
  ).toFixed(2); // Return the wind chill rounded to two decimal places
}

// Function to handle wind chill calculation and display
function displayWindChill() {
  const windChillElement = document.getElementById("windChill");

  // Check conditions for viable wind chill calculation
  if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureCelsius, windSpeedKmh);
    windChillElement.textContent = $;{windChill} '°C';
  } else {
    windChillElement.textContent = "N/A"; // Not applicable if conditions aren't met
  }
}

// Display the current year and last modified date in the footer
function updateFooter() {
  const currentYearElement = document.getElementById("year");
  const lastModifiedElement = document.getElementById("lastModified");
  
  currentYearElement.textContent = new Date().getFullYear(); // Current year
  lastModifiedElement.textContent = document.lastModified; // Last modified date
}

// Run functions on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  displayWindChill(); // Calculate and display wind chill
  updateFooter();     // Update footer with current year and last modified date
    })