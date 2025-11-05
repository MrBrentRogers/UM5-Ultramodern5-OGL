Hooks.on("init", () => {
  /**Register Settings */
  game.settings.register("UM5-Ultramodern5-OGL", "um5-vigor", {
    name: "Vigor(vig) Ability and Skills",
    hint: "Vigor is a separate ability score to enable a wider variety of supernatural characters. Also adds following Vigor skills: Commune, Detection, Induce.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
  });
  game.settings.register("UM5-Ultramodern5-OGL", "um5-skills", {
    name: "UM5 Intelligence Skills",
    hint: "The UM5 Intelligence Skills of Computer Use(cmp), Engineering(eng), Science(sci), and Demolitions(dem). Disabling the skills also disabled embeded usage of skills.",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
  });
//The following does NOT work as of DnD5e v5.x.x, FVTT v13.xxx
//  game.settings.register("UM5-Ultramodern5-OGL", "UM5ActorSizes", {
//    name: "Larger Actor Sizes",
//    hint: "Additional sizes of Colossal(5), Immense(6), Titanic(7), City(8), Planetary(9), Cosmic(10)",
//    scope: "world",
//    config: true,
//    default: false,
//     type: Boolean,
//  });
//  game.settings.register("UM5-Ultramodern5-OGL", "um5Tools", {
//    name: "Tool Proficincies",
//    hint: "Additional Tool Proficincies of Medical Kit, Engineering Kit, Drug Kit.",
//    scope: "world",
//    config: true,
//    default: false,
//    type: Boolean,
//  });
//  game.settings.register("UM5-Ultramodern5-OGL", "um5credits", {
//    name: "Credits($)",
//    hint: "Adds Credits($) to actor sheets.",
//    scope: "world",
//    config: true,
//    default: false,
//    type: Boolean,
//  });
//  game.settings.register("UM5-Ultramodern5-OGL", "um5armor", {
//    name: "Exo-Armor",
//    hint: "Adds Exo-Armor as armor proficiencies.",
//    scope: "world",
//    config: true,
//    default: false,
//    type: Boolean,
//  });
//  game.settings.register("UM5-Ultramodern5-OGL", "um5weapons", {
//    name: "Weapon Proficiencies",
//    hint: "Adds modern Weapon proficiencies.",
//    scope: "world",
//    config: true,
//    default: false,
//    type: Boolean,
//  });
  /** Conditionals */
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5-vigor")) {
    foundry.utils.mergeObject(CONFIG.DND5E.abilities, {
      vig: {
        label: "Vigor",
        abbreviation: "vig",
        type: "mental",
        defaults: { vehicle: 0 },
      },
    });
    foundry.utils.mergeObject(CONFIG.DND5E.skills, {
      com: { label: "Commune", ability: "vig" },
      det: { label: "Detection", ability: "vig" },
      ind: { label: "Induce", ability: "vig" },
    });
  }

  if (game.settings.get("UM5-Ultramodern5-OGL", "um5-skills")) {
    foundry.utils.mergeObject(CONFIG.DND5E.skills, {
      cmp: { label: "Computer Use", ability: "int" },
      eng: { label: "Engineering", ability: "int" },
      sci: { label: "Science", ability: "int" },
      dem: { label: "Demolitions", ability: "int" },
    });
  }
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
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5Tools")) {
    foundry.utils.mergeObject(CONFIG.DND5E.toolProficiencies, {
      med: "Medical Kit",
      eng: "Engineering Kit",
      dru: "Drug Kit",
    });
  }
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5credits")) {
    foundry.utils.mergeObject(CONFIG.DND5E.currencies, {
      dol: { label: "Credits($)", abbreviation: "$", conversion: 1 },
    });
  }
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5armor")) {
    foundry.utils.mergeObject(CONFIG.DND5E.armorProficiencies, {
      exo: "Exo-Armor",
    });
  }
  if (game.settings.get("UM5-Ultramodern5-OGL", "um5weapons")) {
    foundry.utils.mergeObject(CONFIG.DND5E.weaponProficiencies, {
      sao: "Small Arms, One-Handed",
      sat: "Small Arms, Two-Handed",
      hws: "Heavy Weapons",
      shw: "Super-Heavy Weapons",
    });
  }
});
