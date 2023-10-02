import styled from "@emotion/styled";


export const UserDetailsMainContainer = styled.div`
background-color: #fefeff;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-size: cover;
padding-bottom: 2em;

@media (max-width: 768px) {
    height: auto;
    margin: auto;
    
  }

`;

export const UserDetailsTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;



& h3 {

color: #656C75;

}

`;


export const UserDetailsMain = styled.div`
    background-color: #656C75;
    height: 1480px;
    width: 600px;
    opacity: 0.8;
    margin: auto;
    border-radius: 0.5em;
    box-shadow: 0px 2px 4px black;
    padding-top: 0.5em;
    padding-bottom: 1em; 
    margin-top: 1em ;

    @media (max-width: 768px) {
    width: 98%;
    height: auto;
   
  }

    

    & button {
        width: 150px;
        height: 40px;
        color: #FFFFFF;
        background-color: #F47D3D;
        border-radius: 0.4em;
       
    }

    & button:hover {
        opacity: 0.9;
    }
    

`;


export const FormMainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
    display: flex;
    width: 70%;
    flex-direction: column;
    align-items: center;

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
    color: white;
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
     color: white;

 
}

`;

export const FileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
   
`;

export const MainBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;

   

    & button {
        margin-top: 1em;
    }

    & textarea {
        width: 550px;
        height: 200px;
        padding-left: 1em;
        padding-top: 1em;
        margin-top: 1em;

        @media (max-width: 768px) {
            width: 90%;
  }
    }


    & a {
        color: black;
        text-decoration: none;
        font-size: 16px;
        margin-top: 1em;
    }

    & a:hover {
        color: #FFFFFF;
        text-decoration: underline;
    }

    & h6 {
        width: 350px;
        margin: auto;
        margin-top: 1em;
        line-height: 1.5em;
        font-size: 16px;
        font-weight: 600;
    }


    & label {
        margin-top: 0.5em;
    }
   

`;

