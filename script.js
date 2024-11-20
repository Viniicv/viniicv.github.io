document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (name && email) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {

    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

updateCarousel();

window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) { 
        header.classList.add('shrink'); 
    } else {
        header.classList.remove('shrink'); 
    }
};
