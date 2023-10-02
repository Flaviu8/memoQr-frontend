import styled from "@emotion/styled";


export const UsersMainContainer = styled.div`
    background-color: #FEF2F0;
    height: 100vh;
    width: 100%;
   
`;

export const ImagesMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 2em;
    


    @media (max-width: 1600px) {
    /* width: 100%; */
  
  }


    @media (max-width: 1024px) {
    width: 100%;
   
  }


    @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    
  }

`;

export const ImagesContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        border-radius: 0.8em;
        

        @media (max-width: 1600px) {
        width: 100%;
  }

        @media (max-width: 1024px) {
        width: 90%;
        margin: auto;
  }

    @media (max-width: 768px) {
      width: 90%;
      margin: auto;
}
        
        
    & img {
        width: 1024px;
        height: 400px;
        border-top-left-radius: 0.8em;
        border-bottom-left-radius: 0.8em;
        border-top-right-radius: 0.8em;
        border-bottom-right-radius: 0.8em;
        object-fit: cover;
        object-position: 0px;
        
        

        @media (max-width: 1024px) {
        width: 100%;
        margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: contain;

  }

    }

   


`;

export const BiographyContainer = styled.div`
            width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            & h3 {
              font-weight: 600;
              margin-top: 1em;
            }
            
            
    @media (max-width: 1024px) {
    display: block;
    margin: auto;
    width: 85%;
    
    
  }
        

    & p {
        font-size: 18px;
        font-weight: 700;
        width: 100%;

    @media (max-width: 1024px) {
    display: block;
    margin: auto;
    width: 100%;
    
    
  }
    }


`;

export const VideoMainContainer = styled.div`
   display :flex ;
   padding-top: 2em; 
   width: 85%;
   margin: auto;
   
   @media (max-width: 1024px) {
    display: block;
    margin: auto;
    width: 100%;
    
    
  }
   
   
   @media (max-width: 768px) {
    display: block;
    margin: auto;
    width: 100%;
    
    
  }


`;

export const VideoContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8em;
   
   @media (max-width: 1024px) {
    width: 80%;
    
  }
   
   @media (max-width: 768px) {
    width: 80%;
    
    
  }

  & video {
    width: 600px;
    height: 400px;

    @media (max-width: 1024px) {
    width: 90%;
    
  }
   
   @media (max-width: 768px) {
    width: 90%;
    
    
  }
  }

`;

export const ParagraphContainer = styled.div`
    margin-left: 2em;
    width: 90%;
    margin-top: 2em;
    

    & h4 {
        font-size: 30px;
        font-weight: 700;
    }
   & p {
    width: 100%; 
    font-size: 18px;

    
    @media (max-width: 1024px) {
    width: 90%;
  }

    @media (max-width: 768px) {
    width: 100%;
  }
 }


`;

export const SwiperMainContainer = styled.div`


`;
