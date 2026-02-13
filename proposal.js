// Proposal page functionality with smooth transitions

// Smooth page transition setup
document.addEventListener('DOMContentLoaded', function() {
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
});

function sayYes() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const celebration = document.getElementById('celebration');
    const finalBtn = document.getElementById('finalBtn');
    
    // Hide buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    
    // Show celebration
    celebration.style.display = 'block';
    
    // Show final button after delay
    setTimeout(() => {
        finalBtn.style.display = 'inline-block';
    }, 2000);
    
    // Create heart rain
    createHeartRain();
    
    // Play celebration animation
    createFireworks();
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s';
}

function createHeartRain() {
    const hearts = ['♥'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            heart.style.fontSize = (20 + Math.random() * 30) + 'px';
            heart.style.opacity = '0.8';
            heart.style.animation = `heartFall ${3 + Math.random() * 2}s linear`;
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

function createFireworks() {
    const colors = ['#ffb6d9', '#ff69b4', '#ff1493'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight * 0.6);
            
            for (let j = 0; j < 20; j++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = '8px';
                particle.style.height = '8px';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                
                const angle = (Math.PI * 2 * j) / 20;
                const velocity = 2 + Math.random() * 2;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                document.body.appendChild(particle);
                
                let posX = x;
                let posY = y;
                let opacity = 1;
                
                const animate = setInterval(() => {
                    posX += vx * 5;
                    posY += vy * 5;
                    opacity -= 0.02;
                    
                    particle.style.left = posX + 'px';
                    particle.style.top = posY + 'px';
                    particle.style.opacity = opacity;
                    
                    if (opacity <= 0) {
                        clearInterval(animate);
                        particle.remove();
                    }
                }, 20);
            }
        }, i * 400);
    }
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
