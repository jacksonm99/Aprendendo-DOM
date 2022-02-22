let a  = document.getElementById('area');

a.addEventListener('click', clicou);
a.addEventListener('mouseenter', entrou);
a.addEventListener('mouseout', saiu);

function clicou() {
    
    a.style.background = 'green';
    a.innerHTML = 'Clicou';
    
}

function entrou() {
    a.style.background = 'red';
    a.innerHTML = 'entrou';
}

function saiu() {
    a.style.background = 'purple';
    a.innerHTML = 'saiu';
}
