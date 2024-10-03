// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8)) {
        return Math.round(13.12 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A"; // Conditions not met
    }
}

// Static values
const temperature = 10; // in °C
const windSpeed = 15; // in km/h

// Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed);

// Update the wind chill in the HTML
document.getElementById('windChill').textContent = windChill;

// Update year and last modified date in the footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;