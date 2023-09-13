var btn = document.getElementById('btn');
var isMobile = window.innerWidth <= 320;
var isLeftPosition = true;

// Function to set the initial state based on screen size
function setInitialState() {
    isMobile = window.innerWidth <= 320;

    // Check if there is a stored button state
    var storedState = localStorage.getItem("buttonState");
    if (storedState) {
        isLeftPosition = storedState === "left";
    }
    else {
        isLeftPosition = true; // Set to true by default if no stored state
        localStorage.setItem("buttonState", "left");
    }

    // Show the corresponding content based on the stored state
    showContent(isLeftPosition);
}

// Function to show the corresponding content
function showContent(isLeft) {
    if (isLeft) {
        // Show the 'shipper' div and hide the 'carrier' div
        document.getElementById("shipper").style.display = "flex";
        document.getElementById("carrier").style.display = "none";
    } else {
        // Show the 'carrier' div and hide the 'shipper' div
        document.getElementById("carrier").style.display = "flex";
        document.getElementById("shipper").style.display = "none";
    }

    // Update the button's position
    isLeftPosition = isLeft;
    updateButtonPosition();
}

// Function to update the button's position based on isLeftPosition
function updateButtonPosition() {
    var buttons = document.querySelectorAll('.toggle-btn');
    buttons[0].classList.toggle('active', isLeftPosition);
    buttons[1].classList.toggle('active', !isLeftPosition);
}

// Function to handle button click
function toggleButtonClick(element) {
    if (element.id === 'top-btn') {
        showContent(true);
    } else if (element.id === 'bottom-btn') {
        showContent(false);
    }
}

// Add event listener to handle window resize
window.addEventListener('resize', function () {
    setInitialState();
});

// Call the setInitialState function to initialize the state
setInitialState();

// Rest of your button click functions (rightClick, leftClick, topClick, bottomClick)

function rightClick() {
    if (btn) {
        btn.style.left = "50%";
        btn.style.top = '0%';
    }
}

function leftClick() {
    if (btn) {
        btn.style.left = "0%";
        btn.style.top = "0%";
    }
}

function topClick() {
    if (btn) {
        btn.style.top = '0%';
    }
}

function bottomClick() {
    if (btn) {
        btn.style.top = '50%';
    }
}
