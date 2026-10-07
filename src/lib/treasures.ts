export type Treasure = {
  id: string;
  name: string;
  location: string;
  description: string;
  coords: [number, number];
  category: 'land' | 'water';
};

export const treasures: Treasure[] = [
  {
    "id": "1",
    "name": "The Lost Treasure of Captain Blackheart",
    "location": "Tortuga, Haiti",
    "description": "A legendary chest of gold and jewels said to be buried somewhere on the pirate island of Tortuga. Many have tried to find it, but none have succeeded.",
    "coords": [20.0667, -72.7936],
    "category": "land"
  },
  {
    "id": "2",
    "name": "The Sunken Galleon of the Azure Coast",
    "location": "Near Saint-Tropez, France",
    "description": "A Spanish galleon that sank in the 17th century, rumored to be carrying Inca gold and precious artifacts. The wreck is believed to be in deep waters.",
    "coords": [43.2800, 6.6600],
    "category": "water"
  },
  {
    "id": "3",
    "name": "El Dorado, the Lost City of Gold",
    "location": "Amazon Rainforest, South America",
    "description": "A mythical city of immense wealth, hidden deep within the Amazon jungle. Countless explorers have vanished in search of its golden streets.",
    "coords": [-3.4653, -62.2159],
    "category": "land"
  },
  {
    "id": "4",
    "name": "The Amber Room",
    "location": "Konigsberg (modern Kaliningrad)",
    "description": "A world-famous chamber decorated in amber panels, gold leaf, and mirrors, stolen by the Nazis during World War II and lost ever since.",
    "coords": [54.7104, 20.5104],
    "category": "land"
  },
  {
    "id": "5",
    "name": "Yamashita's Gold (Visayas)",
    "location": "Visayas, Philippines",
    "description": "A vast treasure trove allegedly hidden in the Philippines by Japanese general Tomoyuki Yamashita during World War II.",
    "coords": [10.85, 124.80],
    "category": "land"
  },
  {
    "id": "6",
    "name": "The Treasure of the Knights Templar",
    "location": "Unknown",
    "description": "The legendary lost treasure of the Knights Templar, which vanished from Paris in 1307. Its location is one of history's greatest mysteries.",
    "coords": [48.8644, 2.3614],
    "category": "land"
  },
  {
    "id": "7",
    "name": "The Lost Dutchman's Gold Mine",
    "location": "Superstition Mountains, Arizona, USA",
    "description": "A fabulously wealthy gold mine hidden in the American Southwest. Its location was taken to the grave by its discoverer, Jacob Waltz.",
    "coords": [33.4146, -111.4837],
    "category": "land"
  },
  {
    "id": "8",
    "name": "Oak Island Money Pit",
    "location": "Oak Island, Nova Scotia, Canada",
    "description": "A mysterious, booby-trapped pit of unknown origin and depth, rumored to hold everything from pirate treasure to the Holy Grail.",
    "coords": [44.5128, -64.2980],
    "category": "land"
  },
  {
    "id": "9",
    "name": "The Wreck of the Flor de la Mar",
    "location": "Off the coast of Sumatra, Indonesia",
    "description": "A Portuguese galleon that sank in 1511 while laden with a vast treasure plundered from the Sultanate of Malacca, considered one of the richest shipwrecks ever lost.",
    "coords": [4.5000, 98.7000],
    "category": "water"
  },
  {
    "id": "10",
    "name": "The Treasure of Lima",
    "location": "Cocos Island, Costa Rica",
    "description": "A hoard of gold, silver, and jewels spirited away from Lima in 1820 to escape revolution, and subsequently buried on Cocos Island by a mutinous captain.",
    "coords": [5.5283, -87.0603],
    "category": "land"
  },
  {
    "id": "11",
    "name": "The Czar's Lost Gold",
    "location": "Lake Baikal, Russia",
    "description": "A large portion of the Imperial Russian gold reserve that vanished during the Russian Civil War, rumored to have been lost in the icy depths of Lake Baikal.",
    "coords": [51.8000, 104.4000],
    "category": "water"
  },
  {
    "id": "12",
    "name": "King John's Crown Jewels",
    "location": "The Wash, Norfolk, England",
    "description": "The entire baggage train of King John of England, including the Crown Jewels, was lost to the incoming tide in 1216. It has never been recovered from the mudflats.",
    "coords": [52.9100, 0.2900],
    "category": "water"
  },
  {
    "id": "13",
    "name": "The City of the Caesars",
    "location": "Patagonia, Chile/Argentina",
    "description": "A mythical city of untold riches, supposedly founded by shipwrecked Spaniards in the remote mountains of Patagonia. Many have searched, none have returned.",
    "coords": [-41.1500, -71.3500],
    "category": "land"
  },
  {
    "id": "14",
    "name": "Padmanabhaswamy Temple Vault B",
    "location": "Kerala, India",
    "description": "An ancient, unopened vault in a Hindu temple, protected by legend and law. Its contents are unknown but are presumed to be of immense value.",
    "coords": [8.4828, 76.9436],
    "category": "land"
  },
  {
    "id": "15",
    "name": "The Treasure of the Copper Scroll",
    "location": "Near Qumran, West Bank",
    "description": "One of the Dead Sea Scrolls, this copper scroll is a list of 64 locations where a massive treasure of gold and silver was hidden. None of the items have been recovered.",
    "coords": [31.7419, 35.4597],
    "category": "land"
  },
  {
    "id": "16",
    "name": "Lasseter's Reef",
    "location": "Central Australia",
    "description": "A fabulously rich gold reef said to be somewhere in the central Australian deserts. Its discoverer, Harold Bell Lasseter, died without revealing its exact location.",
    "coords": [-25.0201, 129.3956],
    "category": "land"
  },
  {
    "id": "17",
    "name": "The Nazi Gold Train",
    "location": "Wałbrzych, Poland",
    "description": "A train filled with gold, jewels, and art, rumored to have been hidden by the Nazis in a secret tunnel system in the Owl Mountains at the end of WWII.",
    "coords": [50.8175, 16.3244],
    "category": "land"
  },
  {
    "id": "18",
    "name": "Treasure of the Trinity",
    "location": "Ilha da Trindade, Brazil",
    "description": "A vast hoard of Inca gold and jewels stolen by pirates, said to be buried on a remote volcanic island off the Brazilian coast. Many have searched, but the island's treacherous terrain keeps its secrets.",
    "coords": [-20.5052, -29.3254],
    "category": "land"
  },
  {
    "id": "19",
    "name": "The Imperial Seal of China",
    "location": "China",
    "description": "Known as the Heirloom Seal of the Realm, this jade seal was a symbol of imperial power. It was lost during the chaos of the Five Dynasties and Ten Kingdoms period (907-960 AD).",
    "coords": [34.3416, 108.9398],
    "category": "land"
  },
  {
    "id": "20",
    "name": "The Tomb of Cleopatra",
    "location": "Near Alexandria, Egypt",
    "description": "The final resting place of Cleopatra and Mark Antony remains one of archaeology's greatest mysteries, believed to be hidden somewhere near the ancient city of Alexandria.",
    "coords": [30.9450, 29.5190],
    "category": "land"
  },
  {
    "id": "21",
    "name": "Sword of Kusanagi",
    "location": "Atsuta Shrine, Nagoya, Japan",
    "description": "One of the three Imperial Regalia of Japan, this legendary sword's true existence and location are unconfirmed, shrouded in centuries of myth and secrecy.",
    "coords": [35.1275, 136.9086],
    "category": "land"
  },
  {
    "id": "22",
    "name": "Montezuma's Treasure",
    "location": "Lake Texcoco, Mexico",
    "description": "The immense treasure of the Aztec Empire, said to have been cast into Lake Texcoco by the Aztecs during the Spanish siege of Tenochtitlan in 1520.",
    "coords": [19.4700, -98.9800],
    "category": "water"
  },
  {
    "id": "23",
    "name": "The Wreck of the São João",
    "location": "Port Edward, South Africa",
    "description": "A Portuguese galleon laden with riches from India that wrecked in 1552. It was one of the first major European shipwrecks on the South African coast.",
    "coords": [-31.0404, 30.2330],
    "category": "water"
  },
  {
    "id": "24",
    "name": "The Lost Tomb of Genghis Khan",
    "location": "Khentii Mountains, Mongolia",
    "description": "The undiscovered tomb of the great Mongol emperor, said to be filled with immense treasures gathered from across his vast empire. The location is a closely guarded secret, protected by an ancient curse.",
    "coords": [48.7619, 109.0103],
    "category": "land"
  },
  {
    "id": "25",
    "name": "The Lost Hoard of Bactria",
    "location": "Panj River Valley, Tajikistan",
    "description": "A legendary collection of gold artifacts from the ancient Greco-Bactrian Kingdom, said to have been lost in the treacherous mountain passes along the Oxus River.",
    "coords": [37.1000, 68.2900],
    "category": "land"
  },
  {
    "id": "26",
    "name": "The Sunken Treasure of Issyk-Kul",
    "location": "Lake Issyk-Kul, Kyrgyzstan",
    "description": "Legends speak of a vast treasure, possibly from a lost city or monastery, submerged beneath the waters of the 'hot lake,' Issyk-Kul.",
    "coords": [42.4300, 77.2500],
    "category": "water"
  },
  {
    "id": "27",
    "name": "The Secret Library of Otrar",
    "location": "Near Otrar, Kazakhstan",
    "description": "Before its destruction, Otrar was famed for its library. Rumor has it a secret cache of priceless scrolls was hidden before the city fell to the Mongols.",
    "coords": [42.8525, 68.3028],
    "category": "land"
  },
  {
    "id": "28",
    "name": "The Merchant Royal",
    "location": "Off Land's End, Cornwall, England",
    "description": "Known as the 'El Dorado of the Seas', this 17th-century English merchant ship sank with a cargo of gold and silver worth billions today. Its wreckage remains unfound.",
    "coords": [49.9500, -5.9500],
    "category": "water"
  },
  {
    "id": "29",
    "name": "The Santa Maria",
    "location": "Off the coast of Haiti",
    "description": "The flagship of Christopher Columbus's first voyage, which ran aground on Christmas Eve 1492. Its exact final resting place is one of maritime history's greatest secrets.",
    "coords": [19.7800, -72.1700],
    "category": "water"
  },
  {
    "id": "30",
    "name": "The Awa Maru",
    "location": "Taiwan Strait",
    "description": "A Japanese ocean liner torpedoed in 1945. It was rumored to be carrying the fossilized remains of Peking Man and billions in gold and platinum treasures.",
    "coords": [24.6700, 119.7500],
    "category": "water"
  },
  {
    "id": "31",
    "name": "The Nuestra Señora de la Concepción",
    "location": "Off the coast of Saipan",
    "description": "A Spanish galleon that wrecked in 1638 while carrying a massive cargo of gold, jewels, and Chinese porcelain destined for Mexico.",
    "coords": [15.1250, 145.6920],
    "category": "water"
  },
  {
    "id": "32",
    "name": "The San Miguel",
    "location": "Off Amelia Island, Florida, USA",
    "description": "Part of the 1715 Treasure Fleet, this flagship is believed to have been carrying a specialized 'Queen's jewels' cargo that has never been recovered.",
    "coords": [30.6200, -81.4100],
    "category": "water"
  },
  {
    "id": "33",
    "name": "Yamashita's Gold (Luzon)",
    "location": "Luzon, Philippines",
    "description": "Reported sites of buried WWII Japanese treasure vaults hidden in the mountains and subterranean tunnels of Luzon Island.",
    "coords": [15.8, 120.8],
    "category": "land"
  },
  {
    "id": "34",
    "name": "Yamashita's Gold (Mindanao)",
    "location": "Mindanao, Philippines",
    "description": "Deep caches and hidden vaults rumored to contain WWII treasure scattered across the rugged terrain of Mindanao.",
    "coords": [7.8, 125.0],
    "category": "land"
  }
];