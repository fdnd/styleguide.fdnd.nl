# FDND Styleguide

Het is een styleguide voor FDND die gebruik maakt van [Parcel](https://parceljs.org/)!

## Ontwikkel

Start een ontwikkelomgeving door `npm start` uit te voeren. Hiermee wordt een
basic webserver op `localhost:1234` opgestart. Verander all dingen die je wilt
veranderen in de `/src` map en folder en _deploy_ jouw aanpassingen door de
stappen hieronder te volgen.

Omdat parcel automatisch [_transpiled_](https://parceljs.org/languages/css/#transpilation)
kan je alle hipstercss gebruiken die je wilt. Naast de standaardinstellingen is
de nieuwe [CSS nesting](https://parceljs.org/languages/css/#nesting) feature in
`package.json` aangezet zodat je ook daar alvast gebruik van kunt maken.

## Deploy

Als je tevreden bent met je aanpassingen en deze uitvoerig getest hebt voer je
`npm run build` uit om een nieuwe geoptimaliseerde versie van de website te
genereren. De nieuw gegenereerde versie en alle bijbehorende assets worden in
de `/docs` map geplaatst (voor GitHub pages). Zorg dat `fdnd.[release].css` naar de
zojuist door jou gegenereerde `index.[hash].css` file wijst door een soft link
aan te maken met het volgende commando:

```
$ ln -s index.[hash].css fdnd.[release].css
```

NB: Voor _release_ vul je de betreffende [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
releasecode in, zorg dat je dit netjes doet anders breek je websites!

Je kunt controleren of het linken gelukt is door in een editor de inhoud van
`fdnd.[release].css` te bekijken, als het gelukt is zie je hetzelfde als in
`index.[hash].css`. Tenslotte push je de nieuwe versie naar de live omgeving om
jouw update door te voeren.

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

Dit werk is gelicenseerd onder [GNU GPLv3](./LICENSE).
