// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for sticky header
                behavior: 'smooth'
            });
           
            // Update active state in nav
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active', 'text-navy', 'border-bottom', 'border-navy', 'border-2');
                link.classList.add('text-muted');
            });
            this.classList.add('active', 'text-navy', 'border-bottom', 'border-navy', 'border-2');
            this.classList.remove('text-muted');
        }
    });
});
 
// Simple Scroll Spy (Optional)
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
   
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
 
    navLinks.forEach(link => {
        link.classList.remove('active', 'text-navy', 'border-bottom', 'border-navy', 'border-2');
        link.classList.add('text-muted');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active', 'text-navy', 'border-bottom', 'border-navy', 'border-2');
            link.classList.remove('text-muted');
        }
    });
});
 

ítemsaspectoítemsítemsítemsFidelityítemstanExchangeprecisión 