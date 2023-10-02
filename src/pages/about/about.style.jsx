import styled from "@emotion/styled";

export const AboutMainContainer = styled.div`
      background-color: #fefeff;

`;

export const AboutNavMain = styled.div`
      background-color: #DEE2E7;
      margin-top: 2em;
      width: 100%;
      height: 100px;
      box-shadow: 0px 4px 6px black;


`;



export const AboutTitle = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 2em;
    
    & h2 {
        text-shadow: 0px 1px 1px black;
    }

`;

export const AboutContent = styled.div`
    display: flex;
    width: 70%;
    margin: auto;
    margin-top: 3em;

    @media (max-width: 768px) {
    display: block;
    width: 100%;
  }

   

`;


export const AboutContentLeft = styled.div`
        display: flex;
        flex-direction: column;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            }

     & img {
        width: 250px;
        height: 200px;
        border-radius: 0.5em;
        margin-bottom: 10em;
        box-shadow: 0px 2px 6px black;
     }

   

`;


export const AboutContentRight = styled.div`
 
    
     & p {
        font-size: 20px;
        margin-left: 10em;
        width: 700px;
        line-height: 2em;
        text-shadow: 0px 10px 100px black;

        @media (max-width: 768px) {
    width: 95%;
    margin: auto;
  }

     }


`;

export const BreakLine = styled.div`
    content: "";
    border: 0.5px solid black;
    margin-top: 2em;

`;