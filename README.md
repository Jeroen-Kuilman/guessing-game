<h1>The Guessing game README</h1>

(ENGLISH VERSION BELOW)

<h3>spelregels en features:</h3>

<ul>
  <li>Het spel zelf is ontzettend simpel. Beweeg met je muis over de vakjes, totdat je het vakje vindt met het juiste nummer. Oftewel, raad het nummer. Oorspronkelijk was het een click-spelletje, maar ik heb dit veranderd naar een mouse-over-spelletje, omdat het de flow veel soepeler maakte.</li>

 <li>In de sidebar zitten twee overzichten. De eerste zijn de stats van het huidige spel, en de tweede van alle gespeelde spellen. Ik heb dit in een slider gezet, zodat er optimaal gebruik wordt gemaakt van de ruimte.</li>

 <li>Verder is er een "options"-knop, waarmee je je eigen aantal keuzeknoppen (choices) kunt instellen, evenals een eigen aantal keuzekansen (attempts).</li>

 <li>Er is een checkbox (default=true) waarmee je kan aangeven of je de instellingen van het aantal keuzes wilt vasthouden. Dit werkt overigens niet voor het aantal kansen; deze worden by default gezet naar 40% van het aantal keuzesknoppen. Ik wou deze 2 instellingen niet laten afhangen van 1 knop, en ik ben er simpelweg niet aan toegekomen om een tweede toe te voegen.</li>

 <li>Er is een hintknop, te bedienen met de knop zelf of door "z" op het toetsenbord in te drukken. Waarom "z"? Het is simpelweg een fijne plek voor een knop wanneer je met je andere hand je muis bedient. De hint geeft, wanneer het spel actief is, aan of je laatste keus te hoog of te laag was. Daarnaast zijn er nog wat alternatieve berichten mogelijk wanneer een hint niet logisch is. Voor en na het spel bijvoorbeeld.</li>

 <li>Als laatste verschijnen er verschillende dynamische teksten die feedback geven op basis van het spel. Dit is mogelijk door het spelgebruik van game_states. Bijvoorbeeld "WIN" of "LOSS". Aan de hand van deze states kan het spel dynamisch reageren op de acties van de spelers.</li>

</ul>

<h3>Mijn motivatie, leerervaringen, en verantwoording:</h3>

<p>Ik heb dit spelletje gemaakt voornamelijk om mijn (vanilla) JavaScript vaardigheden te testen (gemaakt in Visual Studio Code). De achterliggende gedachte van het spelletje is met opzet niet de meest complexe, want dat gaf mij de ruimte om verschillende aspecten van de taal te testen. Denk aan geavanceerde DOM-manipulatie, het structureren van code, refactoring. Het gaf mij ook het nodige praktijk inzicht in de scopestructuur, en hoe events zich door de DOM-Tree bewegen. Daarnaast was het natuurlijk niet alleen een JavaScript oefeningen. De samenwerking tussen HTML, CSS en JavaScript had ik tot op het heden nog niet op deze schaal gezien. Het was een kans om te werken aan mijn (semantic) HMTL en CSS structurering EN ook een kans om echt CSS tot mijn voordeel in te zetten. Uiteraard is de CSS in dit spelletje niet zonder issues, deels doordat ik soms iets TE veel experimenteer waardoor ik mijn eigen vaardigheden soms wat voorbij vlieg. Maar Dat is natuurlijk ook het leerzame ervarn. Dit project is ook mijn eerste Github project, en ondanks dat ik nog maar en fractie ervan heb gebruikt, zie ik er nu al het voordeel van in. Met Git was ik wel al langer bekend, maar het was tot het heden nog bijzonder ongestructureerd. Over dit project heen is het goed zichtbaar hoe mijn Git messages verbetert zijn. En uiteraard heb ik AI (claude) ook benut, al was het wel altijd mijn intentie om zoveel mogelijk zelf te doen en daar heb ik mij ook aan gehouden. Een nuttige helper, maar het moet geen vibecoding worden. Als laatste, ik heb ervoor gekozen om dit spel volledig in het Engels te maken, simpelweg omdat eigenlijk alles wat ik leer ook in het Engels is.</p>

<h3>Wat zou ik de volgende keer anders doen?</h3>

<p>Het eerste wat in mij opkomt, is mijn planning. Dat komt ook doordat ik van te voren nog niet wist wat dit moest gaan worden. Maar zeker qua styling, helpt het enorm om een goed beeld te hebben van wat je wilt maken. Daarnaast merk ik hoe belangrijk het is om vanuit de basis je code goed te structureren. Halverwege raakte ik eigenlijk verdwaalt in mijn eigen code, wat tot een onnodige ingewikkeld refactor process leidde. Dat kan natuurlijk deels worden voorkomen, door hier gedisciplineerder mee om te gaan. Na het refactoring, waren deze problemen grotendeels verholpen, waardoor ik relatief eenvoudig nieuwe dingen kon toevoegen, en makkelijker bugs kon oplossen, dus de waarde ervan heeft zich bewezen. Als laatste merk ik dat ik nog heel erg inconsistent ben met namen geven. Zeker nu namen van elementen, classes, variables en meer tussen HTML, CSS en JavaScript moeten samenwerken, merk ik gewoon dat mijn huidige namen veel verwarring kunnen veroorzaken. Meer oefening en discipline nodig.</p>

<h3>Wat ik nog wil toevoegen in de toekomst / bugfixes:</h3>

<p>Ondanks dat ik dit project grotendeels zijn doel heeft bereikt voor mij, zijn er nog een aantal aspecten die ik wil toevoegen. Bovenaan die lijst staat een feature waarmee een speler een "account" (in de meest simpele zin van het woord) kan aanmaken, zodat de stats per persoon worden bijgehouden. Eventueel, als dit een logische stap is, dan wil kijken of ik dit vanui het Object Oriented Programming (OOP) perspectief kan doen. Daarnaast zitten er nou eenmaal een aantal bugs nog in die in de toekomst mogelijk gefixt worden. De voornaamste: wanneer je de hint button klikt, vlak nadat de reset is geinitieerd (voordat het nieuwe spel klaar staat), dan breekt het volgende spel.</p>
