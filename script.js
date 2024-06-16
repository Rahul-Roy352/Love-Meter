document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        alert('❤️❤️I love you too!❤️❤️');
    });

    noBtn.addEventListener('click', () => {
        const container = document.querySelector('.container');
        const rect = container.getBoundingClientRect();
        const maxX = rect.width - noBtn.offsetWidth;
        const maxY = rect.height - noBtn.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});
