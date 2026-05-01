// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky Navigation
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation (Intersection Observer)
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// Form Submission handling (Demo)
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple visual feedback for demo purposes
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Booking Confirmed!';
        submitBtn.style.background = '#4BB543'; // Success green
        submitBtn.style.color = '#fff';
        
        setTimeout(() => {
            bookingForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.style.color = '';
        }, 3000);
    });
}
