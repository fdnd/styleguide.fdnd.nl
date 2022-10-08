# FDND Living Styleguide

De FDND Living Styleguide biedt een serie *utility-classes* waarmee over alle FDND microsites grotendeels dezelfde stijl toegepast kan worden. We hebben gekozen voor [Vite](https://vitejs.dev/) omdat het een moderne snelle ontwikkelomgeving biedt welke met [PostCSS](https://postcss.org/) moderne CSS technieken beschikbaar maakt maar evengoed dicht bij standaard browser API’s blijft. Momenteel zijn we bezig met het verplaatsen van standaard-layout naar utility classes omdat we niet in elke site dezelfde layout willen toepassen.

## Gebruik

Pas de FDND Styleguide toe op een website door een link element met een verwijzing naar [fdnd.latest.css](https://styleguide.fdnd.nl/fdnd.latest.css) op te nemen in jouw project.

Om backwards compatible te blijven worden naast bovenstaande link ook verwijzingen naar specifieke releases gemaakt, hier een overzicht van de historie aan releases:

- [fdnd.latest.css](https://styleguide.fdnd.nl/fdnd.latest.css), laatste ontwikkelingen (unstable)
- [fdnd.css](https://styleguide.fdnd.nl/fdnd.css), initiële opzet (hier verwijzen oude(re) microsites naar)

## Ontwikkeling

Om de FDND styleguide te ontwikkelen is het niet per se nodig je helemaal in te lezen in [Vite](https://vitejs.dev/), je kunt met enig begrip van de bestandsstructuur, de ingestelde configuratie en drie commando’s prima bijdragen aan onze living styleguide. Hieronder worden alledrie deze dingen geadresseerd.

### Bestandsstructuur

De FDND styleguide heeft de volgende mappenstructuur:

```
.
├ docs
├ src
  ├ public
  └ assets  
    └ style
```

In de map `/docs` staan bestanden die door het commando `npm run build` worden gegenereerd. Alles wat je met de hand in deze map veranderd wordt zonder pardon overschreven als het commando wordt uitgevoerd. Dit is dus niet de plaats om te ontwikkelen.

In de map `/src` staan bestanden die als input worden gebruikt. Hier kan je dus ontwikkelen. De `.html` bestanden staan in `/vite.config.js` gelinkt als applicatiebestanden en worden *geparsed* door het build proces. 

Bestanden in de map `/src/public` zijn in de `.html` files te linken door te verwijzen naar `/`. Als er bijvoorbeeld een bestand in staat met de naam `img.svg` kan je hier vanuit `.html` bestanden naar verwijzen door `<img src=‘/img.svg’ />` te gebruiken. Bestanden in deze map worden direct gekopieerd naar de *output* map `/src` tijdens het *build-proces* en deze map is dan ook bedoeld voor statische bestanden.

N.B.: ook de statische, specifieke versies van de `.css` bestanden worden in de map `/src/public` geplaatst omdat deze na *versioning* niet meer aangepast worden. De conventie voor naamgeving van deze bestanden is `fdnd.v[versienummer].css`, bijvoorbeeld `fdnd.v1.css`.

In de map `src/assets/style` staan stylesheets. `fdnd.css` fungeert als *main*
bestand en alle andere bestanden met een underscore in de naam worden hierin geïmporteerd. Bij het *build-proces* krijgt het `.css` *output* bestand automatisch de naam `fdnd.latest.css`, microsites in het ontwikkelproces verwijzen naar https://styleguide.fdnd.nl/fdnd.latest.css en zullen dus direct na publicatie geüpdatet worden met de nieuwe aanpassingen.

### Configuratie

De configuratie van een op [Vite](https://vitejs.dev/) gebaseerd systeem is te vinden in het bestand `/vite.config.js`. Er zijn een aantal design-beslissingen genomen om de FDND Living Styleguide in te richten.

-   **root: 'src/'** om het overzicht te bewaren is gekozen om alle bronbestanden in de map `/src` te plaatsen
-   **css.postcss.postcssNesting** om native css nesting mogelijk te maken
-   **css.postcss.postcssVariables:** om uitgebreide css variabelen mogelijk te maken
-   **build.outDir: 'docs/'** om gh-pages op map niveau mogelijk te maken
-   **output.assetFileNames: '[name].latest.[ext]'** hashing uitgezet en pattern meegegeven om na de build te kunnen verwijzen naar `fdnd.latest.css`

## Develop, Build, Publish

Start een ontwikkelomgeving door `npm run dev` uit te voeren. Hiermee wordt door vite developmentomgeving met *hot module reloading* opgestart. Je kunt in je browser direct de aanpassingen aan code zien veranderen. Verander all dingen die je wilt veranderen en *deploy* vervolgens jouw aanpassingen door de stappen hieronder te volgen.

Als je tevreden bent met je aanpassingen en deze uitvoerig getest hebt voer je
`npm run build` uit om een nieuwe geoptimaliseerde versie van de website te
genereren. De nieuw gegenereerde versie en alle bijbehorende assets worden in
de `/docs` map geplaatst, deze wordt gebruikt voor GitHub pages. Het is aan te raden je aanpassingen ook nog eens vanuit de *build* te controleren, dat kan je doen door `npm run preview` uit te voeren.

NB: Voor het maken van een _release_ kopieer je het `fdnd.latest.css` bestand naar de `/src/public` map en vul je op de plek van *latest* de betreffende [Semantic Versioning](https://semver.org/spec/v2.0.0.html) releasecode in, zorg dat je dit netjes doet anders breek je websites!

Om te publiceren push je de nieuwe versie naar de live omgeving om jouw update door te voeren. Happy Coding!

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

Dit werk is gelicenseerd onder [GNU GPLv3](./LICENSE).
