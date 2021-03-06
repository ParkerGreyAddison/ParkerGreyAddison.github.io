const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let root;
let darkModeCheckbox;

document.addEventListener('DOMContentLoaded', function () {

    root = document.documentElement;
    darkModeCheckbox = document.getElementById('dark-mode');
    darkModeCheckbox.checked = false;
});


function toggleDarkMode() {
    if (root.classList.contains('dark')) {
        darkModeCheckbox.checked = false;
        root.classList.remove('dark');
    } else {
        darkModeCheckbox.checked = true;
        root.classList.add('dark');
    }
}

function checkedDarkMode() {
    toggleDarkMode();
}

if (prefersDarkScheme.matches) {
    toggleDarkMode();
    darkModeCheckbox.checked = true;
}