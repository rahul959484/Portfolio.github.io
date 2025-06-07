// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.classList.toggle('active');
});

// Form validation with enhanced feedback
const contactForm = document.getElementById('contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    let isValid = true;
    formInputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'var(--accent-color)';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    if (!isValid) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').style.borderColor = 'var(--accent-color)';
        alert('Please enter a valid email address');
        return;
    }

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    contactForm.appendChild(successMessage);

    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
        contactForm.reset();
    }, 3000);
});

// Project filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const category = card.getAttribute('data-category');
                card.style.display = category === filter ? 'block' : 'none';
            }
        });
    });
});

// Typing effect for hero section
const typingText = "Frontend Developer & Designer";
let charIndex = 0;
const typingElement = document.querySelector('.typing-effect');

function typeText() {
    if (charIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing effect after a delay
setTimeout(typeText, 2000);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add animation to skill tags
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});
