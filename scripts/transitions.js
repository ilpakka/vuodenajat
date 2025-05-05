document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to header and content
    const header = document.querySelector('header');
    const content = document.querySelector('.content-wrapper');
    
    setTimeout(() => {
        header.classList.add('loaded');
        if (content) content.classList.add('loaded');
    }, 100);

    // Handle page transitions
    const transition = document.querySelector('.page-transition');
    const links = document.querySelectorAll('a[href^="http"]:not([href="#"])');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            transition.classList.add('active');
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Handle back/forward browser navigation
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) {
            transition.classList.remove('active');
        }
    });
}); 