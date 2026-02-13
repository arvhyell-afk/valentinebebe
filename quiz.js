// Quiz functionality with smooth transitions

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

let currentQuestion = 1;
let score = 0;
const totalQuestions = 3;

function answer(questionNumber, isCorrect) {
    const options = document.querySelectorAll(`#q${questionNumber} .option`);
    
    // Disable all buttons
    options.forEach(opt => {
        opt.disabled = true;
        opt.style.cursor = 'not-allowed';
    });
    
    // Mark the clicked button
    event.target.classList.add(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
        score++;
    }
    
    // Move to next question after delay
    setTimeout(() => {
        document.getElementById('q' + questionNumber).classList.remove('active');
        
        if (questionNumber < totalQuestions) {
            currentQuestion++;
            document.getElementById('q' + currentQuestion).classList.add('active');
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const nextBtn = document.getElementById('nextBtn');
    
    resultDiv.classList.add('active');
    scoreDisplay.textContent = `${score} / ${totalQuestions}`;
    
    if (score === totalQuestions) {
        resultText.textContent = 'sempurna! kamu benar-benar mengenalku dengan baik!';
    } else if (score >= 2) {
        resultText.textContent = 'bagus sekali! kamu cukup mengenalku!';
    } else {
        resultText.textContent = 'tidak apa-apa, yang penting cinta kita!';
    }
    
    nextBtn.style.display = 'inline-block';
    
    // Confetti effect
    createConfetti();
}

function createConfetti() {
    const colors = ['#ffb6d9', '#ff69b4', '#ff1493'];
    const container = document.querySelector('.quiz-content');
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = '0.8';
            confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear`;
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 50);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
