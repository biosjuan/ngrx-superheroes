export interface Superhero {
  id: number;
  name: string;
  alias: string;
  powers: number[];
  team: string;
  universe: string;
}

export interface SuperheroPower {
  powerId: number;
  name: string;
  description: string;
}

export const SUPERHEROES: Record<number, Superhero> = {
  1: {
    id: 1,
    name: 'Superman',
    alias: 'Clark Kent',
    powers: [1, 2, 3, 4],
    team: 'Justice League',
    universe: 'DC',
  },
  2: {
    id: 2,
    name: 'Iron Man',
    alias: 'Tony Stark',
    powers: [5, 6, 7],
    team: 'Avengers',
    universe: 'Marvel',
  },
  3: {
    id: 3,
    name: 'Wonder Woman',
    alias: 'Diana Prince',
    powers: [8, 9, 10],
    team: 'Justice League',
    universe: 'DC',
  },
  4: {
    id: 4,
    name: 'Spider-Man',
    alias: 'Peter Parker',
    powers: [11, 12, 13],
    team: 'Avengers',
    universe: 'Marvel',
  },
  5: {
    id: 5,
    name: 'Captain America',
    alias: 'Steve Rogers',
    powers: [14, 15, 16],
    team: 'Avengers',
    universe: 'Marvel',
  },
  6: {
    id: 6,
    name: 'Green Lantern',
    alias: 'Hal Jordan',
    powers: [17, 18, 19],
    team: 'Justice League',
    universe: 'DC',
  },
  7: {
    id: 7,
    name: 'Black Widow',
    alias: 'Natasha Romanoff',
    powers: [20, 21, 22],
    team: 'Avengers',
    universe: 'Marvel',
  },
};

export const SUPERHERO_POWERS: Record<number, SuperheroPower> = {
  1: {
    powerId: 1,
    name: 'Super Strength',
    description:
      'Possesses incredible physical strength, allowing the superhero to lift heavy objects and overpower opponents.',
  },
  2: {
    powerId: 2,
    name: 'Flight',
    description: 'Has the ability to defy gravity and fly through the air.',
  },
  3: {
    powerId: 3,
    name: 'Heat Vision',
    description:
      'Can emit intense beams of heat and energy from their eyes, capable of melting objects or attacking foes.',
  },
  4: {
    powerId: 4,
    name: 'X-ray Vision',
    description:
      'Can see through solid objects and materials using X-ray vision.',
  },
  5: {
    powerId: 5,
    name: 'Powered Armor Suit',
    description:
      'Wears a technologically advanced suit of armor that grants enhanced strength, flight, and various weapons.',
  },
  6: {
    powerId: 6,
    name: 'Genius-level Intellect',
    description:
      'Possesses exceptional intelligence and problem-solving skills, often considered a genius.',
  },
  7: {
    powerId: 7,
    name: 'Engineering Skills',
    description:
      'Has expertise in engineering, allowing them to build advanced gadgets and weapons.',
  },
  8: {
    powerId: 8,
    name: 'Superhuman Strength',
    description:
      'Has strength far beyond that of a normal human, making them incredibly powerful.',
  },
  9: {
    powerId: 9,
    name: 'Lasso of Truth',
    description:
      'Wields a magical lasso that compels those ensnared by it to tell the truth.',
  },
  10: {
    powerId: 10,
    name: 'Flight',
    description:
      'Can fly through the air, defying gravity and moving at great speeds.',
  },
  11: {
    powerId: 11,
    name: 'Wall-Crawling',
    description:
      'Can cling to and crawl on walls and other surfaces, much like a spider.',
  },
  12: {
    powerId: 12,
    name: 'Spider-Sense',
    description:
      'Possesses a heightened sense of danger and imminent threats, alerting them to danger.',
  },
  13: {
    powerId: 13,
    name: 'Web-Shooting',
    description:
      'Can shoot webs from devices or organs, often used for swinging and immobilizing foes.',
  },
  14: {
    powerId: 14,
    name: 'Super Soldier Serum',
    description:
      'Enhanced physical abilities, including strength, agility, and endurance, due to a super soldier serum.',
  },
  15: {
    powerId: 15,
    name: 'Enhanced Agility',
    description:
      'Has exceptional agility, balance, and reflexes, allowing for impressive acrobatics.',
  },
  16: {
    powerId: 16,
    name: 'Vibranium Shield',
    description:
      'Wields a nearly indestructible shield made of vibranium, capable of defending against attacks.',
  },
  17: {
    powerId: 17,
    name: 'Green Lantern Ring',
    description:
      'Wields a Green Lantern power ring that grants various abilities, including energy constructs and flight.',
  },
  18: {
    powerId: 18,
    name: 'Flight (Ring)',
    description:
      'The Green Lantern power ring allows the user to fly through the air.',
  },
  19: {
    powerId: 19,
    name: 'Energy Constructs (Ring)',
    description:
      'Can create objects and weapons out of pure energy using the Green Lantern ring.',
  },
  20: {
    powerId: 20,
    name: 'Master Spy',
    description:
      'Is an expert in espionage, stealth, and infiltration, making them an effective spy and covert operative.',
  },
  21: {
    powerId: 21,
    name: 'Martial Arts Expertise',
    description:
      'Has extensive training in various martial arts, making them a formidable hand-to-hand combatant.',
  },
  22: {
    powerId: 22,
    name: 'Enhanced Durability',
    description:
      'Possesses increased resistance to physical harm and injury, making them more durable in combat.',
  },
};
