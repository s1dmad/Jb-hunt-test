const carousel = document.querySelector('.teaserCarousel-body');
const teasers = document.querySelectorAll('.teaser');
var totalTeasers;
let currentIndex = 0;
var teaserWidth = teasers[0].offsetWidth;
var pos;
const carouselCount = document.querySelector('.teaser-carousel-no');




// Function to add or remove extra dots based on viewport width
function adjustDots() {
    const ulElement = document.querySelector('.teaser-carousel-dots');
    
    if (window.innerWidth < 1220) {
        // Add extra dots
        for (let i = ulElement.children.length; i < 6; i++) {
            const liElement = document.createElement('li');
            liElement.className = 'teaser-carousel-dot';
            ulElement.appendChild(liElement);
            totalTeasers = 6;
            pos=1;
        }
    } else {
        // Remove extra dots
        const extraDots = Array.from(ulElement.querySelectorAll('.teaser-carousel-dot')).slice(3);
        extraDots.forEach(dot => dot.remove());
        totalTeasers = 3;
        pos=2;
    }
}

// Attach the function to the window's resize event
window.addEventListener('resize', adjustDots);

// Initial call to adjust dots based on viewport width
adjustDots();

// Function to move the carousel to a specific teaser
function moveToTeaser(index) {
    currentIndex = index;
    updateCarousel();
    updateActiveDot();
    updateDimClass()
}

// Function to move the carousel to the next teaser
function moveToNextTeaser() {
    if (currentIndex < totalTeasers - 1) {
        currentIndex++;
        console.log(currentIndex);
        if(currentIndex === 1){
            updatedim2();
        }
        else{
            updatedim();
        }
    } else {
        currentIndex = 0;
    }
    carouselCount.textContent = currentIndex + 1;
    updateCarousel();
    updateActiveDot();
    updateDimClass()
}

// Function to move the carousel to the previous teaser
function moveToPrevTeaser() {
    if (currentIndex > 0) {
        currentIndex--;
        if(currentIndex === 1){
            updatedim2();
        }
        else{
            updatedim();
        }
    } else {
        currentIndex = totalTeasers - 1;
    }
    carouselCount.textContent = currentIndex + 1;
    updateCarousel();
    updateActiveDot();
    updateDimClass()
}

// Function to update the carousel's position
function updateCarousel() {
    const newPosition = -currentIndex * teaserWidth * pos;
    carousel.style.transform = `translateX(${newPosition}px)`;

}

const dots = document.querySelectorAll(".teaser-carousel-dot");

// Function to update the active dot
function updateActiveDot() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
            if(index === 1){
                updatedim2();
            }
            else{
                updatedim();
            }
        } else {
            dot.classList.remove('active');
        }
    });
}

// Set up event listeners for next and previous buttons
document.getElementById('nextButton').addEventListener('click', moveToNextTeaser);
document.getElementById('prevButton').addEventListener('click', moveToPrevTeaser);

// Set up event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveToTeaser(index);
    });
});


// ... (your existing code)

// Function to reset the carousel
function resetCarousel() {
    currentIndex = 0;
    carouselCount.textContent = currentIndex + 1;
    teaserWidth = teasers[0].offsetWidth;
    updateCarousel();
    updateActiveDot();
    updateDimClass();
    
}

// Attach the resetCarousel function to the window's resize event
window.addEventListener('resize', () => {
    adjustDots();
    resetCarousel(); // Call the resetCarousel function on resize
});

// ... (your existing code)

// Initial call to adjust dots based on viewport width
adjustDots();

// ... (your existing code)

function updatedim(){

    if (window.innerWidth >1220){
    teasers[2].classList.add('dim');
    teasers[4].classList.remove('dim');
    }
}

function updatedim2(){
    if (window.innerWidth >1220){
    teasers[4].classList.add('dim');
    teasers[2].classList.remove('dim');
    }
}
updatedim();

function updateDimClass() {
    if(window.innerWidth<1220){
    teasers.forEach((teaser, index) => {
        if (index === (currentIndex + 1) ) {
            teaser.classList.add('dim');
        } else {
            teaser.classList.remove('dim');
        }
    });
    }
    else{
        teasers[1].classList.remove('dim');
    }

}

updateDimClass()


