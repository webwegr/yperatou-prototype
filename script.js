let cards = [];
let currentIndex = 0;

const cardName = document.getElementById("cardName");
const cardCategory = document.getElementById("cardCategory");
const cardDescription = document.getElementById("cardDescription");
const cardImage = document.getElementById("cardImage");
const cardCounter = document.getElementById("cardCounter");
const statsContainer = document.getElementById("statsContainer");
const nextCardBtn = document.getElementById("nextCardBtn");
const prevCardBtn = document.getElementById("prevCardBtn");

async function loadCards() {
    try {
        const response = await fetch("cards.json");

        if (!response.ok) {
            throw new Error("Δεν φορτώθηκε το cards.json");
        }

        cards = await response.json();
        renderCard();
    } catch (error) {
        console.error(error);
        showError();
    }
}

function renderCard() {
    if (!cards.length) {
        showError();
        return;
    }

    const card = cards[currentIndex];

    cardName.textContent = card.name;
    cardCategory.textContent = card.category;
    cardDescription.textContent = card.description || "";
    cardImage.src = card.image;
    cardImage.alt = card.name;
    cardCounter.textContent = `${currentIndex + 1} / ${cards.length}`;

    statsContainer.innerHTML = "";

    Object.entries(card.stats).forEach(([statName, value]) => {
        const safeValue = Math.max(0, Math.min(100, Number(value)));
        const statElement = document.createElement("div");
        statElement.classList.add("stat");

        statElement.innerHTML = `
            <div class="stat-header">
                <span class="stat-name">${statName}</span>
                <span class="stat-value">${safeValue}</span>
            </div>
            <div class="bar">
                <div class="bar-fill" style="width: ${safeValue}%"></div>
            </div>
        `;

        statsContainer.appendChild(statElement);
    });
}

function showError() {
    cardName.textContent = "Δεν βρέθηκαν κάρτες";
    cardCategory.textContent = "Error";
    cardDescription.textContent = "Έλεγξε ότι το αρχείο cards.json βρίσκεται στο ίδιο επίπεδο με τα index.html, style.css και script.js.";
    cardImage.src = "";
    cardImage.alt = "";
    cardCounter.textContent = "0 / 0";
    statsContainer.innerHTML = "";
}

nextCardBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    renderCard();
});

prevCardBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    renderCard();
});

loadCards();
