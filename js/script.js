
/* ====Truns the menu hambutguer intoa X === */

const menuHamburguer= document.querySelector('.meu-hamburguer')
     menuHamburguer.addEventListener('click', () => {
        toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector( '.nav-responsive');
    menuHamburguer.classList.toggle( 'change');

    if ( menuHamburguer.classList.caontains('change')) {
        nav.computedStyleMap.display = 'block';

    } else {
        nav.computedStyleMap.dispaly = 'none';
    }

}