const FLAG_IS_SHADOWN = 'is-shadow';
const FLAG_IS_SELECTED = 'is-selected';
const FLAG_IS_ACTIVE = 'is-active';

const BF       = 'B.F.Sword';
const RB       = 'Recurve Bow';
const MUDADEKA = 'Needlessly Large Rod';
const TEAR     = 'Tear of the Goddess';
const VEST     = 'Chain Vest';
const CLOAK    = 'Negatron Cloak';
const BELT     = "Giant's Belt";
const GROVES   = 'Sparring Gloves';
const HERA     = 'Spatula';
const S_HERA   = 'Shadow Spatula';

const ITEM_TABLE = [
  {
    name: 'Deathblade',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9iQzdwcG9CZy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: BF,
  },
  {
    name: 'Giant Slayer',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC84SGxuQVFvcy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: RB,
  },
  {
    name: 'Guardian Angel',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC91TlVkZ1U1Wi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: VEST,
  },
  {
    name: 'Bloodthirster',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9XQWpyc1FHNy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: CLOAK,
  },
  {
    name: 'Hextech Gunblade',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC8yZUVEQ2h0eC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: MUDADEKA,
  },
  {
    name: 'Spear of Shojin',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9NSkhGaml1YS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: TEAR,
  },
  {
    name: "Zeke's Herald",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9Tb21KNE5tMy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: BELT,
  },
  {
    name: 'Infinity Edge',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9ZekVQUzRJcS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: GROVES,
  },
  {
    name: 'Skirmisher Emblem',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9KTFk0MHJjTC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: HERA,
  },
  {
    name: 'Forgotten Emblem',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC84V2xYQVoyeC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: S_HERA,
  },
  {
    name: 'Rapid Firecannon',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9URngwYXJTVC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: RB,
  },
  {
    name: "Titan's Resolve",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC81RUNna0lXcS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: VEST,
  },
  {
    name: "Runaan's Hurricane",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9Rd3lVR1E3Ni5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: CLOAK,
  },
  {
    name: "Guinsoo's Rageblade",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC96TkJ4T21zVC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: MUDADEKA,
  },
  {
    name: "Statikk Shiv",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9DREJTeDhCOS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: TEAR,
  },
  {
    name: "Zz'Rot Portal",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC82d1lMVTV6QS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: BELT,
  },
  {
    name: "Last Whisper",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9lNHk2VlNFUy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: GROVES,
  },
  {
    name: "Legionnaire Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9GeWpvZ1N2My5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: HERA,
  },
  {
    name: "Hellion Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC92MmE0M1ZhQy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: S_HERA,
  },
  {
    name: "Bramble Vest",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC94VDZKS0JHUS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: VEST,
  },
  {
    name: "Gargoyle Stoneplate",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9RYnBleXNUdS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: CLOAK,
  },
  {
    name: "Locket of the Iron Solari",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9SUjJLcGFYZS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: MUDADEKA,
  },
  {
    name: "Frozen Heart",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC96SGNJVDNBUy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: TEAR,
  },
  {
    name: "Sunfire Cape",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC96STdHRTVnQi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: BELT,
  },
  {
    name: "Shroud of Stillness",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9KMFdZT0VBTy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: GROVES,
  },
  {
    name: "Ironclad Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9kajZiRjZEaC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: HERA,
  },
  {
    name: "Cavalier Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9HbldhYTNucy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: S_HERA,
  },
  {
    name: "Dragon's Claw",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9oWUNLVVU5Qy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: CLOAK,
  },
  {
    name: "Ionic Spark",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC83ODVmeHZtVy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: MUDADEKA,
  },
  {
    name: "Chalice of Power",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9ZeU1CUDk4US5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: TEAR,
  },
  {
    name: "Zephyr",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9xMHpWc1VPai5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: BELT,
  },
  {
    name: "Quicksilver",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9CZ3VhYmVFOS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: GROVES,
  },
  {
    name: "Redeemed Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9NaEFOc3dZZC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: HERA,
  },
  {
    name: "Revenant Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9aZURhaEo1Uy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: S_HERA,
  },
  {
    name: "Rabadon's Deathcap",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9YNWwyWmtHcy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: MUDADEKA,
    parts2: MUDADEKA,
  },
  {
    name: "Archangel's Staff",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9nWUZ3T0ZFNy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: MUDADEKA,
    parts2: TEAR,
  },
  {
    name: "Morellonomicon",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9WVzkyMzNPYS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: MUDADEKA,
    parts2: BELT,
  },
  {
    name: "Jeweled Gauntlet",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC92elFOMmFvby5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: MUDADEKA,
    parts2: GROVES,
  },
  {
    name: "Spellweaver Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC82OEJjV2VRci5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: MUDADEKA,
    parts2: HERA,
  },
  {
    name: "Dragonslayer Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9tc3U4alVUSC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: MUDADEKA,
    parts2: S_HERA,
  },
  //涙
  {
    name: "Blue Buff",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC95Y0pZdzBmTy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: TEAR,
    parts2: TEAR,
  },
  {
    name: "Redemption",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC96bmNCemFWRC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJmaXQiOiJjb3ZlciJ9fX0=',
    parts1: TEAR,
    parts2: BELT,
  },
  {
    name: "Hand of Justice",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9acTRSMDIwQS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: TEAR,
    parts2: GROVES,
  },
  {
    name: "",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9OaWNHTVJkMC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: TEAR,
    parts2: HERA,
  },
  {
    name: "Coven Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9TYkZoVEJMNy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: TEAR,
    parts2: S_HERA,
  },
  {
    name: "Warmog's Armor",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9zcWpQU2JNNi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BELT,
    parts2: BELT,
  },
  {
    name: "Trap Claw",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC8xOHhDMVpFaC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BELT,
    parts2: GROVES,
  },
  {
    name: "Dawnbringer Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC80Z05qOW9RaC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: BELT,
    parts2: HERA,
  },
  {
    name: "Nightbringer Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC96dkF5ZGowQi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: BELT,
    parts2: S_HERA,
  },
  {
    name: "Thief's Gloves",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC81bmZBTFl5NC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: GROVES,
    parts2: GROVES,
  },
  {
    name: "Assassin Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9vNmQ0ZkR0ei5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: GROVES,
    parts2: HERA,
  },
  {
    name: "Abomination Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9XaGhyV1IxNy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: GROVES,
    parts2: S_HERA,
  },
  {
    name: "Force of Nature",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9GSUFrMDZUaC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
    parts1: HERA,
    parts2: HERA,
  },
  {
    name: "Force of Darkness",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9LOTRaZjZqby5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: HERA,
    parts2: S_HERA,
  },
];

const PARTS_TABLE = [
  {
    name:BF,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC8wSFJXVzBkQy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:RB,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9yQ2lXVW9mbi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:MUDADEKA,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9GYlZya2JsNS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:TEAR,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC95Zzd4RlQ1Zy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:VEST,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC85M0tWdGY5Yi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:CLOAK,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9aOXRiZWNyMi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:BELT,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9veEhqWnh6bi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:GROVES,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9qaGw2T0t4Ri5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:HERA,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9NVGE5N0hyby5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjoyNCwiZml0IjoiY292ZXIifX19',
  },
  {
    name:S_HERA,
    src:'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9ISXJ5TWQ0cC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
  },
];