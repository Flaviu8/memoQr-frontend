import React from 'react'
import { FooterContainer,ContactContainer, ContactContainerMain, Contacts , FindusContainerMain,FindusContainer, AboutContainer,LinksMain, NavigationLink } from './footer.style'
import PlacesIcon from "../../icons/places.svg"
import MailIcon from "../../icons/mail.svg"
import PhoneIcon from "../../icons/phone.svg"
import FacebookIcon from "../../icons/facebook.svg"
import InstagramIcon from "../../icons/instagram.svg"
import TwitterIcon from "../../icons/twitter.svg"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
        <ContactContainerMain>
            <h3>
                Contact
            </h3>
            <ContactContainer>
                <Contacts>
                <img src={PlacesIcon} alt="place-icon"/>
                <p>Str Salcâmilor nr 346</p>
                </Contacts>
                <Contacts>
                <img src={PhoneIcon} alt="phone-icon"/>
                <p>0754807466</p>
                </Contacts>
                <Contacts>
                <img src={MailIcon} alt="mail-icon"/>
                <p>hug.qr.space@gmail.com</p>
                </Contacts>
            </ContactContainer>
        </ContactContainerMain>
        <FindusContainerMain>
                <h3>
                    Găsește-ne 
                </h3>
                <FindusContainer>
                    <img src={FacebookIcon} alt="facebook"/>
                    <img src={TwitterIcon} alt="twitter"/>
                    <img src={InstagramIcon} alt="instagram"/>
                </FindusContainer>
            </FindusContainerMain>
            <LinksMain>
                <h3>
                    Linkuri utile
                </h3>
            <NavigationLink>
                            <NavLink to="/"> Acasă</NavLink>
                            <NavLink to="/despre"> Despre</NavLink>
                            <NavLink to="/contactează-ne">Contactează-ne</NavLink>
                            <NavLink to="/termeni">Termeni și condiții</NavLink>
                </NavigationLink>
            </LinksMain>
            <AboutContainer>
                <h3>Despre</h3>
                <p>	&#169;  2023 MemoQR . All Rights Reserved
                            Designed with ❤️ and 🧠</p>
            </AboutContainer>
    </FooterContainer>
  )
}

export default Footer;
