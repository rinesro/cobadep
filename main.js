document.addEventListener('DOMContentLoaded', () => {

    // --- Pemilihan Elemen DOM ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar'); // Target navbar by ID

    // --- Fungsionalitas Menu Mobile ---
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', (event) => {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (navLinks.classList.contains('active') && !isClickInsideMenu && !isClickOnToggle) {
                toggleMenu();
            }
        });

        function toggleMenu() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        }
    }

    // --- EFEK AURORA GLOW INTERAKTIF ---
    if (navbar) {
        navbar.addEventListener('mousemove', (e) => {
            // Dapatkan posisi kursor relatif terhadap navbar
            const rect = navbar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update variabel CSS '--glow-x' dan '--glow-y'
            navbar.style.setProperty('--glow-x', `${x}px`);
            navbar.style.setProperty('--glow-y', `${y}px`);
        });
    }
});
