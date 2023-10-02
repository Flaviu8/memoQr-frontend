import styled from "@emotion/styled";



export const FooterContainer = styled.footer`
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-top: 2em;
        background-color: #E0E3E7;
        @media (max-width: 768px) {
        display: block;
        margin: auto;
        height: 700px;
       
  }


`;

export const ContactContainerMain =styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 1em;


        & h3 {
            margin-left: 0.2em;
            font-size: 30px;
            font-weight: 700;

            @media (max-width: 768px) {
                font-size: 25px;
       
  }
        }

        

`;

export const ContactContainer =styled.div`
        display: flex;
        flex-direction: column;
    
      
        & p {
            font-weight: 600;
            font-size: 18px;

            @media (max-width: 768px) {
                font-size: 16px;
  }
            
        }


`;



export const Contacts =styled.div`
        display: flex;
        margin-top: 1em;
             
        & p {
            font-weight: 500;
            font-size: 18px;
            align-items: center;
            margin-left: 0.5em;

            
            @media (max-width: 768px) {
                font-size: 16px;
  }
         
            
        }

        & img {
            width: 30px;
            height: 30px;
        }

`;

export const FindusContainerMain =styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 1em;
        & h3 {
            margin-left: 0.2em;
            font-size: 30px;
            font-weight: 700;

            
            @media (max-width: 768px) {
                font-size: 22px;
  }
       
        }

        @media (max-width: 768px) {
       margin-top: 2em;
  }

`;

export const FindusContainer =styled.div`
        margin-top: 1em;
    
    & img {
        width: 30px;
        height: 30px;
        margin-left: 1em;
        
    }

    & img:hover {
       background-color: #f77d2b;
       cursor: pointer;
       transition: all 0.4s;

        
    }

 
`;

export const LinksMain = styled.div`
         margin-top: 1em;

         & h3 {
            margin-left: 0.2em;
            font-size: 30px;
            font-weight: 700;

            
            @media (max-width: 768px) {
                font-size: 22px;
  }
       
        }

        & a {
        margin-left: 0.5em;
        margin-top: 1em;
        font-size: 16px;
        text-decoration: none;
        color: black;
        font-weight: 600;
    }

    & a:hover {
        color:  #f77d2b;
        text-decoration: underline;
        transition: 0.4s all;
    }

    @media (max-width: 768px) {
       margin-top: 2em;
  }
  
`;


export const NavigationLink =styled.nav`
    display: flex;
    flex-direction: column;

 
`;

export const AboutContainer =styled.div`
     margin-top: 1em;
     & h3 {
            margin-left: 0.2em;
            font-size: 30px;
            font-weight: 700;

            
            @media (max-width: 768px) {
                font-size: 22px;
  }
       
        }
    & p {
        width: 300px;
        font-weight: 600;
        font-size: 18px;
        margin-top: 1em;

        
        @media (max-width: 768px) {
        font-size: 16px;
  }
       
    }

    @media (max-width: 768px) {
       margin-top: 1em;
  }
  
`;