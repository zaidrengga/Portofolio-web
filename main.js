document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate-on');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    elements.forEach(el => observer.observe(el));
});