const APP_VERSION = "0.4";

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

const ATTRS = [
  { key: "speed", label: "Top Speed", unit: "km/h", higherWins: true },
  { key: "hp", label: "Horsepower", unit: "hp", higherWins: true },
  { key: "accel", label: "0-100", unit: "sec", higherWins: false },
  { key: "value", label: "Market Value", unit: "€", higherWins: true }
];

let S = {
  screen: "home",
  matchType: "quick",
  playerName: "Player",
  p: [],
  b: [],
  pending: [],
  round: null,
  log: [],
  currentTurn: "player"
};

const app = document.getElementById("app");

function money(n) {
  return "€" + Number(n).toLocaleString("el-GR");
}

function fmt(c, a) {
  const v = c[a.key];
  if (a.key === "value") return money(v);
  if (a.key === "accel") return Number(v).toFixed(1) + " " + a.unit;
  return v + " " + a.unit;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function start(type) {
  S.matchType = type;

  const n = type === "quick" ? 20 : 30;
  let deck = shuffle(CARS).slice(0, n);
  deck = shuffle(deck);

  S.p = deck.slice(0, n / 2);
  S.b = deck.slice(n / 2);
  S.pending = [];
  S.round = null;
  S.log = [];
  S.currentTurn = "player";
  S.screen = "game";

  render();
}

function h() {
  return `
    <header class="mb-3">
      <div class="flex items-center justify-between">

        <div>
          <p class="text-[10px] font-black uppercase tracking-[.25em] text-amber-400">
            Yperatou
          </p>

          <h1 class="text-xl font-black leading-none">
            Performance Legends
          </h1>
        </div>

        <div class="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1">
          <span class="text-[10px] font-bold text-amber-400">
            v${APP_VERSION}
          </span>
        </div>

      </div>
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
          ${ATTRS.map(a => `
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
  return `
    <section class="mb-4 grid grid-cols-3 gap-2">
      <div class="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-3">
        <p class="text-xs text-emerald-300">${S.playerName}</p>
        <p class="text-2xl font-black">${S.p.length}</p>
      </div>

      <div class="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-3 text-center">
        <p class="text-xs text-amber-300">Pending</p>
        <p class="text-2xl font-black">${S.pending.length}</p>
      </div>

      <div class="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-3 text-right">
        <p class="text-xs text-rose-300">Bot</p>
        <p class="text-2xl font-black">${S.b.length}</p>
      </div>
    </section>
  `;
}

function home() {
  app.innerHTML = h() + `
    <section class="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5">
      <h2 class="mb-4 text-xl font-black">Start Match</h2>

      <label class="mb-2 block text-sm font-bold text-slate-300">Player name</label>
      <input
        id="nm"
        value="${S.playerName}"
        class="mb-4 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-amber-400"
      />

      <div class="grid gap-3">
        <button
          onclick="S.playerName=document.getElementById('nm').value||'Player';start('quick')"
          class="rounded-2xl bg-amber-500 px-5 py-4 font-black text-slate-950"
        >
          Quick Match · 10 vs 10
        </button>

        <button
          onclick="S.playerName=document.getElementById('nm').value||'Player';start('classic')"
          class="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 font-black"
        >
          Classic Match · 15 vs 15
        </button>
      </div>
    </section>

    <section class="mt-5 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-5">
      <h3 class="font-black">Rules</h3>
      <p class="mt-2 text-sm text-slate-400">
        Διάλεξε attribute όταν είναι η σειρά σου. Αν κερδίσει το bot, παίζει το bot στον επόμενο γύρο.
        Μεγαλύτερο κερδίζει, εκτός από το 0-100 όπου κερδίζει η μικρότερη τιμή.
        Σε ισοπαλία οι κάρτες πάνε στο pending pile και ο επόμενος νικητής τα παίρνει όλα.
      </p>
    </section>
  `;
}

function game() {
  if (S.currentTurn === "bot") {
    app.innerHTML = h() + scoreBar() + `
      <section class="mb-4 rounded-3xl border border-rose-400/30 bg-rose-500/10 p-4 text-center">
        <p class="text-sm text-slate-300">Bot's turn</p>
        <h2 class="mt-1 text-2xl font-black">Το bot επιλέγει attribute</h2>
        <p class="mt-1 text-sm text-slate-400">Η επιλογή γίνεται τυχαία για το MVP.</p>
      </section>

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
        class="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-slate-300"
      >
        Exit Match
      </button>
    `;
    return;
  }

  app.innerHTML = h() + scoreBar() + `
    <section class="mb-4 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-4">
      <p class="text-sm text-slate-300">Your turn</p>
      <h2 class="mt-1 text-2xl font-black">Διάλεξε attribute</h2>
    </section>

    ${card(S.p[0], true)}

    <button
      onclick="S.screen='home';render()"
      class="mt-4 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-slate-300"
    >
      Exit Match
    </button>
  `;
}

function pick(k) {
  resolveRound(k, "player");
}

function botPickRandomAttribute() {
  const randomAttr = ATTRS[Math.floor(Math.random() * ATTRS.length)];
  resolveRound(randomAttr.key, "bot");
}

function resolveRound(k, selectedBy) {
  const a = ATTRS.find(x => x.key === k);
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

  if (r.w === "tie") {
    S.pending.push(pc, bc);
    S.log.unshift("Ισοπαλία");
    S.currentTurn = r.selectedBy === "bot" ? "bot" : "player";
  } else if (r.w === "p") {
    S.p.push(...shuffle([pc, bc, ...S.pending]));
    S.pending = [];
    S.currentTurn = "player";
  } else {
    S.b.push(...shuffle([pc, bc, ...S.pending]));
    S.pending = [];
    S.currentTurn = "bot";
  }

  S.round = null;
  S.screen = S.p.length === 0 || S.b.length === 0 ? "over" : "game";

  render();
}

function result() {
  const r = S.round;
  const txt = r.w === "tie" ? "Ισοπαλία" : r.w === "p" ? `${S.playerName} wins` : "Bot wins";
  const selectedByText = r.selectedBy === "bot" ? "Bot selected" : `${S.playerName} selected`;

  app.innerHTML = h() + `
    <section class="mb-4 rounded-3xl border border-amber-400/30 bg-slate-900 p-4 text-center">
      <p class="text-sm text-slate-400">${selectedByText}: <b>${r.a.label}</b></p>
      <h2 class="mt-1 text-3xl font-black">${txt}</h2>
      <p class="mt-1 text-sm text-slate-400">
        ${S.playerName}: ${fmt(r.pc, r.a)} · Bot: ${fmt(r.bc, r.a)}
      </p>
    </section>
    
    <div class="mb-8">
      <button onclick="cont()" class="w-full rounded-2xl bg-amber-500 px-4 py-4 font-black text-slate-950">
        Continue
      </button>
    </div>

  <div class="grid gap-4">

    <div class="grid gap-4">
      <div>
        <p class="mb-2 text-sm font-black text-emerald-300">${S.playerName}</p>
        ${card(r.pc, false)}
      </div>

      <div>
        <p class="mb-2 text-sm font-black text-rose-300">Bot</p>
        ${card(r.bc, false)}
      </div>
    </div>
  `;
}

function over() {
  const win = S.p.length > S.b.length;

  app.innerHTML = h() + `
    <section class="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 text-center">
      <p class="text-xs uppercase tracking-[.35em] text-amber-400">Game Over</p>
      <h2 class="mt-2 text-4xl font-black">${win ? S.playerName + " wins!" : "Bot wins!"}</h2>

      <div class="mt-6 grid grid-cols-2 gap-3">
        <div class="rounded-2xl bg-emerald-500/10 p-4">
          <p class="text-sm text-emerald-300">${S.playerName}</p>
          <p class="text-3xl font-black">${S.p.length}</p>
        </div>

        <div class="rounded-2xl bg-rose-500/10 p-4">
          <p class="text-sm text-rose-300">Bot</p>
          <p class="text-3xl font-black">${S.b.length}</p>
        </div>
      </div>
      
      <button onclick="start(S.matchType)" class="mt-6 w-full rounded-2xl bg-amber-500 px-4 py-4 font-black text-slate-950">
        Play Again
      </button>

      <button onclick="S.screen='home';render()" class="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 font-black">
        Home
      </button>
    </section>
  `;
}

function render() {
  if (S.screen === "home") home();
  if (S.screen === "game") game();
  if (S.screen === "result") result();
  if (S.screen === "over") over();
}

render();
