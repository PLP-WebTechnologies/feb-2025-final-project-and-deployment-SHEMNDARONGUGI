document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('review-form');
    const tripSelect = document.getElementById('trip-select');
    const reviewsList = document.getElementById('reviews-list');
    const stars = document.querySelectorAll('.star');
    
    let selectedRating = 0;
    
    // Sample trip data
    const trips = [
        { id: 1, route: 'CBD to Karen', date: '2023-10-15', matatu: 'KBS 123A' },
        { id: 2, route: 'CBD to Runda', date: '2023-10-14', matatu: 'KBS 456B' }
    ];
    
    // Sample reviews data
    let reviews = [
        { tripId: 1, rating: 4, review: 'Good service, but a bit crowded', date: '2023-10-15' }
    ];
    
    // Populate trip select
    trips.forEach(trip => {
        const option = document.createElement('option');
        option.value = trip.id;
        option.textContent = `${trip.route} (${trip.date}) - ${trip.matatu}`;
        tripSelect.appendChild(option);
    });
    
    // Star rating functionality
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-value'));
            
            // Highlight selected stars
            stars.forEach((s, index) => {
                if (index < selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Display reviews
    function displayReviews() {
        if (reviews.length === 0) {
            reviewsList.innerHTML = '<p>You haven\'t submitted any reviews yet.</p>';
            return;
        }
        
        let html = '';
        reviews.forEach(review => {
            const trip = trips.find(t => t.id === review.tripId);
            html += `
                <div class="review-card">
                    <h3>${trip ? trip.route : 'Unknown Trip'}</h3>
                    <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                    <p>${review.review}</p>
                    <small>${review.date}</small>
                </div>
            `;
        });
        
        reviewsList.innerHTML = html;
    }
    
    // Initial display
    displayReviews();
    
    // Submit review
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const tripId = parseInt(tripSelect.value);
        const reviewText = document.getElementById('review-text').value;
        
        if (!tripId) {
            alert('Please select a trip');
            return;
        }
        
        if (selectedRating === 0) {
            alert('Please select a rating');
            return;
        }
        
        // Add new review
        const newReview = {
            tripId,
            rating: selectedRating,
            review: reviewText,
            date: new Date().toISOString().split('T')[0]
        };
        
        reviews.unshift(newReview);
        
        // Reset form
        reviewForm.reset();
        stars.forEach(star => star.classList.remove('active'));
        selectedRating = 0;
        
        // Update display
        displayReviews();
        
        alert('Thank you for your review!');
    });
});