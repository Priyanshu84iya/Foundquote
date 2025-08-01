// Global
let quotes = [];
let currentIndex = 0;
let currentColorIndex = 0;
let isTransitioning = false;

const colorSchemes = [
    { color1: 'rgba(255, 209, 255, 0.8)', color2: 'rgba(250, 208, 196, 0.8)' },
    { color1: 'rgba(168, 237, 234, 1)', color2: 'rgba(254, 214, 243, 0.95)' },
    { color1: 'rgba(253, 219, 146, 1)', color2: 'rgba(209, 253, 255, 1)' },
    { color1: 'rgba(147, 165, 207, 1)', color2: 'rgba(228, 239, 233, 1)' },
];

// CSV parsing
function parseCSV(csv) {
    const [headers, ...lines] = csv.split('\n').filter(line => line.trim());
    return lines.map(line => {
        const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
        return headers.split(',').reduce((obj, header, i) => {
            obj[header.trim()] = values[i]?.replace(/^"|"$/g, '').replace(/""/g, '"').trim() || '';
            return obj;
        }, {});
    }).filter(obj => Object.values(obj).some(val => val));
}

// Load CSV file
async function loadCSV() {
    try {
        const response = await fetch("data.csv");
        const csvData = await response.text();
        return parseCSV(csvData);
    } catch (error) {
        console.error("Error loading CSV:", error);
        return [];
    }
}

// Update page content
function updateContent(quote) {
    if (!quote) return console.error("No quote data available");

    const quoteElement = document.querySelector(".quote h1");
    quoteElement.textContent = quote.quote || "No quote available";
    document.querySelector(".details p").textContent = quote.author || "Unknown author";
    const linkElement = document.querySelector(".details a");
    linkElement.textContent = quote.book || "Unknown book";
    linkElement.href = quote.link || "#";

    splitWords(quoteElement);
    updateInstructionText();
}

// Update instruction text based on device type
function updateInstructionText() {
    const instructionElement = document.getElementById('instruction-text');
    
    // Check if device supports touch
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) {
        // Mobile/tablet instructions
        instructionElement.innerHTML = '<span>Tap</span> or <span>swipe</span> to move onto the next';
    } else {
        // Desktop instructions
        instructionElement.innerHTML = 'Press <span>spacebar</span> to move onto the next';
    }
}

// Split words for animation
function splitWords(element) {
    element.innerHTML = element.textContent.split(" ").map(word => `<span>${word}</span>`).join(" ");
    fadeWords(element.querySelectorAll("span"));
}

// Fade in words animation
function fadeWords(wordSpans) {
    wordSpans.forEach((word, index) => {
        word.style.opacity = "0";
        word.style.filter = "blur(10px)";
        word.animate(
            [
                { opacity: 0, filter: "blur(3px)" },
                { opacity: 1, filter: "blur(0px)" },
            ],
            {
                duration: 1500,
                delay: index * 100,
                fill: "forwards",
                easing: "ease-in-out",
            }
        );
    });
}

// Content and gradient transition
async function handleContentChange() {
    if (isTransitioning) return;
    isTransitioning = true;

    const main = document.querySelector('main');
    main.classList.add('fade-out');
    await new Promise(resolve => setTimeout(resolve, 500));

    currentColorIndex = (currentColorIndex + 1) % colorSchemes.length;
    const scheme = colorSchemes[currentColorIndex];
    document.documentElement.style.setProperty('--gradient-color1', scheme.color1);
    document.documentElement.style.setProperty('--gradient-color2', scheme.color2);

    currentIndex = (currentIndex + 1) % quotes.length;
    updateContent(quotes[currentIndex]);

    main.classList.remove('fade-out');
    await new Promise(resolve => setTimeout(resolve, 500));
    isTransitioning = false;
}

// Initialize application
async function init() {
    quotes = await loadCSV();
    if (quotes.length === 0) return console.error("No quotes loaded");

    updateContent(quotes[0]);
    
    // Desktop spacebar navigation
    document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
            event.preventDefault(); // Prevent page scroll
            handleContentChange();
        }
    });
    
    // Mobile touch navigation - click anywhere on the main content
    const contentArea = document.getElementById('content');
    contentArea.addEventListener('click', (event) => {
        // Don't trigger if clicking on links
        if (event.target.tagName !== 'A') {
            handleContentChange();
        }
    });
    
    // Touch swipe gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    contentArea.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    }, { passive: true });
    
    contentArea.addEventListener('touchend', (event) => {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        
        const deltaX = touchStartX - touchEndX;
        const deltaY = touchStartY - touchEndY;
        
        // Check if it's a swipe (minimum distance and not too much vertical movement)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            // Swipe left or right to change quote
            handleContentChange();
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
            // Swipe up or down to change quote
            handleContentChange();
        }
        
        // Reset values
        touchStartX = 0;
        touchStartY = 0;
    }, { passive: true });
}

window.addEventListener("load", init);
