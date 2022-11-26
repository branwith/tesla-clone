const openMenu = () => {
    document.querySelector( selectors:'.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector( selectors: '.backdrop').className = 'backdrop';
    document.querySelector( selectors: 'aside').className = '';
}

document.getElementById(elementId: 'menuBtn').onclick = e =>{
    e.preventDefault();
}