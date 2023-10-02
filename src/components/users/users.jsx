import React from "react";
import { UsersMainContainer, ImagesContainer, ParagraphContainer, ImagesMainContainer, VideoMainContainer,VideoContainer, SwiperMainContainer, BiographyContainer } from "./users.style";
import SwiperSlides from "../swiper/swiper";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Users = () => {
    const [user, setUser] = React.useState([])
    const { id } = useParams();
    const [loading, setLoading] = React.useState(true)
   
    
    React.useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true)
            const response = await axios.get(`https://app-ab8d0f9a-3cea-43eb-a9e5-97eb4e13c3b9.cleverapps.io/user/${id}`);
            setUser(response.data)
            setLoading(false)
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, [id]);

      const filteredUsers = user.filter(item => item.id === id);

      if(loading) {
        return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
    }

    
    return (
        <UsersMainContainer>
            {filteredUsers.map((item, index) => {
                return (
                    <div  key={`child-${item.id}-${index}`}>
                            <ImagesMainContainer>
                                <BiographyContainer>
                                    <p>Anul Nașterii. {item.birthyear}</p>
                                    <p>Anul Decesului. {item.deathyear}</p>
                                    <h3>Biografie</h3>
                                    <p>{item.biography}</p>
                                </BiographyContainer>
                                <ImagesContainer>
                                    <img src={item.coverurl} alt="biography"/>
                                </ImagesContainer>
                            </ImagesMainContainer>
                            <VideoMainContainer >
                        <VideoContainer>
                            <video src={item.videourl} controls type="video/mp4" autoPlay/>
                        </VideoContainer>    
                            <ParagraphContainer>
                                <h4>Descriere</h4>
                                <p>{item.description}</p>
                            </ParagraphContainer>
                            </VideoMainContainer>
                            <SwiperMainContainer >
                                 <SwiperSlides />
                           </SwiperMainContainer> 
                </div>
                )
            })}
        </UsersMainContainer>
    )
}

export default Users