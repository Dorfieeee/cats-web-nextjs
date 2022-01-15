import React from "react";
import { PcScreen } from "./Section/PcScreen";
import { Komunita } from "./Section/Komunita";
import { GameIcons } from "./Section/GameIcons";

const year = new Date().getFullYear();

export default {
  cs: [
    {
      title: "My jsme",
      content: `... spolek hráčů a přátel s průměrným věkem 30-ti let z Česka a ze Slovenska, kteří se alespoň 2x týdně setkavají ke společným hrám a vzájemným utkáním. Jádro skupiny, kteří CATS založili, tvoří vojáci AČR. `,
      small: `Více než 30 členů @ ${year}`,
      image: <Komunita />
    },
    {
      title: "Od roku 2009",
      content: `... bojujeme bok po boku v herních titulech jako Call of Duty a
      Battlefield. Nedržíme se striktně jedné hry a s příchodem nových titulů se vždy snažíme vyhodnotit, zda-li má smysl migrovat. I v roce 2021 stále trváme na tom, že BF4 je nejvíce vyvážený z hlediska vizuálního a herního požitku.`,
      small: `Battlefield 4 @ ${year}`,
      image: <GameIcons />
    },
    {
      title: "Zejména hrajeme",
      content: `...  týmové módy jako RUSH a CONQUEST(ve větším zastoupení) zaměřené na pěchotu v Hardcore nastavení dle vlastních pravidel.`,
      small: `HC RUSH @ ${year}`,
      image: <PcScreen />
    }
  ],
  en: [
    {
      title: "We are",
      content: `... an association of players and friends with an average age of 30 from the Czech Republic and Slovakia, who meet at least twice a week for joint games and mutual matches. The core of the group that founded CATS consists of AČR soldiers, the Czech Army. `,
      small: `More than 30 members @ ${year}`,
      image: <Komunita />
    },
    {
      title: "Since 2009",
      content: `... we fight side by side in game titles like Call of Duty and
            Battlefield. We do not strictly adhere to one game, and with the advent of new titles, we always try to evaluate whether it makes sense to migrate. Even in 2021, we still insist that BF4 is the most balanced in terms of visual and gaming enjoyment. `,
      small: `Battlefield 4 @ ${year}`,
      image: <GameIcons />
    },
    {
      title: "We mainly play",
      content: `... RUSH team mode focused on infantry in Hardcore settings according to our own rules. And sometimes Conquest when a larger group of us meets. `,
      small: `HC RUSH @ ${year}`,
      image: <PcScreen />
    }
  ]
};
