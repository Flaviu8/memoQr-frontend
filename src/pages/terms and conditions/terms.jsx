import React from "react";
import { MainTermsPage, TermsPage, Title, BreakLine } from "./terms.style"



const Terms = () => {


    return (
        <MainTermsPage>
            <Title>
                <h3>Termeni și condiții</h3>
            </Title>
            <TermsPage>
                     <h3>Definirea termenilor:</h3>
                    <p>a. "Site-ul" se referă la website-ul care oferă coduri QR pentru memoria persoanelor dragi.</p>
                    <p>b. "Utilizator" se referă la orice persoană care accesează sau utilizează Site-ul.</p>
                    <p>c. "Cod QR" se referă la codul scannabil care conține informații despre o persoană decedată.</p>

                    <h3>Termeni și condiții generale:</h3>
                    <p>a. Prin accesarea sau utilizarea Site-ului, Utilizatorul acceptă să fie supus prezentului acord de Termeni și Condiții.</p>
                    <p>b. Site-ul își rezervă dreptul de a modifica acest acord în orice moment, fără nicio notificare prealabilă către Utilizator. Continuarea utilizării Site-ului de către Utilizator după modificări constituie acceptarea acestor modificări.</p>
                    <p>c. Site-ul nu poate garanta disponibilitatea continuă a Site-ului sau a informațiilor conținute în acesta.</p>

                    <h3>Folosirea codurilor QR:</h3>
                    <p>a. Utilizatorul poate crea un cod QR pentru o persoană decedată prin completarea unui formular pe Site.</p>
                    <p>b. Site-ul nu este responsabil pentru verificarea sau autenticitatea informațiilor furnizate de către Utilizator în formularul de creare a codului QR.</p>
                    <p>c. Utilizatorul este singurul responsabil pentru actualizarea informațiilor conținute în codul QR creat de el.</p>
                    <p>d. Site-ul nu poate fi considerat responsabil pentru orice pierdere sau daune cauzate prin utilizarea sau accesarea informațiilor conținute în codul QR.</p>
                    <h3>Probleme tehnice:</h3>
                    <p>a. Site-ul își dorește să ofere Utilizatorilor o experiență de utilizare fără probleme. Cu toate acestea, pot exista momente când Site-ul poate fi afectat de probleme tehnice care sunt în afara controlului său, cum ar fi întreruperi ale serverului sau probleme legate de conexiunea la internet.</p>
                    <p>b. Site-ul nu poate fi considerat responsabil pentru orice probleme tehnice care apar, inclusiv pentru problemele cauzate de furnizorul de găzduire a Site-ului sau de orice alți terți.</p>
                    <p>c. Site-ul va lua toate măsurile necesare pentru a remedia cât mai rapid posibil orice probleme tehnice și pentru a asigura o experiență de utilizare continuă pentru Utilizatori.</p>

                    <h3>Proprietatea intelectuală:</h3>
                    <p>a. Toate drepturile de autor și alte drepturi de proprietate intelectuală asupra Site-ului și informațiilor conținute în acesta sunt rezervate de către proprietarul Site-ului.</p>
                    <p>b. Utilizatorul nu poate reproduce, distribui, modifica, afișa sau utiliza în orice alt mod conținutul Site-ului fără permisiunea scrisă a proprietarului Site-ului.</p>
                    <p>c. Utilizatorul poate descărca și imprima conținutul Site-ului exclusiv pentru uz personal și nu poate utiliza conținutul într-un scop comercial sau în orice alt mod care ar putea prejudicia drepturile de proprietate intelectuală ale proprietarului Site-ului.</p>
                    <h3>Livrări:</h3>
                    <p>a. Site-ul va efectua livrarea codurilor QR către Utilizator în termen de 1-5 zile lucrătoare de la primirea comenzii.</p>
                    <p>b. Site-ul nu poate fi considerat responsabil pentru întârzieri sau erori de livrare cauzate de terți, cum ar fi serviciile de poștă sau curierat.</p>
                    <p>c. Utilizatorul poate verifica starea livrării prin intermediul informațiilor oferite de către Site sau prin intermediul serviciilor de poștă sau curierat.</p>
            </TermsPage>
            <BreakLine></BreakLine>
        </MainTermsPage>
    )
}

export default Terms;