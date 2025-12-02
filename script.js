// Get all filter buttons and project cards
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter projects
        filterProjects(filterValue);
    });
});

function filterProjects(category) {
    projectCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        }
    });
}
