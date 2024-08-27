document.getElementById('hamMenu').addEventListener('click', function() {
    let menu = document.getElementById('Menu');
    let icon = document.getElementById('icon');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // Change icon to X mark
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        icon.style.transform = 'rotate(90deg)'; // Optional: Rotation effect
    } else {
        menu.classList.add('hidden');
        // Change icon back to bars
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        icon.style.transform = 'rotate(0deg)'; // Optional: Reset rotation
    }
});