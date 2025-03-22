// Configuration: Set to true for static colors, false for random colors
const useStaticColors = true; // Change this to false for dynamic colors

// Static color palette (customizable)
const staticColors = {
    header: 'linear-gradient(45deg, #ff66b2, #66ffcc)',
    footer: 'repeating-linear-gradient(45deg, #ff66b2, #ff66b2 10px, #66ffcc 10px, #66ffcc 20px)',
    funkyCard1: 'linear-gradient(135deg, #ffcc66, #ff9966)',
    funkyCard2: 'linear-gradient(135deg, #66ff99, #33cccc)',
    funkyCard3: 'linear-gradient(135deg, #9999ff, #ff99ff)',
    yearBubble: 'radial-gradient(circle, #ff66b2, #ff3366)',
    monthBox: 'linear-gradient(135deg, #66ffcc, #33cccc)',
    digitalCard1: 'linear-gradient(135deg, #ff99cc, #ff6699)',
    digitalCard2: 'linear-gradient(135deg, #66ff99, #33cccc)',
    digitalCard3: 'linear-gradient(135deg, #9999ff, #ff99ff)',
    digitalCard4: 'linear-gradient(135deg, #ffcc66, #ff9966)',
    photoCard1: 'linear-gradient(135deg, #ffcc66, #ff9966)',
    photoCard2: 'linear-gradient(135deg, #66ff99, #33cccc)',
    photoCard3: 'linear-gradient(135deg, #9999ff, #ff99ff)',
    photoCard4: 'linear-gradient(135deg, #ff99cc, #ff6699)',
    lockBox: 'linear-gradient(45deg, #ff66b2, #66ffcc)',
    button: '#ff3366',
    buttonHover: '#ff6699'
};

// Function to generate random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to calculate luminance and set readable text color (for dynamic mode)
function setReadableTextColor(element, bgColor) {
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    element.style.color = luminance > 0.5 ? '#2b2b2b' : '#fff';
}

// Apply colors based on mode
function applyColors() {
    // Header
    const header = document.querySelector('header');
    if (header) {
        header.style.background = useStaticColors ? staticColors.header : getRandomColor();
        if (!useStaticColors) setReadableTextColor(header, header.style.background);
    }

    // Funky Cards (index.html)
    const funkyCards = document.querySelectorAll('.funky-card');
    funkyCards.forEach((card, index) => {
        let cardColor;
        if (useStaticColors) {
            if (index === 0) cardColor = staticColors.funkyCard1;
            else if (index === 1) cardColor = staticColors.funkyCard2;
            else cardColor = staticColors.funkyCard3;
        } else {
            cardColor = getRandomColor();
            setReadableTextColor(card, cardColor);
        }
        card.style.background = cardColor;
    });

    // Year Bubbles (schooling.html)
    const yearBubbles = document.querySelectorAll('.year-bubble');
    yearBubbles.forEach(bubble => {
        const bubbleColor = useStaticColors ? staticColors.yearBubble : getRandomColor();
        bubble.style.background = bubbleColor;
        if (!useStaticColors) setReadableTextColor(bubble, bubbleColor);
    });

    // Month Boxes (schooling.html)
    const monthBoxes = document.querySelectorAll('.month-box');
    monthBoxes.forEach(box => {
        const boxColor = useStaticColors ? staticColors.monthBox : getRandomColor();
        box.style.background = boxColor;
        if (!useStaticColors) setReadableTextColor(box, boxColor);
    });

    // Digital Cards (my-digital.html)
    const digitalCards = document.querySelectorAll('.digital-card');
    digitalCards.forEach((card, index) => {
        let cardColor;
        if (useStaticColors) {
            if (index === 0) cardColor = staticColors.digitalCard1;
            else if (index === 1) cardColor = staticColors.digitalCard2;
            else if (index === 2) cardColor = staticColors.digitalCard3;
            else cardColor = staticColors.digitalCard4;
        } else {
            cardColor = getRandomColor();
            setReadableTextColor(card, cardColor);
        }
        card.style.background = cardColor;
    });

    // Photo Cards (photo-gallery.html)
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach((card, index) => {
        let cardColor;
        if (useStaticColors) {
            if (index === 0) cardColor = staticColors.photoCard1;
            else if (index === 1) cardColor = staticColors.photoCard2;
            else if (index === 2) cardColor = staticColors.photoCard3;
            else cardColor = staticColors.photoCard4;
        } else {
            cardColor = getRandomColor();
            setReadableTextColor(card, cardColor);
        }
        card.style.background = cardColor;
    });

    // Lock Box (photo-gallery.html)
    const lockBox = document.querySelector('.lock-box');
    if (lockBox) {
        const lockColor = useStaticColors ? staticColors.lockBox : getRandomColor();
        lockBox.style.background = lockColor;
        if (!useStaticColors) setReadableTextColor(lockBox, lockColor);
    }

    // Buttons (all pages)
    const buttons = document.querySelectorAll('.card-link, .back-link, .digital-link, .unlock-btn');
    buttons.forEach(button => {
        const buttonColor = useStaticColors ? staticColors.button : getRandomColor();
        button.style.backgroundColor = buttonColor;
        if (!useStaticColors) setReadableTextColor(button, buttonColor);
        if (useStaticColors) {
            button.addEventListener('mouseover', () => button.style.backgroundColor = staticColors.buttonHover);
            button.addEventListener('mouseout', () => button.style.backgroundColor = staticColors.button);
        }
    });

    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.background = useStaticColors ? staticColors.footer : getRandomColor();
        if (!useStaticColors) setReadableTextColor(footer, footer.style.background);
    }
}

// Page-specific functions
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
    applyColors();

    if (document.URL.includes("schooling.html")) {
        document.querySelectorAll('.year-bubble').forEach(bubble => {
            bubble.addEventListener('click', () => {
                const yearId = bubble.getAttribute('onclick') ? bubble.getAttribute('onclick').match(/'([^']+)'/)[1] : bubble.nextElementSibling.id;
                toggleYear(yearId);
            });
        });
    }

    if (document.URL.includes("photo-gallery.html")) {
        document.querySelector('.unlock-btn').addEventListener('click', checkPassword);
    }
});