import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "../modal/photo-modal";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import axios from "axios";
import { useParams } from "react-router-dom";
import photo from "../../assets/picture.jpg"



export default function SwiperSlides(props) {
    const [modalShow, setModalShow] = useState(false);
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

    
    // const filteredUsers = user.find((item) => item.id === id);


  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        id="swiper-outside"
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
       >
          <div>
                    return (
                      <SwiperSlide>
                        <img src={photo} alt="user"/>
                        <Button variant="primary" id="launch_modal" onClick={() => setModalShow(true)}>
                          Vezi fotografia
                        </Button>
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} img={props.img} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={photo} alt="user"/>
                        <Button variant="primary" id="launch_modal" onClick={() => setModalShow(true)}>
                          Vezi fotografia
                        </Button>
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} img={props.img} />
                      </SwiperSlide>
                    );
        </div>
        {user ? <div></div> : null}
        {error ? <div></div> : null}    
      </Swiper>
    </>
  )
  
}