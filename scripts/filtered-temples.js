const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage Alaska, United States",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ef1d9b0a65b398d3d5aad2ccaad5aa79588b6cfd/full/320%2C/0/default"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 28807,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/b378c080e5880db5bf2bcf6d828b2f3fd59820de/full/320%2C/0/default"
    },
    {
        templeName: "London England",
        location: "Newchapel, Surrey, England",
        dedicated: "1958, September, 7",
        area: 47600,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/914ec5701c2435b4cfa50668de85df2aebf68f26/full/320%2C/0/default"
    }
];

function displayTemples(temples) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Clear any existing content

    temples.forEach(temple => {
        const templeCard = `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            </figure>
        `;
        gallery.innerHTML += templeCard;
    });
}


displayTemples(temples);

// Handle navigation menu clicks
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('hidden');
});

document.getElementById('menu').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        let filteredTemples = [];

        switch (e.target.textContent) {
            case 'Old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'New':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'Large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'Small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples; // Home shows all temples
                break;
        }

        displayTemples(filteredTemples);
        document.getElementById('current-section').textContent = e.target.textContent;
    }
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;