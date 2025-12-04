1. Grundläggande funktioner
1.1 Skapa funktioner
Skapa funktioner för följande matematiska operationer och testa dem i konsolen:
function add() {

};
function subtract() {

};
function multiply() {

};
function divide() {

};

1.2 Variabler för en operation
Skapa tre variabler:
let num1;
let operator;
let num2;

1.3 Operate-funktion
Skapa funktionen operate som:
function operate() {
tar en operator och två nummer
anropar motsvarande matematiska funktion
}

3. Funktionalitet
3.1 Uppdatera displayen
Skapa funktion som uppdaterar displayen när användaren klickar siffror
Spara värdet på displayen i en variabel

3.2 Genomför beräkningar
Spara första numret, operator och andra numret
Kör operate() när användaren trycker =
Uppdatera displayen med resultatet

4. Logik och edge-cases
4.1 Endast en operation åt gången
Exempel på korrekt funktion:
Ange tal (12)
Ange operator (+)
Ange tal (7)
Tryck en till operator (−) → evaluera 12+7, visa 19
Ange tal (1)
Tryck operator eller = → evaluera 19−1, visa 18

4.2 Rundning

Avrunda långa decimaler så displayen inte överflödar

4.3 Hantera dålig input
= innan all data är given → undvik problem
Clear ska rensa ALL data och starta om korrekt

4.4 Division med 0
Visa rolig feltext (t.ex ”Nope!”)
Får inte krascha kalkylatorn

4.5 Flera operator-tryck i rad
Evaluera inte om användaren trycker operator två gånger i rad
Endast senaste operatorn ska gälla

4.6 Ny input efter resultat
Om ett resultat visas och användaren trycker en siffra:
→ Rensa och starta ny uträkning
→ Inte lägga siffran bakom resultatet