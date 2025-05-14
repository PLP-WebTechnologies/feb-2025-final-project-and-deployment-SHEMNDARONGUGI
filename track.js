document.addEventListener('DOMContentLoaded', function() {
    const locateBtn = document.getElementById('locate-btn');
    const routeFilter = document.getElementById('route-filter');
    const matatuList = document.getElementById('matatu-list');
    
    // Sample data - in a real app this would come from an API
    const matatus = [
        { id: 1, route: 'cbd-karen', number: 'KBS 123A', distance: '0.5km', eta: '3 min' },
        { id: 2, route: 'cbd-runda', number: 'KBS 456B', distance: '1.2km', eta: '7 min' },
        { id: 3, route: 'cbd-karen', number: 'KBS 789C', distance: '0.8km', eta: '5 min' }
    ];
    
    // Display matatus
    function displayMatatus(filter = '') {
        const filtered = filter ? matatus.filter(m => m.route === filter) : matatus;
        
        if (filtered.length === 0) {
            matatuList.innerHTML = '<p>No matatus found for the selected route.</p>';
            return;
        }
        
        let html = '';
        filtered.forEach(matatu => {
            html += `
                <div class="matatu-card">
                    <h3>Matatu ${matatu.number}</h3>
                    <p>Distance: ${matatu.distance}</p>
                    <p>ETA: ${matatu.eta}</p>
                </div>
            `;
        });
        
        matatuList.innerHTML = html;
    }
    
    // Initial display
    displayMatatus();
    
    // Event listeners
    locateBtn.addEventListener('click', function() {
        alert('Finding your location... In a real app, this would use the Geolocation API.');
    });
    
    routeFilter.addEventListener('change', function() {
        displayMatatus(this.value);
    });
});