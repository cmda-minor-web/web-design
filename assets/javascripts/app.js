const app = {
    init() {
        const menuButton = document.querySelector('header button');
        menuButton.addEventListener('click', () => {
            this.toggleMenu();
        });
    },
    toggleMenu() {
        const nav = document.querySelector('#about-me');
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        } else {
            nav.classList.add('open');
        }
    }
};

app.init();