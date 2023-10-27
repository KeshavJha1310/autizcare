import {  useState } from "react";
import "./therapistForm.css";

const TherapistForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        pincode: '',
        contact: '',
        age: '',
        gender: '',
        qualification: '',
        affiliation: '',
        experience: '' ,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileUpload = (e) => {
        // Logic to handle file upload
        const file = e.target.files[0];
        // Handle the file as needed
        console.log('Uploaded file:', file);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log('Form submitted:', formData);
        // You can send this data to a server or perform any other operations here
      };
    
      return (
        <div className="form-container">
        <div className="input-container">
          <h2>Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Pincode:
              <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              contact:
              <input type="text" name="contact" value={formData.diagnosis} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Age:
              <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Gender:
              <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
            </label>
            <br />
          </form>
        </div>
        <div className="input-container">
          <label>
          Qualification:
            <textarea name="qualification" value={formData.qualification} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Affiliation:
            <textarea name="affiliation" value={formData.affiliation} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Experience:
            <textarea name="experience" value={formData.experience} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Qualification certificate:
            <input type="file" onChange={handleFileUpload} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </div>
      </div>
      );
};

export default TherapistForm;
