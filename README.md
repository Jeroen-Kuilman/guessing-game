The Guessing game README
========================

Live Demo
---------

[Play the game here](https://jeroen-kuilman.github.io/guessing-game/)

Tech Stack
----------

-   HTML5
-   CSS3
-   JavaScript (ES6)

Nederlandse versie (ENGLISH VERSION BELOW)
------------------------------------------

### spelregels en features:

-   Het spel zelf is ontzettend simpel. Beweeg met je muis over de vakjes, totdat je het vakje vindt met het juiste nummer. Oftewel, raad het nummer. Oorspronkelijk was het een click-spelletje, maar ik heb dit veranderd naar een mouse-over-spelletje, omdat het de flow veel soepeler maakte.
-   In de sidebar zitten twee overzichten. De eerste zijn de stats van het huidige spel, en de tweede van alle gespeelde spellen. Ik heb dit in een slider gezet, zodat er optimaal gebruik wordt gemaakt van de ruimte.
-   Verder is er een "options"-knop, waarmee je je eigen aantal keuzeknoppen (choices) kunt instellen, evenals een eigen aantal keuzekansen (attempts).
-   Er is een checkbox (default=true) waarmee je kan aangeven of je de instellingen van het aantal keuzes wilt vasthouden. Dit werkt overigens niet voor het aantal kansen; deze worden by default gezet naar 40% van het aantal keuzesknoppen. Ik wou deze 2 instellingen niet laten afhangen van 1 knop, en ik ben er simpelweg niet aan toegekomen om een tweede toe te voegen.
-   Er is een hintknop, te bedienen met de knop zelf of door "z" op het toetsenbord in te drukken. Waarom "z"? Het is simpelweg een fijne plek voor een knop wanneer je met je andere hand je muis bedient. De hint geeft, wanneer het spel actief is, aan of je laatste keus te hoog of te laag was. Daarnaast zijn er nog wat alternatieve berichten mogelijk wanneer een hint niet logisch is. Voor en na het spel bijvoorbeeld.
-   Als laatste verschijnen er verschillende dynamische teksten die feedback geven op basis van het spel. Dit is mogelijk door het spelgebruik van game\_states. Bijvoorbeeld "WIN" of "LOSS". Aan de hand van deze states kan het spel dynamisch reageren op de acties van de spelers.

### Mijn motivatie, leerervaringen en verantwoording:

-   Ik heb dit spelletje gemaakt voornamelijk om mijn (vanilla) JavaScript-vaardigheden te testen (gemaakt in Visual Studio Code). De achterliggende gedachte van het spelletje is met opzet niet de meest complexe, want dat gaf mij de ruimte om verschillende aspecten van de taal te testen. Denk aan geavanceerde DOM-manipulatie, het structureren van code, refactoring. Het gaf mij ook het nodige praktijkinzicht in de scopestructuur, en hoe events zich door de DOM-tree bewegen.
-   Daarnaast waren het natuurlijk niet alleen JavaScript-oefeningen. De samenwerking tussen HTML, CSS en JavaScript had ik tot op heden nog niet op deze schaal gezien. Het was een kans om te werken aan mijn (semantische) HTML- en CSS-structurering EN ook een kans om echt CSS tot mijn voordeel in te zetten. Uiteraard is de CSS in dit spelletje niet zonder issues, deels doordat ik soms iets TE veel experimenteer, waardoor ik mijn eigen vaardigheden soms wat voorbijvlieg. Maar dat is natuurlijk ook het leerzame ervan.
-   Dit project is ook mijn eerste GitHub-project, en ondanks dat ik nog maar een fractie ervan heb gebruikt, zie ik er nu al het voordeel van in. Met Git was ik wel al langer bekend, maar het was tot heden nog bijzonder ongestructureerd. Over dit project heen is het goed zichtbaar hoe mijn Git-messages verbeterd zijn.
-   En uiteraard heb ik AI (Claude) ook benut, al was het wel altijd mijn intentie om zoveel mogelijk zelf te doen en daar heb ik mij ook aan gehouden. Een nuttige helper, maar het moet geen vibecoding worden. Als laatste: ik heb ervoor gekozen om dit spel volledig in het Engels te maken, simpelweg omdat eigenlijk alles wat ik leer ook in het Engels is.

### Wat zou ik de volgende keer anders doen?

-   Het eerste wat in mij opkomt, is mijn planning. Dat komt ook doordat ik van tevoren nog niet wist wat dit moest gaan worden. Maar zeker qua styling, helpt het enorm om een goed beeld te hebben van wat je wilt maken.
-   Daarnaast merk ik hoe belangrijk het is om vanuit de basis je code goed te structureren. Halverwege raakte ik eigenlijk verdwaald in mijn eigen code, wat tot een onnodig ingewikkeld refactorproces leidde. Dat kan natuurlijk deels worden voorkomen, door hier gedisciplineerder mee om te gaan. Na het refactoring, waren deze problemen grotendeels verholpen, waardoor ik relatief eenvoudig nieuwe dingen kon toevoegen, en makkelijker bugs kon oplossen, dus de waarde ervan heeft zich bewezen.
-   Als laatste merk ik dat ik nog heel erg inconsistent ben met namen geven. Zeker nu namen van elementen, classes, variabelen en meer tussen HTML, CSS en JavaScript moeten samenwerken, merk ik gewoon dat mijn huidige namen veel verwarring kunnen veroorzaken. Meer oefening en discipline nodig.

### Wat ik nog wil toevoegen in de toekomst / bugfixes:

Ondanks dat dit project grotendeels zijn doel heeft bereikt voor mij, zijn er nog een aantal aspecten die ik wil toevoegen. Bovenaan die lijst staat een feature waarmee een speler een "account" (in de meest simpele zin van het woord) kan aanmaken, zodat de stats per persoon worden bijgehouden. Eventueel, als dit een logische stap is, wil ik kijken of ik dit vanuit het Object-Oriented Programming (OOP) perspectief kan doen. Daarnaast zitten er nou eenmaal een aantal bugs nog in die in de toekomst mogelijk gefixt worden. De voornaamste: wanneer je de hintbutton klikt, vlak nadat de reset is geïnitieerd (voordat het nieuwe spel klaarstaat), dan breekt het volgende spel.

### Hoe download je het spel?

Download de zip (groene knop), houd de 3 files in dezelfde map, en open index.html (in de browser)

  

English version
---------------

### Game rules and features:

-   The game itself is incredibly simple in complexity. Move your mouse over the boxes until you find the box with the correct number. In other words, guess the number. Originally, it was a click game, but I changed this to a mouse-over game because it made the flow much smoother.
-   There are two overviews in the sidebar. The first shows the stats of the current game, and the second shows the stats of all played games. I have placed this in a slider so that the space is used optimally.
-   Furthermore, there is an "options" button, which allows you to set your own number of choice buttons, as well as your own number of attempts.
-   There is a checkbox (default=true) that lets you indicate whether you want to retain the settings for the number of choices. However, this does not work for the attempts; these are set by default to 40% of the number of choice buttons. I did not want these 2 settings to depend on a single button, and I simply never got around to adding a second one.
-   There is a hint button, which can be operated with the button itself or by pressing "z" on the keyboard. Why "z"? It is simply a convenient place for a button when you are operating your mouse with your other hand. When the game is active, the hint indicates whether your last choice was too high or too low. Additionally, there are some alternative messages possible when a hint is not logical. Before and after the game, for example.
-   Finally, various dynamic texts appear that provide feedback based on the game. This is made possible by the game's use of game\_states. For example, "WIN" or "LOSS". Based on these states, the game can react dynamically to the players' actions.

### My motivation, learning experiences, and justification:

-   I created this game primarily to test my (vanilla) JavaScript skills (made in Visual Studio Code). The underlying concept of the game is intentionally not the most complex, as this gave me the space to test various aspects of the language. Think of advanced DOM manipulation, structuring code, and refactoring. It also gave me the necessary practical insight into the scope structure and how events move through the DOM tree.
-   Furthermore, these were, of course, not just JavaScript exercises. I had not seen the collaboration between HTML, CSS, and JavaScript on this scale until now. It was an opportunity to work on my (semantic) HTML and CSS structuring AND also a chance to really put CSS to my advantage. Naturally, the CSS in this game is not without issues, partly because I sometimes experiment a little TOO much, causing me to occasionally overshoot my own skills. But that is, of course, also part of the educational aspect of it.
-   This project is also my first GitHub project, and although I have only used a fraction of it so far, I already see the benefit of it. I had been familiar with Git for quite some time, but until now it was particularly unstructured. Across this project, it is clearly visible how my Git messages have improved.
-   And naturally, I also utilized AI (Claude), although it was always my intention to do as much as possible myself, and I stuck to that. A useful helper, but it shouldn't turn into vibecoding. Finally: I chose to make this game entirely in English, simply because basically everything I learn is in English.

### What would I do differently next time?

-   The first thing that comes to mind is my planning. That is partly because I didn't know beforehand what this was going to become. But certainly in terms of styling, it helps enormously to have a clear picture of what you want to create.
-   Additionally, I notice how important it is to structure your code well from the ground up. Halfway through, I actually got lost in my own code, which led to an unnecessarily complicated refactoring process. Of course, that can be partly prevented by being more disciplined about it. After the refactoring, these problems were largely resolved, allowing me to add new things relatively easily and fix bugs more easily, so its value has been proven.
-   Finally, I notice that I am still very inconsistent with naming things. Especially now that names for elements, classes, variables, and more need to work together between HTML, CSS, and JavaScript, I simply notice that my current names can cause a lot of confusion. More practice and discipline needed.

### What I still want to add in the future / bug fixes:

Although this project has largely achieved its goal for me, there are still a number of aspects I want to add. At the top of that list is a feature that allows a player to create an "account" (in the simplest sense of the word), so that stats are tracked per person. Potentially, if this is a logical step, I want to see if I can do this from an Object-Oriented Programming (OOP) perspective. Additionally, there are simply a number of bugs that may still be fixed in the future. The main one: when you click the hint button right after the reset has been initiated (before the new game is ready), the next game breaks.

### How do you download the game?

Download the zip (green button), keep the 3 files in the same folder, and open index.html (in the browser)
