# Ponto Services — websiteconcept

Een statische websitepreview voor Ponto Services, met scrollgestuurde lichtanimatie in de homepage, navigatie, subpagina's en scroll reveals.

## Lokaal bekijken

Open `index.html` in de browser. Of start in deze map een eenvoudige lokale server:

```bash
python -m http.server 8000
```

Ga naar `http://localhost:8000/`.

## GitHub Pages publiceren

1. Maak op GitHub een nieuwe repository, bijvoorbeeld `ponto-services-preview`.
2. Upload de inhoud van deze map naar de root van de `main` branch (dus `index.html` in de root).
3. Ga naar **Settings → Pages** en kies **Deploy from a branch**, `main`, `/ (root)`.
4. De preview verschijnt op `https://<gebruikersnaam>.github.io/ponto-services-preview/` zodra Pages gepubliceerd is.

De website gebruikt relatieve paden en is geschikt voor een GitHub Pages projectsite.

## Structuur

- `index.html`: hoofd HTML en navigatiestructuur
- `assets/css/style.css`: vormgeving en animaties
- `assets/js/app.js`: pagina's en scrollinteracties
- `assets/images/`: de lokaal opgeslagen afbeeldingen en het logo

## Let op

- Dit is een **concept/preview**, niet zonder controle een productieversie.
- Een contactformulier kan een e-mailclient openen, maar heeft geen serverbackend.
- Beeldmateriaal en merkassets: controleer toestemming/rechten voordat je de repository openbaar publiceert.
- De oorspronkelijke projectscreenshots kunnen een lagere resolutie hebben dan de echte projectfotografie.
