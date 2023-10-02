import React from "react";
import { AboutMainContainer, AboutContent,  AboutTitle, AboutContentLeft, AboutContentRight, BreakLine } from "./about.style";
import OldPhoto from "../../assets/old picture.jpg"
import QRCode from "../../assets/qr-code.jpg"



const About = () => {
    return (
        <AboutMainContainer>
                     <AboutTitle>
                        <h2>DESPRE NOI</h2>
                     </AboutTitle>
                     <AboutContent>
                     <AboutContentLeft>
                        <img src={OldPhoto} alt="old-memories"/>
                        <img src={QRCode} alt="qr-code"/>
                    </AboutContentLeft>
                    <AboutContentRight>
                        <p>Bine ați venit la MemoQr, un site dedicat onorării persoanelor dragi care ne-au părăsit. Am creat acest site cu scopul de a ajuta familiile si prietenii să-și amintească mereu de cei dragi și să le păstreze amintirile vii.

                                Cu ajutorul tehnologiei QR, puteți accesa informații despre viața și biografia celui drag, precum fotografii, povestiri și amintiri personale, direct de pe smartphone sau tabletă. Acest lucru oferă o modalitate unică și accesibilă de a păstra amintirile celui drag mereu la îndemâna și de a le partaja cu cei dragi.

                                MemoQr se bazează pe o platforma sigură și ușor de utilizat, care va permite să vizualizați profilul celui drag cu informații, poze și alte materiale relevante. De asemenea, puteți adăuga și contribui cu informații la profilul celui drag, creând astfel o comunitate virtuală care să-l onoreze și să-i păstreze amintirile.

                                Suntem dedicați să oferim un serviciu de calitate și să susținem familiile prin această perioadă dificilă. Vă invităm să explorați site-ul nostru pentru a afla mai multe despre cum putem ajuta să onorați și să păstrați amintirile celui drag. </p>
                    </AboutContentRight>
                    </AboutContent>
                    <BreakLine></BreakLine>
        </AboutMainContainer>
    )
}


export default About