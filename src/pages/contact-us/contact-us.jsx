import React from "react";
import { ContactMainContainer, AskUsMainContainer } from "./contact-us.style";
import { Formik } from 'formik'
import { FormMainContainer, FormLeftContainer, FormRightContainer, SubjectContainer, AskUsInput, BreakLine } from "./contact-us.style";
import LocateUs from "../../components/maps/maps";
import axios from "axios";


const ContactUs = () => {
    const [user, setUser] = React.useState([])
    const [message, setMessage] = React.useState(false)
    const [error, setError] = React.useState(true)


    return (
        <ContactMainContainer>
            <AskUsMainContainer>
                <h4>Intrebați-ne:</h4>
                <Formik
                    initialValues={{ lastName: '', firstName: '', email: '', phone:'', text: '' }}
                    onSubmit={(values, actions) => {
                      axios.post('http://localhost:8010/ask', values)
                        .then(response => {
                          // handle success response
                          setUser(response.data);
                          setMessage(true)
                        })
                        .catch(error => {
                          // handle error response
                          setError(error);
                        })
                        .finally(() => {
                          actions.setSubmitting(false);
                        });
                    }}
     >
       {props => (
         <AskUsInput onSubmit={props.handleSubmit}>
          <FormMainContainer>
              <FormLeftContainer>
                      <label htmlFor='lastName'>Nume*</label>
                        <input
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.lastName}
                          name="lastName"
                          placeholder='Nume'
                          required
                        />
                        {props.errors.lastName && <div id="feedback">{props.errors.lastName}</div>}
                        <label htmlFor='firstName'>Prenume*</label>
                        <input
                          type="text"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.firstName}
                          name="firstName"
                          placeholder='Prenume'
                          required
                        />
                        {props.errors.firstName && <div id="feedback">{props.errors.firstName}</div>}
                  </FormLeftContainer>
              <FormRightContainer>
                      <label htmlFor='email'>Email</label>
                      <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                        name="email"
                        placeholder='Email'
                      />
                      {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                      <label htmlFor='phone'>Telefon*</label>
                      <input
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.phoneNumber}
                        name="phone"
                        placeholder='Număr de telefon'
                        required
                      />
                      {props.errors.phone && <div id="feedback">{props.errors.phone}</div>}
               </FormRightContainer>
          </FormMainContainer>
          <SubjectContainer>
          <label htmlFor='text'>Subiect: Max. 2000 caractere</label>
              <textarea
                  name="text"
                  placeholder="Introduceți textul..."
                  onChange={props.handleChange}
                  value={props.values.text}
                  maxLength="2000"
              ></textarea>
              {props.errors.text && <div>{props.errors.text}</div>}
           <button type="submit">Trimite</button>
           {!message ? <h5 style={{opacity: "0", marginTop: "1em"}}>Mesajul a fost trimis cu succes!</h5> : <h5 style={{opacity: "1", transition: "1s ease", fontWeight:"600", marginTop: "1em"}}>Mesajul a fost trimis cu succes!</h5>}
           </SubjectContainer>
         </AskUsInput>
       )}
     </Formik> 
            </AskUsMainContainer>
            <LocateUs />
            <BreakLine></BreakLine>
            {user ? <div></div> : null}
            {error ? <div></div> : null}
        </ContactMainContainer>
    )
}


export default ContactUs

