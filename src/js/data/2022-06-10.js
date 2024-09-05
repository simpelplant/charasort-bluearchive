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
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
 //RF1 girls
  {
    name: "Mist",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Rosetta",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Lara",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Melody",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Bianca",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Tabatha",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Felicity",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Tori",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
   {
    name: "Sharron",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Mei",
    img: "ayane.jpg",
    opts: {
      game: ["rf1"]
    }
  },
  {
    name: "Lynette",
    img: "ayane.jpg",
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
	
