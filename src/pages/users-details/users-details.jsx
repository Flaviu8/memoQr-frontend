import React, { useState } from "react";
import { UserDetailsMainContainer, UserDetailsMain, UserDetailsTitle, FormLeftContainer, FormRightContainer, FormMainContainer, MainBottomContainer } from './user-details.style'
import axios from "axios";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";


const UserDetails = () => {

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [description, setDescription] = useState("");
  const [terms, setTerms] = useState(false);
  const [biography, setBiography] = useState("");
  const [photoFiles, setPhotoFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [message, setMessage] = useState(false)
  const [birthYear, setBirthYear] = useState("");
  const [deathYear, setDeathYear] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  for (let i = 0; i < photoFiles.length; i++) {
    formData.append("photo", photoFiles[i]);
  }

  if (videoFile) {
    formData.append("video", videoFile);
  }

  if (coverFile) {
    formData.append("cover", coverFile);
  }

  formData.append("id", uuidv4());
  formData.append("lastName", lastName);
  formData.append("firstName", firstName);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("address", address);
  formData.append("city", city);
  formData.append("postal", postal);
  formData.append("birthYear", birthYear);
  formData.append("deathYear", deathYear);
  formData.append("description", description);
  formData.append("terms", terms);
  formData.append("biography", biography);

  try {
    await axios.post("https://app-ab8d0f9a-3cea-43eb-a9e5-97eb4e13c3b9.cleverapps.io/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setMessage(true)
  } catch (error) {
    console.log(error)
  }
};


  return (
    <>
    <UserDetailsMainContainer>
      <UserDetailsTitle>
          <h3>Formular comandă</h3>
      </UserDetailsTitle>
        <UserDetailsMain>
    
         <form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormMainContainer>
              <FormLeftContainer>
              <label>Nume*</label>
              <input
                      type="text"
                      placeholder="Nume"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <label>Prenume*</label>
                    <input
                      type="text"
                      placeholder="Prenume"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                      <div>
                        <label>Încarcă poze:</label>
                        <input
                          type="file"
                          multiple
                          name="photo"
                          accept="image/*"
                          onChange={(e) => setPhotoFiles(e.target.files)}
                        />
                      </div>
                      <div>
                        <label>Încarcă video:</label>
                        <input
                          type="file"
                          name="video"
                          accept="video/*"
                          onChange={(e) => setVideoFile(e.target.files[0])}
                        />
                        </div>
                        <label>Anul Nașterii*</label>
                        <input
                          type="text"
                          placeholder="Anul Nașterii"
                          value={birthYear}
                          onChange={(e) => setBirthYear(e.target.value)}
                          required
                        />
                  </FormLeftContainer>
              <FormRightContainer>
              <label>Telefon*</label>
                    <input
                          type="tel"
                          placeholder="Telefon"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                        <label>Strada/Numărul*</label>
                        <input
                          type="text"
                          placeholder="Strada/Numărul"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                        <label>Orașul/Localitatea*</label>
                        <input
                          type="text"
                          placeholder="Orașul/Localitatea"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                        <label>Cod Poștal</label>
                        <input
                          type="text"
                          placeholder="Cod Poștal"
                          value={postal}
                          onChange={(e) => setPostal(e.target.value)}
                          required
                        />
                         <div>
                        <label>Încarcă fotografia de copertă:</label>
                        <input
                          type="file"
                          name="cover"
                          accept="image/*"
                          onChange={(e) => setCoverFile(e.target.files[0])}
                        />
                        </div>
                        <label>Anul Decesului*</label>
                        <input
                          type="text"
                          placeholder="Anul Decesului"
                          value={deathYear}
                          onChange={(e) => setDeathYear(e.target.value)}
                          required
                        />
               </FormRightContainer>
          </FormMainContainer>
          <MainBottomContainer>
              <label>Descriere: max(2000 caractere)</label>
                        <textarea
                  placeholder="Descriere"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength="2000"
                ></textarea>
                <label>Biografie*: max(2000 caractere)</label>
                <textarea
                  placeholder="Biografie"
                  value={biography}
                  onChange={(e) => setBiography(e.target.value)}
                  maxLength="2000"
                  required
                ></textarea>
                <p style={{ marginTop:"1em" }}>Câmpurile marcate cu * sunt obligatorii.</p>
                <Link to={'/termeni'}>Link către termeni și condiții!</Link>
                 <div style={{display:"flex", flexDirection:"row", textAlign:"center", justifyContent:"center"}}>
                  <input type="checkbox" checked={terms} required onChange={() => setTerms(!terms)} />
                  <p style={{marginTop:"1.3em", marginLeft:"0.5em", width:"300px"}}>Am citit și sunt de acord cu termenii și condițiile!</p>
                </div>
                <p style={{width:"400px", fontSize:"16px", fontWeight:"600"}}>După finalizarea comenzii plata se efectuează ramburs cu verificarea coletului!
                   Costurile de curierat le suportăm noi.</p>
                {message ? <p style={{marginTop:"1em", fontSize:"20px"}}>Comanda a fost trimisa!</p> : <button type="submit">Trimite Comanda</button>}
          </MainBottomContainer> 
        </form>

        </UserDetailsMain>
    </UserDetailsMainContainer>
    </>
  )
}

export default UserDetails
