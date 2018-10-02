// Initial ratings
const ratings = {
  xbox: 4.8,
  sony: 4.5,
  nintendo: 3.8,
  sega: 3.2,
  pc: 4.5
}

// Total Stars
const starsTotal = 5;

// Run Get Ratings When DOM Loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init Product
let product;

// Product Select Change
productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  // Enable Rating Control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// Rating Control Change
ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;

  // Make Sure 5 or Under
  if (rating > 5) {
    alert('Please Rate 1 - 5');
    return;
  }

  // Change Rating
  ratings[product] = rating;

  getRatings();
});

// Get Ratings
function getRatings() {
  for (let rating in ratings) {
    // Get Percentage
    const starPercentage = (ratings[rating]) / starsTotal * 100;

    // Round to Nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set Width of stars-inner to Percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add Number Rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}