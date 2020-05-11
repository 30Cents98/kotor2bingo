var bingoListVersion = "1.0";
var bingoList = [];

bingoList[1] = [
  { name: "Get Hanharr", types: ["Character","Hanharr"] },
  { name: "Get Mira", types: ["Character","Mira"] },
  { name: "Get Disciple/Handmaiden to jedi", types: ["Character","Influence"] },
  { name: "Make Bao-Dur a jedi", types: ["Character","Influence","Bao-Dur"] },
  { name: "Force Vision", types: ["Force Power","Influence","Visas"] },
  { name: "Implant Level 3", types: ["Character"] },
  { name: "100 Alignment", types: ["Alignment","Light Side"] },
  { name: "0 Alignment", types: ["Alignment","Dark Side"] },
];
bingoList[2] = [
  { name: "0 influence with 1 character", types: ["Influence","Kreia"] },
  { name: "Break Hanharr's Spirit", types: ["Character","Influence","Hanharr"] },
  { name: "Make Mira a jedi", types: ["Character","Influence","Mira"] },
  { name: "Go to the Rebuilt Jedi Enclave with none of the masters there", types: ["Dantooine","Jedi Masters"] },
  { name: "Kill Atris", types: ["Telos","Jedi Masters] },
  { name: "All Unique Robes", types: ["Robes","Inventory"] },
  { name: "Exactly 0 Credits", types: ["Credits"] },
  { name: "Get HK-47", types: ["Character","HK"] },
];
bingoList[3] = [
  { name: "Complete the Sith Tomb on Korriban", types: ["Korriban"] },
  { name: "Learn Moving Meditation", types: ["Force Power","Influence","T3-M4"] },
  { name: "Get main character on title screen", types: ["Alignment","Dark Side"] },
  { name: "Install HK-47's unique module", types: ["Character","HK"] },
  { name: "Defeat everyone in the Pazaak Den", types: ["Pazaak"] },
  { name: "Free Ramana", types: ["Telos","Quest"] },
  { name: "Dance for Vogga the Hutt", types: ["Nar Shaddaa","Quest"] },
  { name: "Complete all prologue quests", types: ["Ebon Hawk","T3-M4"] },
];
bingoList[4] = [
  { name: "Complete all Telos quests", types: ["Telos"] },
  { name: "Complete all Dantooine quests", types: ["Dantooine"] },
  { name: "Complete all Nar Shaddaa quests", types: ["Nar Shaddaa"] },
  { name: "Complete all Dxun quests", types: ["Dxun"] },
  { name: "Complete all Onderon quests", types: ["Onderon"] },
  { name: "Learn Force Storm", types: ["Force power"] },  
  { name: "Kill all HK droids"", types: ["HK"] },
  { name: "Get any prestige class", types: ["Prestige"] },
];
bingoList[5] = [
  { name: "Get your pet crystal", types: ["Crystal"] },
  { name: "Play on \"difficult"\ ", types: ["Difficulty","Challenge"] },  
  { name: "Opila Crystal", types: ["Crystal"] },
  { name: "Complete the Mandalorian battle circle without violating the rules", types: ["Dxun","Quest"] },
  { name: "Complete the Handmaiden Echani battle circle", types: ["Telos"] },
  { name: "Win all swoop races", types: ["Swoop", "Challenge"] },  
  { name: "Play against every pazaak player at least once", types: ["Pazaak"] },
  { name: "Side with Chodo Habat", types: ["Telos"] },  
];
bingoList[6] = [
  { name: "Side with Jana Lorso", types: ["Telos"] },
  { name: "Find out the Disciple's true name", types: ["Disciple"] },
  { name: "Kill Sion", types: ["Malachor"] },
  { name: "Obtain Darth Nihlus' Mask", types: ["Ravager"] },
  { name: "Kill Colonel Tobin", types: ["Ravager"] },
  { name: "Two Weapon Specializations", types: ["Character"] },
  { name: "Get the Handmaiden to hate you", types: ["Handmaiden"] },
  { name: "Complete all fights with the Handmaiden", types: ["Handmaiden"] },
];
bingoList[7] = [
  { name: "Complete all of G0-T0's bounties", types: ["G0-T0"] },
  { name: "Free Adana", types: ["Nar Shaddaa"] },
  { name: "Find out G0-T0's true identity", types: ["G0-T0"] },
  { name: "250 base Force Points", types: ["Crystal", "Force Points"] },
  { name: "Convince Vogga the Hutt to sell fuel to Telos", types: ["Nar Shaddaa","Quest","Vogga the Hutt] },
  { name: "Silver Crystal", types: ["Crystal", "Equipment"] },
  { name: "Get a fully upgraded blaster", types: ["Blaster"] },
  { name: "Clear out all Sith Strongholds", types: ["Clear"] },
];
bingoList[8] = [
  { name: "21 base Charisma", types: ["Attribute"] },
  { name: "Kill a Zakkeg", types: ["Dxun", "Combat"] },
  { name: "Defeat Hanharr twice", types: ["Nar Shaddaa","Malachor"] },
  { name: "Kill the 2 big beasts", types: ["Onderon," "Malachor","Combat"] },
  { name: "Complete 40 quests, types: ["Quest","Challenge"] },
  { name: "Fully Repair HK-47", types: ["Party","HK","Quest"] },
  { name: "Repair the speeder on Nar Shaddaa", types: ["Nar Shaddaa"] },
  { name: "Spare  all jedi masters", types: ["Quest"] },  
];
bingoList[9] = [
  { name: "Fully upgraded lightsaber", types: ["lightsaber","Upgrade"] },
  { name: "Complete Freedon Nadd's Tomb without skipping it", types: ["Dxun","Tombs"] },
  { name: "Kill everyone in the Jekk Jekk Tarr", types: ["Nar Shaddaa"] },
  { name: "Find ships for all Nar Shaddaa refugees", types: ["Nar Shaddaa"] },
  { name: "Get to 30 computer use", types: ["Character","Skills"] },
  { name: "Get to 30 persuade", types: ["Character","Skills"] },
  { name: "Get to 30 security", types: ["Character","Skills"] },
  { name: "Get to 30 treat injury", types: ["Character","Skills"] },  
  { name: "Get to 30 awareness", types: ["Character","Skills"] },  
];
bingoList[10] = [
  { name: "Get to 30 demolitions", types: ["Character","Skills"] },
  { name: "Get to 30 repair", types: ["Character","Skills"] },  
  { name: "Get to 30 stealth", types: ["Character","Skills"] },
  { name: "Rescue the Ithorians from Czerka", types: ["Telos"] },  
  { name: "Romance with Visas", types: ["Party", "Gender"] },
  { name: "Side with Queen Talia on Onderon", types: ["Onderon"] },
  { name: "Side with General Vaklu", types: ["Onderon"] },
  { name: "Kill all generals on Onderon", types: ["Onderon"] },
];
bingoList[11] = [
  { name: "Qixoni Crystal", types: ["Crystal"] },
  { name: "Side with the protestors on Onderon", types: ["Onderon"] },
  { name: "Kill Kumus", types: ["Dxun"] },
  { name: "Kill all bounty hunters on Onderon", types: ["Onderon"] },
  { name: "Get the -T card", types: ["Pazaak"] },  
  { name: "Complete all of Samhan's requests", types: ["Telos"] },
  { name: "All Master-Level Blaster Feats", types: ["Character"] },
  { name: "All lightsaber crystal colors", types: ["Lightsaber"] },
];
bingoList[12] = [
  { name: "Download All Area Schematics on Telos Station", types: ["Telos"] },
  { name: "Have Bao-Dur unlock the sensors on Dantooine", types: ["Dantooine"] },  
  { name: "Learn the history of all the sith lords on Korriban", types: ["Korriban"] },
  { name: "Master Caution, Empathy, and Gear Head", types: ["Character"] },
  { name: "Learn all lightsaber forms", types: ["Forms"] },
  { name: "Get all party members", types: ["Party"] },
  { name: "Purchase a Store's Entire Inventory", types: ["Credits"] },
  { name: "Have 100,000 credits", types: ["Credits"] },  
];
bingoList[13] = [
  { name: "Break into the secret Manadlorian stash", types: ["Dxun"] },
  { name: "Break into the the locked door in the Sith Academy", types: ["Korriban"] },  
  { name: "Kill Master Vrook", types: ["Dantooine"] },
  { name: "Kill Master Zez Kai-El", types: ["Nar Shaddaa"] },
  { name: "Kill Master Kavar", types: ["Onderon"] },
  { name: "All 3 Force Immunity Feats", types: ["Character"] },  
  { name: "Discover Vash's Body on Korriban", types: ["Korriban"] },
  { name: "Change your mind about siding with the Settlers at Khoonda", types: ["Dantooine"] },
];
bingoList[14] = [
  { name: "Side with the Settlers at Khoonda", types: ["Dantooine"] },
  { name: "Save Joran", types: ["Dantooine"] },
  { name: "Kill Joran", types: ["Dantooine"] },
  { name: "One of All 4 Deadly Mines", types: [] },
  { name: "Purchase what Joran found in the Enclave", types: ["Dantooine"] },
  { name: "Force persuade the thugs to jump into the pit", types: ["Nar Shaddaa"] },
  { name: "Clear out the Kinrath Cave", types: ["Dantooine"] },  
  { name: "Steal the Kinrath Gland from the mercenary in the cave", types: ["Dantooine"] },
];
bingoList[15] = [
  { name: "Complete All 5 Taris Bounty Quests", types: ["Taris","Bounty"] },
  { name: "Complete \"Scout Hunt\"", types: ["Dxun"] },
  { name: "Sabotage Khoonda's defenses", types: ["Dantooine"] },
  { name: "Complete \"Ghosts to Rest\"", types: ["Dantooine"] },
  { name: "Turn in Samhan", types: ["Telos"] },
  { name: "Escort the Twilek to the exit of the Military Base", types: ["Telos"] },  
  { name: "Clear out G0-T0's Yacht", types: ["Nar Shaddaa"] },
  { name: "Learn about Atton's past", types: ["Atton"] },
];
bingoList[16] = [
  { name: "Strengthen Khoonda's defnese to its max", types: ["Dantooine"] },
  { name: "Kill the escaped criminals on Telos Surface", types: ["Telos"] },
  { name: "Find all the hidden stashes on Telos Surface", types: ["Telos"] },
  { name: "Complete \"Farm Equipment\"", types: ["Dantooine"] },
  { name: "Complete \"Chieftain in Need\"", types: ["Party"] },
  { name: "Clear out the Ravager", types: ["Ravager"] },
  { name: "250 Maximum Vitality", types: ["Character"] },
  { name: "Allow Visas into her chamber on the Ravager", types: ["Ravager"] },
];
bingoList[17] = [
  { name: "All Characters Use Blasters Only", types: ["Character","Restriction"] },
  { name: "Force Meditation", types: ["Power"] },
  { name: "Force Crush", types: ["Power"] },
  { name: "Free the beast on Onderon", types: ["Onderon"] },
  { name: "Give a starport visa to the mom and her children", types: ["Quest"] },
  { name: "Complete \"Mass Shadow Generator\"", types: ["Malachor] },
  { name: "250 Maximum Force Points", types: ["Character"] },
  { name: "Allow all the sith soldiers on board and then kill them all", types: ["Peragus"] },
];
bingoList[18] = [
  { name: "40 Points in All Skills", types: ["Character"] },
  { name: "Achieve Level 20", types: ["Character"] },
  { name: "Learn all Force Powers only obtained from party members", types: ["Force Power"] },
  { name: "Master Drain Force", types: ["Force Power"] },
  { name: "Precise Shot V", types: ["Feat"] },
  { name: "13 Unique Lightsaber Power Crystals", types: ["Crystal", "Collect"] },
  { name: "Master Duel Strike", types: ["Feat"] },
  { name: "At Least 25 in All Saves", types: ["Character"] },
];
bingoList[19] = [
  { name: "Clear out the Ravager", types: ["Ravager"] },
  { name: "Solari Crystal", types: ["Crystal"] },
  { name: "Kill all of G0-T0's assassins", types: ["Character"] },
  { name: "Resist the dark side pads in Freedon Nadd Tomb", types: ["Dxun] },
  { name: "Give into the dark side pads in Freedon Nadd Tomb", types: ["Dxun"] },
  { name: "Three Light Alignment-Restricted Items", types: ["AlignedItem"] },
  { name: "Five Alignment-Restricted Items", types: ["Tombs","AlignedItem"] },
  { name: "Clear out the Ebon Hawk of the Red Eclipse", types: ["Nar Shaddaa"] },
];
bingoList[20] = [
  { name: "Convince Talia to let Vaklu live", types: ["Onderon"] },
  { name: "Open the locked room in the palace", types: ["Onderon"] },
  { name: "Kill Darth Traya", types: ["Malachor"] },
  { name: "Verpine Prototype Shield", types: ["Armband","Verpine", "Leviathan"] },
  { name: "Convince Luxa to kill Doton Het with her Gamorreans" types: ["Telos"] },
  { name: "Convince Nallek to give his gun to you", types: ["Dantooine"] },  
  { name: "Return Akkere's Hydrospinner", types: ["Dantooine"] },
  { name: "Kill all Serroco thugs", types: ["Nar Shaddaa"] },  
];
bingoList[21] = [
  { name: "Attune your crystal 3 times", types: ["Kreia"] },
  { name: "Have Bao-Dur construct a lightsaber", types: ["Lightsaber","Bao-dur"] },
  { name: "Open the Rebuilt Jedi Enclave", types: ["Dantooine"] },
  { name: "Kill Nilhus, Sion, Malak, Revan and Traya", types: ["Bosses"] },
  { name: "Lie to Lootra's Wife that the way is clear", types: ["Dark Side"] },
  { name: "Reunite Lootra and his wife", types: ["Quest"] },
  { name: "Complete all refugee quests", types: ["Quest"] },
  { name: "Return IT-31 to the shop", types: ["Quest"] },    
];
bingoList[22] = [
  { name: "Have all party members be a jedi", types: ["Party"] },
  { name: "Sucessfully win the last Echani round", types: ["Leviathan", "Clear"] },
  { name: "10 different jedi robes", types: ["Robes"] },
  { name: "Fully repair the Ebon Hawk", types: ["Quests"] },  
  { name: "Level 5 Prestige Class", types: ["Character"] },
  { name: "1 of each grenade", types: [] },
  { name: "Proton Core from missile", types: ["Ravager"] },
  { name: "Kill 40 Unique Enemies", types: ["Bounty", "Bosses"] },
];
bingoList[23] = [
  { name: "Lie to Batono and then have him killed", types: ["Quests"] },
  { name: "Download the Oribital Drift Charts", types: ["Peragus"] },
  { name: "Complete all bounty quests", types: ["Credits", "Colors"] },
  { name: "6 Stealth Generators", types: ["Credits", "Collect", "Belts"] },
  { name: "Complete \"Jedi Entombed"\" ", types: ["Korriban"] },
  { name: "Kill everyone in the flop house", types: ["Nar Shaddaa"] },
  { name: "Have Manalore meet up with the manalorians on Nar Shaddaa", types: ["Nar Shaddaa"] },
  { name: "Re-orgnaize the Pylon order", types: [] },  
];
bingoList[24] = [
  { name: "Solve the mystery for the Bith scientist", types: ["Nar Shaddaa"] },
  { name: "Safely escort Batono", types: ["Character","Alignment","Bounty"] },
  { name: "CNS Strength Enhancer", types: ["Equipment"] },
  { name: "Complete \"Trouble with Cannoks"\", types: ["Dxun"] },
  { name: "Sith Power Gauntlets", types: ["Gloves"] },
  { name: "Get the MC's personal armband", types: ["Item"] },
  { name: "Manadalorian Power Shield", types: ["Item"] },
  { name: "Threaten Opo Chano", types: ["Quests"] },
];
bingoList[25] = [
  { name: "Heavy Armor Feat", types: ["Feat"] },
  { name: "Master Force Scream", types: ["Force Power"] },
  { name: "Master Force Body", types: ["Mandos", "Geno", "Bounty"] },
  { name: "Weapon Specilization in Melee Weapons", types: ["Feat"] },
  { name: "Lose Influence from Kreia 3 times", types: ["Kreia"] },
  { name: "Clear the Sith Tomb on Korriban", types: ["Korriban"] },
  { name: "Reach Malachor", types: [] },
  { name: "Stealth Run", types: ["Lehon"] },
];

$(function () { bingo(bingoList, 5, bingoListVersion); });
