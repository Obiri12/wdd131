// Array of product objects
const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Function to populate product dropdown
function populateProductOptions() {
  const selectElement = document.getElementById("product-name");

  products.forEach(product => {
      let option = document.createElement("option");
      option.value = product.id;
      option.text = product.name;
      selectElement.appendChild(option);
  });
}


function setLastModification() {
  const lastModified = new Date(document.lastModified);
  document.getElementById("last-modification").textContent = lastModified.toLocaleString();
}


function incrementReviewCount() {
  let reviewCount = localStorage.getItem("reviewCount");

  if (reviewCount === null) {
      reviewCount = 0;
  } else {
      reviewCount = parseInt(reviewCount);
  }

  
  reviewCount += 1;

  
  localStorage.setItem("reviewCount", reviewCount);
}


document.addEventListener("DOMContentLoaded", function () {
  populateProductOptions();
  setLastModification();
  
  // Check if we are on the review.html page
  if (window.location.pathname.includes("review.html")) {
      incrementReviewCount();
  }
});