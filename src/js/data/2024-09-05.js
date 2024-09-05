dataSetVersion = "2024-09-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "game",
    tooltip: "Check to restrict characters from a category.",
    checked: false,
    sub: [
      { name: "Rune Factory", key: "rf1" },
      { name: "Rune Factory 2 (Gen1)", key: "rf2g1" },
      { name: "Rune Factory 2 (Gen2)", key: "rf2g2" },
      { name: "Rune Factory 3", key: "rf3" },
      { name: "Rune Factory 4", key: "rf4" },
      { name: "Rune Factory 5", key: "rf5" },
      { name: "Rune Factory Frontier", key: "rff" },
      { name: "Rune Factory Oceans", key: "rfo" },
    ]
  },
  {
    name: "Marriageables Only",
    key: "NPC",
    tooltip: "Check this to remove non-marriageable characters",
    checked: false
  },
  {
    name: "Girls Only",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Boys Only",
    key: "notboy",
    tooltip: "Check this to remove all non-male characters."
  },
];

dataSet[dataSetVersion].characterData = [
  //RF1 protag
  {
    name: "Raguna",
    img: "chara_rune1_1.png",
    opts: {
      game: ["rf1"]
    }
  },
 //RF1 girls
  {
    name: "Mist",
    img: "chara_rune1_2.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Rosetta",
    img: "chara_rune1_3.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Lara",
    img: "chara_rune1_10.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Melody",
    img: "chara_rune1_8.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Bianca",
    img: "chara_rune1_9.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Tabatha",
    img: "chara_rune1_5.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Felicity",
    img: "chara_rune1_4.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Tori",
    img: "chara_rune1_7.png",
    opts: {
      game: ["rf1"]
    }
  },
   {
    name: "Sharron",
    img: "chara_rune1_6.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Mei",
    img: "chara_rune1_11.png",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Lynette",
    img: "chara_rune1_12.png",
    opts: {
      game: ["rf1"]
    }
  },
  //RF2 Protag
  {
    name: "Kyle",
    img: "chara_rune2_1.png",
    opts: {
      school: ["rf2g1"]
    }
  },
  {
    name: "Aaron",
    img: "chara_rune2_9.png",
    opts: {
      school: ["rf2g2"]
    }
  },
  {
    name: "Aria",
    img: "chara_rune2_10.png",
    opts: {
      school: ["rf2g2"]
    }
  },
 //RF2 girls
  {
    name: "Mana",
    img: "chara_rune2_2.png",
    opts: {
      game: ["rf2g1"]
    }
  },
  {
    name: "Julia",
    img: "chara_rune2_3.png",
    opts: {
      game: ["rf2g1"]
    }
  },
  {
    name: "Alicia",
    img: "chara_rune2_4.png",
    opts: {
      game: ["rf2g1"]
    }
  },
  {
    name: "Dorothy",
    img: "chara_rune2_5.png",
    opts: {
      game: ["rf2g1"]
    }
  },
  {
    name: "Rosalind",
    img: "chara_rune2_7.png",
    opts: {
      game: ["rf2g1"]
    }
  },
  {
    name: "Yue",
    img: "chara_rune2_8.png",
    opts: {
      game: ["rf2g1"]
    }
  },
  {
    name: "Cecilia",
    img: "chara_rune2_6.png",
    opts: {
      game: ["rf2g1"]
    }
  },
 //RF2 gen2
  {
    name: "Sera",
    img: "chara_rune2_11.png",
    opts: {
      school: ["rf2g2"]
    }
  },
  {
    name: "Serena",
    img: "chara_rune2_11.png",
    opts: {
      school: ["rf2g2"]
    }
  },
  {
    name: "Orland",
    img: "chara_rune2_12.png",
    opts: {
      school: ["rf2g2"]
    }
  },
  {
    name: "Leonel",
    img: "chara_rune2_13.png",
    opts: {
      school: ["rf2g2"]
    }
  },  {
    name: "Leann",
    img: "chara_rune2_14.png",
    opts: {
      school: ["rf2g2"]
    }
  },
  {
    name: "Roy",
    img: "chara_rune2_15.png",
    opts: {
      school: ["rf2g2"]
    }
  },
  {
    name: "Cammy",
    img: "chara_rune2_16.png",
    opts: {
      school: ["rf2g2"]
    }
  },
  //RF3 protag
  {
    name: "Micah",
    img: "chara_rune3_1.png",
    opts: {
      game: ["rf3"]
    }
  },
 //RF3 girls
  {
    name: "Shara",
    img: "chara_rune3_2.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Raven",
    img: "chara_rune3_3.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Karina",
    img: "chara_rune3_4.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Collette",
    img: "chara_rune3_5.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Marian",
    img: "chara_rune3_6.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Sofia",
    img: "chara_rune3_7.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Pia",
    img: "chara_rune3_8.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Sakuya",
    img: "chara_rune3_9.png",
    opts: {
      game: ["rf3"]
    }
  },
   {
    name: "Carmen",
    img: "chara_rune3_10.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Daria",
    img: "chara_rune3_11.png",
    opts: {
      game: ["rf3"]
    }
  },
  {
    name: "Kuruna",
    img: "chara_rune3_12",
    opts: {
      game: ["rf3"]
    }
  },
 //RF4 protag
  {
    name: "Lest",
    img: "chara_rune4_1.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Frey",
    img: "chara_rune4_2.png",
    opts: {
      game: ["rf4"]
    }
  },
 //RF4 candidates
  {
    name: "Margaret",
    img: "chara_rune4_3.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Amber",
    img: "chara_rune4_4.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Vishnal",
    img: "chara_rune4_5.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Dylas",
    img: "chara_rune4_6.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Forte",
    img: "chara_rune4_7.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Dolce",
    img: "chara_rune4_8.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Arthur",
    img: "chara_rune4_9.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Kiel",
    img: "chara_rune4_10.png",
    opts: {
      game: ["rf4"]
    }
  },
   {
    name: "Xiao Pai",
    img: "chara_rune4_11.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Clorica",
    img: "chara_rune4_12.png",
    opts: {
      game: ["rf4"]
    }
  },
  {
    name: "Doug",
    img: "chara_rune4_13.png",
    opts: {
      game: ["rf4"]
    }
  },
   {
    name: "Leon",
    img: "chara_rune4_14.png",
    opts: {
      game: ["rf4"]
    }
  },
 //RF5 protag
  {
    name: "Ares",
    img: "chara_rune5_1.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Alice",
    img: "chara_rune5_2.png",
    opts: {
      game: ["rf5"]
    }
  },
 //RF5 candidates
  {
    name: "Priscilla",
    img: "chara_rune5_3.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Martin",
    img: "chara_rune5_4.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Scarlett",
    img: "chara_rune5_5.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Reinhard",
    img: "chara_rune5_6.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Lucy",
    img: "chara_rune5_7.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Cecil",
    img: "chara_rune5_8.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Fuuka",
    img: "chara_rune5_9.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Murakumo",
    img: "chara_rune5_10.png",
    opts: {
      game: ["rf5"]
    }
  },
   {
    name: "Ludmila",
    img: "chara_rune5_11.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Lucas",
    img: "chara_rune5_12.png",
    opts: {
      game: ["rf5"]
    }
  },
  {
    name: "Beatrice",
    img: "chara_rune5_13.png",
    opts: {
      game: ["rf5"]
    }
  },
   {
    name: "Ryker",
    img: "chara_rune5_14.png",
    opts: {
      game: ["rf5"]
    }
  },
 //RFF protag
  {
    name: "Raguna",
    img: "chara_runef_1.png",
    opts: {
      game: ["rff"]
    }
  },
 //RFF girls
  {
    name: "Mist",
    img: "chara_runef_2.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Rosetta",
    img: "chara_runef_3.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Lara",
    img: "chara_runef_4.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Melody",
    img: "chara_runef_5.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Bianca",
    img: "chara_runef_6.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Tabatha",
    img: "chara_runef_7.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Eunice",
    img: "chara_runef_8.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Cinnamon",
    img: "chara_runef_9.png",
    opts: {
      game: ["rff"]
    }
  },
   {
    name: "Anette",
    img: "chara_runef_10.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Selphy",
    img: "chara_runef_11.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Uzuki",
    img: "chara_runef_12.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Iris Blanche",
    img: "chara_runef_13.png",
    opts: {
      game: ["rff"]
    }
  },
  {
    name: "Iris Noire",
    img: "chara_runef_13.png",
    opts: {
      game: ["rff"]
    }
  },
 //RFO protag
  {
    name: "Aden",
    img: "chara_runeo_1.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Sonja",
    img: "chara_runeo_2.png",
    opts: {
      game: ["rfo"]
    }
  },
 //RFO candidates
  {
    name: "Lily",
    img: "chara_runeo_3.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Odette",
    img: "chara_runeo_4.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Violet",
    img: "chara_runeo_5.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Electra",
    img: "chara_runeo_6.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Sierra",
    img: "chara_runeo_7.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Elena",
    img: "chara_runeo_8.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Mikoto",
    img: "chara_runeo_9.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Maerwen",
    img: "chara_runeo_10.png",
    opts: {
      game: ["rfo"]
    }
  },
   {
    name: "Pandora",
    img: "chara_runeo_11.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "James",
    img: "chara_runeo_12.png",
    opts: {
      game: ["rfo"]
    }
  },
  {
    name: "Joe",
    img: "chara_runeo_13.png",
    opts: {
      game: ["rfo"]
    }
  },
   {
    name: "Bismark",
    img: "chara_runeo_14.png",
    opts: {
      game: ["rfo"]
    }
  }

];
	
