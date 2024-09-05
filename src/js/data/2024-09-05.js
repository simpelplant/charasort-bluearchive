dataSetVersion = "2024-09-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "game",
    tooltip: "Check to restrict characters from a category.",
    checked: true,
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
    name: "Exclude Villagers",
    key: "NPC",
    tooltip: "Check to remove non-marriageable characters",
    checked: false
  },
  {
    name: "Exclude Protagonists",
    key: "protag",
    tooltip: "Check to remove player characters.",
    checked: false
  },	
  {
    name: "Girls Only",
    key: "notgirl",
    tooltip: "Check to remove all non-female characters.",
    checked: false
  },
  {
    name: "Boys Only",
    key: "notboy",
    tooltip: "Check to remove all non-male characters.",
    checked: false
  },
  {
    name: "Remove Duplicate Appearances",
    key: "dupes",
    tooltip: "Check to condense multiple-appearances characters (ex. RF1 Melody and RFF Melody).",
    checked: true
  },
];

dataSet[dataSetVersion].characterData = [
  //RF1 protag
  {
    name: "Raguna",
    img: "chara_rune1_1.png",
    opts: {
      game: ["rf1"],
      protag: true,
      notgirl: true,
      dupes: true
    }
  },
 //RF1 girls
  {
    name: "Mist",
    img: "chara_rune1_2.png",
    opts: {
      game: ["rf1"],
      notboy: true,
      dupes: true
    }
  },
  {
    name: "Rosetta",
    img: "chara_rune1_3.png",
    opts: {
      game: ["rf1"],
      notboy: true,
      dupes: true
    }
  },
  {
    name: "Lara",
    img: "chara_rune1_10.png",
    opts: {
      game: ["rf1"],
      notboy: true,
      dupes: true
    }
  },
  {
    name: "Melody",
    img: "chara_rune1_8.png",
    opts: {
      game: ["rf1"],
      notboy: true,
      dupes: true
    }
  },
  {
    name: "Bianca",
    img: "chara_rune1_9.png",
    opts: {
      game: ["rf1"],
      notboy: true,
      dupes: true
    }
  },
  {
    name: "Tabatha",
    img: "chara_rune1_5.png",
    opts: {
      game: ["rf1"],
      notboy: true,
      dupes: true
    }
  },
  {
    name: "Felicity",
    img: "chara_rune1_4.png",
    opts: {
      game: ["rf1"],
      notboy: true
    }
  },
  {
    name: "Tori",
    img: "chara_rune1_7.png",
    opts: {
      game: ["rf1"],
      notboy: true
    }
  },
   {
    name: "Sharron",
    img: "chara_rune1_6.png",
    opts: {
      game: ["rf1"],
      notboy: true
    }
  },
  {
    name: "Mei",
    img: "chara_rune1_11.png",
    opts: {
      game: ["rf1"],
      notboy: true
    }
  },
  {
    name: "Lynette",
    img: "chara_rune1_12.png",
    opts: {
      game: ["rf1"],
      notboy: true
    }
  },
  //RF2 Protag
  {
    name: "Kyle",
    img: "chara_rune2_1.png",
    opts: {
      school: ["rf2g1"],
      protag: true,
      notgirl: true
    }
  },
  {
    name: "Aaron",
    img: "chara_rune2_9.png",
    opts: {
      school: ["rf2g2"],
      protag: true,
      notgirl: true
    }
  },
  {
    name: "Aria",
    img: "chara_rune2_10.png",
    opts: {
      school: ["rf2g2"],
      protag: true,
      notboy: true
    }
  },
 //RF2 girls
  {
    name: "Mana",
    img: "chara_rune2_2.png",
    opts: {
      game: ["rf2g1"],
      notboy: true
    }
  },
  {
    name: "Julia",
    img: "chara_rune2_3.png",
    opts: {
      game: ["rf2g1"],
      notboy: true
    }
  },
  {
    name: "Alicia",
    img: "chara_rune2_4.png",
    opts: {
      game: ["rf2g1"],
      notboy: true
    }
  },
  {
    name: "Dorothy",
    img: "chara_rune2_5.png",
    opts: {
      game: ["rf2g1"],
      notboy: true
    }
  },
  {
    name: "Rosalind",
    img: "chara_rune2_7.png",
    opts: {
      game: ["rf2g1"],
      notboy: true
    }
  },
  {
    name: "Yue",
    img: "chara_rune2_8.png",
    opts: {
      game: ["rf2g1"],
      notboy: true
    }
  },
  {
    name: "Cecilia",
    img: "chara_rune2_6.png",
    opts: {
      game: ["rf2g1"],
      notboy: true
    }
  },
 //RF2 gen2
  {
    name: "Sera",
    img: "chara_rune2_11.png",
    opts: {
      school: ["rf2g2"],
      notboy: true
    }
  },
  {
    name: "Serena",
    img: "chara_rune2_11.png",
    opts: {
      school: ["rf2g2"],
      notboy: true
    }
  },
  {
    name: "Orland",
    img: "chara_rune2_12.png",
    opts: {
      school: ["rf2g2"],
      notgirl: true
    }
  },
  {
    name: "Leonel",
    img: "chara_rune2_13.png",
    opts: {
      school: ["rf2g2"],
      notgirl: true
    }
  },  {
    name: "Leann",
    img: "chara_rune2_14.png",
    opts: {
      school: ["rf2g2"],
      notboy: true
    }
  },
  {
    name: "Roy",
    img: "chara_rune2_15.png",
    opts: {
      school: ["rf2g2"],
      notgirl: true
    }
  },
  {
    name: "Cammy",
    img: "chara_rune2_16.png",
    opts: {
      school: ["rf2g2"],
      notboy: true
    }
  },
  //RF3 protag
  {
    name: "Micah",
    img: "chara_rune3_1.png",
    opts: {
      game: ["rf3"],
      protag: true,
      notgirl: true
    }
  },
 //RF3 girls
  {
    name: "Shara",
    img: "chara_rune3_2.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Raven",
    img: "chara_rune3_3.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Karina",
    img: "chara_rune3_4.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Collette",
    img: "chara_rune3_5.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Marian",
    img: "chara_rune3_6.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Sofia",
    img: "chara_rune3_7.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Pia",
    img: "chara_rune3_8.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Sakuya",
    img: "chara_rune3_9.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
   {
    name: "Carmen",
    img: "chara_rune3_10.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Daria",
    img: "chara_rune3_11.png",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
  {
    name: "Kuruna",
    img: "chara_rune3_12",
    opts: {
      game: ["rf3"],
      notboy: true
    }
  },
 //RF4 protag
  {
    name: "Lest",
    img: "chara_rune4_1.png",
    opts: {
      game: ["rf4"],
      protag: true,
      notgirl: true
    }
  },
  {
    name: "Frey",
    img: "chara_rune4_2.png",
    opts: {
      game: ["rf4"],
      protag: true,
      notboy: true
    }
  },
 //RF4 candidates
  {
    name: "Margaret",
    img: "chara_rune4_3.png",
    opts: {
      game: ["rf4"],
      notboy: true
    }
  },
  {
    name: "Amber",
    img: "chara_rune4_4.png",
    opts: {
      game: ["rf4"],
      notboy: true
    }
  },
  {
    name: "Vishnal",
    img: "chara_rune4_5.png",
    opts: {
      game: ["rf4"],
      notgirl: true
    }
  },
  {
    name: "Dylas",
    img: "chara_rune4_6.png",
    opts: {
      game: ["rf4"],
      notgirl: true
    }
  },
  {
    name: "Forte",
    img: "chara_rune4_7.png",
    opts: {
      game: ["rf4"],
      notboy: true
    }
  },
  {
    name: "Dolce",
    img: "chara_rune4_8.png",
    opts: {
      game: ["rf4"],
      notboy: true
    }
  },
  {
    name: "Arthur",
    img: "chara_rune4_9.png",
    opts: {
      game: ["rf4"],
      notgirl: true
    }
  },
  {
    name: "Kiel",
    img: "chara_rune4_10.png",
    opts: {
      game: ["rf4"],
      notgirl: true
    }
  },
   {
    name: "Xiao Pai",
    img: "chara_rune4_11.png",
    opts: {
      game: ["rf4"],
      notboy: true
    }
  },
  {
    name: "Clorica",
    img: "chara_rune4_12.png",
    opts: {
      game: ["rf4"],
      notboy: true
    }
  },
  {
    name: "Doug",
    img: "chara_rune4_13.png",
    opts: {
      game: ["rf4"],
      notgirl: true
    }
  },
   {
    name: "Leon",
    img: "chara_rune4_14.png",
    opts: {
      game: ["rf4"],
      notgirl: true
    }
  },
 //RF5 protag
  {
    name: "Ares",
    img: "chara_rune5_1.png",
    opts: {
      game: ["rf5"],
      protag: true,
      notgirl: true
    }
  },
  {
    name: "Alice",
    img: "chara_rune5_2.png",
    opts: {
      game: ["rf5"],
      protag: true,
      notboy: true
    }
  },
 //RF5 candidates
  {
    name: "Priscilla",
    img: "chara_rune5_3.png",
    opts: {
      game: ["rf5"],
      notboy: true
    }
  },
  {
    name: "Martin",
    img: "chara_rune5_4.png",
    opts: {
      game: ["rf5"],
      notgirl: true
    }
  },
  {
    name: "Scarlett",
    img: "chara_rune5_5.png",
    opts: {
      game: ["rf5"],
      notboy: true
    }
  },
  {
    name: "Reinhard",
    img: "chara_rune5_6.png",
    opts: {
      game: ["rf5"],
      notgirl: true
    }
  },
  {
    name: "Lucy",
    img: "chara_rune5_7.png",
    opts: {
      game: ["rf5"],
      notboy: true
    }
  },
  {
    name: "Cecil",
    img: "chara_rune5_8.png",
    opts: {
      game: ["rf5"],
      notgirl: true
    }
  },
  {
    name: "Fuuka",
    img: "chara_rune5_9.png",
    opts: {
      game: ["rf5"],
      notboy: true
    }
  },
  {
    name: "Murakumo",
    img: "chara_rune5_10.png",
    opts: {
      game: ["rf5"],
      notgirl: true
    }
  },
   {
    name: "Ludmila",
    img: "chara_rune5_11.png",
    opts: {
      game: ["rf5"],
      notboy: true
    }
  },
  {
    name: "Lucas",
    img: "chara_rune5_12.png",
    opts: {
      game: ["rf5"],
      notgirl: true
    }
  },
  {
    name: "Beatrice",
    img: "chara_rune5_13.png",
    opts: {
      game: ["rf5"],
      notboy: true
    }
  },
   {
    name: "Ryker",
    img: "chara_rune5_14.png",
    opts: {
      game: ["rf5"],
      notgirl: true
    }
  },
 //RFF protag
  {
    name: "Raguna",
    img: "chara_runef_1.png",
    opts: {
      game: ["rff"],
      protag: true,
      notgirl: true
    }
  },
 //RFF girls
  {
    name: "Mist",
    img: "chara_runef_2.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Rosetta",
    img: "chara_runef_3.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Lara",
    img: "chara_runef_4.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Melody",
    img: "chara_runef_5.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Bianca",
    img: "chara_runef_6.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Tabatha",
    img: "chara_runef_7.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Eunice",
    img: "chara_runef_8.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Cinnamon",
    img: "chara_runef_9.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
   {
    name: "Anette",
    img: "chara_runef_10.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Selphy",
    img: "chara_runef_11.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Uzuki",
    img: "chara_runef_12.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Iris Blanche",
    img: "chara_runef_13.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
  {
    name: "Iris Noire",
    img: "chara_runef_13.png",
    opts: {
      game: ["rff"],
      notboy: true
    }
  },
 //RFO protag
  {
    name: "Aden",
    img: "chara_runeo_1.png",
    opts: {
      game: ["rfo"],
      protag: true,
      notgirl: true
    }
  },
  {
    name: "Sonja",
    img: "chara_runeo_2.png",
    opts: {
      game: ["rfo"],
      protag: true,
      notboy: true
    }
  },
 //RFO candidates
  {
    name: "Lily",
    img: "chara_runeo_3.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "Odette",
    img: "chara_runeo_4.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "Violet",
    img: "chara_runeo_5.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "Electra",
    img: "chara_runeo_6.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "Sierra",
    img: "chara_runeo_7.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "Elena",
    img: "chara_runeo_8.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "Mikoto",
    img: "chara_runeo_9.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "Maerwen",
    img: "chara_runeo_10.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
   {
    name: "Pandora",
    img: "chara_runeo_11.png",
    opts: {
      game: ["rfo"],
      notboy: true
    }
  },
  {
    name: "James",
    img: "chara_runeo_12.png",
    opts: {
      game: ["rfo"],
      notgirl: true
    }
  },
  {
    name: "Joe",
    img: "chara_runeo_13.png",
    opts: {
      game: ["rfo"],
      notgirl: true
    }
  },
   {
    name: "Bismark",
    img: "chara_runeo_14.png",
    opts: {
      game: ["rfo"],
      notgirl: true
    }
  }

];
	
