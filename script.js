document.addEventListener('DOMContentLoaded', () => {
    const tosButton = document.getElementById('tos-button');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');

    tosButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
