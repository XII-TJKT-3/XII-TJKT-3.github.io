document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarMenu = document.getElementById('sidebar-menu');

    menuToggle.addEventListener('click', function() {
        sidebarMenu.classList.toggle('active');
    });
});
