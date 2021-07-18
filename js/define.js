const FLAG_IS_SHADOWN = 'is-shadow';
const FLAG_IS_SELECTED = 'is-selected';
const FLAG_IS_ACTIVE = 'is-active';
const FLAG_IS_REQUIRED = 'is-required'

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
    img_src: './img/comps/LordsEdge.png',
    parts1: BF,
    parts2: BF,
  },
  {
    name: 'Giant Slayer',
    img_src: './img/comps/GiantSlayer.png',
    parts1: BF,
    parts2: RB,
  },
  {
    name: 'Guardian Angel',
    img_src: './img/comps/GA.png',
    parts1: BF,
    parts2: VEST,
  },
  {
    name: 'Bloodthirster',
    img_src: './img/comps/BT.png',
    parts1: BF,
    parts2: CLOAK,
  },
  {
    name: 'Hextech Gunblade',
    img_src: './img/comps/HG.png',
    parts1: BF,
    parts2: MUDADEKA,
  },
  {
    name: 'Spear of Shojin',
    img_src: './img/comps/shojin.png',
    parts1: BF,
    parts2: TEAR,
  },
  {
    name: "Zeke's Herald",
    img_src: './img/comps/ZekesHerald.png',
    parts1: BF,
    parts2: BELT,
  },
  {
    name: 'Infinity Edge',
    img_src: './img/comps/IE.png',
    parts1: BF,
    parts2: GROVES,
  },
  {
    name: 'Skirmisher Emblem',
    img_src: './img/comps/SwordoftheDivine.png',
    parts1: BF,
    parts2: HERA,
  },
  {
    name: 'Rapid Firecannon',
    img_src: './img/comps/RF.png',
    parts1: RB,
    parts2: RB,
  },
  {
    name: "Titan's Resolve",
    img_src: './img/comps/TitansResolve.png',
    parts1: RB,
    parts2: VEST,
  },
  {
    name: "Runaan's Hurricane",
    img_src: './img/comps/RH.png',
    parts1: RB,
    parts2: CLOAK,
  },
  {
    name: "Guinsoo's Rageblade",
    img_src: './img/comps/GR.png',
    parts1: RB,
    parts2: MUDADEKA,
  },
  {
    name: "Statikk Shiv",
    img_src: './img/comps/shiv.png',
    parts1: RB,
    parts2: TEAR,
  },
  {
    name: "Zz'Rot Portal",
    img_src: './img/comps/ZzRotPortal.png',
    parts1: RB,
    parts2: BELT,
  },
  {
    name: "Last Whisper",
    img_src: './img/comps/LW.png',
    parts1: RB,
    parts2: GROVES,
  },
  {
    name: "Legionnaire Emblem",
    img_src: './img/comps/DuelistsZeal.png',
    parts1: RB,
    parts2: HERA,
  },
  {
    name: "Bramble Vest",
    img_src: './img/comps/BV.png',
    parts1: VEST,
    parts2: VEST,
  },
  {
    name: "Gargoyle Stoneplate",
    img_src: './img/comps/GS.png',
    parts1: VEST,
    parts2: CLOAK,
  },
  {
    name: "Locket of the Iron Solari",
    img_src: './img/comps/LocketoftheIronSolari.png',
    parts1: VEST,
    parts2: MUDADEKA,
  },
  {
    name: "Frozen Heart",
    img_src: './img/comps/FH.png',
    parts1: VEST,
    parts2: TEAR,
  },
  {
    name: "Sunfire Cape",
    img_src: './img/comps/SunfireCape.png',
    parts1: VEST,
    parts2: BELT,
  },
  {
    name: "Shroud of Stillness",
    img_src: './img/comps/Shroud.png',
    parts1: VEST,
    parts2: GROVES,
  },
  {
    name: "Ironclad Emblem",
    img_src: './img/comps/VanguardsCuirass.png',
    parts1: VEST,
    parts2: HERA,
  },
  {
    name: "Dragon's Claw",
    img_src: './img/comps/DragonsClaw.png',
    parts1: CLOAK,
    parts2: CLOAK,
  },
  {
    name: "Ionic Spark",
    img_src: './img/comps/IonicSpark.png',
    parts1: CLOAK,
    parts2: MUDADEKA,
  },
  {
    name: "Chalice of Power",
    img_src: './img/comps/Chalice.png',
    parts1: CLOAK,
    parts2: TEAR,
  },
  {
    name: "Zephyr",
    img_src: './img/comps/Zephyr.png',
    parts1: CLOAK,
    parts2: BELT,
  },
  {
    name: "Quicksilver",
    img_src: './img/comps/Quicksilver.png',
    parts1: CLOAK,
    parts2: GROVES,
  },
  {
    name: "Redeemed Emblem",
    img_src: './img/comps/ElderwoodHeirloom.png',
    parts1: CLOAK,
    parts2: HERA,
  },
  {
    name: "Rabadon's Deathcap",
    img_src: './img/comps/DC.png',
    parts1: MUDADEKA,
    parts2: MUDADEKA,
  },
  {
    name: "Archangel's Staff",
    img_src: './img/comps/AS.png',
    parts1: MUDADEKA,
    parts2: TEAR,
  },
  {
    name: "Morellonomicon",
    img_src: './img/comps/Mo.png',
    parts1: MUDADEKA,
    parts2: BELT,
  },
  {
    name: "Jeweled Gauntlet",
    img_src: './img/comps/ArcaneGauntlet.png',
    parts1: MUDADEKA,
    parts2: GROVES,
  },
  {
    name: "Spellweaver Emblem",
    img_src: './img/comps/MantleofDusk.png',
    parts1: MUDADEKA,
    parts2: HERA,
  },
  //涙
  {
    name: "Blue Buff",
    img_src: './img/comps/BlueBuff.png',
    parts1: TEAR,
    parts2: TEAR,
  },
  {
    name: "Redemption",
    img_src: './img/comps/Red.png',
    parts1: TEAR,
    parts2: BELT,
  },
  {
    name: "Hand of Justice",
    img_src: './img/comps/HandofJustice.png',
    parts1: TEAR,
    parts2: GROVES,
  },
  {
    name: "Renewer Emblem",
    img_src: './img/comps/MagesCap.png',
    parts1: TEAR,
    parts2: HERA,
  },
  {
    name: "Warmog's Armor",
    img_src: './img/comps/WA.png',
    parts1: BELT,
    parts2: BELT,
  },
  {
    name: "Trap Claw",
    img_src: './img/comps/Backhand.png',
    parts1: BELT,
    parts2: GROVES,
  },
  {
    name: "Dawnbringer Emblem",
    img_src: './img/comps/WarlordsBanner.png',
    parts1: BELT,
    parts2: HERA,
  },
  {
    name: "Thief's Gloves",
    img_src: './img/comps/ThiefsGloves.png',
    parts1: GROVES,
    parts2: GROVES,
  },
  {
    name: "Assassin Emblem",
    img_src: './img/comps/AEmblem.png',
    parts1: GROVES,
    parts2: HERA,
  },
  {
    name: "Force of Nature",
    img_src: './img/comps/ForceOfNature.png',
    parts1: HERA,
    parts2: HERA,
  },
  
  {
    name: 'Forgotten Emblem',
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC84V2xYQVoyeC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: BF,
    parts2: S_HERA,
  },
  {
    name: "Hellion Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC92MmE0M1ZhQy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: RB,
    parts2: S_HERA,
  },
  {
    name: "Cavalier Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9HbldhYTNucy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: VEST,
    parts2: S_HERA,
  },
  {
    name: "Abomination Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9XaGhyV1IxNy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: GROVES,
    parts2: S_HERA,
  },
  {
    name: "Revenant Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9aZURhaEo1Uy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: CLOAK,
    parts2: S_HERA,
  },
  {
    name: "Dragonslayer Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9tc3U4alVUSC5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: MUDADEKA,
    parts2: S_HERA,
  },
  {
    name: "Coven Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC9TYkZoVEJMNy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: TEAR,
    parts2: S_HERA,
  },
  {
    name: "Nightbringer Emblem",
    img_src: 'https://cdn.gamerch.com/resize/eyJidWNrZXQiOiJnYW1lcmNoLWltZy1jb250ZW50cyIsImtleSI6Indpa2lcLzEzOTJcL2VudHJ5XC96dkF5ZGowQi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjg1fSwicmVzaXplIjp7IndpZHRoIjozMiwiZml0IjoiY292ZXIifX19',
    parts1: BELT,
    parts2: S_HERA,
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
    src:'./img/parts/bf.png',
  },
  {
    name:RB,
    src:'./img/parts/rb.png',
  },
  {
    name:MUDADEKA,
    src:'./img/parts/mudadeka.png',
  },
  {
    name:TEAR,
    src:'./img/parts/tear.png',
  },
  {
    name:VEST,
    src:'./img/parts/vest.png',
  },
  {
    name:CLOAK,
    src:'./img/parts/cloak.png',
  },
  {
    name:BELT,
    src:'./img/parts/belt.png',
  },
  {
    name:GROVES,
    src:'./img/parts/grove.png',
  },
  {
    name:HERA,
    src:'./img/parts/hera.png',
  },
  {
    name:S_HERA,
    src:'./img/tmp.png',
  },
];