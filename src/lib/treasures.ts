export type Treasure = {
  id: string;
  name: string;
  location: string;
  description: string;
  coords: [number, number];
};

export const treasures: Treasure[] = [
  {
    "id": "1",
    "name": "The Lost Treasure of Captain Blackheart",
    "location": "Tortuga, Haiti",
    "description": "A legendary chest of gold and jewels said to be buried somewhere on the pirate island of Tortuga. Many have tried to find it, but none have succeeded.",
    "coords": [20.0667, -72.7936]
  },
  {
    "id": "2",
    "name": "The Sunken Galleon of the Azure Coast",
    "location": "Near Saint-Tropez, France",
    "description": "A Spanish galleon that sank in the 17th century, rumored to be carrying Inca gold and precious artifacts. The wreck is believed to be in deep waters.",
    "coords": [43.2047, 6.1302]
  },
  {
    "id": "3",
    "name": "El Dorado, the Lost City of Gold",
    "location": "Amazon Rainforest, South America",
    "description": "A mythical city of immense wealth, hidden deep within the Amazon jungle. Countless explorers have vanished in search of its golden streets.",
    "coords": [-3.4653, -62.2159]
  },
  {
    "id": "4",
    "name": "The Amber Room",
    "location": "Konigsberg (modern Kaliningrad)",
    "description": "A world-famous chamber decorated in amber panels, gold leaf, and mirrors, stolen by the Nazis during World War II and lost ever since.",
    "coords": [54.7104, 20.5104]
  },
  {
    "id": "5",
    "name": "Yamashita's Gold",
    "location": "Philippines",
    "description": "A vast treasure trove allegedly hidden in the Philippines by Japanese general Tomoyuki Yamashita during World War II.",
    "coords": [14.5995, 120.9842]
  },
  {
    "id": "6",
    "name": "The Treasure of the Knights Templar",
    "location": "Unknown",
    "description": "The legendary lost treasure of the Knights Templar, which vanished from Paris in 1307. Its location is one of history's greatest mysteries.",
    "coords": [48.8566, 2.3522]
  },
  {
    "id": "7",
    "name": "The Lost Dutchman's Gold Mine",
    "location": "Superstition Mountains, Arizona, USA",
    "description": "A fabulously wealthy gold mine hidden in the American Southwest. Its location was taken to the grave by its discoverer, Jacob Waltz.",
    "coords": [33.4146, -111.4837]
  }
];
