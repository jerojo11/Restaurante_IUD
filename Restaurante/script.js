const restaurants = [
    { name: "La Fonda Antioqueña", description: "Comida tradicional colombiana", address: "Cra. 50 # 50-50, Copacabana", image: "https://image-tc.galaxy.tf/wijpeg-18ayqq7eqyvwqtx2dcskvjixq/hermosillo-fonda2_wide.jpg?crop=0%2C99%2C1900%2C1069&width=720" },
    { name: "Gourmet & Grill", description: "Carnes y platos internacionales", address: "Cl. 48 # 49-20, Copacabana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIM4MQP2Ex3XIBetQZRWGbUBEflnoelBdIKA&s" },
    { name: "Sabores de mi Tierra", description: "Comida típica de la región", address: "Cra. 49-98, Copacabana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEzhit9PbeH9rTYPmEhQoTvLhmaNa-w4YKQ&s" },
    { name: "El Rancherito Paisa", description: "Comida colombiana", address: "Copacabana, Antioquia", image: "https://image-tc.galaxy.tf/wijpeg-18ayqq7eqyvwqtx2dcskvjixq/hermosillo-fonda2_wide.jpg?crop=0%2C99%2C1900%2C1069&width=720" }
];

function searchRestaurant() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const results = document.getElementById('search-results');
    results.innerHTML = '';
    const matchedRestaurant = restaurants.find(restaurant => restaurant.name.toLowerCase().includes(query));
    if (matchedRestaurant) {
        results.innerHTML = `
            <div class="restaurant-card">
                <img src="${matchedRestaurant.image}" alt="${matchedRestaurant.name}">
                <div class="content">
                    <h3>${matchedRestaurant.name}</h3>
                    <p>${matchedRestaurant.address}</p>
                    <p>${matchedRestaurant.description}</p>
                </div>
            </div>
        `;
    } else {
        results.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

function addRestaurant() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const address = document.getElementById('address').value;
    const image = document.getElementById('image').value;
    const newRestaurant = { name, description, address, image };
    restaurants.push(newRestaurant);
    alert('Restaurante añadido con éxito');
    document.getElementById('new-restaurant-form').reset();
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
