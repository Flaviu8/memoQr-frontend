import styled from "@emotion/styled";




export const Title = styled.div`
    width: 65%;
    margin: auto;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 2px black;
    height: 200px;
    border-radius: 0.4em;

    @media (max-width: 768px) {
    height: auto;
    width: 85%;
    
  }

    & h1 {
      width: 85%;
      padding-top: 0.5em;
      margin: auto;

      @media (max-width: 768px) {
        width: 95%;
        font-size: 16px;
        font-weight: 600;
    
  }
    }

    & button {
    background-color: #F47D3D;
    color: #FFFFFF;
    border-radius: 0.4em;
    border: none;
    width: 150px;
    height: 40px;
    box-shadow: 0px 3px 4px black;
    text-shadow: 0px 2px 1px green;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-top: 1em;
    margin-left: 4em;
  


    @media (max-width: 768px) {
    width: 120px;
    height: 30px;
    font-size: 12px;
    
    
  }
    
   }
   
`;


export const UsersMainContainer = styled.div`
    background-color: #f5f5f5;
   
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
          margin-top: 1em;
    
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

            & h2 {
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
   display: flex; 
   width: 85%;
   margin: auto;
   padding-top: 2em; 
   
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
    

    & h3 {
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
