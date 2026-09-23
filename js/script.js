// Husk fra dag 1: skriv "use strict" herunder
"use strict";

function tjekGratisService(brand, year) {

    // let, fordi værdien kan ændre sig nedenfor


    let harGratisService = false;

     if ((brand === `Volkswagen` || brand === `Skoda`) && (year> 2023) ) { 

        harGratisService = true;
        console.log(`${brand} fra ${year} får gratis service i 1 år.`);

} else {
    harGratisService = false;
    console.log(`${brand} fra ${year} får ikke gratis service.`);
}

}

// Volkswagen fra 2024 får gratis service i 1 år 
// Skoda fra 2020 får ikke gratis service 
// Tesla fra 2025 får ikke gratis service




    // Skriv if/else-strukturen selv herinde, ligesom i klasseøvelsen.
    //
    // Hvis (brand er "Volkswagen" ELLER brand er "Skoda") OG year er større end 2023, så:
    //   - sæt harGratisService til true 
    //   - log `${brand} fra ${year} får gratis service i 1 år.`
    // Ellers:
    //   - sæt harGratisService til false
    //   - log `${brand} fra ${year} får ikke gratis service.`



tjekGratisService(`Volkswagen`, 2024);
tjekGratisService(`Skoda`, 2020);
tjekGratisService(`Tesla`, 2025);

// Prøv selv (efter du har løst opgaven): ret "let harGratisService" til "const harGratisService"
// ovenfor, og kør koden igen. Se hvilken fejl du får i konsollen, og hvorfor - genkender du
// situationen fra klasseøvelsen? Ret den tilbage til "let", når du har set fejlen.
 
