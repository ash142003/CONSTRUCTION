// Fade-in effect on scroll
const elements = document.querySelectorAll('.fade-in');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

// Scroll to top button logic
const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
    revealOnScroll();
    scrollBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
};

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Initial reveal
window.addEventListener('load', revealOnScroll);

