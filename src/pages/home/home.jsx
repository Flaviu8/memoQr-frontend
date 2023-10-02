import React from "react";
import { useNavigate } from "react-router-dom";
import CarouselSwiper from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
import NavigationBar from "../../components/navbar/navbar";
import { HomeContainer, Banner, SubscribeContainer,SubscribeText, SubscribeButton, PriceContainer, TitleContainer, BreakLine } from "./home.style";


const Home = () => {
  
const navigate = useNavigate()

const handleNavigate = () => {
    navigate('/formular')
}

    return (
        <div>
            <NavigationBar/>
            <HomeContainer>
       
                <CarouselSwiper />
                <Banner>
                     <h1>Coduri QR pentru pietre funerare - Creează o amintire specială pentru cei dragi!</h1> 
                     <h2>Adaugă o notă personalizată la piatra funerară a celor dragi prin intermediul codurilor QR.</h2>
                     <p>Bun venit la serviciul nostru de coduri QR pentru pietre funerare, unde puteți crea o amintire specială pentru cei dragi prin intermediul unui cod QR unic. Este simplu și ușor să creați și să implementați un cod QR pe piatra funerară, permițându-vă să adăugați o notă personalizată la amintirea celor dragi. Fie că doriți să împărtășiți fotografii și videoclipuri sau să creați un album virtual de amintiri, codurile QR pentru pietre funerare oferă o modalitate simplă și eficientă de a vă onora amintirile celor dragi. Contactați-ne astăzi pentru a afla mai multe despre serviciile noastre de coduri QR pentru pietre funerare și pentru a crea o amintire specială pentru cei dragi.</p>
                </Banner>
                <div className="banners_container">
                <SubscribeContainer>
                    <TitleContainer>
                    <h3>Pachet QR Code pentru amintirea celor dragi + website inclus</h3>
                    </TitleContainer>
                    <SubscribeText>
                        <PriceContainer>
                            <h4>la doar 250 RON</h4>
                        </PriceContainer>
                    <ul>
                        <li>
                            Biografie
                        </li>
                        <li>
                            Descriere
                        </li>
                        <li>
                            Fotografii
                        </li>
                        <li>
                            Video
                        </li>
                    </ul>
                    </SubscribeText>
                    <SubscribeButton>
                        <button onClick={handleNavigate}>Comandă acum</button>
                    </SubscribeButton>
                </SubscribeContainer>
                <SubscribeContainer>
                    <TitleContainer>
                    <h3>Pachet QR Code pentru amintirea celor dragi + website inclus</h3>
                    </TitleContainer>
                    <SubscribeText>
                        <PriceContainer>
                            <h4>la doar 250 RON</h4>
                        </PriceContainer>
                    <ul>
                        <li>
                            Biografie
                        </li>
                        <li>
                            Descriere
                        </li>
                        <li>
                            Fotografii
                        </li>
                        <li>
                            Video
                        </li>
                    </ul>
                    </SubscribeText>
                    <SubscribeButton>
                        <button onClick={handleNavigate}>Comandă acum</button>
                    </SubscribeButton>
                </SubscribeContainer>
                <SubscribeContainer>
                    <TitleContainer>
                    <h3>Pachet QR Code pentru amintirea celor dragi + website inclus</h3>
                    </TitleContainer>
                    <SubscribeText>
                        <PriceContainer>
                            <h4>la doar 250 RON</h4>
                        </PriceContainer>
                    <ul>
                        <li>
                            Biografie
                        </li>
                        <li>
                            Descriere
                        </li>
                        <li>
                            Fotografii
                        </li>
                        <li>
                            Video
                        </li>
                    </ul>
                    </SubscribeText>
                    <SubscribeButton>
                        <button onClick={handleNavigate}>Comandă acum</button>
                    </SubscribeButton>
                </SubscribeContainer>
                </div>
                
                <BreakLine></BreakLine>
            </HomeContainer>
            <Footer />
        </div>
    )
}

export default Home;