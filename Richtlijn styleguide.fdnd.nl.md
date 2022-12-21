## Ontwikkeling

Om de FDND styleguide te ontwikkelen is het niet per se nodig je helemaal in te lezen in [Vite](https://vitejs.dev/), je kunt met enig begrip van de bestandsstructuur, de ingestelde configuratie en drie commando’s prima bijdragen aan onze living styleguide. Hieronder worden alledrie deze dingen geadresseerd.

Deze richtlijn is geschreven aan de hand van [CUBE](https://cube.fyi), een CSS methodologie. Als je bijdraagt aan de FDND Living styleguide is het aan te raden eerst [de CUBE documentatie](https://cube.fyi) te bestuderen.

## Mappenstructuur

De FDND styleguide heeft de volgende mappenstructuur:

```
.
├ docs
├ src
  ├ public
  └ assets  
    └ style
      ├ exceptions
      ├ blocks
      ├ compositions
      └ utilities
      
```

In de map `/docs` staan bestanden die door het commando `npm run build` worden gegenereerd. Alles wat je met de hand in deze map veranderd wordt zonder pardon overschreven als het commando wordt uitgevoerd. Dit is dus niet de plaats om te ontwikkelen.

In de map `/src` staan bestanden die als input worden gebruikt. Hier kan je dus ontwikkelen. De `.html` bestanden staan in `/vite.config.js` gelinkt als applicatiebestanden en worden *geparsed* door het build proces. 

Bestanden in de map `/src/public` zijn in de `.html` files te linken door te verwijzen naar `/`. Als er bijvoorbeeld een bestand in staat met de naam `img.svg` kan je hier vanuit `.html` bestanden naar verwijzen door `<img src=‘/img.svg’ />` te gebruiken. Bestanden in deze map worden direct gekopieerd naar de *output* map `/src` tijdens het *build-proces* en deze map is dan ook bedoeld voor statische bestanden.

N.B.: ook de statische, specifieke versies van de `.css` bestanden worden in de map `/src/public` geplaatst omdat deze na *versioning* niet meer aangepast worden. De conventie voor naamgeving van deze bestanden is `fdnd.v[versienummer].css`, bijvoorbeeld `fdnd.v1.css`.

### Stylesheets

In de map `src/assets/style` staan stylesheets (duh). `fdnd.css` fungeert als *main* bestand en alle andere bestanden met een underscore in de naam worden daar in geïmporteerd. Bij het *build-proces* krijgt het `.css` *output* bestand automatisch de naam `fdnd.latest.css`. Microsites in ontwikkeling verwijzen naar https://styleguide.fdnd.nl/fdnd.latest.css en zullen dus direct na publicatie geüpdatet worden met de nieuwe aanpassingen.

De mappen binnen `src/assets/style` volgen de [CUBE](https://cube.fyi) methodologie, hieronder wordt uitgelegd hoe deze bij FDND toegepast wordt.

#### Compositions

Per compositie wordt een apart bestand aangemaakt, de bestandsnaam **moet** beginnen met een *underscore* en bestanden mogen i) de naam van een site of ii) de naam van een layout krijgen. Bijvoorbeeld `_programma.css` of `_twaalfkolomsgrid.css`. Binnen het bestand wordt altijd een *css-class* met dezelfde naam als de bestandsnaam als hoofdelement voor css-nesting gebruikt, dit wordt door PostCSS @nest mogelijk gemaakt. In bovenstaande voorbeelden worden dat dus `.programma { … }` of `.twaalfkolomsgrid.css { ... }`.

Composities bieden:
- hoog-niveau flexibele (responsive) layouts
- bepalen hoe elementen met elkaar interacteren
- creëren consistente flow en ritme

Composities bieden geen:
- visuele zaken zoals kleur en lettertypen
- decoratieve zaken als schaduw en patronen
- pixel perfect layouts

#### Utilities

#### Blocks

#### Exceptions

