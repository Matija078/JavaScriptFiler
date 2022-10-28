// Oppgave 1
// Forklar hva som er hensikten med en funksjon.
//En JavaScript-funksjon er en kodeblokk designet for å utføre en bestemt oppgave.
//En JavaScript-funksjon utføres når "noe" påkaller den (kaller den).
// Oppgave 2
// a)	Lag en funksjon som skriver ut “Hello World!” til konsoll. Forklar de forskjellige delene av funksjonen. 
// Første er type function og etter på er naven av function og etter på to parentes og scoupe og etter på consol kog av function og sist kaller jeg function.
function Helloworld() {
    console.log("Hello world!")
}
Helloworld();
// b)	Hva er et funksjonskall?
//Funksjonskall er Helloworld();
// c)	Kall på funksjonen din!
Helloworld();
// Oppgave 3
// Forklar hva en parameter er. Hva er sammenhengen mellom parametere og argumenter, og hva er forskjellen?
//Funksjonsparametere er navnene som er oppført i funksjonsdefinisjonen.
//Function arguments are the real values passed to (and received by) the function.
// Begge er ringt i fuksjon.
function functionMedParameter1(text) {
    console.log(text)
}
// Oppgave 4
// Lag en funksjon med en parameter og som skriver ut den parameteren til konsoll.
function functionMedParameter1(text) {
    console.log(text)
}
Helloworld();
// Kall på funksjonen to ganger, en gang med argumentet “Min parameter er ” og en gang med et argument du finner på selv.
function MinParameterEr(Text1) {
    console.log(Text1)
}
MinParameterEr("Min parameter er ");
MinParameterEr("Mitt eget argument er")
// Oppgave 5
// Lag en funksjon med to parametere og som skriver ut begge parameterne som følger;
//  “Jeg fikk to parametere; [param1] og [param2]”
// Test funksjonen din
let param1 = "Matija";
let param2 = "Johan"
function functionMedParameter2(param1, param2) {
    console.log(param1, param2)
}
functionMedParameter2(param1, param2);
// Oppgave 6 
// Hva gjør nøkkelordet “return” i en funksjon?
//Returkommandoen fullfører utførelsen av funksjonen og spesifiserer verdien som skal returneres til funksjonsanroperen.
// Oppgave 7
// Lag en funksjon med to parametere. Sjekk om variablene er tall, og adder. Returnér så resultatet av addisjonen. 
// Test funksjonen din!
let a1 = 3
let a2 = 7
let b1 = 'a'
let b2 = 'b'
function minFunction(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        // Return the product of a and b
        return a + b
    } else {
        return "Parameters are not numbers"
    }
}

console.log(minFunction(a1, a2))
console.log(minFunction(b1, b2))
// Oppgave 8
// Hvis du skal lage en funksjon, men ikke vet helt hvor mange parametere en funksjonen trenger eller bør ha. Hva kan du gjøre da? Forklar med tekst hvordan du kan løse det, så lag en funksjon som kan ta mot så mange navn som noen orker å skrive, og så skrive dem ut. Test funksjonen.
//Først jeg er laget en funksjon som heter neven med  parameter rest som gir mange parameter som vi vil etterpå skrevet jeg consol.log(...rest) for å lage spred operetor.
//Til slutt kalte jeg den funksjonen også gir naven "Matija","Luka","Ivan" utskrift er Matija Luka Ivan

function neven(...rest) {
    console.log(rest);
}
neven("Matija", "Luka", "Ivan");
// forventet produksjon: 7
// Oppgave 9
// Rett oppgaven i henhold til retteskjema på neste side
// Retteskjema for lærer
// Oppgave 1  	Besvarelsen er forankret i minst to hovedpoenger				/2
// Oppgave 2  	Besvarelsen ‘dissekerer’ funksjonen i sine hoveddeler og forklarer hva
// som er hensikten med dem.							/5
// Oppgave 3  	Det er tydelig forklart hva som er skille mellom parametere og
// agumenter Besvarelsen viser tydelig at du har forstått forskjellen		/4
// Oppgave 4  	Løsningen er i henhold til oppgaven og testingen viser at den fungerer	/4
// Oppgave 5	Løsningen er i henhold til oppgaven og testingen viser at den fungerer	/4
// Oppgave 6	Besvarelsen kan redegjøre for hvordan koden vil oppføre seg ved return;
// 		-hvordan påvirker det et scope?
// 		-hvordan påvirker det koden rundt?						/6
// Oppgave 7	Løsningen har kun én utgang
// 		Testen demonsterer bruk av retur enten via variabel, eller via en
// 		Utskrift										/6
// Oppgave 8
// 		-den tekstlige forklaringen viser at du har en teoretisk forståelse av
// 		Hvordan du kan løse oppgaven, og hvilke begreper som er relevante	/4
// 		-den praktiske løsningen og testingen viser at du kan løse problemet
// 		med relevant funksjonalitet.							/4
// ________________________________________
// Total poengsum										/29
// ________________________________________
// Oppgave 10
// Oppgaven skal lagres som PDF og levers med følgende filnavn [ditt_navn]_variabler.pdf

























