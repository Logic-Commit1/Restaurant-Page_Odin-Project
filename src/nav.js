let nav = () => {

    let nav = document.createElement('nav');
    nav.className = 'nav';
    let li = document.createElement('li');
    let menu = document.createElement('ul');
    menu.id = 'menu-button';
    menu.innerText = 'Menu'
    menu.className = 'nav-buttons'
    let about = document.createElement('ul');
    about.id = 'about-button';
    about.innerText = 'About Us';
    about.className = 'nav-buttons'
    let contact = document.createElement('ul');
    contact.id = 'contact-button';
    contact.innerText = 'Contact Us';
    contact.className = 'nav-buttons'

    li.appendChild(menu)
    li.appendChild(about)
    li.appendChild(contact)
    nav.appendChild(li)
    content.prepend(nav)
    



    
}

export default nav;