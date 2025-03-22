// Function to generate random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to calculate luminance and set readable text color
function setReadableTextColor(element, bgColor) {
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    element.style.color = luminance > 0.5 ? '#2b2b2b' : '#fff';
}

// Apply random colors to elements
function applyRandomColors() {
    // Header
    const header = document.querySelector('header');
    if (header) {
        const headerColor = getRandomColor();
        header.style.background = headerColor;
        setReadableTextColor(header, headerColor);
    }

    // Cards (funky-card, digital-card, photo-card)
    const cards = document.querySelectorAll('.funky-card, .digital-card, .photo-card');
    cards.forEach(card => {
        const cardColor = getRandomColor();
        card.style.background = cardColor;
        setReadableTextColor(card, cardColor);
    });

    // Buttons (card-link, back-link, digital-link, unlock-btn)
    const buttons = document.querySelectorAll('.card-link, .back-link, .digital-link, .unlock-btn');
    buttons.forEach(button => {
        const buttonColor = getRandomColor();
        button.style.backgroundColor = buttonColor;
        setReadableTextColor(button, buttonColor);
    });

    // Schooling-specific: year bubbles and month boxes
    const yearBubbles = document.querySelectorAll('.year-bubble');
    yearBubbles.forEach(bubble => {
        const bubbleColor = getRandomColor();
        bubble.style.background = bubbleColor;
        setReadableTextColor(bubble, bubbleColor);
    });
    const monthBoxes = document.querySelectorAll('.month-box');
    monthBoxes.forEach(box => {
        const boxColor = getRandomColor();
        box.style.background = boxColor;
        setReadableTextColor(box, boxColor);
    });

    // Photo-gallery-specific: lock box
    const lockBox = document.querySelector('.lock-box');
    if (lockBox) {
        const lockColor = getRandomColor();
        lockBox.style.background = lockColor;
        setReadableTextColor(lockBox, lockColor);
    }

    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
        const footerColor = getRandomColor();
        footer.style.background = footerColor;
        setReadableTextColor(footer, footerColor);
    }
}

// Page-specific functions
// For schooling.html
function toggleYear(yearId) {
    const yearSection = document.getElementById(yearId);
    if (yearSection.style.display === "flex") {
        yearSection.style.display = "none";
    } else {
        document.querySelectorAll('.month-container').forEach(section => {
            section.style.display = "none";
        });
        yearSection.style.display = "flex";
    }
}

// For photo-gallery.html
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "lily123";
    const padlock = document.getElementById("padlock");

    if (password === correctPassword) {
        padlock.classList.add("unlock-animation");
        setTimeout(() => {
            document.getElementById("lockScreen").style.display = "none";
            document.getElementById("gallerySection").style.display = "block";
        }, 1000);
    } else {
        padlock.classList.add("shake");
        setTimeout(() => padlock.classList.remove("shake"), 500);
        alert("Nope! Try again, silly goose!");
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    applyRandomColors();

    // Add event listeners based on page
    if (document.URL.includes("schooling.html")) {
        document.querySelectorAll('.year-bubble').forEach(bubble => {
            bubble.addEventListener('click', () => {
                const yearId = bubble.getAttribute('onclick').match(/'([^']+)'/)[1];
                toggleYear(yearId);
            });
        });
    }

    if (document.URL.includes("photo-gallery.html")) {
        document.querySelector('.unlock-btn').addEventListener('click', checkPassword);
    }
});