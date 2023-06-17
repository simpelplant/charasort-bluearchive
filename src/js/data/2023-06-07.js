dataSetVersion = "2023-06-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by School",
    key: "school",
    tooltip: "Check this to restrict characters from certain school.",
    checked: false,
    sub: [
      { name: "Abydos High School", key: "Abydos" },
      { name: "Gehenna Academy", key: "Gehenna" },
      { name: "Millennium Science School", key: "Millenium" },
      { name: "Trinity General School", key: "Trinity" },
      { name: "Hyakkiyako Alliance Academy", key: "Hyakkiyako" },
      { name: "Shanhaijing Senior Secondary School", key: "Shanhaijing" },
      { name: "Red Winter Federal Academy", key: "RedWinter" },
      { name: "Valkyrie Police Academy", key: "Valkyrie" },
      { name: "Arius Branch School", key: "Arius" },
      { name: "SRT Special Academy", key: "SRT" },
      { name: "Other", key: "Other" },
    ]
  },
  {
    name: "Filter Non-Playable Character",
    key: "NPC",
    tooltip: "Check this to remove NPC characters (based on Japan Server).",
    checked: false
  },
  /*
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  */
  {
    name: "Remove Duplicate Characters",
    key: "dupes",
    tooltip: "Check this to remove Duplicate characters (ex. Shun and Small Shun)."
  }
  
];

dataSet[dataSetVersion].characterData = [
  //Abydos
  {
    name: "Okusora Ayane",
    img: "ayane.jpg",
    opts: {
      school: ["Abydos"]
    }
  },
  {
    name: "Takanashi Hoshino",
    img: "hoshino.jpg",
    opts: {
      school: ["Abydos"]
    }
  },
  {
    name: "Izayoi Nonomi",
    img: "nonomi.jpg",
    opts: {
      school: ["Abydos"]
    }
  },
  {
    name: "Kuromi Serika",
    img: "serika.jpg",
    opts: {
      school: ["Abydos"]
    }
  },
  {
    name: "Sunaookami Shiroko",
    img: "shiroko.jpg",
    opts: {
      school: ["Abydos"]
    }
  },
  //Arius
  {
    name: "Hakari Atsuko",
    img: "atsuko.jpg",
    opts: {
      school: ["Arius"]
    }
  },
  {
    name: "Tsuchinaga Hiyori",
    img: "hiyori.jpg",
    opts: {
      school: ["Arius"]
    }
  },
  {
    name: "Imashino Misaki",
    img: "misaki.jpg",
    opts: {
      school: ["Arius"]
    }
  },
  {
    name: "Joumae Saori",
    img: "saori.jpg",
    opts: {
      school: ["Arius"]
    }
  },
  //npc

  //Gehenna
  {
    name: "Wanibuchi Akari",
    img: "akari.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Amau Ako",
    img: "ako.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Rikuhachima Aru",
    img: "aru.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Hinomia Chinatsu",
    img: "chinatsu.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Aikiyo Fuuka",
    img: "fuuka.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Igusa Haruka",
    img: "haruka.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Kurodate Haruna",
    img: "haruna.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Sorasaki Hina",
    img: "hina.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Shiromi Iori",
    img: "iori.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Natsume Iroha",
    img: "iroha.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Shishidou Izumi",
    img: "izumi.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Akashi Junko",
    img: "junko.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Ushimaki Juri",
    img: "juri.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Onikata Kayoko",
    img: "kayoko.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Asagi Mutsuki",
    img: "mutsuki.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Shimokura Megu",
    img: "megu.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "Himuro Sena",
    img: "sena.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  //--npc
  {
    name: "Ibuki",
    img: "ibuki.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "Hanuma Makoto",
    img: "makoto.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "Satsuki",
    img: "satsuki.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "Erika",
    img: "erika.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "Kasumi",
    img: "kasumi.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "Kirara",
    img: "kirara.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },

  //Hyakkiyako
  {
    name: "Waraku Chise",
    img: "chise.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Kuda Izuna",
    img: "izuna.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Kuwakami Kaho",
    img: "kaho.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Isami Kaede",
    img: "kaede.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Chidori Michiru",
    img: "michiru.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Mizuha Mimori",
    img: "mimori.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Asahina Pina",
    img: "pina.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Kawawa Shizuko",
    img: "shizuko.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Kasuga Tsubaki",
    img: "tsubaki.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Oono Tsukuyo",
    img: "tsukuyo.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "Kosaka Wakamo",
    img: "wakamo.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
   //--npc
  {
    name: "Amachi Niya",
    img: "niya.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },
  {
    name: "Goryou Nagusa",
    img: "nagusa.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },
  {
    name: "Kuzunoha",
    img: "kuzunoha.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },
  {
    name: "Umika",
    img: "umika.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },

  //Millenium
  {
    name: "Murokasa Akane",
    img: "akane.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Tendou Alice",
    img: "aris.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Ichinose Asuna",
    img: "asuna.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Kagami Chihiro",
    img: "chihiro.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Izumimoto Eimi",
    img: "eimi.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Omagari Hare",
    img: "hare.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Nekozuka Hibiki",
    img: "hibiki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Akeboshi Himari",
    img: "himari.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Kakudate Karin",
    img: "karin.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Otose Kotama",
    img: "kotama.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
	name: "Toyomi Kotori",
    img: "kotori.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Kurosaki Koyuki",
    img: "koyuki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Konuri Maki",
    img: "maki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Saiba Midori",
    img: "midori.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Saiba Momoi",
    img: "momoi.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Mikamo Neru",
    img: "neru.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Ushio Noa",
    img: "noa.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Otohana Sumire",
    img: "sumire.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Toki",
    img: "toki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Shiroishi Utaha",
    img: "utaha.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Hayase Yuuka",
    img: "yuuka.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "Hanaoka Yuzu",
    img: "yuzu.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  //--npc
  {
    name: "Tsukatsuki Rio",
    img: "rio.jpg",
    opts: {
      school: ["Millenium"],
    NPC: true
    }
  },

  //RedWinter
  {
    name: "Renkawa Cherino",
    img: "cherino.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "Ikekura Marina",
    img: "marina.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "Yaumori Minori",
    img: "minori.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "Amami Nodoka",
    img: "nodoka.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "Mayoi Shigure",
    img: "shigure.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "Sashiro Tomoe",
    img: "tomoe.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  //--npc
  {
    name: "Himeki Meru",
    img: "meru.jpg",
    opts: {
      school: ["RedWinter"],
    NPC: true
    }
  },
  {
    name: "Akiizumi Momiji",
    img: "momiji.jpg",
    opts: {
      school: ["RedWinter"],
    NPC: true
    }
  },

  //Shanhaijing
  {
    name: "Sunohara Kokona",
    img: "kokona.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "Yakushi Saya",
    img: "saya.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "Sunohara Shun",
    img: "shun.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "Sunohara Shun (kid)",
    img: "shun_kid.jpg",
    opts: {
      school: ["Shanhaijing"],
      dupes: true
    }
  },
  {
    name: "Konoe Mina",
    img: "mina.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "Akeshiro Rumi",
    img: "rumi.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  //--npc
  {
    name: "Ryuuge Kisaki",
    img: "kisaki.jpg",
    opts: {
      school: ["Shanhaijing"],
    NPC: true
    }
  },
  {
    name: "Kayama Reijo",
    img: "reijo.jpg",
    opts: {
      school: ["Shanhaijing"],
    NPC: true
    }
  },

  //SRT
  {
    name: "Tsukiyuki Miyako",
    img: "miyako.jpg",
    opts: {
      school: ["SRT"]
    }
  },
  {
    name: "Kasumizawa Miyu",
    img: "miyu.jpg",
    opts: {
      school: ["SRT"]
    }
  },
  {
    name: "Sorai Saki",
    img: "saki.jpg",
    opts: {
      school: ["SRT"]
    }
  },
  //--npc
  {
    name: "Kazekura Moe",
    img: "moe.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },
  {
    name: "Shichido Yukino",
    img: "yukino.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },
  {
    name: "Niko",
    img: "niko.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },
  {
    name: "Kurumi",
    img: "kurumi.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },
  {
    name: "Otogi",
    img: "otogi.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },

  //Trinity
  {
    name: "Kurimura Airi",
    img: "airi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Shirasu Azusa",
    img: "azusa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Asagao Hanae",
    img: "hanae.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Urawa Hanako",
    img: "hanako.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Hanekawa Hasumi",
    img: "hasumi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Ajitani Hifumi",
    img: "hifumi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Wakaba Hinata",
    img: "hinata.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Kyouyama Kazusa",
    img: "kazusa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Shimoe Koharu",
    img: "koharu.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Iochi Mari",
    img: "mari.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Shizuyama Mashiro",
    img: "mashiro.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Misono Mika",
    img: "mika.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Aomori Mine",
    img: "mine.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Kirifuji Nagisa",
    img: "nagisa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Yutori Natsu",
    img: "natsu.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Utazumi Sakurako",
    img: "sakurako.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Sumi Serina",
    img: "serina.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Endo Shimiko",
    img: "shimiko.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Morizuki Suzumi",
    img: "suzumi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Kensaki Tsurugi",
    img: "tsurugi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Kozeki Ui",
    img: "ui.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Ihara Yoshimi",
    img: "yoshimi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "Uzawa Reisa",
    img: "reisa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  //--npc
  {
    name: "Ichika",
    img: "ichika.jpg",
    opts: {
      school: ["Trinity"],
    NPC: true
    }
  },
  {
    name: "Yurizono Seia",
    img: "seia.jpg",
    opts: {
      school: ["Trinity"],
    NPC: true
    }
  },

  //Valkyrie
  {
    name: "Nemugaki Fubuki",
    img: "fubuki.jpg",
    opts: {
      school: ["Valkyrie"]
    }
  },
  {
    name: "Ogata Kanna",
    img: "kanna.jpg",
    opts: {
      school: ["Valkyrie"]
    }
  },
  {
    name: "Nakatsukasa Kirino",
    img: "kirino.jpg",
    opts: {
      school: ["Valkyrie"]
    }
  },
  //--npc

  //Other
  {
    name: "Hatsune Miku",
    img: "miku.jpg",
    opts: {
      school: ["Other"]
    }
  },
  //--npc
  {
    name: "Kiyosumi Akira",
    img: "akira.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Oki Aoi",
    img: "aoi.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Arona",
    img: "arona.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Iwabitsu Ayumu",
    img: "ayumu.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Kazemaki Mai",
    img: "mai.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Shintani Kai",
    img: "kai.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Shiranui Kaya",
    img: "kaya.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Yuragi Momoka",
    img: "momoka.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Plana",
    img: "plana.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Komakaze Rabu",
    img: "rabu.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Nanagami Rin",
    img: "rin.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Shiroko Terror",
    img: "shiroko_terror.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Kawaru Shinon",
    img: "shinon.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Sora",
    img: "sora.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Haine",
    img: "haine.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "Sumomo",
    img: "sumomo.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  }
];
	
