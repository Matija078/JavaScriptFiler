// Oppgave 1
//Lag en pilfunksjon uten parametere. Den skal skrive ut “Hello World” til konsollet. 
//Gjør etfunksjonskall som beviser at den virker.
const minfunfsjon1=()=>{
    console.log(`Hello World`)
}
minfunfsjon1();
// Oppgave 2
//Lag en pilfunksjon med en parameter. Funksjonen skal skrive ut parameteren til konsollet. Gjør 
//et funksjonskall som beviser at den virker.
//Kan du gjøre noe spesielt når funksjonen kun har en parameter?
let parameter="Den param funker";

const minfunfsjon2=(param)=>{
    console.log(param)
}
minfunfsjon2(parameter);
// Oppgave 3
//Lag en pilfunksjon med tre parametere. Funksjonen skal skrive ut alle parameterne til konsollet.
//Gjør et funksjonskall som beviser at den virker.
let paeam="Matija";
let paeam2="Ilja";
let paeam3="Johan";
const minfunfsjon3=(param,param2,param3)=>{
    console.log(param,param2,param3);
}
minfunfsjon3(paeam,paeam2,paeam3);
// Oppgave 4
//Lag en pilfunksjon som bruker rest operatøren. Skriv ut hele variabelen med ett kall.
//-Hvis du vil demonstrere at du er avansert kan du skrive ut innholdet i variabelen med en løkkeav 
//av eget valg

const minfunfsjon4 = (...args) => {
    console.log(...args);
};

minfunfsjon4("Matija", "Jovanovic", 18);
// Oppgave 5
//Vet du om noen praktiske forskjeller på pilfunksjoner og funksjoner som er definert med  
//nøkkelordet “function”. Skriv hva du vet.

// Pilfunksjon – også kalt fet pilfunksjon – er en ny funksjon introdusert som er en mer kortfattet syntaks for å skrive funksjonsuttrykk. 
// Mens både standard JavaScript-funksjoner og pilfunksjoner fungerer på samme måte, er det noen forskjeller mellom dem

//Syntaks
// Den første og mest åpenbare forskjellen mellom pilfunksjoner og vanlige funksjoner er deres syntaks. 
// Ikke bare ser de annerledes ut, men pilfunksjoner gir også en implisitt returstenografi og utelater parenteser rundt et enkelt argument.
// The arrow function example above allows to accomplish the same result with fewer lines of code and approximately half the typing.
// Curly brackets aren’t required if only one expression is present.

// Pilfunksjoner lagres i variabler​

// I likhet med tradisjonelle funksjonsuttrykk løftes ikke pilfunksjoner, og du kan derfor ikke kalle dem før du erklærer dem. 
// De er også alltid anonyme – det er ingen måte å navngi en pilfunksjon.
// Pilfunksjoner blir IKKE hoistet!​
// Du må deklarer OG initialisere før du bruker dem​.
// De kan dermed ikke skrives nederst i kodearket slik som god praksis er for vanlige funksjoner.

// Utførelseskontekst
// I motsetning til vanlige funksjoner har ikke pilfunksjoner sin egen "this".
// Inne i en vanlig funksjon er utførelseskonteksten (dvs. verdien av "this") dynamisk. 
// Dette betyr at verdien av "this" avhenger av hvordan funksjonen ble påkalt . 
// På den annen side definerer ikke en pilfunksjon sin egen utførelseskontekst. 
// Dette resulterer i at en pilfunksjon blir "this" løst leksikalt (dvs. omfanget der pilfunksjonen ble definert).

// JavaScript-funksjon
// En JavaScript-funksjon er en kodeblokk designet for å utføre en spesifikk oppgave.
// En JavaScript-funksjon utføres når "noe" påkaller den (kaller den).
// En JavaScript-funksjon er definert med funksjonsnøkkelordet, etterfulgt av et navn, etterfulgt av parenteser ().
// Funksjonsnavn kan inneholde bokstaver, tall, understreking og dollartegn (samme regler som variabler).
// Parentesene kan inkludere parameternavn atskilt med komma: (parameter1, parameter2, ...)
// Koden som skal utføres av funksjonen er plassert i krøllede parenteser: {}
// Funksjonsparametere er oppført innenfor parentesen () i funksjonsdefinisjonen.
// Funksjonsargumenter er verdiene som mottas av funksjonen når den påkalles.
// Inne i funksjonen oppfører argumentene (parameterne) seg som lokale variabler.

// Funksjonsanrop
// Koden inne i funksjonen vil kjøre når "noe" påkaller (kaller) funksjonen:
// Når en hendelse inntreffer (når en bruker klikker på en knapp)
// Når det påkalles (kalles) fra JavaScript-kode
// Automatisk (selv påkalt)

//Retteskjema for lærer
//Oppgave1
//Løsningen bruker pilsyntax og skriver utnevnte utskrift./2
//Løsningen har ingen mulighet for å bruke argumenter,/1
//Eller signaliserer at det ikke skal brukes argumenter./1
//Det er et funksjonskall som demonstrerer at funksjonen virker/1
//Oppgave2
//Oppgave2Løsningen bruker pilsyntax/1
//Løsningen har en parameter/1
//Du har vist at du kan bruke “den fancy” måten å lage en parameter/1
//Det er et funksjonskall som demonstrerer at funksjonen virker/1
//Oppgave3
//Løsningen bruker pilsyntax/1Løsningen har tre paramtere/1
//Alle tre parameterne blir skrevet ut./1
//Det er et funksjonskall som demonstrerer at funksjonen virker./1
//Oppgave4
//Løsningen bruker pilsyntax og skriver utsom påkrevet/1
//Utskrift med løkke/2
//Oppgave5
//Besvarelsen nevner nøkkelordet this og setterdet i sammenhengmed funksjoner som er definert med nøkkelordet ‘function’/2
//________________________________________
//                                      /18
