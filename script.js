document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const revealBtn = document.getElementById('revealBtn');
    const genderText = document.getElementById('genderText');
    const genderIcon = document.querySelector('.gender-icon');
    
    // You can change this to 'boy' or 'girl' to set the gender
    const gender = 'boy';
    
    revealBtn.addEventListener('click', () => {
        // Add confetti effect
        createConfetti();
        
        // Set gender-specific content
        if (gender === 'boy') {
            genderText.textContent = "It's a Boy!";
            genderIcon.style.backgroundImage = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzQyYz0zZiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjxwYXRoIGQ9Ik0xMiA2Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCA2Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnoiLz48L3N2Zz4=')";
        } else {
            genderText.textContent = "It's a Girl!";
            genderIcon.style.backgroundImage = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2YwN2I5YiI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPjxwYXRoIGQ9Ik0xMiA2Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCA2Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnoiLz48L3N2Zz4=')";
        }
        
        // Flip the card
        card.classList.add('flipped');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(20, 20, 20, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        }
    });

    // Fade in animation for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Gallery image hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img').style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('img').style.transform = 'scale(1)';
        });
    });
});

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff9a9e', '#a1c4fd', '#ffb6c1', '#87ceeb', '#ffc0cb', '#b0e0e6'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -20 + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiContainer.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(.37,0,.63,1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// Add floating elements dynamically
function createFloatingElements() {
    const shapes = ['circle', 'square', 'triangle'];
    const container = document.querySelector('.floating-elements');
    
    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.className = `floating-${shapes[Math.floor(Math.random() * shapes.length)]}`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.animationDuration = `${5 + Math.random() * 5}s`;
        container.appendChild(element);
    }
}

// Add parallax effect to the message card
function addParallaxEffect() {
    const card = document.querySelector('.message-card');
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}

// Add typing effect to the message
function typeMessage(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Music player functionality
function initMusicPlayer() {
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let isPlaying = true; // Start with music playing

    // Function to play music
    function playMusic() {
        music.play();
        musicToggle.classList.add('playing');
        isPlaying = true;
    }

    // Function to pause music
    function pauseMusic() {
        music.pause();
        musicToggle.classList.remove('playing');
        isPlaying = false;
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // Try to play music when user interacts with the page
    document.addEventListener('click', () => {
        if (!isPlaying) {
            playMusic();
        }
    }, { once: true });

    // Start with music playing
    musicToggle.classList.add('playing');
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createFloatingElements();
    addParallaxEffect();
    initMusicPlayer();
    
    // Add typing effect to the main message
    const mainMessage = document.querySelector('.message-section h2 + p');
    if (mainMessage) {
        typeMessage(mainMessage, mainMessage.textContent);
    }
    
    // Add hover effect to message sections
    const sections = document.querySelectorAll('.message-section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-10px)';
            section.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = 'none';
        });
    });
}); 