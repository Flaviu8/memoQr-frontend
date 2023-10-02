import styled from "@emotion/styled";



export const HomeContainer = styled.div`
    background-color: #fefeff;
    background-size: cover;
    height: 100%;
    width: 100%;
    opacity: 0.95;
`;

export const Banner = styled.div`
    background-color: #FFFFFF;
    width: 70%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: auto;
   margin-top: 2em;
   border-radius: 0.4em;
   box-shadow: 0px 3px 3px black;

   
   @media (max-width: 768px) {
    width: 95%;
    
  }

   & h1 {
    font-size: 30px;
    width: 90%;
    margin-top: 1em;
    font-weight: 600;
    text-shadow: 0px 1px 100px grey;

    @media (max-width: 768px) {
    font-size: 20px;
    
  }

   }
    
   & h2 {
    font-size: 25px;
    margin-top: 0.5em;
    width: 90%;
    font-weight: 500;
    text-shadow: 0px 1px 100px grey;

    @media (max-width: 768px) {
    font-size: 18px;
    
  }

   }

   & p {
    font-size: 18px;
    line-height: 1.8em;
    margin-right: 2em;
    margin-left: 2em;
    text-align: left;
    width: 90%;
    margin-top:1em;
    margin-bottom: 2em;
    text-shadow: 0px 1px 100px grey;

    @media (max-width: 768px) {
    font-size: 16px;
    
  }
   }
  
`;


export const SubscribeContainer = styled.div`
    background-color: #656C75;
    width: 400px;
    opacity: 0.8;
    margin: 2em auto 2em;
    border-radius: 0.5em;
    box-shadow: 0px 5px 5px black;

    @media (max-width: 768px) {
    width: 70%;
    height: auto;
    padding-bottom: 0.8em;
  }
    

`;



export const TitleContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 380px;
   margin: auto;
   padding-top: 1em;

   @media (max-width: 768px) {
    width: 85%;
    font-size: 20px;
    
  }
   
   & h3 {
    color: #FFFFFF;
    font-size: 25px;
    text-shadow: 0px 2px 1px green;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;

    @media (max-width: 768px) {
    font-size: 20px;
    
  }
   }
  
`;



export const PriceContainer = styled.div`
    width: 300px;
    margin: auto;
    margin-top: 1em;
    @media (max-width: 768px) {
    width: 85%;
    
  }

    & h4 {
        color: #ff3939;
        text-shadow: 0px 2px 1px black;
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        
    }
  
`;

export const SubscribeText = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-left: 3em;
   line-height: 4em;

   @media (max-width: 768px) {
    line-height: 3em;
    
  }

    
    & li {
        font-size: 18px;
        color: #FFFFFF;
        text-shadow: 0px 2px 1px green;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }
`;

export const SubscribeButton = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 1em;


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

    @media (max-width: 768px) {
    width: 120px;
    height: 35px;
    font-size: 12px;
    
  }
    
   }
   & button:hover {
    opacity: 0.8;
    
   }
  
`;

export const BreakLine = styled.div`
    content: "";
    border: 3px solid black;

`;