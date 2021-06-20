function getTemplate(name) {
  var ret = '';
  switch (name) {
    case 'TEMPLATE1':
      ret = TEMPLATE1;
      break;
    case 'TEMPLATE2':
      ret = TEMPLATE2;
      break;
    case 'TEMPLATE3':
      break;
  }
  return ret;
}

const TEMPLATE1 = [
  {
    name: "Titan's Resolve",
    isShadow: true,
  },
  {
    name: "Ionic Spark",
    isShadow: true,
  },
  {
    name: "Warmog's Armor",
    isShadow: true,
  },
  {
    name: "Blue Buff",
    isShadow: false,
  },
  {
    name: "Jeweled Gauntlet",
    isShadow: false,
  },
  {
    name: "Morellonomicon",
    isShadow: false,
  },
  {
    name: "Spear of Shojin",
    isShadow: false,
  },
  {
    name: "Guinsoo's Rageblade",
    isShadow: false,
  },
];

const TEMPLATE2 = [
  {
    name: "Rapid Firecannon",
    isShadow: false,
  },
  {
    name: "Runaan's Hurricane",
    isShadow: false,
  },
  {
    name: "Hand of Justice",
    isShadow: false,
  },
  {
    name: "Frozen Heart",
    isShadow: false,
  },
  {
    name: "Spear of Shojin",
    isShadow: false,
  },
  {
    name: "Warmog's Armor",
    isShadow: false,
  },
  {
    name: "Hextech Gunblade",
    isShadow: false,
  },
  {
    name: "Dragon's Claw",
    isShadow: false,
  },
];