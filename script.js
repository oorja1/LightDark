const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const textBox = document.getElementById('text-box');

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor= 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark-Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src='undraw_pair_programming_re_or4x (1).svg';
    image2.src='undraw_cloud_hosting_7xb1 (1).svg';
    image3.src='undraw_before_dawn_re_hp4m (1).svg';
    image4.src='undraw_real_time_collaboration_c62i (1).svg';
    image5.src='undraw_welcome_cats_thqn (2).svg';
}

function lightmode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor= 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light-Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src= 'undraw_pair_programming_re_or4x.svg';
    image2.src= 'undraw_cloud_hosting_7xb1.svg';
    image3.src= 'undraw_before_dawn_re_hp4m.svg';
    image4.src= 'undraw_real_time_collaboration_c62i.svg';
    image5.src= 'undraw_welcome_cats_thqn (1).svg';
}


function swtitchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        lightmode();
    }
}

toggleSwitch.addEventListener('change',swtitchTheme)