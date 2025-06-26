// Interactive Story Map functionality
document.addEventListener('DOMContentLoaded', function() {
    const photoStories = document.querySelectorAll('.photo-story');
    
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all photo stories
    photoStories.forEach(story => {
        observer.observe(story);
    });
    
    // Stagger animation delays for photo stories
    photoStories.forEach((story, index) => {
        story.style.animationDelay = `${0.3 + (index * 0.2)}s`;
    });
    

});