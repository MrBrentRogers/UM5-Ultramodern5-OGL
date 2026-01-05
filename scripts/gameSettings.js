Hooks.once("init", () => {
  const applications = game.dnd5e.applications;
  /**Register Settings */
  game.settings.register("UM5-Ultramodern5-OGL", "um5-vigor", {
    name: "Vigor(vig) Ability and Skills",
    hint: "Vigor is a separate ability score to enable a wider variety of supernatural characters. Also adds following Vigor skills: Commune, Detection, Induce.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5-vigor")) {
    foundry.utils.mergeObject(CONFIG.DND5E.abilities, {
      vig: {
        label: "Vigor",
        abbreviation: "vig",
        fullKey: "vigor", // Full key used in enrichers
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.S4DPrd0QJyOoflBd.JournalEntryPage.uRMuUneBs7ZOozA6", // UUID of journal entry page for rich tooltips
        type: "mental", // mental or physical
        defaults: { vehicle: 0 }, // Optional
        improvement: true, // Explicitly set this to 'false' to prevent it showing up for ASIs.
      },
    });
    foundry.utils.mergeObject(CONFIG.DND5E.skills, {
      com: {
        label: "Commune",
        ability: "vig",
        fullKey: "commune", // Full key used in enrichers
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.S4DPrd0QJyOoflBd.JournalEntryPage.suLjP1oFQXwRhzTH", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
      },
      det: {
        label: "Detection",
        ability: "vig",
        fullKey: "detection", // Full key used in enrichers
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.S4DPrd0QJyOoflBd.JournalEntryPage.UbyFLMYV2WG4COlD", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
      },
      ind: {
        label: "Induce",
        ability: "vig",
        fullKey: "induce", // Full key used in enrichers
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.S4DPrd0QJyOoflBd.JournalEntryPage.rzsXMxkLlblt80dW", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
      },
    });
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5-skills", {
    name: "UM5 Intelligence Skills",
    hint: "The UM5 Intelligence Skills of Computer Use(cmp), Engineering(eng), Science(sci), and Demolitions(dem). Disabling the skills also disabled embeded usage of skills.",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5-skills")) {
    CONFIG.DND5E.skills.cmp = {
      label: "Computer Use",
      ability: "int",
      fullKey: "cmp", // Full key used in enrichers
      reference:
        "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.XS6Ras0JrAdEgJ6N.JournalEntryPage.poI498jI6ZyPmGD8", // UUID of journal entry page for rich tooltips
      icon: "assets/Items/miscellaneous/laptop-computer.svg", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.dem = {
      label: "Demolitions",
      ability: "int",
      fullKey: "dem",
      reference:
        "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.XS6Ras0JrAdEgJ6N.JournalEntryPage.RLaxTknh2K29UHhF",
      icon: "assets/Items/weapons/grenade.svg",
    };
    CONFIG.DND5E.skills.eng = {
      label: "Engineering",
      ability: "int",
      fullKey: "eng",
      reference:
        "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.XS6Ras0JrAdEgJ6N.JournalEntryPage.zTzjplFGyN1XJ2g3",
      icon: "assets/Items/miscellaneous/laptop-computer.svg",
    };
    CONFIG.DND5E.skills.sci = {
      label: "Science",
      ability: "int",
      fullKey: "sci",
      reference:
        "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.XS6Ras0JrAdEgJ6N.JournalEntryPage.cftrB9ukzeSI2Y76",
      icon: ".../assets/Items/miscellaneous/laptop-computer.svg",
    };
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5ActorSizes", {
    name: "UM5 Creature Sizes",
    hint: "Tiny (0.5), Small & Medium (1), Large (2), Huge (3), Gargantuan (4), Colossal (5), Immense (6), Titanic (7), City (8), Planetary (9), Cosmic (10)",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5ActorSizes")) {
    foundry.utils.mergeObject(CONFIG.DND5E.actorSizes, {
      col: {
        label: "Colossal",
        abbreviation: "Col",
        token: 5,
        capacityMultiplier: 10,
      },
      imm: {
        label: "Immense",
        abbreviation: "Imm",
        token: 6,
        capacityMultiplier: 12,
      },
      tit: {
        label: "Titanic",
        abbreviation: "Tit",
        token: 7,
        capacityMultiplier: 14,
      },
      cit: {
        label: "City",
        abbreviation: "Col",
        token: 8,
        capacityMultiplier: 16,
      },
      pla: {
        label: "Planetary",
        abbreviation: "Pla",
        token: 9,
        capacityMultiplier: 18,
      },
      cos: {
        label: "Cosmic",
        abbreviation: "Cos",
        token: 10,
        capacityMultiplier: 20,
      },
    });
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5credits", {
    name: "Credits($)",
    hint: "Adds Credits($) as currancy.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5credits")) {
    foundry.utils.mergeObject(CONFIG.DND5E.currencies, {
      dol: { label: "Credits($)", abbreviation: "$", conversion: 1 },
    });
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5armor", {
    name: "UM5 Armor",
    hint: "Adds Exo-Armor's (Light, Medium, Heavy)",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5armor")) {
    CONFIG.DND5E.armorProficiencies,
    {
      exo: "Exo-Armor",
    };
    CONFIG.DND5E.armorTypes,
    {
      exl: "Exo-Armor Light",
      exm: "Exo-Armor Medium",
      exh: "Exo-Armor Heavy",
      amo: "Armor Mod",
    };
    CONFIG.DND5E.equipmentTypes,
    {
      exl: "Exo-Armor Light",
      exm: "Exo-Armor Medium",
      exh: "Exo-Armor Heavy",
      cybernetics: "Cybernetics",
      amo: "Armor Modifications",
    };
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5weapons", {
    name: "UM5 Weapon Proficiencies",
    hint: "Adds Ultramodern5 Weapons.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5weapons")) {
    foundry.utils.mergeObject(CONFIG.DND5E.weaponProficiencies, {
      sao: "Small Arms, One-Handed",
      sat: "Small Arms, Two-Handed",
      hws: "Heavy Weapons",
      shw: "Super-Heavy Weapons",
    });
    foundry.utils.mergeObject(CONFIG.DND5E.weaponTypes, {
      sao: "Small Arms, One-Handed",
      sat: "Small Arms, Two-Handed",
      hws: "Heavy Weapons",
      shw: "Super-Heavy Weapons",
      gre: "Grenade",
      exp: "Explosives",
      sws: "Ship Weapon",
    });
    foundry.utils.mergeObject(CONFIG.DND5E.itemProperties, {
      ap: {
        label: "AP (Armor Piercing)",
        isPhysical: "true",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.8Mnmo9XVKEYSqyiJ",
      },
      augment: {
        label: "Augment",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.FOc4H7ZHHiMYEP85",
      },
      auto: {
        label: "Auto",
        isPhysical: "true",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.wUHI00yAqcFsX9UX",
      },
      autoheavy: {
        label: "Auto-Heavy",
        isPhysical: "true",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.wUHI00yAqcFsX9UX",
      },
      breech: {
        label: "Breech",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.q2jWRKqxuzkqcU1y",
      },
      direct: {
        label: "Direct",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.l4qUl0kCJTFLCSEp",
      },
      double: {
        label: "Double",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.xHO3Ed4Q7JXRSSb6",
      },
      draw: {
        label: "Draw",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.8LK3Zd0ZVIB5bDsv",
      },
      drum: {
        label: "Drum",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.SyuMe3BxDqIH2OVM",
      },
      explosive: {
        label: "Explosive (EXP)",
        isPhysical: "true",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.MAHkRqFUocdKJU9B",
      },
      esp: {
        label: "ESP (Electronic Stacked Projectiles)",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.JL4HB2sQE7DYCIyj",
      },
      feed: {
        label: "Feed",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.bgNZxvPyF7EXLWEm",
      },
      flintlock: {
        label: "Flintlock",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.2teHedREunqYN8hu",
      },
      grenade: {
        label: "Grenade",
        isPhysical: "true",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.11keqwxhMSAkl2eY",
      },
      ftf: {
        label: "FTF (Failed To Fire)",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.0Kj5knTbKU2ifMa5",
      },
      guided: {
        label: "Guided",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.odXlQiPdfSvOKiNj",
      },
      gyro: {
        label: "Gyro",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.uI5tghomy4s5j3Vw",
      },
      laser: {
        label: "Laser",
        isPhysical: "true",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.A4e3rzHANiHmJ5zV",
      },
      heavy: {
        label: "Heavy Weapon",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.T1Jzqa1Akta0Vnxs",
      },
      superheavy: {
        label: "Super Heavy",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.81xbqxWCtUR7MfsU",
      },
      nuclear: {
        label: "Nuclear",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.J9iR9C1A0j58aLER",
      },
      magnetic: {
        label: "Magnetic",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.IqF5lapmzxL6Q5Mx",
      },
      organic: {
        label: "Organic",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.IzataCfJHNzMMvSy",
      },
      percussion: {
        label: "Percussion",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.LIarLPkcl752V3xG",
      },
      pincher: {
        label: "Pincher",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.9PY2eQxT0jUe8L9f",
      },
      plasma: {
        label: "Plasma",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.TpmigTwNJfp20LVU",
      },
      shotgun: {
        label: "Shotgun",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.Eg9WdCHUKloPCFOM",
      },
      sniper: {
        label: "Sniper",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.xsdk01XOGK1zImGZ",
      },
      sonic: {
        label: "Sonic",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.NmM1StZVVMAsW9Go",
      },
      spp: {
        label: "SPP (Self-Propelled Projectiles)",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.HARpYFaMXFtepgPf",
      },
      undermount: {
        label: "Undermount",
        isPhysical: "false",
        reference:
          "Compendium.UM5-Ultramodern5-OGL.ultramodern5-oglsrd.JournalEntry.5FyOxFyQzDSenBE5.JournalEntryPage.JzaG73mfOpScrRVw",
      },
    });
    CONFIG.DND5E.validProperties.weapon
      .add("ap")
      .add("augment")
      .add("auto")
      .add("autoheavy")
      .add("breech")
      .add("direct")
      .add("double")
      .add("draw")
      .add("drum")
      .add("explosive")
      .add("esp")
      .add("feed")
      .add("flintlock")
      .add("ftf")
      .add("grenade")
      .add("guided")
      .add("gyro")
      .add("laser")
      .add("nuclear")
      .add("magnetic")
      .add("organic")
      .add("percussion")
      .add("pincher")
      .add("plasma")
      .add("shotgun")
      .add("sniper")
      .add("sonic")
      .add("spp")
      .add("undermount");
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5languages0", {
    name: "Languages, Remove D&D standard",
    hint: "Removes D&D5e Languages (except Common).",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5languages0")) {
    delete CONFIG.DND5E.languages.standard.children.draconic;
    delete CONFIG.DND5E.languages.standard.children.dwarvish;
    delete CONFIG.DND5E.languages.standard.children.elvish;
    delete CONFIG.DND5E.languages.standard.children.giant;
    delete CONFIG.DND5E.languages.standard.children.gnomish;
    delete CONFIG.DND5E.languages.standard.children.goblin;
    delete CONFIG.DND5E.languages.standard.children.halfling;
    delete CONFIG.DND5E.languages.standard.children.orc;
    delete CONFIG.DND5E.languages.exotic.children.aarakocra;
    delete CONFIG.DND5E.languages.exotic.children.abyssal;
    delete CONFIG.DND5E.languages.exotic.children.celestial;
    delete CONFIG.DND5E.languages.exotic.children.deep;
    delete CONFIG.DND5E.languages.exotic.children.druidic;
    delete CONFIG.DND5E.languages.exotic.children.gith;
    delete CONFIG.DND5E.languages.exotic.children.gnoll;
    delete CONFIG.DND5E.languages.exotic.children.infernal;
    delete CONFIG.DND5E.languages.exotic.children.primordial;
    delete CONFIG.DND5E.languages.exotic.children.sylvan;
    delete CONFIG.DND5E.languages.exotic.children.cant;
    delete CONFIG.DND5E.languages.exotic.children.undercommon;
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5languages1", {
    name: "Languages: Terran",
    hint: "Adds Earth Languages (English, Chinese, Spanish, etc.).",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5languages1")) {
    CONFIG.DND5E.languages.standard.children.earth = {
      label: "Earth (Terran)",
      children: {
        english: "English",
        chinesem: "Chinese (Mandarin)",
        chinesec: "Chinese (Cantonese)",
        hindi: "Hindi",
        spanish: "Spanish",
        french: "French",
        arabic: "Arabic",
        bengali: "Bengali",
        portuguese: "Portuguese",
        russian: "Russian",
        urdu: "Urdu",
        czech: "Czech",
        croatian: "Croatian",
        dutch: "Dutch",
        farsi: "Farsi",
        german: "German",
        greek: "Greek",
        italian: "Italian",
        japanese: "Japanese",
        korean: "Korean",
        punjabi: "Punjabi",
        swahili: "Swahili",
        swedish: "Swedish",
        turkish: "Turkish",
        latin: "Latin",
      },
    };
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5languages2", {
    name: "Languages: Threshold",
    hint: "Adds Threshold Languages.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5languages2")) {
    CONFIG.DND5E.languages.standard.children.threshold = {
      label: "Threshold Languages",
      children: {
        konoe: "Konoe (Roekka)",
        khitin: "Khitin",
        binary: "Binary/Hexadecimal",
        terran3: "Terran Standard",
        synth: "Synth",
        arcadian: "Arcadian",
        clarity: "Clarity",
        frontier: "Frontier Sign",
        mariners: "Mariner’s Cant",
        merkal: "Merkal",
        novolinguo: "NovoLinguo",
      },
    };
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5languages3", {
    name: "Languages: Amethyst",
    hint: "Adds Amethyst Languages.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5languages2")) {
    CONFIG.DND5E.languages.standard.children.amethyst = {
      label: "Amethyst Languages",
      children: {
        argose: "Argose",
        chaparra: "Chaparra",
        damaskan: "Damaskan",
        englolingo: "Englo-Lingo",
        ferran: "Ferran",
        guttoran: "Guttoran",
        ignotan: "Ignotan",
        indic: "Indic",
        laudenian: "Laudenian",
        narroni: "Narroni",
        oldfae: "Old Fae",
        onespeak: "Onespeak",
        paggin: "Paggin",
        pleroma: "Pleroma",
        romanic: "Romanic",
        saeqaar: "Saeqaar",
        semitic: "Semitic",
        sinitic: "Sinitic",
        slavic: "Slavic",
        tenenbra: "Tenenbra",
      },
    };
  }
  game.settings.register("UM5-Ultramodern5-OGL", "um5tools", {
    name: "UM5 Tool Proficincies",
    hint: "Additional Tool Proficincies of Medical Kit, Engineering Kit, Drug Kit, & Boardgame Gaming Set.",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true,
  });
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5tools")) {
    CONFIG.DND5E.tools.medicalkit = {
      ability: "int",
      id: "Compendium.UM5-Ultramodern5-OGL.um5-equipment.Item.k8C1M3uZFJHQ1pbL",
    };
    CONFIG.DND5E.tools.drugkit = {
      ability: "int",
      id: "Compendium.UM5-Ultramodern5-OGL.um5-equipment.Item.lOf96KgIVA8TEWEg",
    };
    CONFIG.DND5E.tools.engineeringkit = {
      ability: "int",
      id: "Compendium.UM5-Ultramodern5-OGL.um5-equipment.Item.LxRVdhqDfhNhWLub",
    };
    CONFIG.DND5E.tools.boardgame = {
      ability: "int",
      id: "Compendium.UM5-Ultramodern5-OGL.um5-equipment.Item.Upby8EwAxTQY92nf",
    };
  };
});
