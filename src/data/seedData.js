export const seedCharacter = {
  name: 'Dutch',
  class: 'Elf',
  alignment: 'Neutral',
  level: 8,
  xp: 710,
  strength: 10,
  agility: 6,
  stamina: 13,
  personality: 9,
  intelligence: 13,
  luck: 14,
  hitPointsMax: 40,
  hitPointsCurrent: 40,
  // AC: base 9 (Agility -1) + 3 armor = 12 — verify from sheet
  armorClass: 12,
  speed: 30,
  fortitudeSave: 4,
  reflexSave: 2,
  willSave: 5,
  // spellCheckBonus = level bonus only; INT modifier (+1) is added automatically on roll
  spellCheckBonus: 8,
  attackBonus: 4,
  actionDie: 'd20+d20',
  critDie: '1d14',
  critTable: 'II',
  hitDie: 'd6',
  familiar: 'Convivial Arcane Turtle',
}

export const seedSpells = [
  {
    "id": "spell_001",
    "name": "Find Familiar",
    "level": 1,
    "range": "Self",
    "duration": "Lifetime",
    "castingTime": "1 week",
    "save": "None",
    "general": "This lengthy ritual prepares the caster to bond with a familiar. The familiar makes itself known during the ceremony 50% of the time; otherwise, the caster makes its acquaintance sometime in the weeks following the ritual. The spell check is made upon completion of the ritual, and a minimum spellburn of 10 points is required to cast this spell. The caster gains hit points equal to the familiar's and other powers as well, depending on the creature summoned. Once the caster has summoned a familiar (whether having met it or not), he cannot summon another until the current one dies and a full moon passes. If a familiar dies, the caster immediately keels over in intense pain, loses twice the familiar's hit points permanently, and suffers a -5 spell check penalty until the next full moon. The judge will provide more information (see page 316).",
    "manifestation": "Varies",
    "corruption": "Roll 1d6: (1-3) minor; (4-5) major; (6) greater.",
    "misfire": "N/A",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, patron taint, and corruption. Unlike normal spells, the spell is lost for an entire month, not simply one day."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost and failure. Unlike normal spells, the spell is lost for an entire month, not simply one day."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "Per judge."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "Per judge."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "Per judge."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "Per judge."
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "Per judge."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "Per judge."
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "Per judge."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "Per judge."
      }
    ]
  },
  {
    "id": "spell_002",
    "name": "Flaming Hands",
    "level": 1,
    "range": "15'",
    "duration": "Instantaneous",
    "castingTime": "1 action",
    "save": "Ref half",
    "general": "The caster produces gouts of fire from his bare hands to burn his enemies.",
    "manifestation": "Roll 1d4: (1) caster's hands burst into flames; (2) fires spring from the wizard's fingertips; (3) caster's hands turn into roiling, smoking flame; (4) skin blackens and peels away to reveal skeletal hands dripping lava.",
    "corruption": "Roll 1d4: (1) hands permanently blackened; (2) bare touch causes paper to ignite 25% of the time; (3) body hair burned away permanently; (4) caster suffers a permanent -2 penalty on spell checks to cold-based magics.",
    "misfire": "Roll 1d4: (1) flame jets from random appendage, spoiling aim; randomly determine where and in what direction the flame gouts; jet causes 1d3 damage to everything within 15' range in that direction; (2) caster's hands ignite causing him 1d3 damage; (3) 1d4 random possessions of the caster catch fire and burn to char; (4) all fire within a 15' radius of the caster is immediately snuffed out.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + patron taint + misfire; (1-2) corruption; (3) patron taint (or corruption if no patron); (4+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "A single blast of fire strikes one target within range for 1d3 points of damage."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "Spell produces a blast of fire that burns a single target within range for 1d6 points of damage."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "Spell produces a blast of fire that burns a single target within range for 1d6+CL points of damage."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "Spell produces a blast of fire that burns up to three targets within range for 1d6+CL points of damage. All targets must be within 10' of one another."
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "Spell produces a blast of fire that burns up to three targets within range for 2d6+CL points of damage. All targets must be within 10' of one another."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "Caster creates a single blast of fire 10' wide and 30' long that does damage equal to 3d6+CL to all caught in the blast."
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "Caster creates two blasts of fire 10' wide and 30' long. Each can be directed within a 180° arc of his position, doing damage equal to 3d6+CL to all caught in the blast."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "Caster can blast fire in a 360° arc outward from his body. Within that complete radius he can pick one \"wedge\" of 0-180° where fire does not blast (i.e., to protect allies in that position). All creatures within the affected arc, out to a range of 40', are immolated, taking damage equal to 4d10+CL. Duration: Instantaneous Casting time: 1 action Save: None"
      }
    ]
  },
  {
    "id": "spell_003",
    "name": "Invoke Patron",
    "level": 1,
    "range": "Self",
    "duration": "Varies",
    "castingTime": "1 round",
    "save": "None",
    "general": "In order to learn this spell, the caster must first cast patron bond. The particulars of this spell vary according to the terms of the patron. In casting this spell, the wizard invokes the name of a supernatural patron to request aid. This spell requires at least 1 point of spellburn. The patron responds by sending aid according to the nature of its followers; the judge will provide specifics. Note that continued casting of this spell may taint the wizard spiritually and physically.",
    "manifestation": "Varies",
    "corruption": "Roll 1d8: (1-4) minor; (5-7) major; (8) greater.",
    "misfire": "N/A",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure and patron taint."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "The King of Elfland answers but is quickly distracted. The caster receives +4 to his next attack roll, saving throw, skill check, or spell check."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "The caster's weapons are endowed with the slumbering magic of Elfland. For the next 1d5+CL rounds, targets struck must succeed on a DC 10+CL Will save or succumb to magical sleep (duration 1d6 hours; only roused by violent shaking for 1d4 rounds). Another character may wield these weapons to gain the same benefit."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "For 1d4+CL rounds, the caster fades from existence, suspended between the fae realms and the mortal lands. AC and Ref saves improve by +2. With a successful Will save (DC 10), the caster can turn invisible. On a natural 1, he vanishes into the Elflands permanently."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "The King of Elfland grants the caster a chance to step back in time 1d6+CL rounds as a visible observer who can interact with those events — even watching his own past self. The caster may prevent recent events, aid an attack, or shout a warning."
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "The caster's weapons are enchanted with the wrathful magic of Elfland. For 1d4+CL rounds, targets struck must succeed on a DC 10+CL Will save or vanish into Elfland, returning 5d100 years later. Immortals and extraplanar creatures may be immune."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "The King of Elfland grants the caster a chance to step back in time 1d6+CL hours as a visible observer who can interact with those events — even watching his own past self."
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "The caster becomes a shining sylvan paladin. For 1d8+CL rounds, the caster and three allies receive +4 to AC and all saving throws, +3 to all attacks, spell checks, and damage rolls, and automatically succeed on any Recovering the Body checks."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "The King of Elfland anoints the caster as his champion. For 1d12+CL rounds, the caster and five allies receive +6 to AC and all saving throws, +5 to all attacks, spell checks, and damage rolls, and auto-succeed on Recovery checks. If slain, a character slips into the sylvan realms, healed by elven maids, and returns 1d3 days later."
      }
    ]
  },
  {
    "id": "spell_004",
    "name": "Magic Missile",
    "level": 1,
    "range": "150' or more",
    "duration": "Instantaneous",
    "castingTime": "1 action",
    "save": "None",
    "general": "The caster hurls a magical missile that automatically hits an enemy.",
    "manifestation": "Roll 1d10: (1) meteor; (2) flaming arrow; (3) force arrow; (4) screaming, clawing eagle; (5) black beam; (6) ball lightning; (7) splash of acid; (8) ray of frost; (9) force dagger; (10) force axe.",
    "corruption": "Roll 1d8: (1-4) caster's hands and forearms change color to match shades of most commonly cast magic missile: (1) electric yellow, (2) icy blue, (3) acid green, (4) vivid red; (5) pupils and irises vanish while eyes turn a chalky white; (6) fingertips turn translucent and nearly invisible, appearing ghost-like or as if they were composed of pure force energy; (7) from now on, every time he casts magic missile, the caster turns invisible for 1d6 rounds; (8) caster gains a permanent force stone that rapidly orbits his head, impacting with any creature that approaches within 3' to cause searing pain and 1 point of damage every round – which, unfortunately, includes allies attempting to heal or those who fight adjacent to the caster in melee.",
    "misfire": "Roll 1d6: (1) explosion of missiles sprays in all directions – all creatures within 100' (allies and enemies) are hit by 1d4-1 missiles, each doing 1 point of damage; (2) missiles launch then ricochet back on caster, who is hit by 1d3-1 missiles for 1 point of damage each; (3) explosion of force energy centered on caster, causing 1d6 damage to caster and all within 10' (DC 10 Ref save for half); (4) delayed blast – no effect now, but at a random point sometime in the next 24 hours, determined whenever the caster rolls his next 1 on any dice roll (not just a d20), a single magic missile bolts forth to strike one randomly determined Duration: Instantaneous Casting time: 1 action or 1 turn (see below) character within 100' for 1d4 damage (strikes the caster if there are no other targets) – if no 1 is rolled in 24 hours, risk passes without damage; (5) caster becomes charged with force energy, such that the next creature or object he touches suffers a blast damage for 1d6+1 damage to target and 1 point of damage to caster; (6) force energy manifests in downward direction, burning a hole in the ground under caster – ground beneath him rapidly disintegrates to a depth of 1d20 feet, and he sinks with the falling depth of the ground to find himself at bottom of pit – there is no initial falling damage since he \"rides\" the drop in ground level but depth of pit may open to lower level of the dungeon (potentially causing damage), and he must now climb out.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + patron taint + misfire; (1-2) corruption; (3) patron taint (or corruption if no patron); (4+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "The caster throws a single missile that does 1 point of damage. He must have line of sight to the target. The missile never misses, though it may be blocked by certain magic (e.g., magic shield)."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "The caster throws a single missile that does damage equal to 1d4 + caster level. He must have line of sight to the target. The missile never misses, though it may be blocked by certain magic (e.g., magic shield)."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "The caster throws 1d4 missiles that deal damage equal to 1d4 + caster level. All missiles must be aimed at a single target to which the caster has line of sight. The missiles never miss, though they may be blocked by certain magic (e.g., magic shield)."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "The caster throws 1d4+2 missiles that do damage equal to 1d6 + caster level. Each missile can be aimed at a separate target to which the caster has line of sight. The missiles never miss, though they may be blocked by certain magic (e.g., magic shield)."
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "The caster throws a single powerful missile that does damage equal to 4d12 + caster level. The missile must be aimed at a single target to which the caster has line of sight, at a maximum range of 1,000'. The missile never misses, though it may be blocked by certain magic (e.g., magic shield)."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "The caster throws 1d6+3 missiles that do damage equal to 1d8 + caster level. Each missile can be aimed at a single target at any range, as long as the caster has line of sight. The missiles never miss, though they may be blocked by certain magic (e.g., magic shield)."
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "The caster throws 2d6+1 missiles that each do damage equal to 1d8 + caster level. Each missile can be aimed at a separate target. Range is line of sight, regardless of whether a direct path exists; e.g., the caster may launch a magic missile through a crystal ball or other scrying device. These missiles have limited ability to defy magic shield and other protections; compare this spell check against the spell check used to create the magic shield. If the magic missile check is higher, the magic shield has only a 50% chance of absorbing the missiles (roll individually for each missile). Any missiles that make it through do damage equal to 1d8 + caster level, as noted above."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "The caster throws 3d4+2 missiles that each do damage equal to 1d10 + caster level. He may direct these missiles individually as a single action, or he may direct them all at a single target that is not present or visible, provided he has specific knowledge of that target. In this case, the caster must have a physical memento of the target (hair, fingernail, vial of blood, etc.) and spend 1 turn concentrating to cast the spell, then continue concentrating as the missiles seek their target. The missiles seek out this target even if it is concealed or invisible, though they have a maximum range of 100 miles. The missiles turn, curve, retrace their route, and make every effort to reach the target, although they cannot cross planes. The missiles can travel up to 10 miles per second provided no obstacles are present, but speed is much lower if, for example, they must navigate underground caverns. Provided a direct route exists, the missiles strike the target unerringly."
      }
    ]
  },
  {
    "id": "spell_005",
    "name": "Magic Shield",
    "level": 1,
    "range": "Touch",
    "duration": "1 round per CL",
    "castingTime": "1 action",
    "save": "None",
    "general": "The caster conjures up a magical shield that defends him from opponents.",
    "manifestation": "Roll 1d6: (1) disc of shimmering blue force; (2) yellowish force-field; (3) giant hand that picks off attacks; (4) buckler that emits radiant light; (5) black, bottomless tear in the seam of reality; (6) whirlwind of air that buffets attackers.",
    "corruption": "Roll 1d8: (1-4) minor; (5-7) major; (8) greater.",
    "misfire": "Roll 1d4: (1) caster's shield appears as force burst aimed inward instead of spreading out, causing 1d4 damage as it explodes against him; (2) shield is accidentally summoned to benefit nearest enemy, granting that enemy a +4 bonus to AC for 1d3 turns; (3) caster accidentally summons shield horizontally below his feet, lifting him up 3\" from the ground and causing him to \"slide\" on it for next 1d3+1 rounds; this increases his speed by +10' but imposes a -1 penalty to attacks, spell checks, damage, and AC as he slips and slides haphazardly; (4) caster completely encases himself in a shield that blocks all attacks, damage, spells, and physical contact between him and the rest of the world, such that he is completely encased in a transparent bubble which renders him invulnerable to attack but also unable to move or communicate outside the bubble for 1d4 rounds.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + misfire; (1-2) corruption; (3+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "The caster conjures a weak shield that provides a +2 bonus to AC for 1d6 rounds."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "The caster conjures a shield that provides a +4 bonus to AC for 2d6 rounds."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "The caster conjures shield that provides a +4 bonus to AC for 1d3 turns. When casting the spell, the caster can apply the shield to himself or one ally touched."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "The caster conjures a shield that provides a +4 bonus to AC for 1d3 turns. When casting the spell, the caster can apply the shield to himself or one ally touched. In addition to the AC bonus, the shield also blocks magic missiles automatically (missiles usually have no effect; see magic missile spell description)."
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "The caster conjures a shield that protects him or an ally touched. The shield lasts 1d4+1 turns and has three benefits: it provides a +4 bonus to AC; it blocks magic missiles automatically (see magic missile spell description); and it blocks most attacks from mundane projectiles, reducing damage from any arrow, sling stone, bolt, dart, or other ranged weapon by 10 points per attack for the duration of the spell."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "The caster conjures two shields that protect him and one ally touched. Each shield lasts 1d4 hours and has four benefits: it provides a +4 bonus to AC; it blocks magic missiles automatically (see magic missile spell description); it blocks most attacks from mundane projectiles, reducing damage from any arrow, sling stone, bolt, dart, or other ranged weapon by 10 points per attack for the duration of the spell; and it provides a benefit in counterspelling equal to a +2 bonus to any subsequent spell check made as a counterspell."
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "The caster conjures a battalion of magical shields that protect him and his allies. The caster is automatically shielded, as are all allies within a 10' radius. Each shield lasts 1d4+1 hours and follows the allies even if they leave the caster's side. Each shield has four benefits: it provides a +6 bonus to AC; it blocks magic missiles automatically (see magic missile spell description); it blocks most attacks from mundane projectiles, reducing damage from any arrow, sling stone, bolt, dart, or other ranged weapon by 20 points per attack for the duration of the spell; and it provides a benefit in counterspelling equal to a +4 bonus to any subsequent spell check made as a counterspell."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "The caster calls forth a globe of shimmering magical energies that protects him and his allies. The caster is automatically encased in this magical shield, as are all allies within a 10' radius. The shimmering globes last until the next sunrise and follow the allies even if they leave the caster's side. Each globe has five benefits: it provides a +8 bonus to AC; it blocks magic missiles automatically (see magic missile spell description); it reduces damage on all attacks against its target by 2 points; it blocks most attacks from mundane projectiles, reducing damage from any arrow, sling stone, bolt, dart, or other ranged weapon by 20 points per attack for the duration of the spell; and it provides a benefit in counterspelling equal to a +4 bonus to any subsequent spell check made as a counterspell. Duration: Varies Casting time: 1 action Save: None"
      }
    ]
  },
  {
    "id": "spell_006",
    "name": "Patron Bond",
    "level": 1,
    "range": "Self or touch",
    "duration": "Lifetime",
    "castingTime": "1 week + quests as ordered",
    "save": "None",
    "general": "The caster commits himself to the service of a supernatural lord, forming a pact to gain its support as his patron so long as he continues to please it with his service. This patron may be a demon, devil, ghost, spirit, elemental, angel, chaos lord, or other supernatural being who accepts the caster's service. The initial ceremony takes one week to complete. Once the pact is made, the caster may invoke the patron's support with the spell invoke patron, and it may or may not answer as it sees fit. In return for the patron's assistance, it may ask the caster to do certain things. The caster must act faithfully in its service at all times, lest it cast him off. The caster may perform more than one ceremony to serve multiple masters, but doing so may raise questions as to his true loyalties. This is dangerous magic; a supernatural patron is not the same as the deity that a cleric may worship. The caster should be forewarned that he is in communion with almighty spirits. Alternately, once the caster has formed a bond with his patron, this spell may be cast to create a bond between another mortal and the caster's patron. The mortal need not be a spellcaster; in fact, the second mortal usually is not. In this case, both the caster and the recipient must spend a week on the ceremony, which requires a mighty oath to declare allegiance to the patron. Very powerful creatures are more likely to successfully bond with patrons (who look more favorably upon powerful followers). Typically, a casting of patron bond on behalf of another receives a bonus of +2 if the subject is of 5th-level (5 HD) or higher and +4 if the subject is of 9th-level (9 HD) or higher. At the end of the ceremony, the casting of the spell seals the bond. Recruiting additional followers for his patron brings the caster favor and may grant boons to the other followers; though, their patron will ask fealty of them in exchange. Note that continued casting of this spell may taint the caster, both spiritually and physically.",
    "manifestation": "Varies",
    "corruption": "N/A – always patron taint",
    "misfire": "N/A When Cast on Self When Cast on Other",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost and patron taint! Unlike normal spells, this spell is lost for an entire month, not simply one day."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Failure. Unlike normal spells, this spell is lost for an entire month, not simply one day."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "The caster makes contact with his patron and successfully negotiates the terms of the compact. He learns the spell invoke patron as it relates to his patron but may only cast it once per week. Each time the caster casts invoke patron, he is indebted to his patron, who will call in the debt at some point. The caster's patron marks him as its servant via an inconspicuous brand or symbol somewhere on the caster's body. The caster forms a simple bond between the subject and his patron. The patron is aware of this subject, who is one among many. The subject may attempt a Luck check once per month, at a -4 penalty, to ask a minor favor from the patron, which manifests in a non-magical manner. (For example, if short of gold to pay for a ferry crossing, the subject may be lucky enough to find a fisherman willing to offer a free trip across the river.) Each time such a Luck check is attempted there is a 1% cumulative chance that the patron asks for something in return. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receives a +1 bonus to future patron bond and invoke patron checks (max +5 bonus)."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "The caster makes contact with his patron and is considered a useful pawn. The caster receives a prominent mark of the patron on his hand or face. The caster learns the spell invoke patron as it relates to his patron and may cast it once per day. Each time he casts invoke patron, the caster is indebted to his patron, who will call in the debt at some point. The caster forms a bond between his patron and the subject, who is attuned to the desires of the caster's patron. The subject receives a prominent mark of the patron on his hand or face, and may attempt a Luck check once per month, at a -2 penalty, to ask a minor favor from the patron, which manifests in a non-magical manner. Each time such a Luck check is attempted there is a 1% cumulative chance that the patron asks for something in return. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receives a +1 bonus to future patron bond and invoke patron checks (max +5 bonus)."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "The caster makes contact with his patron and is granted a mark of favor. He receives a prominent mark of the patron on his face. The caster learns the spell invoke patron as it relates to his patron and may cast it once per day at a +1 bonus to the spell check. Each time he casts invoke patron, the caster is indebted to his patron, who will call in the debt at some point. The caster forms a bond between his patron and the subject, who is important to the goals of the caster's patron. The subject receives a prominent mark of the patron on his hand or face, and may attempt a Luck check once per month to ask a minor favor from the patron, which manifests in a non-magical manner. Each time such a Luck check is attempted there is a 1% cumulative chance that the patron asks for something in return. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receives a +1 bonus to future patron bond and invoke patron checks (max +5 bonus)."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "The caster arrives at an agreeable arrangement with his patron. He receives a prominent mark of the patron on his face. The caster learns the spell invoke patron as it relates to his patron and may cast it twice per day at a +1 bonus to the spell check. Each time he casts invoke patron, the caster is indebted to his patron, who will call in the debt at some point. The caster forms a bond between his patron and the subject. For reasons unknown, the patron is inexplicably fond of this subject; the patron probably has some use for this subject in the future, which comes to light when the time is right. The patron bestows a minor boon on the caster in the form of a +2 bonus on the next casting of invoke patron or a patron spell. The subject receives a prominent mark of the patron on his hand or face, and may attempt a Luck check once per month, at a +1 bonus, to ask a minor favor from the patron, which manifests in a non-magical manner. Each time such a Luck check is attempted there is a 1% cumulative chance that the patron asks for something in return. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receives a +1 bonus to future patron bond and invoke patron checks (max +5 bonus). Patron Bond (continued) When Cast on Self When Cast on Other"
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "The caster is considered an important person in his patron's plans. He forms an agreement with his patron and is marked as one in the patron's service. The caster learns the spell invoke patron as it relates to his patron and may cast it twice per day at a +1 bonus to the spell check. The patron also gives the caster a gift (for which a counter-gift is to be expected, of course). The gift is a single patron spell, selected from the patron's spell list. The caster can cast this spell once per day in place of a casting of invoke patron. Each time he casts this patron spell or invoke patron, the caster is indebted to his patron, who will call in the debt at some point. The caster forms a bond between his patron and the subject, who is very useful to the patron. The patron bestows a minor boon on the caster in the form of a +2 bonus on the next casting of invoke patron or a patron spell, and grants a minor boon to the subject in the form of a +1 bonus to his next action in the service of the patron. The subject receives a prominent mark of the patron on his hand or face, and may attempt a Luck check once per month to ask a minor favor from the patron, which manifests in a non-magical manner. Each time such a Luck check is attempted there is a 1% cumulative chance that the patron asks for something in return. In addition, the patron sends followers to aid the subject's natural actions. The followers consist of 1d4+1 warriors, each of level 1d3. All bear the mark of the patron. The warriors serve with absolute loyalty (no morale checks are ever required) and ask for nothing in return save adherence to the principles of the patron. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receive a +1 bonus to future patron bond and invoke patron checks (max +5 bonus)."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "The patron considers the caster indispensable to his long-term goals. The caster learns the spell invoke patron as it relates to his patron and may cast it up to three times per day at a +1 bonus to the spell check. The patron also gives the caster a gift (for which a counter-gift is to be expected, of course). The gift is a single patron spell, selected from the patron's spell list. The caster can cast this spell once per day in place of a casting of invoke patron. Each time he casts this patron spell or invoke patron, the caster is indebted to his patron, who will call in the debt at some point. The caster forms a bond between his patron and the subject, who is extremely useful to the patron. The patron bestows a minor boon on the caster in the form of a +2 bonus on the next casting of invoke patron or a patron spell, and grants a minor boon to the subject in the form of a +1 bonus to his next action in the service of the patron. The subject receives a prominent mark of the patron on his hand or face, and may attempt a Luck check once per month, at a +2 bonus, to ask a major favor from the patron, which may manifest in a magical manner. For example, if attempting a ferry crossing without sufficient gold to pay the ferryman, the subject may suddenly find a giant eagle comes to fly him across the river. Each time such a Luck check is attempted there is a 2% cumulative chance that the patron asks for something in return. In addition, the patron sends followers to aid the subject's natural actions. The followers consist of 1d4+1 warriors, each of level 1d3. All bear the mark of the patron. The warriors serve with absolute loyalty (no morale checks are ever required) and ask for nothing in return save adherence to the principles of the patron. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receives a +1 bonus to future patron bond and invoke patron checks (max +5 bonus). Patron Bond (continued) When Cast on Self When Cast on Other"
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "The caster's patron considers him indispensable to his long-term goals. The caster learns the spell invoke patron as it relates to his patron and may cast it up to three times per day at a +2 bonus to the spell check. The patron also gives the caster a gift (for which a counter-gift is to be expected, of course). The gift is a single patron spell, selected from the patron's spell list. The caster can cast this spell once per day in place of a casting of invoke patron. Each time he casts this patron spell or invoke patron, the caster is indebted to the patron, who will call in the debt at some point. The caster forms a bond between his patron and the subject, who is indispensable to the patron. The patron bestows a major boon on the caster in the form of a permanent +1 bonus on all castings of invoke patron and patron spells, and grants a major boon to the subject in the form of a +1 bonus once per day to an action preformed in the service of the patron. The subject receives a prominent mark of the patron on his hand or face, and may attempt a Luck check once per month, at a +3 bonus, to ask a major favor from the patron, which may manifest in a magical manner. Each time such a Luck check is attempted there is a 2% cumulative chance that the patron asks for something in return. In addition, the patron sends followers to aid the subject's natural actions. The followers consist of 1d4+1 warriors, each of level 1d3. All bear the mark of the patron. The warriors serve with absolute loyalty (no morale checks are ever required) and ask for nothing in return save adherence to the principles of the patron. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receives a +1 bonus to future patron bond and invoke patron checks (max +5 bonus)."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "The patron considers the caster integral to his long-term goals. The caster learns the spell invoke patron as it relates to his patron and may cast it up to four times per day at a +2 bonus to the spell check. The patron also gives the caster a gift (for which a counter-gift is to be expected, of course). The gift is two patron spells, selected from the patron's spell list. The caster can cast either of these spells once per day in place of a casting of invoke patron. Each time he casts either of these patron spells or invoke patron, the caster is indebted to his patron, who will call in the debt at some point. The caster forms a bond between his patron and the subject, who is indispensable to the patron. The patron bestows a major boon on the caster in the form of a permanent +1 bonus on all castings of invoke patron and patron spells, and grants a major boon to the subject in the form of a +1 bonus once per day to an action performed in the service of the patron. The subject receives a prominent mark of the patron on his hand or face, and may attempt a Luck check once per month, at a +4 bonus, to ask a major favor from the patron, which may manifest in a magical manner. Each time such a Luck check is attempted there is a 2% cumulative chance that the patron asks for something in return. In addition, the patron sends followers to aid the subject's natural actions. The followers consist of 1d4+1 warriors, each of level 1d3. All bear the mark of the patron. They warriors serve with absolute loyalty (no morale checks are ever required) and ask for nothing in return save adherence to the principles of the patron. The caster is viewed favorably for bringing more followers to his patron; for every 10 followers recruited and bonded, he receives a +1 bonus to future patron bond and invoke patron checks (max +5 bonus)."
      }
    ]
  },
  {
    "id": "spell_007",
    "name": "Spider Climb",
    "level": 1,
    "range": "Self or touch (see below)",
    "duration": "10 minutes per CL",
    "castingTime": "1 action",
    "save": "None",
    "general": "The caster gains the spider's ability to climb vertical surfaces.",
    "manifestation": "Roll 1d4: (1) four extra spider-like limbs sprout from the caster's torso; (2) the caster's hands and feet ooze sticky goo; (3) the caster's fingers and toes glow with a strange orange light; (4) the caster grow six additional eyes.",
    "corruption": "Roll 1d6: (1) caster grows four large spider-like limbs from his back; (2) caster can spin small webs like a spider and throw them up to 30' as a sticky goo (ranged attack roll, DC 12 Strength or Agility check for target to escape); (3) caster grows short, spindly hairs across the surface of his skin, much like a spider; (4) caster grows six extra eyes, clustered around his normal eyes, so they resemble a spider's; (5) caster's hands and feet excrete an oily, sticky substance that causes small objects to stick to them; (6) minor.",
    "misfire": "Roll 1d5: (1) caster sticks himself to the floor and cannot move his feet until he makes a DC 16 Strength check; (2) caster makes his appendages magically slippery and has trouble standing straight for the next 1d6 rounds, falling over constantly unless he makes a DC 12 Agility check each round; (3) caster launches a glob of webby fibers at nearest ally, entangling his companion until the ally makes a DC 12 Strength or Agility check to escape; (4) caster summons a horde of poisonous spiders, which arrives one round later and swarm across all nearby creatures, inflicting scores of bites and forcing a DC 8 Fort save by all creatures within 50' with failure indicating a mild poison (1 hp damage plus -1 penalty to all rolls for 1 hour); (5) caster plus 1d4 nearby creatures are flipped upside down in mid-air, with their feet adhering to a point in the air about 8' above ground level, and although they are able to move about as normal in this upside-down state they remain upside down for 1d6 hours.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + misfire; (1-2) corruption; (3+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "The caster becomes much more skilled at climbing, gaining a +10 bonus to Climb checks as long as his hands and feet are bare. Items weighing less than 5 lbs. stick to the casters hands during this time, making spellcasting impossible for the duration."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "The caster becomes extremely skilled at climbing, gaining a +20 bonus to Climb checks as long as his hands and feet are bare. Items weighing less than 5 lbs. stick to the caster's hands during this time, making spellcasting impossible for the duration. Duration: 1 turn per CL Casting time: 1 action Save: None"
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "The caster gains the actual climbing ability of a spider as long as his hands and feet are bare. He can hang upside down, climb completely vertical surfaces with no handholds, move across spider webs, and even scurry along upside down at obtuse angles. The caster moves at his normal speed and need never make Climb checks. He is immune to spider web spells. The caster's hands and feet must remain bare, and items weighing less than 5 lbs. stick to his hands during this time, making spellcasting impossible for the duration."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "The caster gains the actual climbing ability of a spider, even when using gloves and shoes, and when carrying objects in his hands. He can hang upside down, climb completely vertical surfaces with no handholds, move across spider webs, and even scurry along upside down at obtuse angles. The caster moves at his normal speed, need never make Climb checks, and is immune to spider web spells."
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "The caster and one ally touched gain the actual climbing ability of a spider, even when using gloves and shoes, and when carrying objects in hand. The caster and his ally can hang upside down, climb completely vertical surfaces with no handholds, move across spider webs, and even scurry along upside down at obtuse angles. The caster and his affected ally move at their normal speeds, need never make Climb checks, and are immune to spider web spells."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "The caster and all allies within 10' gain the actual climbing ability of a spider, even when using gloves and shoes, and when carrying objects in hand. The caster and affected allies can hang upside down, climb completely vertical surfaces with no handholds, move across spider webs, and even scurry along upside down at obtuse angles. Those affected move at their normal speeds, need never make Climb checks, and are immune to spider web spells."
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "For a duration of 1 hour per caster level, and the caster and all allies within 10' gain the actual climbing ability of a spider, even when using gloves and shoes, and when carrying objects in hand. The caster and his affected allies can hang upside down, climb completely vertical surfaces with no handholds, move across spider webs, and even scurry along upside down at obtuse angles. Those affected move at their normal speeds, need never make Climb checks, and are immune to spider web spells."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "For the next day, the caster and all allies within 20' gain all the abilities of a spider. First, those affected can climb as a natural ability, hang upside down, climb vertical surfaces and overhangs, and move on any surface regardless of handholds. Second, the recipients of this spell can launch sticky spider webs that can ensnare enemies. This counts as a ranged attack (at an additional +4 bonus) with a 50' range, and targets are unable to move or take any action until they make a DC 16 Strength or Agility check. Finally, the melee attacks of those benefiting from the spell carry a poison; any wound inflicted also imposes a DC 16 Fort save or the target takes an additional 1d6 damage and loses 1d4 points of Strength."
      }
    ]
  },
  {
    "id": "spell_008",
    "name": "Scorching Ray",
    "level": 1,
    "range": "80'",
    "duration": "Instantaneous",
    "castingTime": "1 action",
    "save": "None",
    "general": "The caster summons the flames of Hell to immolate his foes.",
    "manifestation": "Roll 1d5: (1) arcing ray of fire; (2) laser beam; (3) flaming bullet; (4) sizzling gout of flame; (5) burning hands followed by spray of sparks. Color of fire varies – red, yellow, blue, or green.",
    "corruption": "Roll 1d8: (1) all hair on the caster's head is permanently burned off (including eyebrows and facial hair); (2) the caster's hands and arms are blackened, as if they had been charred and burned; (3) the caster's skin is permanently sunburned, causing discomfort and pain when he wears armor or rough fabrics; (4) the caster's face is caught in a burst of flame, melting his flesh into a horribly grotesque appearance; (5) the caster develops an extreme sensitivity to heat, automatically taking an extra +1 damage on all dice related to fire damage from now on; (6) greater; (7) major; (8) minor.",
    "misfire": "Roll 1d4: (1) caster explodes a ball of fire centered on himself, causing 1d6 damage and burning up all flammable objects on his person; (2) caster sends forth an errant ray of fire that causes 1d6 damage to one randomly determined ally within 30'; (3) caster lights the nearest ally on fire briefly for 1d4 damage; (4) caster inadvertently reverses the spell, summoning a wave of chilling cold that automatically extinguishes all flames within 100' of him.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + patron taint + misfire; (1-2) corruption; (3) patron taint (or corruption if no patron); (4+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "Failure, but spell is not lost."
      },
      {
        "minRoll": 14,
        "maxRoll": 15,
        "effect": "One target takes 1d6 + caster level damage. Additionally, it must make a Reflex save vs. spell check or catch fire. Each round thereafter it suffers an additional 1d6 damage until it succeeds on a DC 15 Reflex save to extinguish the fire. Flammable objects on the target (e.g., scrolls or tomes) have a 75% chance of catching fire unless protected."
      },
      {
        "minRoll": 16,
        "maxRoll": 19,
        "effect": "One target takes 1d8 + caster level damage. Additionally, it must make a DC 15 Reflex save or catch fire. Each round thereafter it suffers an additional 1d6 damage until it succeeds on a DC 15 Reflex save to extinguish the fire. Flammable objects on the target (e.g., scrolls or tomes) have a 75% chance of catching fire unless protected."
      },
      {
        "minRoll": 20,
        "maxRoll": 21,
        "effect": "The caster can launch two rays, at the same target or at two targets. Each ray does 1d10 + caster level damage. Additionally, each target must make a DC 15 Reflex save or catch fire. Each round thereafter the target suffers an additional 1d6 damage until it succeeds on a DC 15 Reflex save to extinguish the fire. Flammable objects on the target (e.g., scrolls or tomes) have a 75% chance of catching fire unless protected."
      },
      {
        "minRoll": 22,
        "maxRoll": 25,
        "effect": "The caster can launch three rays, at the same target or different targets. Each ray does 1d12 + caster level damage. Additionally, each target must make a DC 15 Reflex save or catch fire. Each round thereafter the target suffers an additional 1d6 damage until it succeeds on a DC 15 Reflex save to extinguish the fire. Flammable objects on the target (e.g., scrolls or tomes) have a 75% chance of catching fire unless protected."
      },
      {
        "minRoll": 26,
        "maxRoll": 29,
        "effect": "The caster sends forth a fanning wave of flames. The attack is shaped like a cone, centered on the caster and expanding to a width of 40' at its farthest end 80' away. All targets within the cone take 1d12 + caster level damage. Additionally, each target must make a DC 15 Reflex save or catch fire. Each round thereafter the target suffers an additional 1d6 damage until it succeeds on a DC 15 Reflex save to extinguish the fire. Flammable objects on the target (e.g., scrolls or tomes) have a 75% chance of catching fire unless protected."
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "The caster detonates a blast of fire centered on himself. He suffers no damage, but all targets within 20' are automatically immolated for 1d12 points of damage. In addition, the blast sends out up to a dozen jets of flame, each 80' long and aimed at a single target. Each jet does 1d20 + caster level damage and automatically catches the target on fire for an additional 1d6 damage each round until the target makes a DC 15 Reflex save. Flammable objects on the target (e.g., scrolls or tomes) automatically catch fire. No target can be damaged by more than one jet of flame. Duration: Instantaneous Casting time: 1 action Save: Ref partial (see below)"
      },
      {
        "minRoll": 32,
        "maxRoll": 33,
        "effect": "The caster detonates a blast of fire centered on himself. He suffers no damage, but all targets within 30' are automatically immolated for 1d20 points of damage. In addition, the blast sends out up to a dozen jets of flame, each 80' long and aimed at a single target. Each jet does 1d20 + caster level damage and automatically catches the target on fire for an additional 1d8 damage each round until the target makes a DC 15 Reflex save. Flammable objects on the target (e.g., scrolls or tomes) automatically catch fire. No target can be damaged by more than one jet of flame."
      },
      {
        "minRoll": 34,
        "maxRoll": 99,
        "effect": "The caster summons a jet of magma and flame from the earth's core, which explodes upward from his feet then blasts out at his enemies. He can direct a scorching ray of flame at any target he can see, to a range of 1,000'. The amount of damage done by each ray depends on how much the caster must dilute the pure magma of the earth's core. A single target takes 6d20+CL damage; 2-5 targets each take 4d20+CL damage; 6-10 targets each take 3d12+CL damage; 11-30 targets each take 1d20+CL damage; 31-50 targets each take 1d12+CL damage; 51-100 targets each take 1d8 damage; and 101 or more targets each take 1d6 damage. Every target must succeed on a DC 15 Reflex save or catch fire, suffering an additional 1d6 damage every round thereafter until they again succeed on a DC 15 Reflex save."
      }
    ]
  },
  {
    "id": "spell_009",
    "name": "Emirikol's Entropic Maelstrom",
    "level": 1,
    "range": "50' + 10' per CL",
    "duration": "1 round per CL",
    "castingTime": "1 action",
    "save": "Fort save",
    "general": "This spell produces an entropic storm that fills a 40' square area. Those caught within this maelstrom are attacked by the elemental forces of Chaos, resulting in age, decay, or transformation. All creatures of Lawful alignment suffer a -1 to saving throws to resist the spell; Chaotic creatures enjoy a +1 bonus to their saves.",
    "manifestation": "A bank of lightning-filled, purple-black fog appears, and the howling of the damned is heard within its misty confines.",
    "corruption": "Roll 1d4: (1) caster's eyes are replaced by purplish-black orbs that crackle with silent lightning; (2) caster's body is mottled with veins of unseemly colors (bile yellow, dull tan, phlegm ochre, etc.); (3) caster is afflicted with premature aging (hair turns grey, wrinkles and liver spots appear, etc.); (4) garments of cloth and leather decay at an alarming rate when worn, forcing the caster to replace his wardrobe weekly.",
    "misfire": "Roll 1d5: (1) caster must make a DC 10 Fort save or be temporarily aged 2d20 years for 24 hours; (2) all the caster's non-magical possessions suddenly rust or rot away; (3) entropic backlash knocks the caster back 15' feet and inflicts 1d4 damage; (4) a rain of fish or frogs falls in a 40' area around the caster, causing all to make a DC 8 Fort save or suffer 1d3 damage from bludgeoning; (5) caster and all other creatures within a 20' radius suddenly change places – the judge can reposition the affected targets by choice or at random.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + patron taint + misfire; (1-2) corruption; (3) patron taint (or corruption if no patron); (4+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 15,
        "effect": "Failure, but spell is not lost."
      },
      {
        "minRoll": 16,
        "maxRoll": 17,
        "effect": "The maelstrom affects non-living, non-magical metal and organic materials, causing them to decay and oxidize. Weapons, armor, and items made from iron, steel, wood, or leather must make a DC 10 Fort save or become brittle. These objects either impose a -2 penalty to attack and damage rolls or suffers a -2 reduction in AC, depending on the item. On a critical hit (by the weapon or against the armor), the item falls to pieces regardless of the critical hit roll result."
      },
      {
        "minRoll": 18,
        "maxRoll": 21,
        "effect": "The maelstrom affects metal and organic materials, causing them to decay and oxidize. Even magical items and constructs of metal or organic materials are subject to this magical decay. Weapons, armor, and items made from iron, steel, wood, or leather must make a DC 15 Fort save or become brittle. These objects either impose a -2 penalty to attack and damage rolls or suffers a -2 reduction in AC, depending on the item. On a critical hit (by the weapon or against the armor), the item falls to pieces regardless of the critical hit roll result. Magical items must make a DC 10 Fort save to avoid the same fate and can add any \"pluses\" they possesses to the saving throw roll. Constructed, magical creatures must make a Fort save vs. spell check result or suffer 1d10+CL damage from the maelstrom's effects."
      },
      {
        "minRoll": 22,
        "maxRoll": 23,
        "effect": "All living creatures within the spell's area of effect must make a Fort saving throw or be overwhelmed by weariness and ennui. They temporary lose 1d4 points of Strength and Stamina, and all attacks rolls, saving throws, spell checks, and ability checks are made at a -3 penalty for the duration of the spell."
      },
      {
        "minRoll": 24,
        "maxRoll": 26,
        "effect": "All living creatures within the area of effect must make a Fort save or be affected by a random affliction. The judge should roll separately for each affected creature, as it is possible for different disabilities to affect the targets. Possible afflictions include: (roll 1d8) (1) blindness, (2) deafness, (3) paralyzation, (4) crippled (speed reduced to 5' round), (5) speak in tongues (no spell casting possible), (6) unconsciousness, (7) temporary insanity, and (8) temporary amnesia. The judge may substitute other afflictions as desired."
      },
      {
        "minRoll": 27,
        "maxRoll": 31,
        "effect": "The maelstrom draws out and consumes magical energy within the area of effect, causing those who command spells to either feed the storm or suffer. Each round they are within the spell's area of effect, all spellcasters must make a Will save or be forced to release a portion of their magical energy in spell form. On a failed save, the caster's next action must be to cast a spell or suffer 1d6+CL damage. The caster can choose which spell he performs to feed the maelstrom and makes a spell check as normal. If the spell check is successful, the spell is devoured by the maelstrom and the caster takes no damage. On a failed spell check, the caster loses the spell for the day (regardless of a spell check failure result indicating otherwise) and takes 1d6+CL damage. Non-spellcasters automatically take 1d3+CL points of damage for every round they are in the area of effect."
      },
      {
        "minRoll": 32,
        "maxRoll": 33,
        "effect": "All living creatures within the area of effect are aged 2d10 years (or 2d10x10 years if an elf or other longlived race). They permanently lose a point of Strength, Stamina, and Agility and may suffer other cosmetic changes (hair goes gray or is lost, wrinkles, liver spots, etc.) at the judge's discretion."
      },
      {
        "minRoll": 34,
        "maxRoll": 35,
        "effect": "All living creatures within the area of effect must make a Fort save or be transformed by the maelstrom. The spell affects the targets' physical make-up, altering flesh and bone into other, less seemly substances. The judge should roll separately for each affected creature, as it is possible for different transformations to affect the targets. Possible transformations include (roll 1d8) (1) glass, (2) bile, (3) sand, (4) primordial ooze, (5) phlegm, (6) tin, (7) dead vermin, (8) cancerous tissue. The judge may substitute other substances as desired. Transformed creatures can be restored by powerful magics provided circumstances allow the majority of their altered form to be salvageable. For example, a creature transformed into bile while standing in a fast-moving stream has little chance of having all his material form collected and would be lost forever (barring divine intervention)."
      },
      {
        "minRoll": 36,
        "maxRoll": 99,
        "effect": "All mortal creatures within the area of effect are torn apart by the uncaring, chaotic forces that reside in the heart of the cosmos. Their physical forms dissolve into primordial sludge, their possessions are destroyed on the atomic level, and their life forces are consumed by entropy. Any who witness this utter destruction are paralyzed by the futility of existence for 1d6 rounds and may develop nervous tics or have their hair turn white in fright. Those destroyed by the spell cannot be restored to life by any means, nor can their belongings be recovered or recreated. Entropy wins in the end."
      }
    ]
  },
  {
    "id": "spell_010",
    "name": "Slow",
    "level": 1,
    "range": "20' + 10' per CL",
    "duration": "Varies",
    "castingTime": "1 round",
    "save": "Will",
    "general": "The caster impairs the ability of the targeted creature to move at its normal speed. This spell can also be cast to cancel haste.",
    "manifestation": "Roll 1d3: (1) target appears elongated and stretched in several directions; (2) target is surrounded by a gray mist that partially obscures it; (3) target seems to droop toward the ground, moving with difficulty.",
    "corruption": "Roll 1d8: (1) caster is returned to an age of 1d10+5 years, quite possibly reducing him to a child-like state; he retains all mental attributes but receives a -2 penalty to Strength, and +1 bonus to Stamina and Agility; he is treated as a child by all who encounter him; (2) caster makes himself and all within 20' younger by a factor of -2d10 years, possibly reducing already-young PCs to a child-like state; (3) caster's speech patterns slow significantly, such that it takes him twice as long as normal to communicate, and any time he casts a spell he must take twice the normal casting time or receive a -1 penalty to the spell check as he stutters and stumbles on his slurred, slow words; (4) the caster acquires a ponderous gait that permanently reduces his speed by -5'; (5-6) major; (7-8) greater.",
    "misfire": "Roll 1d4: (1) caster slows time for himself, causing him to miss his next action; (2) caster slows times for himself and 1d4 allies within 20', causing all of them to miss their next action; (3) caster ages himself by 1d10+10 years; (4) caster grants slow to a nearby bug, which buzzes about somnolently before flying off into the distance.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + patron taint + misfire; (1-3) corruption; (4) patron taint (or corruption if no patron); (5+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 15,
        "effect": "Failure, but spell is not lost. Duration: Varies Casting time: 1 round Save: Sometimes (Will)"
      },
      {
        "minRoll": 16,
        "maxRoll": 17,
        "effect": "One target within range immediately drops to the bottom of the initiative count (no save). If it has already acted this round, it does not receive another action at the end of the initiative count."
      },
      {
        "minRoll": 18,
        "maxRoll": 21,
        "effect": "One target within range skips its next activation (no save)."
      },
      {
        "minRoll": 22,
        "maxRoll": 23,
        "effect": "One target within range is slowed to half its normal speed (Will save to resist). Its movement rate is halved, and it can take its normal actions only once every other round (with the first \"skip\" being its next activation). It automatically drops to the bottom of the initiative count. The effect lasts for 1d6+1 rounds."
      },
      {
        "minRoll": 24,
        "maxRoll": 26,
        "effect": "The caster can target two creatures, each of which is slowed to half its normal speed (Will save to resist). The targets' movement rate is halved, and they can take their normal actions only once every other round (with the first \"skip\" being their next activation). They automatically drop to the bottom of the initiative count (in the same relative order of initiative). The effect lasts for 1d6+1 rounds."
      },
      {
        "minRoll": 27,
        "maxRoll": 31,
        "effect": "The caster designates a target within range. That target and all other creatures (friendly or not) within 20' are potentially slowed (Will save to resist). Those that fail their save are slowed to half normal speed. Their movement rate is halved, and they can take their normal actions only once every other round (with the first \"skip\" being their next activation). They automatically drop to the bottom of the initiative count (in the same relative order of initiative). The effect lasts for 1d6+1 rounds."
      },
      {
        "minRoll": 32,
        "maxRoll": 33,
        "effect": "The caster selects one target within range. If it fails a Will save, it is removed from the normal flow of time. Each round, roll d%. On a roll of 01-25, the creature can move and act as normal. A roll of 26-90 indicates it remains frozen in place and can take no actions. This effect continues until 91-00 is rolled, at which point the creature slips back into the normal flow of time and the effect ends."
      },
      {
        "minRoll": 34,
        "maxRoll": 35,
        "effect": "The caster selects one target within range. That target and all creatures within 20' (friendly or not) are removed from the normal flow of time (no save). This is a one-time event; other creatures can subsequently move into the affected area without consequence. Each round, roll d%. On a roll of 01-25, all affected creatures can move and act as normal. A roll of 26-90 indicates those creatures remain frozen in place and can take no actions. This effect continues until 91-00 is rolled, at which point all affected creatures slip back into the normal flow of time and the effect ends."
      },
      {
        "minRoll": 36,
        "maxRoll": 99,
        "effect": "The caster creates a sphere of slowness. The caster designates a space within line of sight. All creatures within a 100' radius of that point are slowed. Additionally, any creature that enters that point is slowed. There is no visible indication of the field. Creatures receive a Will save to resist. Failure indicates they move at half speed and receive an activation only once every other round. The effect lasts as long as the targets remain within the sphere of slowness and extends for another 2d6 rounds thereafter when they leave. The sphere itself persists for 1d5 hours."
      }
    ]
  },
  {
    "id": "spell_011",
    "name": "Control Fire",
    "level": 1,
    "range": "15'",
    "duration": "Concentration",
    "castingTime": "1 action",
    "save": "None",
    "general": "The caster creates and manipulates fire to bar passage, immolate his opponents, and protect himself from damage. On a successful casting, the caster may choose to invoke any effect of equal to or less than his spell check, allowing a range of options with every successful casting to produce a weaker but potentially more useful result.",
    "manifestation": "Roll 1d4: (1) caster's body ignites with harmless flame; (2) nearby flames leap from their sources to twist about the caster; (3) flame falls from the heavens to take the form of the caster's creations; (4) the caster vomits forth a gout of fire that fulfils the effect of the spell.",
    "corruption": "Roll 1d6: (1) caster's hair turns to flickering flames that produce no heat; (2) caster leaves a trail of scorched footprints wherever he goes; (3) caster's clothes constantly smolder and must be replaced daily; (4) the odor of smoke permanently accompanies the caster; (5) caster's body becomes covered in burn scars; (6) caster must light a fire of campfire-size or greater each day and bask in its heat for at least 10 minutes or suffer a -1 penalty to all spell checks.",
    "misfire": "Roll 1d4: (1) all creatures within 15' of the caster (including the caster) must make a Fort save equal to 5+CL or catch fire (1d6 damage each round until extinguished); (2) all fire sources within a 15' radius of the caster produces thick, obscuring smoke that fill a 10' cube around it each round for 1d4 rounds; (3) spell takes effect but in a random area or on a random creature within 30' of the caster (reroll spell check to determine effect and strength as if the caster were casting the spell again); (4) caster burns off all his own body hair.",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure, and worse! Roll 1d6 modified by Luck: (0 or less) corruption + patron taint + misfire; (1-2) corruption; (3) patron taint (or corruption if no patron); (4+) misfire."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 17,
        "effect": "Failure, but spell is not lost."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "The caster is wreathed in magical fire. Any creature attacking the caster in melee suffers damage equal to 1d6+CL. In addition, the caster suffers only half damage from cold-based attacks. This effect lasts 1 turn per caster level."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "The spell caster produces spear-like manifestations of magical fire that he may hurl up to 25' feet + 5' per CL. The spears strike without fail (although magic shield and other similar effects deflect the spears as if they were magic missiles), inflicting damage equal to 1d8 points plus 2 additional points per caster level. The caster creates 1 spear per level of experience and may throw up to two per action die, beginning on his next action die. The spears remain in existence for one hour or until thrown. Duration: Varies Casting Time: 1 action Save: Fort partial (sometimes)"
      },
      {
        "minRoll": 24,
        "maxRoll": 25,
        "effect": "Caster creates a wall of fire up to 60' away. The wall is 20' high and 15' long per caster level or ringshaped with a radius of 10' plus 5' per caster level. Creatures within 10' of the wall suffer damage equal to 1d6+CL. Creatures passing through the wall suffer damage equal to 4d6+CL. The wall stands for as long as the caster concentrates or 1 round per level if the caster chooses not to maintain the barrier."
      },
      {
        "minRoll": 26,
        "maxRoll": 28,
        "effect": "The caster can create any single effect listed above, and all damage done is increased by 1 die (e.g., fire spears inflict 2d8 + 2 points per CL)."
      },
      {
        "minRoll": 29,
        "maxRoll": 33,
        "effect": "The caster can create any two of the effects listed above, and all damage done is increased by 1 die."
      },
      {
        "minRoll": 34,
        "maxRoll": 35,
        "effect": "The caster can create all three of the effects noted above, and all damage is increased by 1 die."
      },
      {
        "minRoll": 36,
        "maxRoll": 37,
        "effect": "The caster creates a conflagration that affects an area 50' in diameter. The range is any location within sight of the caster (including magical scrying). All creatures caught in the inferno suffer damage equal to 10d10 + 2 points per CL (Fort save for half damage). The fire ignites any naturally flammable substances and can be used to create a forest fire, burn down a town, etc. The magical flame remains in existence for 1 hour per caster level, though the mundane flames it creates will continue to burn as long as they have fuel."
      },
      {
        "minRoll": 38,
        "maxRoll": 99,
        "effect": "Caster creates a wildfire that ravages the landscape, destroys buildings, causes lakes to boil, and otherwise reduces the land to cinders. Fire is 100 square yards in size for each level the caster possesses and moves in a random direction for a distance equal to 1 mile per caster level. All creatures caught in the fire must make a Fort save or die. The magical flame remains in existence for 1 hour per caster level, though the mundane flames it creates will continue to burn as long as they have fuel."
      }
    ]
  },
  {
    "id": "spell_012",
    "name": "The Dreaming",
    "level": 3,
    "range": "Self",
    "duration": "Varies",
    "castingTime": "1 round",
    "save": "None",
    "general": "The caster calls upon the ancient, slumbering magic of the Elflands. Time slows as the fey dreaming of twilight and dusk ooze into the mortal realms.",
    "manifestation": "Roll 1d3: (1) glowing mist settles over the area; (2) scintillating dust and the peal of tinkling bells fill the air; (3) a strange air settles over the caster, as if lit by the fading light of dusk.",
    "corruption": "N/A",
    "misfire": "N/A",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 1,
        "effect": "Lost, failure and patron taint."
      },
      {
        "minRoll": 2,
        "maxRoll": 11,
        "effect": "Lost. Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 15,
        "effect": "Failure, but spell is not lost."
      },
      {
        "minRoll": 16,
        "maxRoll": 17,
        "effect": "Time slows around the caster. He may take an extra action each round and gains +1 to AC, Reflex saves, and attack rolls. The extra action is at the caster's lowest action die. Lasts 1d4 rounds."
      },
      {
        "minRoll": 18,
        "maxRoll": 21,
        "effect": "The caster and all allies within 50' may take an extra action each round (at each character's lowest action die) and gain +1 to AC, Reflex saves, and attack rolls. Lasts 1d4 rounds."
      },
      {
        "minRoll": 22,
        "maxRoll": 23,
        "effect": "Time slows to a crawl. The caster and all allies within 50' may take two extra actions each round and gain +2 to AC, Reflex saves, and attack rolls. Lasts 1d3 rounds."
      },
      {
        "minRoll": 24,
        "maxRoll": 26,
        "effect": "The caster and all allies within 50' may take three extra actions each round and gain +3 to AC, Reflex saves, and attack rolls. Lasts 1d3 rounds."
      },
      {
        "minRoll": 27,
        "maxRoll": 31,
        "effect": "As 24-26, but may be extended with spellburn: burn 1 attribute point to extend by 1 round. Using spellburn requires one of the caster's extra actions."
      },
      {
        "minRoll": 32,
        "maxRoll": 33,
        "effect": "Time stops for 1d3+CL rounds. The caster alone is immune to the effect. He may take normal actions while all other creatures are frozen in time."
      },
      {
        "minRoll": 34,
        "maxRoll": 35,
        "effect": "Time stops until dismissed by the caster or the King of Elfland. The caster alone acts freely while all others are frozen."
      },
      {
        "minRoll": 36,
        "maxRoll": 99,
        "effect": "Time stops as 34-35. Additionally, the caster may turn back time by permanently spellburning attribute points at the rate of 2 points per 10 minutes reversed."
      }
    ]
  },
  {
    "id": "spell_013",
    "name": "Detect Magic",
    "level": 1,
    "range": "30' or more Duration: 2 turns",
    "duration": "2 turns or more",
    "castingTime": "2 actions",
    "save": "Will vs. spell check DC (sometimes)",
    "general": "The cleric knows if there has been an enchantment laid upon a person, place or thing within range. The range is a cone, 30' long and 30' wide at its end, emanating from the cleric's holy symbol.",
    "manifestation": "See below.",
    "corruption": "",
    "misfire": "",
    "isLost": false,
    "isCorrupted": false,
    "results": [
      {
        "minRoll": 1,
        "maxRoll": 11,
        "effect": "Failure."
      },
      {
        "minRoll": 12,
        "maxRoll": 13,
        "effect": "The cleric is aware of magical enchantment on any object or creature within range. This includes weapons or armor worn by a creature, as well as spells. The cleric cannot distinguish which portions of the targets are magical. For example, a creature enchanted by a spell or carrying a magical weapon or item registers simply as \"magical,\" so the true extent and nature of the magic is not always evident. The cleric does not receive any information on the nature of the magical enchantment, only its existence. Intelligent magic creatures and creations that wish to hide their magical nature can do so with a Will save. Objects behind 3' of wood, 1\" of solid metal, or 1' of stone are not detected."
      },
      {
        "minRoll": 14,
        "maxRoll": 17,
        "effect": "The cleric is aware of magical enchantment on any object or creature within range. This includes weapons or armor worn by a creature, as well as spells. The cleric cannot distinguish which portions of the targets are magical. For example, a creature enchanted by a spell or carrying a magical weapon or item registers simply as \"magical,\" so the true extent and nature of the magic is not always evident. The cleric does not receive any information on the nature of the magical enchantment, only its existence. Objects behind 3' of wood, 1\" of solid metal, or 1' of stone are not detected."
      },
      {
        "minRoll": 18,
        "maxRoll": 19,
        "effect": "The cleric can determine exactly which objects or creatures are magically enchanted within range. He can tell if different weapons or items of equipment on a creature are enchanted and whether a creature that registers as \"magical\" overall does so because of its cloak (for example) or because of something inherent in its blood. Further, the cleric receives a rough gauge of the magic's strength, revealed as the approximate level of a spell, the general range of bonus (or plus) for weapons or armor, and so on. Objects behind 3' of wood, 1\" of solid metal, or 1' of stone are not detected."
      },
      {
        "minRoll": 20,
        "maxRoll": 23,
        "effect": "The cleric can determine exactly which objects or creatures are magically enchanted within range. In addition, the spell reveals creatures of non-mortal origin (e.g., extraplanar creatures, demons, devils, celestials, un-dead, etc.). The cleric can distinguish between magical creatures and non-mortal creatures. He can tell if different weapons or items of equipment on a creature are enchanted and whether a creature that registers as \"magical\" overall does so because of its cloak (for example) or because of something inherent in its blood. Further, the cleric receives a rough gauge of the magic's strength, revealed as the approximately level of a spell, the general range of bonus (or plus) for weapons or armor, and so on. Objects behind 3' of wood, 1\" of solid metal, or 1' of stone are not detected."
      },
      {
        "minRoll": 24,
        "maxRoll": 27,
        "effect": "The cleric can determine exactly which objects or creatures are magically enchanted within range. In addition, the spell reveals creatures of non-mortal origin (e.g., extraplanar creatures, demons, devils, celestials, un-dead, etc.). The cleric can distinguish between magical creatures and non-mortal creatures. He can tell if different weapons or items of equipment on a creature are enchanted and whether a creature that registers as \"magical\" overall does so because of its cloak (for example) or because of something inherent in its blood. Further, the cleric receives a very precise understanding of the magic's strength and nature: he knows an item is a +2 sword or that a door is guarded by a level 3 ward portal spell. Finally, the spell functions through any sort of impeding material (stone, wood, or iron, at any distance within range)."
      },
      {
        "minRoll": 28,
        "maxRoll": 29,
        "effect": "To an extended range of 120', the cleric can determine exactly which objects or creatures are magically enchanted. In addition, the spell reveals creatures of non-mortal origin (e.g., extraplanar creatures, demons, devils, celestials, un-dead, etc.). The cleric can distinguish between magical creatures and non-mortal creatures. He can tell if different weapons or items of equipment on a creature are enchanted and whether a creature that registers as \"magical\" overall does so because of its cloak (for example) or because of something inherent in its blood. Further, the cleric receives a very precise understanding of the magic's strength and nature: he knows an item is a +2 sword or that a door is guarded by a level 3 ward portal spell. Finally, the spell functions through any sort of impeding material (stone, wood, or iron, at any distance within range). Casting time: 2 actions Save: Will vs. spell check DC (sometimes)"
      },
      {
        "minRoll": 30,
        "maxRoll": 31,
        "effect": "To an extended range of 120' and for an extended duration of 4 turns, the cleric can determine exactly which objects or creatures are magically enchanted. In addition, the spell reveals creatures of non-mortal origin (e.g., extraplanar creatures, demons, devils, celestials, un-dead, etc.). The cleric can distinguish between magical creatures and non-mortal creatures. He can tell if different weapons or items of equipment on a creature are enchanted and whether a creature that registers as \"magical\" overall does so because of its cloak (for example) or because of something inherent in its blood. Further, the cleric receives a very precise understanding of the magic's strength and nature: he knows an item is a +2 sword or that a door is guarded by a level 3 ward portal spell. Finally, the spell functions through any sort of impeding material (stone, wood, or iron, at any distance within range)."
      },
      {
        "minRoll": 32,
        "maxRoll": 99,
        "effect": "To an extended range of line-of-sight and for an extended duration of a full hour, the cleric can determine exactly which objects or creatures are magically enchanted. In addition, the spell reveals creatures of non-mortal origin (e.g., extraplanar creatures, demons, devils, celestials, un-dead, etc.). The cleric can distinguish between magical creatures and non-mortal creatures. He can tell if different weapons or items of equipment on a creature are enchanted and whether a creature that registers as \"magical\" overall does so because of its cloak (for example) or because of something inherent in its blood. Further, the cleric receives a very precise understanding of the magic's strength and nature: he knows an item is a +2 sword or that a door is guarded by a level 3 ward portal spell. Finally, the spell functions through any sort of impeding material (stone, wood, or iron, at any distance within range)."
      }
    ]
  }
]
