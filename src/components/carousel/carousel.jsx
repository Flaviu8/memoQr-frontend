import Carousel from 'react-bootstrap/Carousel'
import  Banner  from "../../assets/slideshow1.png"
import present from "../../assets/present.mp4"

function CarouselSwiper() {



  return (
    <Carousel variant="dark">
      <Carousel.Item interval={100000}>
      <video src={present} autoPlay controls alt="present_video"/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000}>
      <img src={Banner} alt="banners"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSwiper;