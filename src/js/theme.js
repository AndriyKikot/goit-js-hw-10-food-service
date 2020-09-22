const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    switchInput: document.querySelector('.js-switch-input'),
};

const localStorageTheme = localStorage.getItem('theme');

refs.switchInput.addEventListener('change', handleСhangeTheme);

function handleСhangeTheme() {
    if (!refs.switchInput.checked) {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
};

function enableLightTheme() {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
};


function enableDarkTheme() {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);

};

function checkLocalStorage() {
    if (localStorageTheme === Theme.DARK) {
        refs.body.classList.toggle(Theme.DARK);
        refs.switchInput.checked = true;
    } else {
        refs.body.classList.toggle(Theme.LIGHT);
        refs.switchInput.checked = false;
    }
};

checkLocalStorage();