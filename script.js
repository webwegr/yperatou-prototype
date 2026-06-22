const APP_VERSION = "0.7a1";
const APP_CHANGELOG = [
  {
  version: "0.7a1",
  changes: [
    "Added multi-deck architecture.",
    "Added Space Giants deck with 30 cards.",
    "Added deck selection on Home screen.",
    "Deck titles now change dynamically during gameplay.",
    "Game attributes are now deck-specific instead of globally defined."
  ]
  },{
  version: "0.6a3",
  changes: [
    "Restored Yperatou label above the Performance Legends title.",
    "Added version changelog panel on the Home screen.",
    "Latest version changes now appear first."
  ]
  },
  {
    version: "0.6a2",
    changes: [
      "Debug card order panel now stays open during Time Attack countdown.",
      "Player 2 / Bot turn panel now uses opponent red styling.",
      "Restored version tracking for testing."
    ]
  },
  {
    version: "0.6a",
    changes: [
      "Added Time Attack mode with 3 minute countdown.",
      "Timer appears in the header and turns red in the final 30 seconds.",
      "Time Attack uses full deck shuffling.",
      "Quick Match changed to 7 vs 7 cards."
    ]
  },
  {
    version: "0.4",
    changes: [
      "Added Human vs Human mode.",
      "Added handoff screen between players.",
      "Added player names in setup and game UI."
    ]
  },
  {
    version: "0.3",
    changes: [
      "Bot keeps the turn after winning a round.",
      "Result screen appears after bot attribute selection.",
      "Winner takes cards in deterministic order."
    ]
  }
];

const CARS = [
  { name: "Ferrari F40", country: "Italy", rarity: "Legendary", speed: 324, hp: 478, accel: 4.1, value: 2500000, image: "assets/cars/car_01.jpg" },
  { name: "Porsche 911 GT3 RS", country: "Germany", rarity: "Epic", speed: 296, hp: 525, accel: 3.2, value: 350000, image: "assets/cars/car_02.jpg" },
  { name: "McLaren 720S", country: "UK", rarity: "Epic", speed: 341, hp: 710, accel: 2.9, value: 220000, image: "assets/cars/car_03.jpg" },
  { name: "Audi R8", country: "Germany", rarity: "Rare", speed: 331, hp: 620, accel: 3.1, value: 140000, image: "assets/cars/car_04.jpg" },
  { name: "BMW M4 CSL", country: "Germany", rarity: "Rare", speed: 307, hp: 550, accel: 3.7, value: 150000, image: "assets/cars/car_05.jpg" },
  { name: "Porsche Cayman GT4", country: "Germany", rarity: "Rare", speed: 304, hp: 420, accel: 4.2, value: 110000, image: "assets/cars/car_06.jpg" },
  { name: "Toyota Supra MK4 (A80)", country: "Japan", rarity: "Rare", speed: 250, hp: 320, accel: 4.9, value: 110000, image: "assets/cars/car_07.jpg" },
  { name: "Lamborghini Gallardo", country: "Italy", rarity: "Rare", speed: 325, hp: 560, accel: 3.7, value: 130000, image: "assets/cars/car_08.jpg" },
  { name: "Nissan GT-R R35", country: "Japan", rarity: "Uncommon", speed: 315, hp: 565, accel: 2.9, value: 95000, image: "assets/cars/car_09.jpg" },
  { name: "Subaru WRX STI", country: "Japan", rarity: "Uncommon", speed: 255, hp: 310, accel: 5.2, value: 35000, image: "assets/cars/car_10.jpg" },
  { name: "BMW M3", country: "Germany", rarity: "Uncommon", speed: 290, hp: 510, accel: 3.9, value: 80000, image: "assets/cars/car_11.jpg" },
  { name: "BMW M2", country: "Germany", rarity: "Uncommon", speed: 285, hp: 460, accel: 4.1, value: 65000, image: "assets/cars/car_12.jpg" },
  { name: "Audi RS3", country: "Germany", rarity: "Uncommon", speed: 290, hp: 400, accel: 3.8, value: 70000, image: "assets/cars/car_13.jpg" },
  { name: "Mercedes-AMG A45", country: "Germany", rarity: "Uncommon", speed: 270, hp: 421, accel: 3.9, value: 65000, image: "assets/cars/car_14.jpg" },
  { name: "Ford Mustang GT", country: "USA", rarity: "Uncommon", speed: 250, hp: 450, accel: 4.5, value: 55000, image: "assets/cars/car_15.jpg" },
  { name: "Chevrolet Camaro SS", country: "USA", rarity: "Uncommon", speed: 290, hp: 455, accel: 4.2, value: 50000, image: "assets/cars/car_16.jpg" },
  { name: "Aston Martin Vantage", country: "UK", rarity: "Uncommon", speed: 314, hp: 510, accel: 3.6, value: 120000, image: "assets/cars/car_17.jpg" },
  { name: "Nissan 370Z", country: "Japan", rarity: "Uncommon", speed: 250, hp: 332, accel: 5.0, value: 35000, image: "assets/cars/car_18.jpg" },
  { name: "Mazda MX-5 ND", country: "Japan", rarity: "Common", speed: 220, hp: 184, accel: 6.5, value: 28000, image: "assets/cars/car_19.jpg" },
  { name: "Toyota GR86", country: "Japan", rarity: "Common", speed: 226, hp: 234, accel: 6.3, value: 35000, image: "assets/cars/car_20.jpg" },
  { name: "Subaru BRZ", country: "Japan", rarity: "Common", speed: 226, hp: 234, accel: 6.5, value: 34000, image: "assets/cars/car_21.jpg" },
  { name: "Hyundai i30 N", country: "Korea", rarity: "Common", speed: 250, hp: 280, accel: 5.9, value: 32000, image: "assets/cars/car_22.jpg" },
  { name: "Volkswagen Golf GTI", country: "Germany", rarity: "Common", speed: 250, hp: 265, accel: 5.9, value: 38000, image: "assets/cars/car_23.jpg" },
  { name: "Honda Civic Type R", country: "Japan", rarity: "Common", speed: 275, hp: 329, accel: 5.4, value: 50000, image: "assets/cars/car_24.jpg" },
  { name: "Ford Focus ST", country: "USA", rarity: "Common", speed: 250, hp: 280, accel: 5.7, value: 29000, image: "assets/cars/car_25.jpg" },
  { name: "Ford Fiesta ST", country: "USA", rarity: "Common", speed: 230, hp: 200, accel: 6.5, value: 22000, image: "assets/cars/car_26.jpg" },
  { name: "Mini Cooper S", country: "UK", rarity: "Common", speed: 235, hp: 204, accel: 6.7, value: 26000, image: "assets/cars/car_27.jpg" },
  { name: "Toyota GR Yaris", country: "Japan", rarity: "Common", speed: 230, hp: 280, accel: 5.5, value: 45000, image: "assets/cars/car_28.jpg" },
  { name: "Renault Megane RS", country: "France", rarity: "Common", speed: 255, hp: 300, accel: 5.8, value: 28000, image: "assets/cars/car_29.jpg" },
  { name: "Audi S3", country: "Germany", rarity: "Common", speed: 250, hp: 310, accel: 4.8, value: 38000, image: "assets/cars/car_30.jpg" }
];

const SPACE = [
  { name: "Earth", country: "Solar System", rarity: "Common", diameter: 12742, gravity: 9.8, moons: 1, distance: 1.0, image: "assets/space/space_01.jpg" },
  { name: "Mars", country: "Solar System", rarity: "Common", diameter: 6779, gravity: 3.7, moons: 2, distance: 1.5, image: "assets/space/space_02.jpg" },
  { name: "Venus", country: "Solar System", rarity: "Common", diameter: 12104, gravity: 8.9, moons: 0, distance: 0.7, image: "assets/space/space_03.jpg" },
  { name: "Mercury", country: "Solar System", rarity: "Common", diameter: 4879, gravity: 3.7, moons: 0, distance: 0.4, image: "assets/space/space_04.jpg" },
  { name: "Moon", country: "Solar System", rarity: "Common", diameter: 3475, gravity: 1.6, moons: 0, distance: 0.0026, image: "assets/space/space_05.jpg" },
  { name: "Ceres", country: "Asteroid Belt", rarity: "Common", diameter: 940, gravity: 0.27, moons: 0, distance: 2.8, image: "assets/space/space_06.jpg" },
  { name: "Vesta", country: "Asteroid Belt", rarity: "Common", diameter: 525, gravity: 0.25, moons: 0, distance: 2.4, image: "assets/space/space_07.jpg" },
  { name: "Pluto", country: "Kuiper Belt", rarity: "Common", diameter: 2377, gravity: 0.62, moons: 5, distance: 39.5, image: "assets/space/space_08.jpg" },
  { name: "Eris", country: "Kuiper Belt", rarity: "Common", diameter: 2326, gravity: 0.82, moons: 1, distance: 67.7, image: "assets/space/space_09.jpg" },
  { name: "Haumea", country: "Kuiper Belt", rarity: "Common", diameter: 1632, gravity: 0.44, moons: 2, distance: 43.2, image: "assets/space/space_10.jpg" },
  { name: "Makemake", country: "Kuiper Belt", rarity: "Common", diameter: 1430, gravity: 0.5, moons: 1, distance: 45.8, image: "assets/space/space_11.jpg" },
  { name: "Europa", country: "Jupiter Moon", rarity: "Common", diameter: 3122, gravity: 1.3, moons: 0, distance: 5.2, image: "assets/space/space_12.jpg" },
  { name: "Jupiter", country: "Solar System", rarity: "Uncommon", diameter: 139820, gravity: 24.8, moons: 95, distance: 5.2, image: "assets/space/space_13.jpg" },
  { name: "Saturn", country: "Solar System", rarity: "Uncommon", diameter: 116460, gravity: 10.4, moons: 146, distance: 9.5, image: "assets/space/space_14.jpg" },
  { name: "Uranus", country: "Solar System", rarity: "Uncommon", diameter: 50724, gravity: 8.7, moons: 28, distance: 19.8, image: "assets/space/space_15.jpg" },
  { name: "Neptune", country: "Solar System", rarity: "Uncommon", diameter: 49244, gravity: 11.2, moons: 16, distance: 30.1, image: "assets/space/space_16.jpg" },
  { name: "Titan", country: "Saturn Moon", rarity: "Uncommon", diameter: 5150, gravity: 1.35, moons: 0, distance: 9.5, image: "assets/space/space_17.jpg" },
  { name: "Ganymede", country: "Jupiter Moon", rarity: "Uncommon", diameter: 5268, gravity: 1.43, moons: 0, distance: 5.2, image: "assets/space/space_18.jpg" },
  { name: "Callisto", country: "Jupiter Moon", rarity: "Uncommon", diameter: 4821, gravity: 1.24, moons: 0, distance: 5.2, image: "assets/space/space_19.jpg" },
  { name: "Io", country: "Jupiter Moon", rarity: "Uncommon", diameter: 3643, gravity: 1.8, moons: 0, distance: 5.2, image: "assets/space/space_20.jpg" },
  { name: "The Sun", country: "Star", rarity: "Rare", diameter: 1392700, gravity: 274, moons: 8, distance: 0, image: "assets/space/space_21.jpg" },
  { name: "Sirius A", country: "Star", rarity: "Rare", diameter: 2400000, gravity: 196, moons: 0, distance: 544000, image: "assets/space/space_22.jpg" },
  { name: "Vega", country: "Star", rarity: "Rare", diameter: 3300000, gravity: 170, moons: 0, distance: 1580000, image: "assets/space/space_23.jpg" },
  { name: "Proxima Centauri", country: "Star", rarity: "Rare", diameter: 200000, gravity: 1620, moons: 0, distance: 268000, image: "assets/space/space_24.jpg" },
  { name: "Betelgeuse", country: "Red Supergiant", rarity: "Epic", diameter: 1234000000, gravity: 0.002, moons: 0, distance: 41000000, image: "assets/space/space_25.jpg" },
  { name: "Rigel", country: "Blue Supergiant", rarity: "Epic", diameter: 109000000, gravity: 7.5, moons: 0, distance: 55000000, image: "assets/space/space_26.jpg" },
  { name: "TON 618", country: "Black Hole", rarity: "Legendary", diameter: 390000000000, gravity: 9999, moons: 0, distance: 660000000000, image: "assets/space/space_27.jpg" },
  { name: "Andromeda Galaxy", country: "Galaxy", rarity: "Rare", diameter: 2200000000000000000, gravity: 0, moons: 0, distance: 161000000000, image: "assets/space/space_28.jpg" },
  { name: "Milky Way", country: "Galaxy", rarity: "Epic", diameter: 946000000000000000, gravity: 0, moons: 0, distance: 0, image: "assets/space/space_29.jpg" },
  { name: "Sombrero Galaxy", country: "Galaxy", rarity: "Rare", diameter: 474000000000000000, gravity: 0, moons: 0, distance: 1830000000000, image: "assets/space/space_30.jpg" }
];

const DECKS = {
  performance: {
    id: "performance",
    title: "Performance Legends",
    cards: CARS,
    attrs: [
      { key: "speed", label: "Top Speed", unit: "km/h", higherWins: true },
      { key: "hp", label: "Horsepower", unit: "hp", higherWins: true },
      { key: "accel", label: "0-100", unit: "sec", higherWins: false },
      { key: "value", label: "Market Value", unit: "€", higherWins: true }
    ]
  },
  space: {
    id: "space",
    title: "Space Giants",
    cards: SPACE,
    attrs: [
      { key: "diameter", label: "Diameter", unit: "km", higherWins: true },
      { key: "gravity", label: "Gravity", unit: "m/s²", higherWins: true },
      { key: "moons", label: "Moons", unit: "", higherWins: true },
      { key: "distance", label: "Distance from Earth", unit: "AU", higherWins: true }
    ]
  }
};

let ACTIVE_DECK = DECKS.performance;

function attrs() {
  return ACTIVE_DECK.attrs;
}

let S = {
  screen: "home",

  mode: "bot",
  matchType: "quick",

  player1Name: "Player 1",
  player2Name: "Bot",

  p: [],
  b: [],

  pending: [],
  round: null,
  log: [],

  currentTurn: "player1",

  timeLeft: null,
  timerId: null,
  timeExpired: false,
  debugOpen: false
};

const app = document.getElementById("app");

function money(n) {
  return "€" + Number(n).toLocaleString("el-GR");
}

function fmt(c, a) {
  const v = c[a.key];

  if (a.key === "value") return money(v);
  if (a.key === "accel") return Number(v).toFixed(1) + " " + a.unit;
  if (a.key === "distance") return Number(v).toLocaleString("el-GR") + " " + a.unit;
  if (a.unit === "") return Number(v).toLocaleString("el-GR");

  return Number(v).toLocaleString("el-GR") + " " + a.unit;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  if (seconds === null) return "";

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function startTimer() {
  stopTimer();

  if (S.matchType !== "time") return;

  S.timeLeft = 180;
  S.timeExpired = false;

  S.timerId = setInterval(() => {
    if (S.screen === "result") return;

    S.timeLeft--;

    if (S.timeLeft <= 0) {
      S.timeLeft = 0;
      S.timeExpired = true;
      stopTimer();
    }

    render();
  }, 1000);
}

function stopTimer() {
  if (S.timerId) {
    clearInterval(S.timerId);
    S.timerId = null;
  }
}

function start(type) {
  startMatch(S.mode, type);
}

function startMatch(mode, type) {
  stopTimer();

  S.mode = mode;
  S.matchType = type;

  const n =
    type === "quick"
      ? 14
      : 30;

  let deck = shuffle(ACTIVE_DECK.cards).slice(0, n);
  deck = shuffle(deck);

  S.p = deck.slice(0, n / 2);
  S.b = deck.slice(n / 2);

  S.pending = [];
  S.round = null;
  S.log = [];

  S.currentTurn = "player1";
  S.screen = "game";

  S.timeLeft = type === "time" ? 180 : null;
  S.timeExpired = false;

  render();
  startTimer();
}

function h() {
  const showTimer = S.matchType === "time" && S.screen !== "home";
  const timerIsDanger = showTimer && S.timeLeft <= 30;
  const title = S.screen === "home" ? "Yperatou" : ACTIVE_DECK.title;

  return `
    <header class="mb-3">
      <div class="mb-3 flex items-center justify-between gap-3">

        <div>
          ${
            S.screen !== "home"
              ? `
                <p class="text-[10px] font-black uppercase tracking-[.25em] text-amber-400">
                  Yperatou
                </p>
              `
              : ""
          }

          <h1 class="text-xl font-black leading-none">
            ${title}
          </h1>
        </div>

        <div class="flex items-center gap-2">
          ${
            showTimer
              ? `
                <div class="rounded-lg border px-2 py-1 ${
                  timerIsDanger
                    ? "border-red-500 bg-red-500/20 text-red-300"
                    : "border-amber-500 bg-amber-500/10 text-amber-300"
                }">
                  <span class="text-xs font-black">
                    ${formatTime(S.timeLeft)}
                  </span>
                </div>
              `
              : ""
          }

          <div class="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1">
            <span class="text-[10px] font-bold text-amber-400">
              v${APP_VERSION}
            </span>
          </div>
        </div>

      </div>

      ${
        S.screen !== "home"
          ? scoreBar()
          : ""
      }
    </header>
  `;
}

function badge(r) {
  const m = {
    Legendary: "bg-amber-500 text-slate-950",
    Epic: "bg-purple-500",
    Rare: "bg-sky-500",
    Uncommon: "bg-emerald-500",
    Common: "bg-slate-500"
  };

  return `<span class="rounded-full px-3 py-1 text-xs font-black ${m[r]}">${r}</span>`;
}

function card(c, active = true) {
  return `
    <div class="card-shadow overflow-hidden rounded-[2rem] border border-amber-400/40 bg-slate-900">
      <img src="${c.image}" alt="${c.name}" class="h-56 w-full object-cover" />
      <div class="p-5">
        <div class="mb-4 flex items-start justify-between gap-3">
          <div>
            <p class="text-xs uppercase tracking-[.25em] text-amber-300">${c.country}</p>
            <h2 class="text-2xl font-black leading-tight">${c.name}</h2>
          </div>
          ${badge(c.rarity)}
        </div>

        <div class="grid gap-2">
          ${attrs().map(a => `
            <button
              ${active ? `onclick="pick('${a.key}')"` : ""}
              class="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-left ${active ? "hover:border-amber-400" : ""}"
            >
              <span class="text-sm font-bold text-slate-300">${a.label}</span>
              <span class="text-lg font-black text-amber-300">${fmt(c, a)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function scoreBar() {
  const leftName = S.player1Name;
  const rightName = S.player2Name;

  return `
    <section class="mb-4 grid grid-cols-3 gap-2">
      <div class="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-3">
        <p class="text-xs text-emerald-300">${leftName}</p>
        <p class="text-2xl font-black">${S.p.length}</p>
      </div>

      <div class="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-3 text-center">
        <p class="text-xs text-amber-300">Pile</p>
        <p class="text-2xl font-black">${S.pending.length}</p>
      </div>

      <div class="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-3 text-right">
        <p class="text-xs text-rose-300">${rightName}</p>
        <p class="text-2xl font-black">${S.b.length}</p>
      </div>
    </section>
  `;
}

function debugDeckOrder() {
  const player1Cards = S.p
    .map((card, index) => `
      <li class="flex gap-2 border-b border-slate-800 py-1">
        <span class="w-6 shrink-0 text-slate-500">${index + 1}.</span>
        <span>${card.name}</span>
      </li>
    `)
    .join("");

  const player2Cards = S.b
    .map((card, index) => `
      <li class="flex gap-2 border-b border-slate-800 py-1">
        <span class="w-6 shrink-0 text-slate-500">${index + 1}.</span>
        <span>${card.name}</span>
      </li>
    `)
    .join("");

  return `
    <details
      ${S.debugOpen ? "open" : ""}
      ontoggle="S.debugOpen = this.open"
      class="mb-4 rounded-2xl border border-slate-700 bg-slate-900/80 p-4"
    >
      <summary class="cursor-pointer text-sm font-black text-amber-400">
        Debug: Card order
      </summary>

      <div class="mt-4 grid gap-4 text-sm">
        <div>
          <h3 class="mb-2 font-black text-emerald-300">
            ${S.player1Name} (${S.p.length})
          </h3>

          <ol class="max-h-56 overflow-auto rounded-xl bg-slate-950 p-3 text-slate-300">
            ${player1Cards}
          </ol>
        </div>

        <div>
          <h3 class="mb-2 font-black text-rose-300">
            ${S.player2Name} (${S.b.length})
          </h3>

          <ol class="max-h-56 overflow-auto rounded-xl bg-slate-950 p-3 text-slate-300">
            ${player2Cards}
          </ol>
        </div>
      </div>
    </details>
  `;
}

function changelogPanel() {
  return `
    <section class="mt-5 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-5">
      <h3 class="font-black">Version Changes</h3>

      <div class="mt-4 grid gap-4">
        ${APP_CHANGELOG.map(item => `
          <div class="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p class="mb-2 text-sm font-black text-amber-400">
              v${item.version}
            </p>

            <ul class="list-disc space-y-1 pl-5 text-sm text-slate-400">
              ${item.changes.map(change => `
                <li>${change}</li>
              `).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function home() {
  app.innerHTML = h() + `
    <section class="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5">
      <h2 class="mb-4 text-xl font-black">Start Match</h2>

            <div class="mb-5">
        <label class="mb-2 block text-sm font-bold text-slate-300">
          Deck
        </label>

        <div class="grid grid-cols-2 gap-3">
          <button
            onclick="ACTIVE_DECK = DECKS.performance; render()"
            class="rounded-2xl px-4 py-3 font-black ${
              ACTIVE_DECK.id === "performance"
                ? "bg-amber-500 text-slate-950"
                : "border border-slate-700 bg-slate-800 text-white"
            }"
          >
            Performance Legends
          </button>

          <button
            onclick="ACTIVE_DECK = DECKS.space; render()"
            class="rounded-2xl px-4 py-3 font-black ${
              ACTIVE_DECK.id === "space"
                ? "bg-amber-500 text-slate-950"
                : "border border-slate-700 bg-slate-800 text-white"
            }"
          >
            Space Giants
          </button>
        </div>
      </div>

      <div class="mb-5">
        <label class="mb-2 block text-sm font-bold text-slate-300">
          Game Mode
        </label>

        <div class="grid grid-cols-2 gap-3">
          <button
            onclick="S.mode='bot'; S.player2Name='Bot'; render()"
            class="rounded-2xl px-4 py-3 font-black ${
              S.mode === "bot"
                ? "bg-amber-500 text-slate-950"
                : "border border-slate-700 bg-slate-800 text-white"
            }"
          >
            Vs Bot
          </button>

          <button
            onclick="S.mode='human'; if(S.player2Name==='Bot') S.player2Name='Player 2'; render()"
            class="rounded-2xl px-4 py-3 font-black ${
              S.mode === "human"
                ? "bg-amber-500 text-slate-950"
                : "border border-slate-700 bg-slate-800 text-white"
            }"
          >
            Human vs Human
          </button>
        </div>
      </div>

      <label class="mb-2 block text-sm font-bold text-slate-300">
        Player 1 Name
      </label>

      <input
        id="p1Name"
        value="${S.player1Name}"
        class="mb-4 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-amber-400"
      />

      ${
        S.mode === "human"
          ? `
            <label class="mb-2 block text-sm font-bold text-slate-300">
              Player 2 Name
            </label>

            <input
              id="p2Name"
              value="${S.player2Name}"
              class="mb-4 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-amber-400"
            />
          `
          : ""
      }

      <div class="grid gap-3">
        <button
          onclick="
            S.player1Name=document.getElementById('p1Name').value||'Player 1';
            S.player2Name=S.mode==='human'
              ? (document.getElementById('p2Name').value||'Player 2')
              : 'Bot';
            startMatch(S.mode, 'quick');
          "
          class="rounded-2xl bg-amber-500 px-5 py-4 font-black text-slate-950"
        >
          Quick Match · 7 vs 7
        </button>

        <button
          onclick="
            S.player1Name=document.getElementById('p1Name').value||'Player 1';
            S.player2Name=S.mode==='human'
              ? (document.getElementById('p2Name').value||'Player 2')
              : 'Bot';
            startMatch(S.mode, 'classic');
          "
          class="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 font-black"
        >
          Classic Match · 15 vs 15
        </button>

        <button
          onclick="
            S.player1Name=document.getElementById('p1Name').value||'Player 1';
            S.player2Name=S.mode==='human'
              ? (document.getElementById('p2Name').value||'Player 2')
              : 'Bot';
            startMatch(S.mode, 'time');
          "
          class="rounded-2xl border border-amber-500 bg-slate-950 px-5 py-4 font-black text-amber-400"
        >
          Time Attack · 3 min
        </button>
      </div>
    </section>

    <section class="mt-5 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-5">
      <h3 class="font-black">Rules</h3>
      <p class="mt-2 text-sm text-slate-400">
        Διάλεξε attribute όταν είναι η σειρά σου.
        Ο νικητής του γύρου παίζει στον επόμενο γύρο.
        Σε ισοπαλία οι κάρτες πάνε στο pending pile και ο επόμενος νικητής τα παίρνει όλα.
      </p>
    </section>

    ${changelogPanel()}
  `;
}

function game() {
  if (S.mode === "bot" && S.currentTurn === "bot") {
    app.innerHTML = h() + `
      <section class="mb-4 rounded-3xl border border-rose-400/30 bg-rose-500/10 p-4 text-center">
        <p class="text-sm text-slate-300">Bot's turn</p>
        <h2 class="mt-1 text-2xl font-black">Το bot επιλέγει attribute</h2>
        <p class="mt-1 text-sm text-slate-400">Η επιλογή γίνεται τυχαία για το MVP.</p>
      </section>

      ${debugDeckOrder()}

      <div class="mb-8">
        <button
          onclick="botPickRandomAttribute()"
          class="w-full rounded-2xl bg-rose-500 px-4 py-4 font-black text-white"
        >
          Bot selects attribute
        </button>
      </div>

      <button
        onclick="S.screen='home';render()"
        class="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-slate-300"
      >
        Exit Match
      </button>
    `;
    return;
  }

  const activeDeck =
    S.currentTurn === "player2"
      ? S.b
      : S.p;

  const activeName =
    S.currentTurn === "player2"
      ? S.player2Name
      : S.player1Name;

  app.innerHTML = h() + `
    <section class="mb-4 rounded-3xl ${
      S.currentTurn === "player1"
        ? "border border-emerald-400/30 bg-emerald-500/10"
        : "border border-rose-400/30 bg-rose-500/10"
    } p-4">
      <p class="text-sm text-slate-300">${activeName}'s turn</p>
      <h2 class="mt-1 text-2xl font-black">Διάλεξε attribute</h2>
    </section>

    ${debugDeckOrder()}

    ${card(activeDeck[0], true)}

    <button
      onclick="S.screen='home';render()"
      class="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-slate-300"
    >
      Exit Match
    </button>
  `;
}

function pick(k) {
  resolveRound(k, S.currentTurn);
}

function botPickRandomAttribute() {
  const randomAttr = attrs()[Math.floor(Math.random() * attrs().length)];
  resolveRound(randomAttr.key, "bot");
}

function resolveRound(k, selectedBy) {
  const a = attrs().find(x => x.key === k);
  const pc = S.p[0];
  const bc = S.b[0];
  const pv = pc[k];
  const bv = bc[k];

  let w = "tie";

  if (a.higherWins) {
    if (pv > bv) w = "p";
    else if (bv > pv) w = "b";
  } else {
    if (pv < bv) w = "p";
    else if (bv < pv) w = "b";
  }

  S.round = { a, pc, bc, w, selectedBy };
  S.screen = "result";

  render();
}

function cont() {
  const r = S.round;

  const pc = S.p.shift();
  const bc = S.b.shift();

  let nextTurn = "player1";

  if (r.w === "tie") {
    S.pending.push(pc, bc);
    S.log.unshift("Ισοπαλία");

    nextTurn = r.selectedBy;

  } else if (r.w === "p") {
    S.p.push(pc, bc, ...S.pending);
    S.pending = [];

    nextTurn = "player1";

  } else {
    S.b.push(bc, pc, ...S.pending);
    S.pending = [];

    nextTurn = S.mode === "bot" ? "bot" : "player2";
  }

  S.round = null;
  S.currentTurn = nextTurn;

  if (S.p.length === 0 || S.b.length === 0) {
    stopTimer();
    S.screen = "over";
  } else if (S.matchType === "time" && S.timeExpired) {
    stopTimer();
    S.screen = "over";
  } else if (S.mode === "human" && nextTurn === "player2") {
    S.screen = "handoff";
  } else if (S.mode === "human" && nextTurn === "player1" && r.selectedBy === "player2") {
    S.screen = "handoff";
  } else {
    S.screen = "game";
  }

  render();
}

function result() {
  const r = S.round;

  const winnerName =
    r.w === "p"
      ? S.player1Name
      : r.w === "b"
        ? S.player2Name
        : null;

  const selectedByName =
    r.selectedBy === "player1"
      ? S.player1Name
      : r.selectedBy === "player2"
        ? S.player2Name
        : "Bot";

  const txt =
    r.w === "tie"
      ? "Ισοπαλία"
      : `${winnerName} wins`;

  const selectedByText = `${selectedByName} selected`;

  app.innerHTML = h() + `
    <section class="mb-4 rounded-3xl border border-amber-400/30 bg-slate-900 p-4 text-center">
      <p class="text-sm text-slate-400">${selectedByText}: <b>${r.a.label}</b></p>
      <h2 class="mt-1 text-3xl font-black">${txt}</h2>
      <p class="mt-1 text-sm text-slate-400">
        ${S.player1Name}: ${fmt(r.pc, r.a)} · ${S.player2Name}: ${fmt(r.bc, r.a)}
      </p>
    </section>

    <div class="mb-8">
      <button onclick="cont()" class="w-full rounded-2xl bg-amber-500 px-4 py-4 font-black text-slate-950">
        Continue
      </button>
    </div>

    <div class="grid gap-4">
      <div>
        <p class="mb-2 text-sm font-black text-emerald-300">${S.player1Name}</p>
        ${card(r.pc, false)}
      </div>

      <div>
        <p class="mb-2 text-sm font-black text-rose-300">${S.player2Name}</p>
        ${card(r.bc, false)}
      </div>
    </div>
  `;
}

function handoff() {
  const nextPlayerName =
    S.currentTurn === "player2"
      ? S.player2Name
      : S.player1Name;

  app.innerHTML = h() + `
    <section class="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 text-center">
      <p class="text-xs uppercase tracking-[.35em] text-amber-400">
        Human vs Human
      </p>

      <h2 class="mt-3 text-3xl font-black">
        Δώσε τη συσκευή στον/στην ${nextPlayerName}
      </h2>

      <p class="mt-3 text-sm text-slate-400">
        Η επόμενη κάρτα θα εμφανιστεί μόνο όταν πατηθεί συνέχεια.
      </p>

      <button
        onclick="S.screen='game'; render()"
        class="mt-6 w-full rounded-2xl bg-amber-500 px-4 py-4 font-black text-slate-950"
      >
        Είμαι ο/η ${nextPlayerName} - Συνέχεια
      </button>
    </section>
  `;
}

function over() {
  stopTimer();

  const p1Cards = S.p.length;
  const p2Cards = S.b.length;

  let winnerText = "";

  if (p1Cards > p2Cards) {
    winnerText = `${S.player1Name} wins!`;
  } else if (p2Cards > p1Cards) {
    winnerText = `${S.player2Name} wins!`;
  } else {
    winnerText = "Draw!";
  }

  app.innerHTML = h() + `
    <section class="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 text-center">
      <p class="text-xs uppercase tracking-[.35em] text-amber-400">
        Game Over
      </p>

      <h2 class="mt-2 text-4xl font-black">
        ${winnerText}
      </h2>

      ${
        S.matchType === "time"
          ? `
            <p class="mt-3 text-sm font-bold text-slate-400">
              Time Attack finished
            </p>
          `
          : ""
      }

      <div class="mt-6 grid grid-cols-2 gap-3">
        <div class="rounded-2xl bg-emerald-500/10 p-4">
          <p class="text-sm text-emerald-300">${S.player1Name}</p>
          <p class="text-3xl font-black">${p1Cards}</p>
        </div>

        <div class="rounded-2xl bg-rose-500/10 p-4">
          <p class="text-sm text-rose-300">${S.player2Name}</p>
          <p class="text-3xl font-black">${p2Cards}</p>
        </div>
      </div>

      <button onclick="start(S.matchType)" class="mt-6 w-full rounded-2xl bg-amber-500 px-4 py-4 font-black text-slate-950">
        Play Again
      </button>

      <button onclick="stopTimer(); S.screen='home'; render()" class="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 font-black">
        Home
      </button>
    </section>
  `;
}

function render() {
  if (S.screen === "home") home();
  if (S.screen === "game") game();
  if (S.screen === "result") result();
  if (S.screen === "handoff") handoff();
  if (S.screen === "over") over();
}

render();
