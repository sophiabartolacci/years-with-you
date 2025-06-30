// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add staggered animation delays
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.animation = 'fadeInUp 0.6s forwards';
    });
});