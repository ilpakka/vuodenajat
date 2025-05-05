document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('languageToggle');
    const languageText = languageToggle.querySelector('.language-text');
    let currentLanguage = localStorage.getItem('preferredLanguage') || 'fi';

    // Function to update all translatable elements
    function updateLanguage(lang) {
        // Update all elements with data attributes
        document.querySelectorAll('[data-fi][data-quenya]').forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });

        // Update the language toggle button text
        languageText.textContent = lang === 'fi' ? 'Quenya' : 'Suomeksi';

        // Update the HTML lang attribute
        document.documentElement.lang = lang;

        // Store the language preference
        localStorage.setItem('preferredLanguage', lang);
    }

    // Apply the saved language immediately
    updateLanguage(currentLanguage);

    // Toggle language when button is clicked
    languageToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        currentLanguage = currentLanguage === 'fi' ? 'quenya' : 'fi';
        updateLanguage(currentLanguage);
    });
}); 