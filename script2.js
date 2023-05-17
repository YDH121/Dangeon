// плавная анимация при скролле
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
const windowHeight = window.innerHeight;
const scrollY = window.scrollY;

if (scrollY > sectionTop - windowHeight + sectionHeight / 3) {
section.classList.add('fadeIn');
} else {
section.classList.remove('fadeIn');
}
});
});

// кнопка вверх
const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
if (window.scrollY > 100) {
toTopBtn.style.display = 'block';
} else {
toTopBtn.style.display = 'none';
}
});

toTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// кнопки меню
const prevBtn = document.getElementById('prevBtn');
const homeBtn = document.getElementById('homeBtn');
const nextBtn = document.getElementById('nextBtn');
const exitBtn = document.getElementById('exitBtn');

const sectionsArray = Array.from(sections);

let currentSection = 0;

prevBtn.disabled = true;

nextBtn.addEventListener('click', () => {
currentSection++;
sectionsArray[currentSection].scrollIntoView({ behavior: 'smooth' });
prevBtn.disabled = false;

if (currentSection === sectionsArray.length - 1) {
nextBtn.disabled = true;
}
});

prevBtn.addEventListener('click', () => {
currentSection--;
sectionsArray[currentSection].scrollIntoView({ behavior: 'smooth' });
nextBtn.disabled = false;

if (currentSection === 0) {
prevBtn.disabled = true;
}
});

homeBtn.addEventListener('click', () => {
currentSection = 0;
sectionsArray[currentSection].scrollIntoView({ behavior: 'smooth' });
prevBtn.disabled = true;
nextBtn.disabled = false;
});

exitBtn.addEventListener('click', () => {
window.location.href = "about:blank";
});