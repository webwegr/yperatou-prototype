const APP_VERSION = "0.7a3";
const APP_CHANGELOG = [
{
  version: "0.7a3",
  changes: [
    "Added European Nations deck.",
    "Added educational country info with capital, landmark and cultural fact.",
    "Added European Nations option to the deck selector.",
    "Updated card rendering to support optional info text.",
    "Updated value formatting for population and life expectancy."
  ]
},{
  version: "0.7a2",
  changes: [
    "Renamed Space Giants to Cosmic Legends.",
    "Rebuilt the space deck with planets, moons and stars only.",
    "Changed Cosmic Legends attributes to Diameter, Gravity, Temperature and Moons.",
    "Changed deck selection on Home screen from buttons to dropdown."
  ]
  },{
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
  { name: "Γη", country: "Πλανήτης", rarity: "Common", diameter: 12742, gravity: 9.8, temperature: 15, moons: 1, image: "assets/space/space_01.jpg" },
  { name: "Σελήνη", country: "Φεγγάρι Γης", rarity: "Common", diameter: 3475, gravity: 1.62, temperature: -20, moons: 0, image: "assets/space/space_02.jpg" },
  { name: "Άρης", country: "Πλανήτης", rarity: "Common", diameter: 6779, gravity: 3.72, temperature: -63, moons: 2, image: "assets/space/space_03.jpg" },
  { name: "Αφροδίτη", country: "Πλανήτης", rarity: "Common", diameter: 12104, gravity: 8.87, temperature: 464, moons: 0, image: "assets/space/space_04.jpg" },
  { name: "Ερμής", country: "Πλανήτης", rarity: "Common", diameter: 4879, gravity: 3.7, temperature: 167, moons: 0, image: "assets/space/space_05.jpg" },
  { name: "Ευρώπη", country: "Φεγγάρι Δία", rarity: "Common", diameter: 3122, gravity: 1.31, temperature: -160, moons: 0, image: "assets/space/space_06.jpg" },
  { name: "Ιώ", country: "Φεγγάρι Δία", rarity: "Common", diameter: 3643, gravity: 1.8, temperature: -130, moons: 0, image: "assets/space/space_07.jpg" },
  { name: "Καλλιστώ", country: "Φεγγάρι Δία", rarity: "Common", diameter: 4821, gravity: 1.24, temperature: -139, moons: 0, image: "assets/space/space_08.jpg" },
  { name: "Γανυμήδης", country: "Φεγγάρι Δία", rarity: "Common", diameter: 5268, gravity: 1.43, temperature: -163, moons: 0, image: "assets/space/space_09.jpg" },
  { name: "Τιτάνας", country: "Φεγγάρι Κρόνου", rarity: "Common", diameter: 5150, gravity: 1.35, temperature: -179, moons: 0, image: "assets/space/space_10.jpg" },
  { name: "Τρίτωνας", country: "Φεγγάρι Ποσειδώνα", rarity: "Common", diameter: 2707, gravity: 0.78, temperature: -235, moons: 0, image: "assets/space/space_11.jpg" },
  { name: "Εγκέλαδος", country: "Φεγγάρι Κρόνου", rarity: "Common", diameter: 504, gravity: 0.11, temperature: -201, moons: 0, image: "assets/space/space_12.jpg" },
  { name: "Δίας", country: "Πλανήτης", rarity: "Uncommon", diameter: 139820, gravity: 24.79, temperature: -110, moons: 95, image: "assets/space/space_13.jpg" },
  { name: "Κρόνος", country: "Πλανήτης", rarity: "Uncommon", diameter: 116460, gravity: 10.44, temperature: -140, moons: 146, image: "assets/space/space_14.jpg" },
  { name: "Ουρανός", country: "Πλανήτης", rarity: "Uncommon", diameter: 50724, gravity: 8.69, temperature: -195, moons: 28, image: "assets/space/space_15.jpg" },
  { name: "Ποσειδώνας", country: "Πλανήτης", rarity: "Uncommon", diameter: 49244, gravity: 11.15, temperature: -200, moons: 16, image: "assets/space/space_16.jpg" },
  { name: "Χάροντας", country: "Φεγγάρι Πλούτωνα", rarity: "Uncommon", diameter: 1212, gravity: 0.29, temperature: -220, moons: 0, image: "assets/space/space_17.jpg" },
  { name: "Ομπερόν", country: "Φεγγάρι Ουρανού", rarity: "Uncommon", diameter: 1523, gravity: 0.35, temperature: -198, moons: 0, image: "assets/space/space_18.jpg" },
  { name: "Τιτάνια", country: "Φεγγάρι Ουρανού", rarity: "Uncommon", diameter: 1578, gravity: 0.38, temperature: -203, moons: 0, image: "assets/space/space_19.jpg" },
  { name: "Ρέα", country: "Φεγγάρι Κρόνου", rarity: "Uncommon", diameter: 1528, gravity: 0.26, temperature: -174, moons: 0, image: "assets/space/space_20.jpg" },
  { name: "Ήλιος", country: "Αστέρας", rarity: "Rare", diameter: 1392700, gravity: 274, temperature: 5500, moons: 8, image: "assets/space/space_21.jpg" },
  { name: "Εγγύτατος Κενταύρου", country: "Αστέρας", rarity: "Rare", diameter: 214550, gravity: 1100, temperature: 3042, moons: 0, image: "assets/space/space_22.jpg" },
  { name: "Άστρο Barnard", country: "Αστέρας", rarity: "Rare", diameter: 274000, gravity: 950, temperature: 3134, moons: 0, image: "assets/space/space_23.jpg" },
  { name: "Σείριος Α", country: "Αστέρας", rarity: "Rare", diameter: 2380000, gravity: 196, temperature: 9940, moons: 0, image: "assets/space/space_24.jpg" },
  { name: "Βέγκα", country: "Αστέρας", rarity: "Rare", diameter: 3300000, gravity: 170, temperature: 9600, moons: 0, image: "assets/space/space_25.jpg" },
  { name: "Αλτάιρ", country: "Αστέρας", rarity: "Rare", diameter: 2500000, gravity: 130, temperature: 7550, moons: 0, image: "assets/space/space_26.jpg" },
  { name: "Πολικός Αστέρας", country: "Αστέρας", rarity: "Epic", diameter: 65000000, gravity: 5.5, temperature: 6015, moons: 0, image: "assets/space/space_27.jpg" },
  { name: "Ρίγκελ", country: "Αστέρας", rarity: "Epic", diameter: 109000000, gravity: 7.5, temperature: 12100, moons: 0, image: "assets/space/space_28.jpg" },
  { name: "Μπετελγκέζ", country: "Ερυθρός Υπεργίγαντας", rarity: "Epic", diameter: 1234000000, gravity: 0.002, temperature: 3500, moons: 0, image: "assets/space/space_29.jpg" },
  { name: "UY Scuti", country: "Ερυθρός Υπεργίγαντας", rarity: "Legendary", diameter: 2376000000, gravity: 0.001, temperature: 3365, moons: 0, image: "assets/space/space_30.jpg" }
];

const EUROPE = [
  { name:"Ελλάδα", population:10.3, area:131957, lifeExpectancy:81.5, distanceFromGreece:0, info:"Πρωτεύουσα: Αθήνα. Landmark: Παρθενώνας. Η Ελλάδα θεωρείται γενέτειρα της δημοκρατίας και των Ολυμπιακών Αγώνων.", image:"assets/europe/greece.jpg" },
  { name:"Ιταλία", population:58.9, area:301340, lifeExpectancy:83.4, distanceFromGreece:1051, info:"Πρωτεύουσα: Ρώμη. Landmark: Κολοσσαίο. Η Ιταλία υπήρξε το κέντρο της Ρωμαϊκής Αυτοκρατορίας και της Αναγέννησης.", image:"assets/europe/italy.jpg" },
  { name:"Γαλλία", population:68.6, area:551695, lifeExpectancy:82.8, distanceFromGreece:2096, info:"Πρωτεύουσα: Παρίσι. Landmark: Πύργος Άιφελ. Η Γαλλία έχει ασκήσει μεγάλη επιρροή στην τέχνη, τη μόδα και τη γαστρονομία.", image:"assets/europe/france.jpg" },
  { name:"Γερμανία", population:83.5, area:357022, lifeExpectancy:81.0, distanceFromGreece:1803, info:"Πρωτεύουσα: Βερολίνο. Landmark: Πύλη Βρανδεμβούργου. Η Γερμανία διαθέτει τη μεγαλύτερη οικονομία της Ευρώπης.", image:"assets/europe/germany.jpg" },
  { name:"Ισπανία", population:48.6, area:505990, lifeExpectancy:83.2, distanceFromGreece:2370, info:"Πρωτεύουσα: Μαδρίτη. Landmark: Sagrada Familia. Η Ισπανία είναι γνωστή για τον πολιτισμό της και την ποδοσφαιρική της παράδοση.", image:"assets/europe/spain.jpg" },
  { name:"Πορτογαλία", population:10.5, area:92212, lifeExpectancy:81.5, distanceFromGreece:2852, info:"Πρωτεύουσα: Λισαβόνα. Landmark: Πύργος Belém. Οι Πορτογάλοι εξερευνητές πρωταγωνίστησαν στην Εποχή των Ανακαλύψεων.", image:"assets/europe/portugal.jpg" },
  { name:"Ολλανδία", population:17.9, area:41543, lifeExpectancy:81.8, distanceFromGreece:2163, info:"Πρωτεύουσα: Άμστερνταμ. Landmark: Ανεμόμυλοι Kinderdijk. Η χώρα έχει ανακτήσει σημαντικές εκτάσεις γης από τη θάλασσα.", image:"assets/europe/netherlands.jpg" },
  { name:"Βέλγιο", population:11.7, area:30528, lifeExpectancy:81.9, distanceFromGreece:2090, info:"Πρωτεύουσα: Βρυξέλλες. Landmark: Atomium. Το Βέλγιο φιλοξενεί σημαντικούς θεσμούς της Ευρωπαϊκής Ένωσης.", image:"assets/europe/belgium.jpg" },
  { name:"Αυστρία", population:9.1, area:83879, lifeExpectancy:82.0, distanceFromGreece:1283, info:"Πρωτεύουσα: Βιέννη. Landmark: Ανάκτορο Schönbrunn. Η Αυστρία είναι γνωστή για την κλασική μουσική και τους μεγάλους συνθέτες της.", image:"assets/europe/austria.jpg" },
  { name:"Ελβετία", population:8.9, area:41285, lifeExpectancy:83.8, distanceFromGreece:1620, info:"Πρωτεύουσα: Βέρνη. Landmark: Matterhorn. Η Ελβετία είναι γνωστή για τις Άλπεις, την ουδετερότητα και την υψηλή ποιότητα ζωής.", image:"assets/europe/switzerland.jpg" },
  { name:"Σουηδία", population:10.6, area:450295, lifeExpectancy:82.4, distanceFromGreece:2408, info:"Πρωτεύουσα: Στοκχόλμη. Landmark: Δημαρχείο Στοκχόλμης. Στη Σουηδία απονέμονται κάθε χρόνο τα Βραβεία Νόμπελ.", image:"assets/europe/sweden.jpg" },
  { name:"Νορβηγία", population:5.5, area:385207, lifeExpectancy:83.0, distanceFromGreece:2605, info:"Πρωτεύουσα: Όσλο. Landmark: Geirangerfjord. Η Νορβηγία είναι γνωστή για τα φιόρδ, τη ναυτική της παράδοση και το βόρειο σέλας.", image:"assets/europe/norway.jpg" },
  { name:"Δανία", population:5.9, area:42933, lifeExpectancy:81.6, distanceFromGreece:2135, info:"Πρωτεύουσα: Κοπεγχάγη. Landmark: Μικρή Γοργόνα. Η Δανία είναι γνωστή για το design, την ποδηλασία και την έννοια hygge.", image:"assets/europe/denmark.jpg" },
  { name:"Φινλανδία", population:5.6, area:338455, lifeExpectancy:82.0, distanceFromGreece:2500, info:"Πρωτεύουσα: Ελσίνκι. Landmark: Καθεδρικός Ελσίνκι. Η Φινλανδία είναι γνωστή για την εκπαίδευση, τις λίμνες και τη σάουνα.", image:"assets/europe/finland.jpg" },
  { name:"Ιρλανδία", population:5.3, area:70273, lifeExpectancy:82.3, distanceFromGreece:2860, info:"Πρωτεύουσα: Δουβλίνο. Landmark: Cliffs of Moher. Η Ιρλανδία είναι γνωστή για τη λογοτεχνία, τη μουσική και την κελτική παράδοση.", image:"assets/europe/ireland.jpg" },
  { name:"Ηνωμένο Βασίλειο", population:67.7, area:243610, lifeExpectancy:81.0, distanceFromGreece:2400, info:"Πρωτεύουσα: Λονδίνο. Landmark: Big Ben. Το Ηνωμένο Βασίλειο επηρέασε σημαντικά την παγκόσμια ιστορία, τη γλώσσα και τη βιομηχανική επανάσταση.", image:"assets/europe/uk.jpg" },
  { name:"Πολωνία", population:36.8, area:312696, lifeExpectancy:78.6, distanceFromGreece:1598, info:"Πρωτεύουσα: Βαρσοβία. Landmark: Κάστρο Wawel. Η Πολωνία είναι η πατρίδα της βραβευμένης με Νόμπελ Μαρίας Κιουρί.", image:"assets/europe/poland.jpg" },
  { name:"Τσεχία", population:10.9, area:78865, lifeExpectancy:79.5, distanceFromGreece:1535, info:"Πρωτεύουσα: Πράγα. Landmark: Γέφυρα Καρόλου. Η Τσεχία είναι γνωστή για τη μεσαιωνική Πράγα και την πλούσια μουσική της παράδοση.", image:"assets/europe/czechia.jpg" },
  { name:"Ουγγαρία", population:9.6, area:93030, lifeExpectancy:76.7, distanceFromGreece:1125, info:"Πρωτεύουσα: Βουδαπέστη. Landmark: Κοινοβούλιο Βουδαπέστης. Η Ουγγαρία είναι γνωστή για τον Δούναβη και τα θερμά λουτρά της.", image:"assets/europe/hungary.jpg" },
  { name:"Ρουμανία", population:19.0, area:238397, lifeExpectancy:76.6, distanceFromGreece:743, info:"Πρωτεύουσα: Βουκουρέστι. Landmark: Κάστρο Bran. Η Ρουμανία είναι γνωστή για τα Καρπάθια Όρη και την περιοχή της Τρανσυλβανίας.", image:"assets/europe/romania.jpg" },
  { name:"Βουλγαρία", population:6.4, area:110879, lifeExpectancy:75.8, distanceFromGreece:525, info:"Πρωτεύουσα: Σόφια. Landmark: Καθεδρικός Αλεξάντερ Νέφσκι. Η Βουλγαρία έχει πλούσια βαλκανική ιστορία και αρχαία θρακική κληρονομιά.", image:"assets/europe/bulgaria.jpg" },
  { name:"Σερβία", population:6.6, area:88361, lifeExpectancy:75.5, distanceFromGreece:805, info:"Πρωτεύουσα: Βελιγράδι. Landmark: Φρούριο Βελιγραδίου. Η Σερβία βρίσκεται στο σταυροδρόμι Κεντρικής και Νοτιοανατολικής Ευρώπης.", image:"assets/europe/serbia.jpg" },
  { name:"Κροατία", population:3.9, area:56594, lifeExpectancy:78.3, distanceFromGreece:1080, info:"Πρωτεύουσα: Ζάγκρεμπ. Landmark: Τείχη Ντουμπρόβνικ. Η Κροατία είναι γνωστή για τις δαλματικές ακτές και τις ιστορικές της πόλεις.", image:"assets/europe/croatia.jpg" },
  { name:"Σλοβενία", population:2.1, area:20273, lifeExpectancy:81.3, distanceFromGreece:1205, info:"Πρωτεύουσα: Λιουμπλιάνα. Landmark: Λίμνη Bled. Η Σλοβενία συνδυάζει Άλπεις, δάση και ακτές σε μικρή γεωγραφική έκταση.", image:"assets/europe/slovenia.jpg" },
  { name:"Σλοβακία", population:5.4, area:49035, lifeExpectancy:77.8, distanceFromGreece:1250, info:"Πρωτεύουσα: Μπρατισλάβα. Landmark: Κάστρο Μπρατισλάβας. Η Σλοβακία είναι γνωστή για τα Καρπάθια και τα μεσαιωνικά της κάστρα.", image:"assets/europe/slovakia.jpg" },
  { name:"Λιθουανία", population:2.9, area:65300, lifeExpectancy:76.0, distanceFromGreece:1860, info:"Πρωτεύουσα: Βίλνιους. Landmark: Παλιά Πόλη Βίλνιους. Η Λιθουανία υπήρξε μέρος ενός από τα μεγαλύτερα μεσαιωνικά κράτη της Ευρώπης.", image:"assets/europe/lithuania.jpg" },
  { name:"Λετονία", population:1.9, area:64589, lifeExpectancy:75.5, distanceFromGreece:2000, info:"Πρωτεύουσα: Ρίγα. Landmark: Παλιά Πόλη Ρίγας. Η Λετονία είναι γνωστή για την αρχιτεκτονική Art Nouveau και τη βαλτική της ταυτότητα.", image:"assets/europe/latvia.jpg" },
  { name:"Εσθονία", population:1.4, area:45227, lifeExpectancy:78.8, distanceFromGreece:2200, info:"Πρωτεύουσα: Ταλίν. Landmark: Παλιά Πόλη Ταλίν. Η Εσθονία είναι γνωστή για την ψηφιακή διακυβέρνηση και τη μεσαιωνική πρωτεύουσά της.", image:"assets/europe/estonia.jpg" },
  { name:"Ισλανδία", population:0.4, area:103000, lifeExpectancy:83.1, distanceFromGreece:4020, info:"Πρωτεύουσα: Ρέικιαβικ. Landmark: Blue Lagoon. Η Ισλανδία είναι γνωστή για ηφαίστεια, παγετώνες, θερμές πηγές και εντυπωσιακά φυσικά τοπία.", image:"assets/europe/iceland.jpg" },
  { name:"Μάλτα", population:0.5, area:316, lifeExpectancy:83.0, distanceFromGreece:870, info:"Πρωτεύουσα: Βαλέτα. Landmark: Καθεδρικός Αγίου Ιωάννη. Η Μάλτα έχει στρατηγική θέση στη Μεσόγειο και πλούσια ιπποτική ιστορία.", image:"assets/europe/malta.jpg" }
];

const DECKS = {
  performance: {
    id: "performance",
    title: "Performance Legends",
    cards: CARS,
    attrs: [
      { key: "speed", label: "Μέγιστη ταχύτητα", unit: "km/h", higherWins: true },
      { key: "hp", label: "Ιπποδύναμη", unit: "hp", higherWins: true },
      { key: "accel", label: "0-100", unit: "sec", higherWins: false },
      { key: "value", label: "Αξία", unit: "€", higherWins: true }
    ]
  },
  space: {
    id: "space",
    title: "Cosmic Legends",
    cards: SPACE,
    attrs: [
      { key: "diameter", label: "Διάμετρος", unit: "km", higherWins: true },
      { key: "gravity", label: "Βαρύτητα", unit: "m/s²", higherWins: true },
      { key: "temperature", label: "Θερμοκρασία", unit: "°C", higherWins: true },
      { key: "moons", label: "Δορυφόροι", unit: "", higherWins: true }
    ]
  },
  europe: {
   id: "europe",
   title: "European Nations",
   cards: EUROPE,
   attrs: [
     { key: "population", label: "Πληθυσμός", unit: "εκ.", higherWins: true },
     { key: "area", label: "Έκταση", unit: "km²", higherWins: true },
     { key: "lifeExpectancy", label: "Προσδόκιμο ζωής", unit: "έτη", higherWins: true },
     { key: "distanceFromGreece", label: "Απόσταση από Αθήνα", unit: "km", higherWins: true }
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

  if (a.key === "population") {
    return Number(v).toLocaleString("el-GR") + " " + a.unit;
  }

  if (a.key === "lifeExpectancy") {
    return Number(v).toFixed(1).replace(".", ",") + " " + a.unit;
  }

  if (a.key === "gravity") {
    return Number(v).toLocaleString("el-GR") + " " + a.unit;
  }

  if (a.key === "temperature") {
    return Number(v).toLocaleString("el-GR") + " " + a.unit;
  }

  if (a.unit === "") {
    return Number(v).toLocaleString("el-GR");
  }

  return Number(v).toLocaleString("el-GR") + " " + a.unit;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  if (a.key === "gravity") {
    return Number(v).toLocaleString("el-GR") + " " + a.unit;
  }
  return a;

  if (a.key === "temperature") {
    return Number(v).toLocaleString("el-GR") + " " + a.unit;
  }

  if (a.unit === "") {
    return Number(v).toLocaleString("el-GR");
  }

  return Number(v).toLocaleString("el-GR") + " " + a.unit;
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
            <p class="text-xs uppercase tracking-[.25em] text-amber-300">
              ${c.country || ACTIVE_DECK.title}
            </p>

            <h2 class="text-2xl font-black leading-tight">
              ${c.name}
            </h2>
          </div>

          ${
            c.rarity
              ? badge(c.rarity)
              : ""
          }
        </div>

        ${
          c.info
            ? `
              <div class="mb-4 rounded-2xl border border-slate-700 bg-slate-950/70 p-3">
                <p class="text-sm leading-relaxed text-slate-300">
                  ${c.info}
                </p>
              </div>
            `
            : ""
        }

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
      
        <select
          onchange="ACTIVE_DECK = DECKS[this.value]; render()"
          class="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 font-bold text-white outline-none focus:border-amber-400"
        >
          <option value="performance" ${ACTIVE_DECK.id === "performance" ? "selected" : ""}>Performance Legends</option>
          <option value="space" ${ACTIVE_DECK.id === "space" ? "selected" : ""}>Cosmic Legends</option>
          <option value="europe" ${ACTIVE_DECK.id === "europe" ? "selected" : ""}>Χώρες της Ευρώπης</option>
        </select>
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
