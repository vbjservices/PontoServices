
const img={hero:'assets/images/image-02.jpg',bedroom:'assets/images/image-03.jpg',bathroom:'assets/images/image-04.jpg',living:'assets/images/image-05.jpg',p1:'assets/images/image-06.jpg',p2:'assets/images/image-07.jpg',p3:'assets/images/image-08.jpg'};
const privateServices=[{id:'aanbouw',title:'Aan- en uitbouw',short:'Meer leefruimte, volledig afgestemd op uw woning.',pic:'living',text:'Een aanbouw creëert een nieuwe ruimte; een uitbouw vergroot een bestaande ruimte. Wij begeleiden de stappen van ontwerp en vergunning tot afwerking.'},{id:'renovatie',title:'Renovatie',short:'Uw huis volledig vernieuwd, van keuken tot badkamer.',pic:'bedroom',text:'Een complete woningrenovatie vraagt om een goede planning en aandacht voor materialen en afwerking. Wij verzorgen het hele traject.'},{id:'opbouw',title:'Opbouw',short:'Meer ruimte door het uitbreiden van uw woning in de hoogte.',pic:'p3',text:'Ontdek de mogelijkheden om uw woning met een extra verdieping uit te breiden en welke bouwkundige voorbereiding daarvoor nodig is.'}];
const bizServices=[{id:'horeca',title:'Horeca',short:'Een uitnodigende en functionele horecaruimte.',pic:'p3',text:'Voor zakelijke renovaties van horecapanden staan een heldere planning, een praktische indeling en afwerking centraal.'},{id:'hotel',title:'Hotel',short:'Een hoogwaardige beleving voor uw gasten.',pic:'bedroom',text:'Van gastenkamers tot gemeenschappelijke ruimtes: renovaties passend bij de behoeften van uw onderneming.'},{id:'kantoor',title:'Kantoor',short:'Een professionele, prettige werkplek.',pic:'living',text:'Een werkomgeving die functioneel is en aansluit bij het gebruik en de uitstraling van uw organisatie.'},{id:'winkel',title:'Winkel',short:'Een ruimte die past bij uw merk.',pic:'bathroom',text:'Winkelverbouwingen waarin het gebruik, de routing en de afwerking samenkomen.'}];
const projects=[{title:'Project Amsterdam Zuid',subtitle:'Totale renovatie met uitbouw',pic:'p1',group:'particulier',text:'Een complete transformatie waarbij ontwerp, materiaalkeuze en een stijlvolle uitbouw samenkomen. Ponto Services verzorgde ook de tuin.'},{title:'Project serre Amsterdam',subtitle:'Aan- en uitbouw',pic:'p2',group:'particulier',text:'Een uitbreiding van de leefruimte. Bekijk op de officiële website de volledige projectinformatie.'},{title:'Project brasserie Amsterdam',subtitle:'Zakelijke verbouwing',pic:'p3',group:'zakelijk',text:'Een zakelijk project. Bekijk op de officiële website de volledige projectinformatie.'}];
const reviews=[['Michael en Kristin','Ponto Services verbouwde onze badkamer en keuken volledig, inclusief het verplaatsen van een muur, nieuwe leidingen en het plaatsen van nieuwe kozijnen. We zijn erg blij met het resultaat en helemaal tevreden over het proces.'],['Familie Baker','We hebben een 300 jaar oud pakhuis wat een Rijksmonument is, dus behoorlijk wat uitdagingen bij de verbouwing, maar altijd goed kunnen communiceren met Levan, het team en iedereen op kantoor.'],['Bob Brandjes','Ponto Bouwservice heeft zeer goed werk afgeleverd, binnen de afgesproken termijn en voor een goede acceptabele prijs. Zeer prettige mensen om mee samen te werken.'],['Luuk Kroneberg','Levan en zijn mannen hebben zeer goed werk geleverd. In 2 weken onze hele badkamer gerenoveerd. Zeer aan te bevelen.']];
const steps=[['Aanvraag indienen','Vertel ons over uw plannen via telefoon of e-mail.'],['Wensen en budget bespreken','We bespreken de ambities, wensen en het beschikbare budget.'],['Kennismaking in onze showroom','Bekijk de mogelijkheden en bespreek uw voorkeuren.'],['Aanbetaling en werktekeningen','We werken de tekeningen en eventuele vergunningen verder uit.'],['VR-ervaring en 3D-visualisatie','Beleef uw toekomstige ruimte in 3D.'],['Offerte en projectplanning','We stemmen de uitvoering en planning zorgvuldig af.'],['Start van de uitvoering','Onze vakmensen realiseren het project met een vaste contactpersoon.'],['Oplevering en garantie','We controleren samen het resultaat; vijf jaar bouwgarantie.']];
const app=document.getElementById('app');function b(label,page,outline=false){return `<button class="btn ${outline?'btn-outline':''}" onclick="go('${page}')">${label} <span>↗</span></button>`}function section(title,body,tag='PONTO SERVICES'){return `<div class="pagehead"><div class="wrap"><div class="eyebrow">${tag}</div><h1>${title}</h1><p>${body}</p></div></div>`}function pic(key,cls='photo'){return `<img class="${cls}" src="${img[key]}" alt="Foto afkomstig van de aangeleverde Ponto Services-websitescreenshot" loading="lazy">`}function card(x,page){return `<article class="feature reveal"><div class="photo-frame">${pic(x.pic,'')}</div><div class="inside"><h3>${x.title}</h3><p>${x.short||x.subtitle}</p><button style="background:none;padding:0" class="more" onclick="go('${page}')">Bekijk meer ↗</button></div></article>`}function cta(){return `<div class="cta-section"><div class="eyebrow" style="color:#ffcf4a">SAMEN UW IDEEËN REALISEREN</div><h2 class="h2">Plannen voor een verbouwing?</h2><p>We bespreken graag wat we voor uw project kunnen betekenen.</p>${b('Bespreek uw project','contact')}</div>`}
function home(){return `<div class="ponto-light-scene" aria-label="Keukeninterieur dat tijdens scrollen wordt verlicht"><div class="architect-hero lighting-hero" aria-label="Ponto Services — complete verbouwingen"><div class="lighting-stack"><img class="lighting-layer lighting-layer-1" src="assets/images/image-09.webp" alt="Keukeninterieur — lichtstand 1" fetchpriority="high" decoding="async"/><img class="lighting-layer lighting-layer-2" src="assets/images/image-10.webp" alt="Keukeninterieur — lichtstand 2" loading="eager" decoding="async"/><img class="lighting-layer lighting-layer-3" src="assets/images/image-11.webp" alt="Keukeninterieur — lichtstand 3" loading="eager" decoding="async"/></div><div class="architect-hero-shade"></div><div class="architect-hero-top"><span class="architect-hero-kicker"><span class="architect-line-dot"></span> PONTO SERVICES · AMSTERDAM</span></div><div class="architect-hero-bottom"><div class="architect-hero-header"><div><div class="architect-hero-overline">WONEN · VERBOUWEN · REALISEREN</div><h1>Ruimte voor<br><em>uw verhaal.</em></h1></div><div class="architect-hero-corner">MET AANDACHT GEBOUWD<br>MET VERTROUWEN BEGELEID</div></div><div class="architect-hero-rule"></div><div class="architect-hero-end"><div class="architect-hero-service"><span class="architect-small-label">OVER PONTO SERVICES</span><p>Complete renovaties, aan- en uitbouwen en dakopbouwen. Van eerste idee tot oplevering, met één vast aanspreekpunt.</p></div><div class="architect-hero-actions">${b('Bekijk onze projecten','projecten',true)}${b('Bespreek uw project','contact')}</div></div></div><div class="ponto-hero-story" aria-label="Waarom Ponto Services"><div class="ponto-story-inner"><div class="ponto-story-intro"><div class="eyebrow">PONTO SERVICES</div><h2>Van eerste schets tot <em>laatste detail.</em></h2><p>Uw woning of bedrijfsruimte verdient aandacht voor ieder detail. Wij verbinden bouwkundig vakmanschap met persoonlijk contact en een duidelijke werkwijze.</p><button class="ponto-story-link" onclick="go('werkwijze')">Ontdek onze werkwijze <span aria-hidden="true">↗</span></button></div><div class="ponto-story-stats" aria-label="Onze kernpunten"><div class="ponto-story-stat"><strong data-count-to="15" data-count-suffix="+">15+</strong><span>jaar ervaring</span></div><div class="ponto-story-stat"><strong data-count-to="5" data-count-suffix=" jaar">5 jaar</strong><span>bouwgarantie</span></div><div class="ponto-story-stat"><strong data-count-to="1" data-count-suffix="">1</strong><span>vast contactpersoon</span></div></div></div></div><button class="architect-scroll" onclick="document.getElementById('ponto-home-content')?.scrollIntoView({behavior:'smooth'})" aria-label="Scroll naar beneden"><span>SCROLL TO DISCOVER</span><span class="architect-scroll-arrow">↓</span></button></div></div><div id="ponto-home-content" class="ponto-after-hero-anchor"></div>
<section class="section home-editorial-section home-reason" data-home-section>
 <div class="wrap split home-reason-layout">
  <div class="home-motion home-image-enter" data-home-animate style="--home-delay:0ms"><div class="photo-frame">${pic('bedroom')}</div></div>
  <div class="home-reason-copy">
   <div class="eyebrow home-motion" data-home-animate style="--home-delay:100ms">WAAROM PONTO SERVICES?</div>
   <h2 class="h2 home-motion" data-home-animate style="--home-delay:180ms">Bouwen op vertrouwen.</h2>
   <p class="lead home-motion" data-home-animate style="--home-delay:270ms">Een ingrijpende verbouwing vraagt om overzicht, duidelijke afspraken en vakmensen die meedenken. Wij begeleiden woningverbouwingen, aanbouwen en zakelijke projecten in Noord-Holland en de regio Utrecht.</p>
   <div class="home-motion" data-home-animate style="--home-delay:360ms">${b('Onze diensten','particulier')}</div>
  </div>
 </div>
</section>
<section class="section band home-editorial-section home-projects" data-home-section>
 <div class="wrap">
  <div class="eyebrow home-motion" data-home-animate>ONS WERK</div>
  <h2 class="h2 home-motion" data-home-animate style="--home-delay:85ms">Projecten die voor zichzelf spreken.</h2>
  <p class="lead home-motion" data-home-animate style="--home-delay:160ms">Een selectie van projecten van Ponto Services.</p>
  <div class="grid home-project-grid">${projects.map((x,i)=>`<div class="home-motion home-project-motion" data-home-animate style="--home-delay:${i*150}ms">${card(x,'project-'+i)}</div>`).join('')}</div>
  <p class="home-photo-note home-motion" data-home-animate>De foto's zijn bijgesneden uit uw schermafbeelding van de oorspronkelijke website.</p>
  <div class="home-motion" data-home-animate>${b('Bekijk alle projecten','projecten')}</div>
 </div>
</section>
<section class="section home-editorial-section home-promises" data-home-section>
 <div class="wrap">
  <div style="text-align:center"><div class="eyebrow home-motion" data-home-animate>ONZE BELOFTE</div><h2 class="h2 home-motion" data-home-animate style="--home-delay:95ms">Uw project in goede handen.</h2></div>
  <div class="benefits">${[['✦','Vakkundig team'],['⌂','Prachtig Experience Center'],['▰','Ruime keuze in merken'],['✓','5 jaar bouwgarantie'],['♟','1 vast contactpersoon']].map((x,i)=>`<div class="home-motion home-benefit-motion" data-home-animate style="--home-delay:${i*115}ms"><div class="benefit"><div class="ic">${x[0]}</div><b>${x[1]}</b></div></div>`).join('')}</div>
 </div>
</section>
<section class="section band home-editorial-section home-about" data-home-section>
 <div class="wrap split">
  <div class="home-motion home-image-enter" data-home-animate><div class="photo-frame">${pic('bathroom')}</div></div>
  <div>
   <div class="eyebrow home-motion" data-home-animate>OVER ONS</div>
   <h2 class="h2 home-motion" data-home-animate style="--home-delay:100ms">Wie zijn wij?</h2>
   <p class="lead home-motion" data-home-animate style="--home-delay:185ms">Ponto Services is een Amsterdams aannemersbedrijf met ruim 15 jaar ervaring. We realiseren complete woningverbouwingen, aanbouwen, opbouwen en zakelijke ruimtes.</p>
   <div class="home-motion" data-home-animate style="--home-delay:260ms">${b('Leer ons kennen','over')}</div>
  </div>
 </div>
</section>
<section class="section home-editorial-section home-reviews" data-home-section>
 <div class="wrap">
  <div class="eyebrow home-motion" data-home-animate>ERVARINGEN</div>
  <h2 class="h2 home-motion" data-home-animate style="--home-delay:100ms">Wat onze klanten zeggen.</h2>
  <div class="reviews home-reviews-grid">${reviews.slice(0,2).map((r,i)=>`<div class="home-motion home-review-motion" data-home-animate style="--home-delay:${i*170}ms">${review(r,i)}</div>`).join('')}</div>
  <div class="home-motion" data-home-animate>${b('Bekijk alle reviews','reviews')}</div>
 </div>
</section>
<section class="cta-section home-editorial-section home-final-cta" data-home-section>
 <div class="wrap">
  <div class="eyebrow home-motion" data-home-animate style="color:#ffcf4a">SAMEN UW IDEEËN REALISEREN</div>
  <h2 class="h2 home-motion" data-home-animate style="--home-delay:110ms">Plannen voor een verbouwing?</h2>
  <p class="home-motion" data-home-animate style="--home-delay:210ms">We bespreken graag wat we voor uw project kunnen betekenen.</p>
  <div class="home-motion" data-home-animate style="--home-delay:300ms">${b('Bespreek uw project','contact')}</div>
 </div>
</section>`}function review(r,i=0){const tags=['Badkamer & keuken','Monumentale renovatie','Complete verbouwing','Badkamerrenovatie'];const meta=['Particulier project','Historisch pand','Binnen planning gerealiseerd','Aanbevolen door klant'];const initials=r[0].split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();return `<article class="review reveal rv-rise" style="--rv-delay:${i*90}ms"><div class="review-top"><div class="review-person"><div class="review-avatar">${initials}</div><div class="review-name"><strong>${r[0]}</strong><span class="review-role">Klantreview</span></div></div><span class="review-tag">${tags[i]||'Ponto Services'}</span></div><div class="stars">★★★★★</div><p>“${r[1]}”</p><div class="review-bottom"><span class="review-metric">${meta[i]||'Ervaring met Ponto Services'}</span><span class="review-score">Klantverhaal</span></div></article>`}function listing(items,title,description,tag){const commercial=tag==='ZAKELIJK';return section(title,description,tag)+`<section class="section editorial-intro"><div class="wrap editorial-grid"><div class="reveal rv-left"><div class="eyebrow">${commercial?'BOUWEN VOOR UW ONDERNEMING':'RUIMTE VOOR UW WOONWENSEN'}</div><h2 class="h2">${commercial?'Een bedrijfsruimte die voor u werkt.':'Uw woning, uw plannen.'}</h2><p class="editorial-lede">${commercial?'Van restaurant tot winkel: elke zakelijke ruimte heeft haar eigen gebruikseisen, uitstraling en planning. Daarom krijgt iedere dienst hieronder een eigen aanpak.':'Een nieuwe verdieping, meer leefruimte of een complete renovatie? Ontdek welke aanpak aansluit bij uw situatie en wat er bij de voorbereiding komt kijken.'}</p></div><div class="editorial-panel reveal rv-right"><span class="editorial-symbol" aria-hidden="true">✦</span><h3>${commercial?'Zakelijke specialisaties':'Particuliere mogelijkheden'}</h3><p>Persoonlijke begeleiding, heldere projectvoorbereiding en vijf jaar bouwgarantie zoals vermeld door Ponto Services.</p></div></div></section><section class="section band"><div class="wrap"><div class="eyebrow reveal">ONZE DIENSTEN</div><h2 class="h2 reveal">Kies uw type project.</h2><div class="grid">${items.map(x=>card(x,'detail-'+x.id)).join('')}</div></div></section><section class="section"><div class="wrap"><div class="eyebrow reveal">SAMENWERKEN</div><h2 class="h2 reveal">Van eerste gesprek tot oplevering.</h2><div class="flow-mini reveal">${['Wensen bespreken','Plan en ontwerp','Duidelijke offerte','Vakkundige uitvoering'].map((x,i)=>`<div>${x}</div>`).join('')}</div><div style="margin-top:25px">${b('Bekijk de volledige roadmap','werkwijze')}</div></div></section>`+cta()}
function projectPage(){return section('Onze projecten','Van renovaties tot aanbouwen en zakelijke verbouwingen. Ontdek een selectie van gerealiseerde projecten.','PORTFOLIO')+`<section class="section"><div class="wrap"><div class="filters"><button class="filter active" onclick="filterProjects('all',this)">Alles</button><button class="filter" onclick="filterProjects('particulier',this)">Particulier</button><button class="filter" onclick="filterProjects('zakelijk',this)">Zakelijk</button></div><div class="grid" id="project-grid">${projects.map((x,i)=>card(x,'project-'+i)).join('')}</div></div></section>`+cta()}
const extraDetails={
'aanbouw':{heading:'Meer leefruimte die bij uw woning past',intro:'Een aanbouw of uitbouw biedt ruimte voor bijvoorbeeld een grotere woonkamer of woonkeuken. Ponto Services begeleidt ontwerp, vergunning en afwerking en denkt mee over de indeling, materialen en uitstraling.',points:[['Ontwerp en indeling','De nieuwe ruimte moet logisch aansluiten op de bestaande woning.'],['Materiaal en gevel','Gevelindeling, bakstenen, kozijnen en beglazing bepalen mede het uiterlijk en de prijs.'],['Techniek en voorzieningen','Afhankelijk van het project worden elektra, water en gasvoorzieningen geïntegreerd.']],list:['Gemetselde spouwmuren als mogelijke uitvoering','Hardhouten of kunststof kozijnen','Dubbele beglazing','Planning en kosten per project bespreken']},
'renovatie':{heading:'Een vernieuwde woning, van kelder tot zolder',intro:'Een woning renovatie kan uiteenlopen van het vernieuwen van vloeren en kozijnen tot een complete herindeling, nieuwe keuken, badkamer of isolatie. Ponto Services begeleidt het volledige traject.',points:[['Nieuwe indeling','Ruimtes kunnen opnieuw worden ingedeeld om beter aan te sluiten bij de manier waarop u woont.'],['Keuken en badkamer','Ontwerp, sanitair en afwerking worden meegenomen in het renovatieplan.'],['Comfort en duurzaamheid','Denk aan isolatie, vloerverwarming en andere verbeteringen aan uw woning.']],list:['Vloeren, plafonds en kozijnen','Keuken- en badkamerrenovaties','Isolatie en vloerverwarming','Afstemming van planning en materiaalkeuzes']},
'opbouw':{heading:'Een extra verdieping, doordacht gerealiseerd',intro:'Met een dakopbouw ontstaat extra woonruimte. De bestaande constructie, vergunningen en de aansluiting op de architectuur vragen om een goede voorbereiding.',points:[['Constructie en draagkracht','Constructeurs beoordelen of het gebouw de uitbreiding kan dragen en of versterking nodig is.'],['Dakvorm en uitstraling','Een plat, schuin of groen dak biedt verschillende mogelijkheden voor indeling, uitstraling en comfort.'],['Vergunningen','Tekeningen, gemeentelijke voorwaarden en vergunningaanvragen worden vooraf besproken en voorbereid.']],list:['Constructieberekeningen en technische tekeningen','Afwerking die aansluit bij de woning','Isolatie en mogelijke energiebesparende oplossingen','Begeleiding van eventuele vergunningaanvragen']},
'horeca':{heading:'Horeca die werkt voor gast én ondernemer',intro:'Van casco tot complete afbouw van restaurants, cafés en andere horecazaken. De routing, bar, keuken en inrichting moeten samen een goed functionerende ruimte vormen.',points:[['Concept en indeling','Materialen, routing en uitstraling sluiten aan op uw horecaconcept.'],['Complete afbouw','Mogelijkheden voor vloeren, plafonds, bar, keuken en totaalrenovatie.'],['Planning en communicatie','Een efficiënte uitvoering is belangrijk om de periode tot heropening te beperken.']],list:['Casco, renovatie en afbouw','Praktische indeling voor gasten en personeel','Overleg over eventuele meerwerkzaamheden','Vrijblijvende kennismaking en prijsindicatie']},
'hotel':{heading:'Renoveren met aandacht voor uw gasten',intro:'Hotelverbouwingen vragen om een goede planning en zo min mogelijk hinder voor gasten en omgeving. Ponto Services adviseert over de beschikbare ruimte en uitvoering.',points:[['Gastbeleving','Ruimtes moeten comfortabel en uitnodigend blijven.'],['Beperkte overlast','De planning kan worden afgestemd op de hoteloperatie.'],['Ruimtebenutting','Slim omgaan met de bestaande indeling en technische mogelijkheden.']],list:['Renovatie van hotelkamers en algemene ruimtes','Aandacht voor routing en werkplanning','Afstemming over werkzaamheden en mogelijke hinder','Heldere afspraken over wijzigingen']},
'kantoor':{heading:'Een werkruimte die klaar is voor morgen',intro:'Ponto Services verzorgt kantoorrenovaties en -verbouwingen in en rond Amsterdam, met aandacht voor praktisch gebruik en de technische eisen van het gebouw.',points:[['Werkplek en indeling','Een functionele inrichting afgestemd op de activiteiten.'],['Isolatie en comfort','Waar nodig worden isolatiewaarden en gebouwcomfort meegenomen.'],['Projectaanpak','Heldere afstemming over planning en werkzaamheden.']],list:['Renovatie en uitbreiding van kantoorruimtes','Aandacht voor isolatie en afwerking','Voorbereiding en planning met één contactpersoon','Vakkundige uitvoering']},
'winkel':{heading:'Een winkelruimte die uw merk ondersteunt',intro:'Bij een winkelverbouwing draait het om een aantrekkelijke uitstraling en een praktische omgeving voor bezoekers en medewerkers.',points:[['Presentatie','Het interieur ondersteunt producten en merkuitstraling.'],['Routing','Een logische winkelindeling voor bezoekers en personeel.'],['Uitvoering','Materialen en afwerking worden afgestemd op gebruik en planning.']],list:['Renovatie van bestaande winkels','Afstemming over indeling en inrichting','Materialen en afwerkingskeuzes','Duidelijke projectcommunicatie']}};
const pageProfiles={
 aanbouw:{label:'EXTRA LEEFRUIMTE',statement:'Binnen en buiten laten samensmelten.',secondary:'p2',intro:'Of u nu de keuken wilt vergroten of een lichte zithoek wilt toevoegen: de overgang tussen oud en nieuw verdient aandacht. Ponto Services bespreekt de mogelijkheden voor de bestaande gevel, constructie, kozijnen en afwerking.',focus:['Aansluiting op de bestaande woning','Daglicht, glas en gevelafwerking','Constructie en eventuele vergunning'],note:'Een goed ontworpen uitbreiding voelt als een vanzelfsprekend onderdeel van uw woning.',steps:['Huidige situatie','Ontwerp en maatvoering','Technische uitwerking','Bouw en afwerking'],faq:[['Wat is het verschil tussen aan- en uitbouw?','Een aanbouw wordt vaak gebruikt voor een nieuwe ruimte aan de woning; een uitbouw vergroot een bestaande ruimte. De exacte uitvoering hangt af van het project.'],['Moet ik een vergunning aanvragen?','Dat is afhankelijk van de locatie, afmetingen en het gebouw. De voorwaarden en benodigde tekeningen moeten per project worden beoordeeld.']]},
 renovatie:{label:'COMPLETE WONINGRENOVATIE',statement:'Een woning die opnieuw bij u past.',secondary:'bathroom',intro:'Een complete renovatie kan de indeling, installaties en uitstraling van een woning veranderen. Van keuken en badkamer tot vloeren, isolatie en kozijnen: alle onderdelen worden in samenhang voorbereid.',focus:['Slimmer gebruik van bestaande ruimtes','Keukens, badkamers en maatwerk','Comfort, installaties en afwerking'],note:'Verschillende vakdisciplines worden samengebracht in één overzichtelijk renovatieplan.',steps:['Wensen en opname','Ontwerp en materialen','Planning van disciplines','Renovatie en oplevering'],faq:[['Kan ik mijn keuken en badkamer tegelijk aanpakken?','Ponto Services verzorgt complete verbouwingen, waaronder keuken- en badkamerrenovaties. De volgorde en planning worden per project afgestemd.'],['Hoe ontstaat een realistisch budget?','Bespreek werkzaamheden, materiaalkeuzes, eventuele stelposten en mogelijke wijzigingen vóór de uitvoering.']]},
 opbouw:{label:'UITBREIDEN IN DE HOOGTE',statement:'Meer woonruimte zonder extra grondoppervlak.',secondary:'p3',intro:'Een extra verdieping biedt ruimte voor bijvoorbeeld slaapkamers of een werkruimte. Bij een dakopbouw zijn de draagconstructie, dakvorm en gemeentelijke eisen bepalend voor het ontwerp.',focus:['Draagkracht en constructieberekening','Dakvorm, isolatie en lichtinval','Vergunningen en technische tekeningen'],note:'De constructieve haalbaarheid en aansluiting op de bestaande architectuur staan voorop.',steps:['Haalbaarheid','Constructieberekening','Vergunning en ontwerp','Opbouw en aansluiting'],faq:[['Kan elk dak een opbouw dragen?','Nee, de draagconstructie moet worden beoordeeld en kan aanpassingen nodig hebben.'],['Welke dakvorm is mogelijk?','Dat hangt af van constructie, gemeentelijke regels en de gewenste indeling.']]},
 horeca:{label:'HORECA & GASTBELEVING',statement:'Een zaak die werkt, vóór én achter de schermen.',secondary:'p3',intro:'Bij horeca gaat het niet alleen om uitstraling. Ook de routing voor gasten en personeel, een functionele keuken en een slimme verbouwplanning bepalen het eindresultaat. Ponto Services verzorgt projecten van casco tot afbouw.',focus:['Gast- en personeelsrouting','Bar, keuken, vloeren en plafonds','Planning richting heropening'],note:'Een efficiënt proces helpt de periode van sluiting of hinder te beperken.',steps:['Concept','Indeling en routing','Casco en installaties','Afbouw en inrichting'],faq:[['Kan de bestaande zaak tijdens de verbouwing openblijven?','Dat hangt af van de aard van de werkzaamheden en de veiligheid. Ponto Services stemt de planning af om overlast te beperken.'],['Zijn bar en keuken onderdeel van het project?','De officiële dienstenpagina noemt onder meer bar, keuken, vloeren en plafonds als mogelijke werkzaamheden.']]},
 hotel:{label:'HOTELRENOVATIE',statement:'Vernieuwen met respect voor de gast.',secondary:'bedroom',intro:'In een hotel lopen gasten, medewerkers en werkzaamheden soms naast elkaar. De planning moet rekening houden met comfort, bereikbaarheid en de continuïteit van de hoteloperatie.',focus:['Minimale hinder voor gasten','Efficiënt ruimtegebruik','Afstemming van fasering en uitvoering'],note:'Werkzaamheden worden waar mogelijk zo gepland dat de omgeving beperkt overlast ervaart.',steps:['Inventarisatie','Fasering','Renovatie per ruimte','Controle en oplevering'],faq:[['Kan een hotel tijdens de renovatie gasten ontvangen?','Ponto Services geeft aan werkzaamheden zo te kunnen organiseren dat gasten zo min mogelijk hinder ondervinden. Per situatie moet worden bekeken wat veilig en haalbaar is.'],['Wat is belangrijk bij hotelrenovatie?','Een heldere fasering, efficiënte inzet van beschikbare ruimte en zorgvuldige afstemming met de hoteloperatie.']]},
 kantoor:{label:'KANTOOR & WERKOMGEVING',statement:'Een ruimte die uw manier van werken ondersteunt.',secondary:'living',intro:'Een kantoor moet niet alleen representatief zijn, maar ook functioneel. Denk aan een slimme indeling, prettig comfort, technische voorzieningen en afwerking die aansluit op het dagelijkse gebruik.',focus:['Werkplekken en functionele zones','Comfort en isolatie','Installaties en afwerking'],note:'Een duidelijke fasering maakt de werkzaamheden inzichtelijk voor de organisatie.',steps:['Programma van eisen','Nieuwe indeling','Techniek en afwerking','Ingebruikname'],faq:[['Wat kan bij een kantoorverbouwing worden meegenomen?','Onder meer de indeling, afwerking, isolatie en gebouwtechnische aandachtspunten kunnen onderdeel zijn van de renovatie.'],['Is maatwerk mogelijk?','De aanpak wordt afgestemd op het gebruik van het pand en de wensen van de organisatie.']]},
 winkel:{label:'RETAIL & WINKELINRICHTING',statement:'Uw merk voelbaar maken in de winkelruimte.',secondary:'p1',intro:'Een winkelverbouwing moet de uitstraling van een merk versterken én bezoekers logisch door de ruimte leiden. Ponto Services noemt herinrichting, installaties, vloeren en plafonds als mogelijke onderdelen.',focus:['Presentatie van merk en producten','Logische klant- en personeelsrouting','Strakke planning en beperkte sluiting'],note:'Werkzaamheden worden efficiënt gepland om de winkel waar mogelijk snel te heropenen.',steps:['Merk en doelgroepen','Routing en presentatie','Verbouwing en installaties','Opening en oplevering'],faq:[['Hoe beperken we de sluitingsperiode?','Door werkzaamheden vooraf goed af te stemmen en efficiënt te plannen. De duur hangt af van de omvang van het project.'],['Kan ook een deel van de winkel worden verbouwd?','Ponto Services beschrijft zowel herinrichting als volledige winkelrenovaties. De exacte omvang wordt in overleg bepaald.']]}
};
function details(id){const x=[...privateServices,...bizServices].find(x=>x.id===id);if(!x)return home();const d=extraDetails[id],v=pageProfiles[id];const isBiz=bizServices.some(i=>i.id===id);
return section(x.title,x.short,isBiz?'ZAKELIJK · PONTO SERVICES':'PARTICULIER · PONTO SERVICES')+
`<section class="section editorial-intro"><div class="wrap editorial-grid"><div class="reveal rv-left"><div class="editorial-kicker">${v.label}</div><h2 class="h2 editorial-title">${v.statement}</h2><p class="editorial-lede">${v.intro}</p><div class="tag-list">${v.focus.map(t=>`<span>${t}</span>`).join('')}</div>${b('Bespreek uw project','contact')}</div><div class="photo-frame reveal rv-right">${pic(x.pic)}</div></div></section>
<section class="section band"><div class="wrap"><div class="eyebrow reveal">AANDACHTSPUNTEN</div><h2 class="h2 reveal">Wat maakt dit project bijzonder?</h2><div class="scope-grid">${d.points.map((a,i)=>`<article class="scope-item reveal ${i%2?'rv-soft':'rv-zoom'}"><span class="scope-symbol" aria-hidden="true">✦</span><h3>${a[0]}</h3><p>${a[1]}</p></article>`).join('')}</div></div></section>
<section class="section"><div class="wrap"><div class="detail-banner"><div class="detail-banner-copy reveal rv-left"><div class="eyebrow">DE AANPAK</div><h2>${d.heading}</h2><p class="lead">${v.note}</p><ul class="checklist">${d.list.map(t=>`<li>${t}</li>`).join('')}</ul></div><img class="banner-photo reveal rv-right" src="${img[v.secondary]}" alt="Ponto Services sfeerbeeld bij ${x.title}" loading="lazy"></div></div></section>
<section class="section band"><div class="wrap"><div class="eyebrow reveal">VAN IDEE NAAR UITVOERING</div><h2 class="h2 reveal">Een overzichtelijk traject.</h2><div class="flow-mini reveal rv-rise">${v.steps.map((t,i)=>`<div>${t}</div>`).join('')}</div><div style="margin-top:26px">${b('Onze complete roadmap','werkwijze')}</div></div></section>
<section class="section"><div class="wrap"><div class="eyebrow reveal">VEELGESTELDE VRAGEN</div><h2 class="h2 reveal">Goed om vooraf te weten.</h2><div class="mini-faq reveal rv-rise">${v.faq.map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('')}</div></div></section>`+cta()}
function projectDetail(id){const x=projects[id]||projects[0];const descriptions=[['Wonen & leefruimte','Een renovatie met uitbouw in Amsterdam Zuid, waarin de verbinding tussen bestaande woning en nieuwe leefruimte centraal staat.','Indeling, uitbouw en afwerking'],['Licht & verbinding','Een serre geeft extra leefruimte en versterkt het contact met buiten.','Daglicht, uitbreiding en ruimtelijkheid'],['Horeca & karakter','Een zakelijke verbouwing waarin uitstraling, gastbeleving en praktisch gebruik samenkomen.','Horecarouting, inrichting en afwerking']];const d=descriptions[id]||descriptions[0];return `<section class="section"><div class="wrap"><button class="breadcrumb" onclick="go('projecten')">← Terug naar projecten</button><div class="eyebrow">PROJECT · PONTO SERVICES</div><h1 class="h2">${x.title}</h1><p class="lead">${x.subtitle}</p><div class="photo-frame reveal rv-zoom"><img class="detailImg" src="${img[x.pic]}" alt="Projectfoto uit aangeleverd screenshot"></div><div class="editorial-grid" style="margin-top:50px"><div class="reveal rv-left"><div class="eyebrow">${d[0]}</div><h2 class="h2">${d[2]}</h2><p class="editorial-lede">${d[1]}</p><p class="lead">${x.text}</p></div><div class="editorial-panel reveal rv-right"><div class="eyebrow">PROJECTDOSSIER</div><h3>${x.title}</h3><p>Type: ${x.group==='zakelijk'?'Zakelijke renovatie':'Particuliere verbouwing'}</p><p>Regio: Amsterdam</p><p>Voor de definitieve site volgen hier de originele projectgalerij, concrete werkzaamheden en technische details.</p>${b('Vraag naar dit project','contact')}</div></div><p class="distinct-note">Projectfoto uit de aangeleverde screenshot. Aanvullende originele projectfoto's zijn nog niet beschikbaar.</p></div></section>`+cta()}
function process(){
 const phaseNames=['KENNISMAKING','ONTWERP','VOORBEREIDING','REALISATIE'];
 const phaseNotes=['Uw idee en uitgangspunten','Uw plannen krijgen vorm','Helderheid voor de start','Van bouwplaats tot thuis'];
 const icons=['✉','◎','⌂','✎','◈','▤','⚒','✓'];
 return section('Onze werkwijze','Van eerste aanvraag tot oplevering: acht duidelijke stappen, één vaste projectbegeleider en een zorgvuldig proces.','ZO WERKEN WIJ')+`<section class="section"><div class="wrap" style="max-width:1080px"><div class="eyebrow reveal rv-rise">DE ROUTE NAAR UW DROOMPROJECT</div><h2 class="h2 reveal rv-soft">Een pad dat we samen bewandelen.</h2><p class="lead reveal rv-rise">Scroll langs de acht haltes van uw verbouwing. Het pad volgt uw voortgang: iedere stap bouwt voort op de vorige.</p>
 <div class="journey-wrap" id="ponto-journey">
  <div class="journey-track" aria-hidden="true"><svg class="journey-svg" preserveAspectRatio="none"><path class="journey-baseline"/><path class="journey-progress"/></svg><div class="journey-traveler"><span>➤</span></div></div>
  ${steps.map((step,i)=>`<div class="journey-stop ${i%2===0?'journey-left':'journey-right'}" data-stop="${i}">
   ${i%2===0?`<div class="journey-content"><div class="journey-phase">FASE ${Math.floor(i/2)+1} · ${phaseNames[Math.floor(i/2)]}</div><div class="journey-card"><div class="journey-card-top"><span class="journey-number">${String(i+1).padStart(2,'0')}</span><span class="journey-icon">${icons[i]}</span></div><h3>${step[0]}</h3><p>${step[1]}</p></div></div><div class="journey-gap"></div>`:`<div class="journey-gap"></div><div class="journey-content"><div class="journey-phase journey-phase-sub">${phaseNotes[Math.floor(i/2)]}</div><div class="journey-card"><div class="journey-card-top"><span class="journey-number">${String(i+1).padStart(2,'0')}</span><span class="journey-icon">${icons[i]}</span></div><h3>${step[0]}</h3><p>${step[1]}</p></div></div>`}
   <div class="journey-waypoint" aria-hidden="true"><span></span></div>
  </div>`).join('')}
 </div>
 <div class="roadmap-summary reveal rv-zoom" style="margin-top:35px"><div><strong>Uw project, onze begeleiding</strong><p>Van intake tot oplevering heeft u één vaste projectbegeleider. Na oplevering geldt de aangeboden bouwgarantie van vijf jaar.</p></div>${b('Start uw aanvraag','contact')}</div></div></section>`+cta();
}
function about(){return section('Wie zijn wij?','Al meer dan 15 jaar werkt Ponto Services aan woningen en zakelijke ruimtes, met één aanspreekpunt gedurende het traject.','OVER PONTO SERVICES')+`<section class="section"><div class="wrap editorial-grid"><div class="reveal rv-left"><div class="eyebrow">ONS VERHAAL</div><h2 class="h2">Van een klein team tot een complete bouwpartner.</h2><p class="editorial-lede">Ponto Services begon met twee medewerkers en groeide uit tot een Amsterdams aannemersbedrijf dat samenwerkt met meer dan twintig professionals, intern en extern. Het uitgangspunt bleef gelijk: duidelijke afspraken, kwaliteit en persoonlijk contact.</p>${b('Ontdek hoe wij werken','werkwijze')}</div><div class="editorial-panel reveal rv-right"><span class="editorial-symbol" aria-hidden="true">✦</span><h3>Jaar bouwervaring</h3><p>Particuliere en zakelijke verbouwingen in Amsterdam, Noord-Holland en de regio Utrecht.</p><span class="editorial-symbol" aria-hidden="true">✦</span><h3>Vast aanspreekpunt</h3><p>Een projectbegeleider die de communicatie overzichtelijk houdt.</p></div></div></section><section class="section band"><div class="wrap"><div class="eyebrow reveal">MISSIE & VISIE</div><h2 class="h2 reveal">Goed bouwen begint met duidelijkheid.</h2><div class="scope-grid">${[['Vertrouwen','Bespreken wat u wilt bereiken, wat haalbaar is en hoe de aanpak eruitziet.'],['Vakmanschap','Aandacht voor de uitvoering, materialen en de details die er toe doen.'],['Toekomstgericht','Ruimtes die prettig blijven om in te wonen of te werken, met oog voor comfort en onderhoud.']].map((x,i)=>`<article class="scope-item reveal rv-zoom"><span class="scope-symbol" aria-hidden="true">✦</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section><section class="section"><div class="wrap detail-banner"><div class="detail-banner-copy reveal rv-left"><div class="eyebrow">ONZE BELOFTE</div><h2>Ontwerp, voorbereiding en uitvoering onder één dak.</h2><p class="lead">Van technische tekeningen en materiaalkeuzes tot afwerking en oplevering. Bezoek voor inspiratie ook het Experience Center.</p>${b('Bekijk het Experience Center','experience')}</div>${pic('bathroom','banner-photo reveal rv-right')}</div></section>`+cta()}
function experience(){const clusters=[['Keuken & koken','Keukens, apparatuur, werkbladen en kranen.','p1'],['Badkamer & afwerking','Sanitair, tegels en betonciré.','bathroom'],['Wonen & comfort','Hout, PVC, laminaat, verlichting en verwarming.','living'],['Deuren & kozijnen','Binnen- en buitenkozijnen in uiteenlopende uitvoeringen.','p2']];return section('Ons Experience Center','Materialen zien, afwerkingen vergelijken en uw ontwerp in VR-3D beleven.','SHOWROOM · AMSTERDAM')+`<section class="section"><div class="wrap editorial-grid"><div class="reveal rv-left"><div class="eyebrow">VAN IDEE NAAR BELEVING</div><h2 class="h2">Maak uw keuzes tastbaar.</h2><p class="editorial-lede">In het Experience Center ontdekt u verschillende materialen en afwerkingen. Met een 3D-presentatie en een VR-bril krijgt u vooraf een beeld van uw toekomstige ruimte.</p><div class="tag-list"><span>Materiaalkeuze</span><span>Interieurinspiratie</span><span>VR-3D</span></div>${b('Maak een afspraak','contact')}</div><div class="photo-frame reveal rv-right">${pic('bathroom')}</div></div></section><section class="section band"><div class="wrap"><div class="collection-title"><div><div class="eyebrow reveal">ONTDEK HET ASSORTIMENT</div><h2 class="h2 reveal">Van kranen tot kozijnen.</h2></div><p>Een overzicht van de productgroepen die Ponto Services op de officiële website noemt.</p></div><div class="scope-grid">${clusters.map((x,i)=>`<article class="scope-item reveal rv-zoom"><span class="scope-symbol" aria-hidden="true">✦</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></div></section><section class="section"><div class="wrap editorial-grid"><div class="editorial-panel reveal rv-left"><div class="eyebrow">BEZOEK OP AFSPRAAK</div><h3>Westhavenweg 61B</h3><p>1042 AL Amsterdam</p><p>Telefoon: +31 (0)20 33 480 83</p><p>De officiële website meldt dat aan een vernieuwde showroom wordt gewerkt. Informeer naar de actuele bezoekmogelijkheden.</p>${b('Neem contact op','contact')}</div><div class="reveal rv-right"><div class="eyebrow">VR-3D</div><h2 class="h2">Eerst beleven. Dan beslissen.</h2><p class="lead">Een virtuele presentatie helpt u bij het beoordelen van de indeling, uitstraling en materiaalcombinaties voordat de uitvoering begint.</p></div></div></section>`+cta()}
function contact(){return section('Neem contact met ons op','Vertel ons over uw project. Ponto Services denkt graag met u mee.','CONTACT')+`<section class="section"><div class="wrap contactcols"><div><h2 class="h2">We horen graag van u.</h2><p class="lead">Bij Ponto Services staat persoonlijk contact centraal. Neem rechtstreeks contact op via telefoon of e-mail, of stel een bericht op via het formulier.</p><p><b>⌖ Adres</b><br>Westhavenweg 61B, 1042 AL Amsterdam</p><p><b>☎ Telefoon</b><br><a href="tel:+31203348083">+31 (0)20 33 480 83</a></p><p><b>✉ E-mail</b><br><a href="mailto:info@pontoservices.nl">info@pontoservices.nl</a></p><p class="lead">Showroom op afspraak geopend op werkdagen van 07:00–16:00.</p></div><form class="contactform" onsubmit="sendEmail(event)"><h3 style="margin-top:0;color:var(--navy)">Uw aanvraag</h3><input id="name" required placeholder="Uw naam *"><input id="email" type="email" required placeholder="E-mailadres *"><input id="phone" placeholder="Telefoonnummer"><select id="subject"><option>Renovatie</option><option>Aan- en uitbouw</option><option>Opbouw</option><option>Zakelijke verbouwing</option><option>Andere vraag</option></select><textarea id="message" rows="5" required placeholder="Uw bericht *"></textarea><label><input type="checkbox" required>Ik ga akkoord met het verwerken van mijn gegevens voor deze aanvraag.</label><button class="btn" type="submit">Open mijn e-mailprogramma ↗</button><p style="font-size:11px;color:#777">Dit is een demoformulier. Het maakt alleen een e-mailconcept en verzendt zelf geen gegevens.</p></form></div></section>`}
let revealObserver;
function initReveals(scope){
 if(revealObserver)revealObserver.disconnect();
 const els=[...scope.querySelectorAll('.reveal')];
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const variants=['rv-rise','rv-fade','rv-zoom','rv-left','rv-right'];
 els.forEach((el,i)=>{
  el.classList.remove('visible',...variants,'rv-soft');
  let variant=variants[i%variants.length];
  if(el.classList.contains('photo-frame'))variant=i%2?'rv-right':'rv-left';
  else if(el.classList.contains('feature'))variant='rv-zoom';
  else if(el.classList.contains('benefit'))variant='rv-soft';
  else if(el.classList.contains('step'))variant=i%2?'rv-right':'rv-left';
  else if(el.classList.contains('review'))variant='rv-fade';
  else if(el.matches('.eyebrow,.lead,.editorial-lede'))variant='rv-fade';
  el.classList.add(variant);
  let group=el.parentElement;
  let siblings=[...group.children].filter(e=>e.classList.contains('reveal'));
  let slot=siblings.indexOf(el);
  el.style.setProperty('--rv-delay',(slot>=0?Math.min(slot,4)*105:0)+'ms');
 });
 if(reduced || !('IntersectionObserver' in window)){els.forEach(el=>el.classList.add('visible'));return}
 revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}})
 },{threshold:0.10,rootMargin:'0px 0px -24px 0px'});
 els.forEach(el=>revealObserver.observe(el));
}

let journeyCleanup=null;
function initRoadmapSequence(scope){
 if(journeyCleanup){journeyCleanup();journeyCleanup=null}
 document.body.classList.remove('js-flow');
 const wrap=scope.querySelector('#ponto-journey');if(!wrap)return;
 const svg=wrap.querySelector('.journey-svg'),base=wrap.querySelector('.journey-baseline'),progress=wrap.querySelector('.journey-progress'),traveler=wrap.querySelector('.journey-traveler');
 const stops=[...wrap.querySelectorAll('.journey-stop')];
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let length=0,coordinates=[],frame=0,active=true;
 if(!reduced)wrap.classList.add('journey-anim');
 function layout(){
  if(!active)return;
  const bounds=wrap.getBoundingClientRect(),w=wrap.clientWidth,h=wrap.offsetHeight;
  svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
  coordinates=stops.map((el,i)=>{
   const rect=el.getBoundingClientRect();
   return {x:w<=760?28:w/2+(i%2===0?-33:33),y:rect.top-bounds.top+rect.height/2};
  });
  let d='';
  for(let i=0;i<coordinates.length;i++){
   const p=coordinates[i];
   if(!i){d+=`M ${p.x} ${p.y}`;continue}
   const prev=coordinates[i-1],half=(prev.y+p.y)/2;
   d+=` C ${prev.x} ${half}, ${p.x} ${half}, ${p.x} ${p.y}`;
  }
  base.setAttribute('d',d);progress.setAttribute('d',d);
  length=progress.getTotalLength();
  progress.style.strokeDasharray=String(length);
  update();
 }
 function update(){
  if(!active||!length)return;
  const bounds=wrap.getBoundingClientRect();
  const viewportLine=window.innerHeight*.64;
  const current=viewportLine-bounds.top;
  const first=coordinates[0].y,last=coordinates[coordinates.length-1].y;
  const ratio=Math.max(0,Math.min(1,(current-first)/(last-first)));
  const drawn=length*ratio;
  progress.style.strokeDashoffset=String(length-drawn);
  if(reduced){progress.style.strokeDashoffset='0';traveler.style.opacity='0'}
  else{
   traveler.style.opacity=ratio>0&&ratio<1?'1':'0';
   const span=traveler.querySelector('span');
   const clamped=Math.max(0.1,Math.min(length-0.1,drawn));
   const pt=progress.getPointAtLength(clamped);
   const prev=progress.getPointAtLength(Math.max(0.1,clamped-2));
   const next=progress.getPointAtLength(Math.min(length-0.1,clamped+2));
   const angle=Math.atan2(next.y-prev.y,next.x-prev.x)*180/Math.PI;
   traveler.style.left=`${pt.x}px`;traveler.style.top=`${pt.y}px`;
   if(span) span.style.transform=`rotate(${angle}deg)`;
  }
  stops.forEach((el,i)=>{
   const passed=reduced||current>=coordinates[i].y;
   el.classList.toggle('passed',passed);
   el.classList.toggle('reached',reduced||current>=coordinates[i].y-110);
  });
 }
 function schedule(){if(frame)return;frame=requestAnimationFrame(()=>{frame=0;update()})}
 const ro=typeof ResizeObserver!=='undefined'?new ResizeObserver(()=>layout()):null;
 if(ro)ro.observe(wrap);
 window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',layout);
 layout();
 journeyCleanup=()=>{active=false;if(ro)ro.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',layout);if(frame)cancelAnimationFrame(frame)};
}

let scrollMotionCleanup=null;
function initScrollMotion(scope){
 if(scrollMotionCleanup){scrollMotionCleanup();scrollMotionCleanup=null}
 const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(prefersReduced || !('requestAnimationFrame' in window))return;
 const selectors=['.architect-hero-image','.photo-frame img','.detail-banner img','.split .photo','.banner-photo','.detailImg','.projectimg'];
 const images=[...new Set(selectors.flatMap(q=>[...scope.querySelectorAll(q)]))].filter(el=>el instanceof HTMLImageElement);
 images.forEach(el=>{
  el.classList.add('scroll-depth-image');
  const frame=el.closest('.photo-frame')||el.parentElement;
  if(frame && !frame.classList.contains('architect-hero'))frame.classList.add('scroll-depth-clip');
 });
 const headings=[...scope.querySelectorAll('.h2,.pagehead h1,.architect-intro-flex h2,.editorial-intro h2,.detail-banner h2')]
  .filter(el=>!el.closest('.hero')&&!el.closest('.roadmap-shell'));
 const textNodes=[];
 headings.forEach(el=>{
  // The additional inner span keeps existing fade/slide effects on the heading itself.
  if(el.querySelector('.scroll-text-inner'))return;
  const windowEl=document.createElement('span');windowEl.className='scroll-text-window';
  const inner=document.createElement('span');inner.className='scroll-text-inner';
  while(el.firstChild)inner.appendChild(el.firstChild);
  inner.style.setProperty('--text-shift','16px');inner.style.setProperty('--text-opacity','.28');inner.style.setProperty('--text-blur','2px');windowEl.appendChild(inner);el.appendChild(windowEl);textNodes.push({host:el,inner});
 });
 // Use progressive scroll position rather than discrete time-based text animations.
 let raf=0,active=true;
 function update(){
  raf=0;if(!active)return;
  const vh=window.innerHeight||800;
  images.forEach((el,i)=>{
   const frame=el.closest('.architect-hero')||el.parentElement;
   const r=frame.getBoundingClientRect();
   if(r.bottom< -120||r.top>vh+120)return;
   const center=r.top+r.height/2;
   const displacement=Math.max(-1,Math.min(1,(vh/2-center)/(vh/2+r.height/2)));
   const range=el.classList.contains('architect-hero-image')?155:Math.min(38,Math.max(16,r.height*.09));
   el.style.translate=`0px ${Math.round(displacement*range)}px`;
  });
  const hero=scope.querySelector('.architect-hero');
  const heroCopy=hero?.querySelector('.architect-hero-bottom');
  const heroTop=hero?.querySelector('.architect-hero-top');
  if(hero && heroCopy && !hero.closest('.ponto-light-scene')){
   const hr=hero.getBoundingClientRect();
   const portion=Math.max(0,Math.min(1,-hr.top/Math.max(1,hr.height)));
   // Text shifts more slowly than the page; image shifts faster, giving clear depth.
   heroCopy.style.translate=`0px ${Math.round(portion*-105)}px`;
   heroCopy.style.opacity=String(Math.max(.08,1-portion*.92));
   if(heroTop){heroTop.style.translate=`0px ${Math.round(portion*-50)}px`;heroTop.style.opacity=String(Math.max(0,1-portion*1.3))}
  }
  // Headings reveal once, no continuous wobble from scroll position.
  textNodes.forEach(({host,inner})=>{
   if(inner.dataset.revealed)return;
   const r=host.getBoundingClientRect();
   if(r.top<vh*.9 && r.bottom>0){
    inner.dataset.revealed='true';
    inner.style.setProperty('--text-shift','0px');
    inner.style.setProperty('--text-opacity','1');
    inner.style.setProperty('--text-blur','0px');
   }
  });
 }
 function schedule(){if(active&&!raf)raf=requestAnimationFrame(update)}
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule,{passive:true});
 update();
 scrollMotionCleanup=()=>{active=false;window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);if(raf)cancelAnimationFrame(raf)};
}



let lightingCleanup=null;
function initLightingScene(scope){
 if(lightingCleanup){lightingCleanup();lightingCleanup=null}
 const scene=scope.querySelector('.ponto-light-scene');
 if(!scene)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced)return;
 let raf=0,active=true;
 const clamp=x=>Math.max(0,Math.min(1,x));
 const smooth=x=>{x=clamp(x);return x*x*(3-2*x)};
 const update=()=>{
  raf=0;if(!active)return;
  const rect=scene.getBoundingClientRect();
  const distance=Math.max(1,scene.offsetHeight-window.innerHeight);
  const p=clamp(-rect.top/distance);
  // Frame 1: lights off; frame 2: partially lit; frame 3: lights fully on.
  const second=smooth(p/.27);
  const third=smooth((p-.24)/.31);
  scene.style.setProperty('--light-second',second.toFixed(4));
  scene.style.setProperty('--light-third',third.toFixed(4));
  scene.style.setProperty('--light-parallax-y',(-p*68).toFixed(1)+'px');
  scene.style.setProperty('--light-text-y',(-p*100).toFixed(1)+'px');
  scene.style.setProperty('--light-text-opacity',Math.max(.18,1-p*.8).toFixed(3));
  scene.style.setProperty('--light-kicker-opacity',(1-smooth((p-.18)/.36)).toFixed(3));
  scene.style.setProperty('--light-scroll-opacity',(1-smooth(p/.025)).toFixed(3));
  // Content stays on the same illuminated photograph; sections no longer interrupt the hero.
  const story=smooth((p-.29)/.22);
  const stats=smooth((p-.55)/.20);
  scene.style.setProperty('--ponto-story-opacity',story.toFixed(4));
  scene.style.setProperty('--ponto-story-y',((1-story)*85-Math.max(0,p-.58)*85).toFixed(1)+'px');
  scene.style.setProperty('--ponto-stats-opacity',stats.toFixed(4));
  scene.style.setProperty('--ponto-stats-y',((1-stats)*65-Math.max(0,p-.78)*55).toFixed(1)+'px');
  scene.querySelectorAll('[data-count-to]').forEach(el=>{const goal=Number(el.dataset.countTo);const t=smooth((p-.57)/.28);const value=Math.min(goal,Math.round(goal*t));const suffix=el.dataset.countSuffix||'';const str=value+suffix;if(el.textContent!==str)el.textContent=str});
  scene.style.setProperty('--light-text-opacity',Math.max(0,1-smooth((p-.08)/.23)).toFixed(3));
  const hint=scene.querySelector('.architect-scroll');
  if(hint)hint.style.pointerEvents=p>.005?'none':'auto';
 };
 const schedule=()=>{if(active&&!raf)raf=requestAnimationFrame(update)};
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule,{passive:true});
 update();
 lightingCleanup=()=>{active=false;window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);if(raf)cancelAnimationFrame(raf)};
}

function pontoSyncNavigation(page){
 const isHome=page==='home';
 document.body.classList.toggle('ponto-home',isHome);
 const nav=document.querySelector('header.nav');
 if(!nav)return;
 const update=()=>nav.classList.toggle('ponto-nav-scrolled',isHome && window.scrollY>65);
 update();
 if(!window.__pontoNavScrollBound){window.addEventListener('scroll',()=>{if(document.body.classList.contains('ponto-home'))document.querySelector('header.nav')?.classList.toggle('ponto-nav-scrolled',window.scrollY>65)},{passive:true});window.__pontoNavScrollBound=true}
}


let homeMotionCleanup=null;
function initHomeEditorialMotion(scope){
 if(homeMotionCleanup){homeMotionCleanup();homeMotionCleanup=null}
 const elements=[...scope.querySelectorAll('[data-home-animate]')];
 elements.forEach(el=>{if(el.matches('.eyebrow,.lead,.home-photo-note')||el.classList.contains('home-review-motion'))el.classList.add('home-fade')});
 if(!elements.length)return;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduced || !('IntersectionObserver' in window)){
  elements.forEach(el=>{el.classList.add('home-in-view');el.style.setProperty('--home-drift','0px')});
  return;
 }
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
   if(!entry.isIntersecting)continue;
   entry.target.classList.add('home-in-view');
   observer.unobserve(entry.target);
  }
 },{threshold:.12,rootMargin:'0px 0px -35px 0px'});
 elements.forEach(el=>observer.observe(el));
 homeMotionCleanup=()=>observer.disconnect();
}

function go(page){window.scrollTo({top:0,left:0,behavior:'instant'});let html;if(page==='home')html=home();else if(page==='particulier')html=listing(privateServices,'Onze particuliere diensten','Van een complete renovatie tot een aanbouw of extra verdieping.','PARTICULIER');else if(page==='zakelijk')html=listing(bizServices,'Zakelijke verbouwingen','Van horeca tot kantoor en retail: een passende ruimte voor uw organisatie.','ZAKELIJK');else if(page==='projecten')html=projectPage();else if(page==='werkwijze')html=process();else if(page==='over')html=about();else if(page==='experience')html=experience();else if(page==='reviews')html=section('Reviews van onze klanten','Ervaringen met Ponto Services en hun bouw- en renovatieprojecten.','KLANTERVARINGEN')+`<section class="section"><div class="wrap"><div class="review-feature reveal rv-zoom"><div class="review-feature-grid"><div><div class="eyebrow" style="color:#ffd45f">ERVARINGEN UIT DE PRAKTIJK</div><p>‘We zijn erg blij met het resultaat en helemaal tevreden over het proces.’</p><strong>— Michael en Kristin</strong></div><div class="review-showcase-aside"><span class="review-showcase-label">WAAR KLANTEN OVER VERTELLEN</span><div class="review-showcase-line">Persoonlijke begeleiding <span>↗</span></div><div class="review-showcase-line">Duidelijke communicatie <span>↗</span></div><div class="review-showcase-line">Zorgvuldige afwerking <span>↗</span></div></div></div></div><div class="review-intro"><div><div class="eyebrow reveal">KLANTVERHALEN</div><h2 class="h2 reveal">Wat opdrachtgevers waarderen.</h2><p class="lead reveal">Van heldere communicatie en planning tot vakwerk in de uitvoering: deze reacties geven een indruk van de samenwerking met Ponto Services.</p></div><aside class="review-note reveal rv-right"><div class="eyebrow">WAT OPVALT</div><h3>Terugkerende thema’s in de reviews</h3><ul><li>Duidelijke communicatie gedurende het traject</li><li>Tevredenheid over resultaat en afwerking</li><li>Waardering voor planning en samenwerking</li></ul></aside></div><div class="reviews">${reviews.map(review).join('')}</div></div></section>`+cta();else if(page==='contact')html=contact();else if(page.startsWith('detail-'))html=details(page.substring(7));else if(page.startsWith('project-'))html=projectDetail(Number(page.substring(8)));else html=home();app.innerHTML=`<div class="fade">${html}</div>`;document.querySelectorAll('[data-page]').forEach(el=>el.classList.toggle('active',el.dataset.page===page));document.getElementById('links').classList.remove('open');history.replaceState({},'',location.pathname+'#'+page);initReveals(app);initRoadmapSequence(app);initScrollMotion(app);initLightingScene(app);initHomeEditorialMotion(app);pontoSyncNavigation(page)}
function filterProjects(type,btn){document.querySelectorAll('.filter').forEach(e=>e.classList.remove('active'));btn.classList.add('active');document.getElementById('project-grid').innerHTML=projects.map((x,i)=>({x,i})).filter(o=>type==='all'||o.x.group===type).map(o=>card(o.x,'project-'+o.i)).join('');initReveals(document.getElementById('project-grid'))}
function sendEmail(e){e.preventDefault();const get=id=>document.getElementById(id).value;const subject=encodeURIComponent(get('subject')+' — '+get('name'));const body=encodeURIComponent('Naam: '+get('name')+'\nE-mail: '+get('email')+'\nTelefoon: '+get('phone')+'\n\n'+get('message'));window.location.href='mailto:info@pontoservices.nl?subject='+subject+'&body='+body}window.addEventListener('hashchange',()=>{let p=location.hash.slice(1);if(p)go(p)});go(location.hash.slice(1)||'home');
