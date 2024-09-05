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
  //NPC
  {
    name: "Joumae Saori",
    img: "saori.jpg",
    opts: {
      school: ["Arius"],
    NPC: true
    }
  },

  //RF2 Protag
  {
    name: "Kyle",
    img: "akari.jpg",
    opts: {
      school: ["rf2g1"]
    }
  },
  {
    name: "Sora",
    img: "sora.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  }

	
];
	
