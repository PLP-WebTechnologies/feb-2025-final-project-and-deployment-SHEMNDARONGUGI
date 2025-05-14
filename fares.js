document.addEventListener('DOMContentLoaded', function() {
    const fareForm = document.getElementById('fare-form');
    const fareResult = document.getElementById('fare-result');
    const standardFares = document.getElementById('standard-fares');
    
    // Sample fare data
    const fares = {
        'nairobi-cbd-karen': { min: 80, max: 100 },
        'nairobi-cbd-runda': { min: 70, max: 90 },
        'karen-runda': { min: 120, max: 150 }
    };
    
    // Standard fares list
    const standardFaresData = [
        { route: 'Nairobi CBD to Karen', fare: 'KES 80-100' },
        { route: 'Nairobi CBD to Runda', fare: 'KES 70-90' },
        { route: 'Karen to Runda', fare: 'KES 120-150' }
    ];
    
    // Populate standard fares
    standardFaresData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.route}:</strong> ${item.fare}`;
        standardFares.appendChild(li);
    });
    
    // Calculate fare
    fareForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const start = document.getElementById('start-point').value;
        const end = document.getElementById('end-point').value;
        
        if (!start || !end) {
            fareResult.textContent = 'Please select both starting point and destination';
            return;
        }
        
        if (start === end) {
            fareResult.textContent = 'Starting point and destination cannot be the same';
            return;
        }
        
        const routeKey = [start, end].sort().join('-');
        const fare = fares[routeKey];
        
        if (fare) {
            fareResult.innerHTML = `
                <h3>Estimated Fare</h3>
                <p>KES ${fare.min}-${fare.max}</p>
                <p><small>Prices may vary during peak hours</small></p>
            `;
        } else {
            fareResult.textContent = 'Fare information not available for this route';
        }
    });
});