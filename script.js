const cards = [
    {
        name: "Λέων",
        category: "Ζώο",
        image: "https://picsum.photos/id/1074/600/400",
        stats: {
            Δύναμη: 95,
            Ταχύτητα: 80,
            Αντοχή: 75,
            Ευφυΐα: 60
        }
    },
    {
        name: "Αετός",
        category: "Πουλί",
        image: "https://picsum.photos/id/1024/600/400",
        stats: {
            Δύναμη: 65,
            Ταχύτητα: 90,
            Αντοχή: 70,
            Ευφυΐα: 75
        }
    },
    {
        name: "Καρχαρίας",
        category: "Θάλασσα",
        image: "https://picsum.photos/id/1069/600/400",
        stats: {
            Δύναμη: 92,
            Ταχύτητα: 85,
            Αντοχή: 88,
            Ευφυΐα: 55
        }
    }
];

let currentIndex = 0;

const cardName = document.getElementById("cardName");
const cardCategory = document.getElementById("cardCategory");
const cardImage = document.getElementById("cardImage");
const statsContainer = document.getElementById("statsContainer");
const nextCardBtn = document.getElementById("nextCardBtn");

function renderCard() {

    const card = cards[currentIndex];

    cardName.textContent = card.name;
    cardCategory.textContent = card.category;
    cardImage.src = card.image;

    statsContainer.innerHTML = "";

    Object.entries(card.stats).forEach(([statName, value]) => {

        const statElement = document.createElement("div");

        statElement.classList.add("stat");

        statElement.innerHTML = `
            <div class="stat-header">
                <span>${statName}</span>
                <span>${value}</span>
            </div>

            <div class="bar">
                <div class="bar-fill" style="width:${value}%"></div>
            </div>
        `;

        statsContainer.appendChild(statElement);
    });
}

nextCardBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }

    renderCard();
});

renderCard();
