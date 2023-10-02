import React from 'react';
import { LocateUsContainer } from './maps.style';



    
const LocateUs  = () => {
    return (
      <LocateUsContainer>
          <iframe 
        
          id='map_iframe'
            title="maps-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAsEL_Q04AS5a7GGXZ0NjFvbSBpz5P8MSc
              &q=47.897852,22.960908">
        </iframe>
      </LocateUsContainer>
    );
  }
 

export default LocateUs