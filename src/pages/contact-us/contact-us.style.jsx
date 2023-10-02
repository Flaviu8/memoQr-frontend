import styled from "@emotion/styled";



export const ContactMainContainer = styled.div`
      background-color: #fefeff;

`;



export const ContactUsContainer = styled.div`
    background-color: #656C75;
    width: 100%;
    height: 80px;
    margin-top: 1em;
    


    @media (max-width: 768px) {
    display: block;
  }
   

`;


export const AskUsMainContainer = styled.div`
    margin: auto;
    background-color: #656C75;
    width: 800px;
    height: 650px;
    box-shadow: 0px 2px 2px black;
    margin-top: 10em;

    & h4 {
        padding-top: 1em;
        padding-left: 2em;
        color: #DEE2E7;
    }

    @media (max-width: 768px) {
    width: 95%;
    height: auto;
  }


`;

export const AskUsInput = styled.form`
    display: flex;
    flex-direction: column;


`;


export const FormMainContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 70%;
    


    @media (max-width: 768px) {
    display: block;
  }
   

`;

export const FormLeftContainer = styled.div`
    width: 48%;

   
    & input {
    width: 250px;
    height: 50px;
    padding-left: 1em;
    border-radius: 0.4em;
    margin-top: 1em;

}

& label {
    margin-top: 1em;
    width: 300px;
    color: #DEE2E7;
}
`;

export const FormRightContainer = styled.div`
    width: 48%;
   
    & input {
    width: 250px;
    height: 50px;
    padding-left: 1em;
    border-radius: 0.4em;
    margin-top: 1em;
}

& label {
    width: 300px;
    margin-top: 1em;
    color: #DEE2E7;

 
}

`;


export const SubjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-top: 2em;
    padding-bottom: 2em;
    color: #DEE2E7;

    & textarea {
        width: 550px;
        height: 200px;
        margin-top: 1em;
        padding-left: 1em;
        padding-top: 1em;

        @media (max-width: 768px) {
            width: 100%;
  }

    }


    & button {
        margin-top: 1em;
        width: 150px;
        height: 40px;
        color: #FFFFFF;
        background-color: #F47D3D;
        border-radius: 0.4em;
        justify-content: center;
    }

    & button:hover {
        opacity: 0.9;
    }


`;


export const BreakLine = styled.div`
    content: "";
    border: 0.5px solid black;

`;