const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('color');
    btnSwitch.classList.toggle('active');

    if(document.body.classList.contains('color')){
        localStorage.setItem('color-mode', 'true');
    } else{
        localStorage.setItem('color-mode', 'false');
    }
});

if (localStorage.getItem('color-mode') === 'true') {
    document.body.classList.add('color');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('color');
    btnSwitch.classList.remove('active');
}

