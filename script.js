// Waitlist Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Waitlist form elements
    const waitlistForm = document.getElementById('waitlistFormElement');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');

    // Animation elements
    const bookContainer = document.getElementById('bookContainer');
    const logoImage = document.getElementById('logoImage');
    const container = document.querySelector('.container');
    const floatingElements = document.querySelector('.floating-elements');
    const countdownBox = document.querySelector('.countdown-box');
    const balloons = document.querySelectorAll('.balloon');
    const characters = document.querySelectorAll('.boy1, .boy2, .boy3, .girl');
    const stars = document.querySelectorAll('.star');

    // Form submission handler
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', handleFormSubmit);
    }

    // Initialize animations and event listeners
    initAnimations();
    initEventListeners();

    // Start the book animation sequence
    startBookAnimation();

    // Set up countdown timer
    setupCountdown();

    // Start balloon animations
    initBalloons();

    // Start confetti generation
    setInterval(createConfetti, 3000);
    createConfetti();

    // Handle window resize
    window.addEventListener('resize', handleResize);

    // Add loading state for better UX
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Function definitions
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address', 'danger');
            return;
        }
        
        showMessage('Thank you for joining the waitlist!', 'success');
        waitlistForm.reset();
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showMessage(message, type) {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = `alert alert-${type} mt-3 text-center`;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.style.display = 'none';
                formMessage.style.opacity = '1';
            }, 500);
        }, 5000);
    }

    function initAnimations() {
        // Add touch feedback for mobile devices
        if ('ontouchstart' in window) {
            const touchElements = document.querySelectorAll('.floating');
            touchElements.forEach(element => {
                element.addEventListener('touchstart', function() {
                    this.style.transform += ' scale(1.2)';
                    this.style.transition = 'transform 0.2s ease';
                });
                
                element.addEventListener('touchend', function() {
                    this.style.transform = this.style.transform.replace(' scale(1.2)', '');
                });
            });
        }
    }

    function initEventListeners() {
        // Character hover effects
        characters.forEach(character => {
            character.addEventListener('mouseenter', function() {
                this.style.transform += ' scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
            });

            character.addEventListener('mouseleave', function() {
                this.style.transform = this.style.transform.replace(' scale(1.1)', '');
            });
        });

        // Star click effects
        stars.forEach(star => {
            star.addEventListener('click', function() {
                this.style.filter = 'brightness(2) saturate(2)';
                setTimeout(() => {
                    this.style.filter = '';
                }, 500);
            });
        });
    }

    function startBookAnimation() {
        if (!bookContainer || !logoImage || !container || !floatingElements) return;

        // Start with initial state
        bookContainer.classList.add('initial-state');
        logoImage.style.opacity = '0';
        logoImage.classList.remove('move-to-corner');

        // Animation sequence
        setTimeout(() => {
            bookContainer.classList.remove('initial-state');
            bookContainer.classList.add('grow-state');
            logoImage.style.opacity = '1';
            logoImage.style.top = '50%';
            logoImage.style.left = '50%';
            logoImage.style.transform = 'translate(-50%, -50%)';
        }, 500);

        setTimeout(() => {
            logoImage.classList.add('move-to-corner');
        }, 2000);

        setTimeout(() => {
            bookContainer.classList.remove('grow-state');
            bookContainer.classList.add('burst-state');
            createBookBurstConfetti();
        }, 3000);

        setTimeout(() => {
            container.classList.add('show-content');
            floatingElements.classList.add('show-elements');
            bookContainer.style.display = 'none';
            const waitlistForm = document.getElementById('waitlistForm');
            if (waitlistForm) {
                waitlistForm.style.display = 'block';
            }
        }, 3500);
    }

    function createBookBurstConfetti() {
        if (!bookContainer) return;

        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#00b894', '#e17055'];
        const shapes = ['circle', 'square', 'triangle'];

        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'book-burst-confetti';

            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];

            if (shape === 'circle') {
                confetti.style.backgroundColor = color;
            } else if (shape === 'square') {
                confetti.classList.add('square');
                confetti.style.backgroundColor = color;
            } else {
                confetti.classList.add('triangle');
                confetti.style.borderBottomColor = color;
            }

            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 200;
            const burstX = Math.cos(angle) * distance;
            const burstY = Math.sin(angle) * distance;

            confetti.style.setProperty('--burst-x', burstX + 'px');
            confetti.style.setProperty('--burst-y', burstY + 'px');

            bookContainer.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 2000);
        }
    }

    function setupCountdown() {
        if (!countdownBox) return;

        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 30);
        let lastMinute = new Date().getMinutes();
        let hasGlowedThisMinute = false;

        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const daysEl = document.getElementById("days");
            const hoursEl = document.getElementById("hours");
            const minutesEl = document.getElementById("minutes");
            
            if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, '0');

            const currentMinute = new Date().getMinutes();

            if (currentMinute !== lastMinute) {
                hasGlowedThisMinute = false;
                lastMinute = currentMinute;
            }

            if (seconds <= 2 && !hasGlowedThisMinute) {
                countdownBox.classList.remove('navy-glow');
                void countdownBox.offsetWidth;
                countdownBox.classList.add('navy-glow');
                hasGlowedThisMinute = true;
            }

            if (distance < 0) {
                clearInterval(countdownInterval);
                if (daysEl) daysEl.innerText = "00";
                if (hoursEl) hoursEl.innerText = "00";
                if (minutesEl) minutesEl.innerText = "00";
                countdownBox.classList.remove('navy-glow');
            }
        }, 1000);
    }

    function initBalloons() {
        balloons.forEach((balloon, index) => {
            let posX = Math.random() * (window.innerWidth - 100);
            let posY = Math.random() * (window.innerHeight - 100);
            let velX = (Math.random() - 0.5) * 3;
            let velY = (Math.random() - 0.5) * 3;
            const speed = 2 + Math.random() * 2;
            let rotation = 0;

            function updateBalloon() {
                posX += velX * speed;
                posY += velY * speed;

                if (posX <= 0 || posX >= window.innerWidth - 60) {
                    velX = -velX * (0.8 + Math.random() * 0.4);
                    velY += (Math.random() - 0.5) * 0.8;
                }

                if (posY <= 0 || posY >= window.innerHeight - 80) {
                    velY = -velY * (0.8 + Math.random() * 0.4);
                    velX += (Math.random() - 0.5) * 0.8;
                }

                rotation += 0.5;
                const sway = Math.sin(rotation * 0.02) * 5;
                balloon.style.transform = `translate(${posX}px, ${posY}px) rotate(${sway}deg)`;
                requestAnimationFrame(updateBalloon);
            }

            setTimeout(updateBalloon, index * 1000);
        });
    }

    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#00b894', '#e17055'];
        const shapes = ['circle', 'square', 'triangle'];
        const container = document.querySelector('.floating-elements');
        
        if (!container) return;

        for (let i = 0; i < 5; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';

            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];

            if (shape === 'circle') {
                confetti.classList.add('confetti-circle');
                confetti.style.backgroundColor = color;
            } else if (shape === 'square') {
                confetti.classList.add('confetti-square');
                confetti.style.backgroundColor = color;
            } else {
                confetti.classList.add('confetti-triangle');
                confetti.style.borderBottomColor = color;
            }

            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDuration = (Math.random() * 4 + 6) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';

            container.appendChild(confetti);

            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 12000);
        }
    }

    function handleResize() {
        optimizeForMobile();
        
        balloons.forEach(balloon => {
            const currentTransform = balloon.style.transform;
            if (currentTransform) {
                const matches = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
                if (matches) {
                    const x = Math.min(parseFloat(matches[1]), window.innerWidth - 60);
                    const y = Math.min(parseFloat(matches[2]), window.innerHeight - 80);
                    balloon.style.transform = currentTransform.replace(
                        /translate\([^)]+\)/,
                        `translate(${x}px, ${y}px)`
                    );
                }
            }
        });
    }

    function optimizeForMobile() {
        const isMobile = window.innerWidth <= 768;
        const floatingElements = document.querySelectorAll('.floating');
        
        floatingElements.forEach(element => {
            if (isMobile) {
                element.style.willChange = 'transform';
                element.style.transform = 'translateZ(0)';
            } else {
                element.style.willChange = 'auto';
            }
        });
    }

    // Initial optimizations
    optimizeForMobile();
});