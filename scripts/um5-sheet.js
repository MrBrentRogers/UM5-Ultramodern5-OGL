class SciFiCharacterSheet extends dnd5e.applications.actor.CharacterActorSheet {
  static DEFAULT_OPTIONS = {
    classes: ["sci-fi"]
  }
}

Hooks.once("init", () => {
  foundry.applications.apps.DocumentSheetConfig.registerSheet(Actor, "UM5-Ultramodern5-OGL", SciFiCharacterSheet, {
    types: ["character"]
  });
});