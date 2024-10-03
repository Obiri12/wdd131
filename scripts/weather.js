document.addEventListener('DOMContentLoaded', () => {
    const temp = 15; // Static temperature in Celsius
    const windSpeed = 10; // Static wind speed in km/h

    // Calculate wind chill based on temperature and wind speed
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(2); // Return with two decimal places
        }
        return 'N/A';
    }

    // Display wind chill
    const windChillElement = document.getElementById('windChill');
    windChillElement.textContent = calculateWindChill(temp, windSpeed);

    // Display the current year in the footer
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();

    // Display the last modified date in the footer
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = document.lastModified;
});