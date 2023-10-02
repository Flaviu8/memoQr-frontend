import styled from "@emotion/styled";


export const MainTermsPage = styled.div`
         background-color: #f5f5f5;

`;


export const Title = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
        padding-top: 20px;
 
         

`;


export const TermsPage = styled.div`
         background-color: #FFFFFF;
         width: 700px;
         margin: auto;
         box-shadow: 0px 5px 8px black;
         padding-top: 2em;
         padding-bottom: 2em;
         margin-bottom: 3em;
         @media (max-width: 768px) {
          width: 95%;
  }

        & h3 {
            width: 85%;
            margin: auto;
            margin-top: 1em;
        } 
         & p {
            width: 600px;
            font-size: 20px;
            margin: auto;
            margin-top: 0.3em;

            @media (max-width: 768px) {
          width: 85%;
          font-size: 18px;
  }
         }

`;

export const BreakLine = styled.div`
    content: "";
    border: 0.5px solid black;

`;