// Main script with smooth page transitions

document.addEventListener('DOMContentLoaded', function() {
    // Smooth page transition on link clicks
    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('http')) {
                e.preventDefault();
                document.body.classList.add('page-transition');
                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            }
        });
    });
    
    // Page enter animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease-out';
        document.body.style.opacity = '1';
    }, 50);
    
    // Card envelope smooth hover
    const envelope = document.querySelector('.card-envelope');
    if (envelope) {
        envelope.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    }
    
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleEffect 0.8s ease-out';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth'