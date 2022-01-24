let panelsElement = document.querySelectorAll('.panel');


let removeActiveClasses = () => {
    panelsElement.forEach(panel => {
        panel.classList.remove('active');
    });
};

panelsElement.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});