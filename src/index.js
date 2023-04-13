import landing from "./landing"

landing();
let myButton = document.querySelector('#menu-button')
let mainSection = document.querySelector('main')

let navButtons = document.querySelectorAll('.nav-buttons')


for (const button of navButtons) {
    button.addEventListener('click',function() {
        let newClassName = button.innerText.toLowerCase().replace(' ','-');
        mainSection.className = newClassName;    
        mainSection.innerHTML = `<div class="main-section" id="menu-section">Menu Section</div>`  
    })
}
