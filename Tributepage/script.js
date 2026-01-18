
document.addEventListener('DOMContentLoaded', () => {
    
   
    const observerOptions = {
        threshold: 0.2
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateX(0)";
            }
        });
    }, observerOptions);

    const portrait = document.querySelector('.image-content');
    portrait.style.opacity = "0";
    portrait.style.transform = "translateX(-50px)";
    portrait.style.transition = "all 1s ease-out";
    
    revealOnScroll.observe(portrait);


    const stats = document.querySelectorAll('.stat-item strong');
    
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            stat.style.color = "#ff4d4d";
            stat.style.transition = "0.3s";
        });
        
        stat.addEventListener('mouseleave', () => {
            stat.style.color = "#d4af37";
        });
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});