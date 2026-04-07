// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.querySelector('.hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts periodically
setInterval(createHeart, 300);

// Page load message
function showMessage() {
    const messages = [
        "Miss Ishh... I love you! 💖",
        "My baby girl, please smile! 🥰",
        "Piddu, you're my everything! 😘",
        "Beautiful, forgive your Nobita! 🙏",
        "Patni ji, come back to me! ❤️"
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert('🎉 ' + randomMsg + ' 🎉');
    
    // Show confetti
    confettiEffect();
}

function confettiEffect() {
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 20);
    }
}

// Navbar active link
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    links.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});