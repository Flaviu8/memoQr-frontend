import React from "react";
import {Title, UsersMainContainer, ImagesContainer, ParagraphContainer, ImagesMainContainer, VideoMainContainer,VideoContainer, SwiperMainContainer, BiographyContainer } from "./demo.style";
import SwiperSlides from "../../components/swiper/swiper";
import {  useNavigate } from "react-router-dom";
import Mountain from "../../assets/mountain.jpg"
import axios from "axios";
import { useParams } from "react-router-dom";
import present from "../../assets/present.mp4"

const Demo = () => {

    const navigate = useNavigate()

    const goToPaymentForm = () =>{
        navigate('/formular')
    }


    const [user, setUser] = React.useState([])
    const [error, setError] = React.useState([])
    const { id } = useParams();
  


    

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://app-ab8d0f9a-3cea-43eb-a9e5-97eb4e13c3b9.cleverapps.io/user/${id}`);
          setUser(response.data)
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, [id]);

    
    // const filteredUsers = user.filter((item) => item.id === "ea4251d2-5cd1-4451-aecb-bd8855ac4bfc");

console.log(user)
    return (
        <UsersMainContainer>
            <Title>
                    <h1>Pagina este în varianta demo, pentru a depune o comandă da-ți click pe butonul de mai jos.</h1>
                    <button onClick={goToPaymentForm}>Click aici</button>
            </Title>
            <ImagesMainContainer>
                <BiographyContainer>
                    <p>Anul nașterii. 1920</p>
                    <p>Anul decesului. 2000</p>
                    <h2>Biografie</h2>
                    <p style={{marginTop: "2em"}}>Pozele din imagine sunt cu titlu de prezentare, pentru fotografia de copertă e recomandat să încărcați poze tip landscape în loc de poze portret.</p>
                </BiographyContainer>
                <ImagesContainer>
                    <img src={Mountain} alt="biography"/>
                </ImagesContainer>
            </ImagesMainContainer>
                       <VideoMainContainer>
                       <VideoContainer>
                           <video src={present} controls type="mp4" autoPlay/>
                       </VideoContainer>    
                           <ParagraphContainer>
                               <h3>Descriere</h3>
                               <p>
                                   You’ll be posting loads of 
                                   engaging content, so be 
                                   sure to keep your blog organized 
                                   with Categories that also allow 
                                   readers to explore more of what 
                                   interests them. Each category of
                                   your blog has its own page that’s 
                                   fully customizable. Add a catchy title, 
                                   a brief description and a beautiful image 
                                   to the category page header to truly make it your own. You can also add tags 
                                   (#vacation #dream #summer) throughout your posts to reach more people, and help readers search 
                                   for relevant content. Using hashtags can expand your post reach and help people find the content that
                                   matters to them. Go ahead, #hashtag away.</p>
                           </ParagraphContainer>
                           </VideoMainContainer>
     
            <SwiperMainContainer>
                <SwiperSlides />
                {error ? <div></div> : ""}
            </SwiperMainContainer>
        </UsersMainContainer>
    )
}

export default Demo