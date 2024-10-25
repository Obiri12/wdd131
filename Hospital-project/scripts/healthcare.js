// List of hospitals with images
const hospitals = [
    {
        name: "Korle-Bu Teaching Hospital",
        location: "Accra, Ghana",
        established: "1923",
        area: 160000,
        imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNK_roujbCkKwVpsJDNTZspPKuD2HJwQGAHPvta=s1600-h380"
    },
    {
        name: "Komfo Anokye Teaching Hospital",
        location: "Kumasi, Ghana",
        established: "1954",
        area: 120000,
        imageUrl: "https://th.bing.com/th?id=OLC.5yz3+DA76dcT6g480x360&rs=1&pid=ImgDetMain"
    },
    {
        name: "Tamale Teaching Hospital",
        location: "Tamale, Ghana",
        established: "1974",
        area: 90000,
        imageUrl: "https://th.bing.com/th/id/OIP.JNg2qh_xTGTw4icGc78vRQHaEX?rs=1&pid=ImgDetMain"
    },
    {
        name: "Cape Coast Teaching Hospital",
        location: "Cape Coast, Ghana",
        established: "1998",
        area: 60000,
        imageUrl: "https://www.graphic.com.gh/images/files/becky_2.png"
    }
];

// Function to populate hospital selection in the form
function populateHospitalSelect() {
    const hospitalSelect = document.getElementById('hospital');
    hospitals.forEach(hospital => {
        const option = document.createElement('option');
        option.value = hospital.name;
        option.textContent = hospital.name;
        hospitalSelect.appendChild(option);
    });
}

// Function to display hospital images
function displayHospitalImages() {
    const hospitalImagesContainer = document.getElementById('hospital-images');
    hospitals.forEach(hospital => {
        const hospitalDiv = document.createElement('div');
        hospitalDiv.classList.add('hospital');

        const img = document.createElement('img');
        img.src = hospital.imageUrl;
        img.alt = '${hospital.name} - ${hospital.location};' 
        img.classList.add('hospital-image');

        const name = document.createElement('h3');
        name.textContent = hospital.name;

        hospitalDiv.appendChild(img);
        hospitalDiv.appendChild(name);
        hospitalImagesContainer.appendChild(hospitalDiv);
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Extract data from form
    const data = {
        name: formData.get('name'),
        hospital: formData.get('hospital'),
        date: formData.get('date'),
        specialization: formData.get('specialization'),
        doctor: formData.get('doctor'),
        message: formData.get('message'),
        email: formData.get('email'),
        phone: formData.get('phone')
    };

    // Basic validation
    if (!data.name || !data.hospital || !data.date || !data.email) {
        alert('Please fill in all required fields.');
        return;
    }

    // Store data in localStorage
    localStorage.setItem('appointmentData', JSON.stringify(data));

    console.log("Appointment Data Submitted:", data);
    alert('Your appointment request has been submitted!');
}

// Function to update the year in the footer
function updateFooterYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Initialize the application
function init() {
    populateHospitalSelect();
    displayHospitalImages();
    document.getElementById('appointment-form').addEventListener('submit', handleFormSubmission);
    updateFooterYear();
}

// Call the init function to set everything up on page load
init();