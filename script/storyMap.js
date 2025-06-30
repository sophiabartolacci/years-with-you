// Preload images
const imageUrls = [
    'https://picsum.photos/400/280?random=1',
    'https://picsum.photos/400/280?random=2',
    'https://picsum.photos/400/280?random=3',
    'https://picsum.photos/400/280?random=4',
    'https://picsum.photos/400/280?random=5',
    'https://picsum.photos/400/280?random=6',
    'https://picsum.photos/400/280?random=7',
    'https://picsum.photos/400/280?random=8'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Interactive Story Map functionality
document.addEventListener('DOMContentLoaded', function() {
    const photoStories = document.querySelectorAll('.photo-story');
    
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = entry.target.classList.contains('even') ? 'translateX(0)' : 'translateX(0)';
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe photo stories except the first one
    photoStories.forEach((story, index) => {
        if (index > 0) {
            observer.observe(story);
            if (story.matches(':nth-child(even)')) {
                story.classList.add('even');
            }
        }
    });
});