// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (would be added in a real implementation)
    
    // Current year for footer
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', currentYear);
    }
});