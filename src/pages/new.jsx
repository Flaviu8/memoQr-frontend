import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const New = () => {

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


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let i = 0; i < photoFiles.length; i++) {
      formData.append("photo", photoFiles[i]);
    }

    if (videoFile) {
      formData.append("video", videoFile);
    }

    formData.append("id", uuidv4());
    formData.append("lastName", lastName);
    formData.append("firstName", firstName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("postal", postal);
    formData.append("description", description);
    formData.append("terms", terms);
    formData.append("biography", biography);

    try {
      await axios.post("https://app-ab8d0f9a-3cea-43eb-a9e5-97eb4e13c3b9.cleverapps.io/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("User data and files uploaded successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Last name"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
  />
  <input
    type="text"
    placeholder="First name"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
  />
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="tel"
    placeholder="Phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />
  <input
    type="text"
    placeholder="Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
  />
  <input
    type="text"
    placeholder="City"
    value={city}
    onChange={(e) => setCity(e.target.value)}
  />
  <input
    type="text"
    placeholder="Postal Code"
    value={postal}
    onChange={(e) => setPostal(e.target.value)}
  />
  <textarea
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  ></textarea>
  <label>
    <input type="checkbox" checked={terms} onChange={() => setTerms(!terms)} />
    I agree to the terms and conditions
  </label>
  <textarea
    placeholder="Biography"
    value={biography}
    onChange={(e) => setBiography(e.target.value)}
  ></textarea>
  <div>
    <label>Photos:</label>
    <input
      type="file"
      multiple
      name="photo"
      accept="image/*"
      onChange={(e) => setPhotoFiles(e.target.files)}
    />
  </div>
  <div>
    <label>Video:</label>
    <input
      type="file"
      name="video"
      accept="video/*"
      onChange={(e) => setVideoFile(e.target.files[0])}
    />
  </div>
  <button type="submit">Submit</button>
</form>
  )
}
  

export default New
     






