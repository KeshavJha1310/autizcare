import {  useState } from "react";
import "./therapistForm.css";
import {ref , uploadBytes} from "firebase/storage";
import "firebase/database";
import { storage } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";


const TherapistForm = () => {
    const navigate = useNavigate()

    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        pincode: '',
        contact: '',
        age: '',
        gender: '',
        specialization:'',
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
    
      const submitData = async (event) => {
        event.preventDefault();
        const {
            name,
            address,
            pincode,
            age,
            gender,
            contact,
            specialization,
            qualification,
            affiliation,
            experience
        } = formData;
        if( name &&
            address &&
            pincode &&
            age &&
            gender &&
            contact &&
            specialization &&
            qualification &&
            affiliation &&
            experience &&
            file 
            )
            {
        const res = fetch(
            'https://autizcare-2af7b-default-rtdb.firebaseio.com/therapistData.json', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name,
            address,
            pincode,
            age,
            gender,
            contact,
            specialization,
            qualification,
            affiliation,
            experience,
            })
        }
        );
        const fileRef = ref(storage,`therapist/certificates/${file.name + "jkhdskhs" }`);
        uploadBytes(fileRef,file).then(()=>{
            console.log("file uploaded",file)
        })
if(res){
    setFormData({
        name: '',
        address: '',
        pincode: '',
        diagnosis: '',
        age: '',
        gender: '',
        contact: '',
        specialization: '',
        qualification: '',
        affiliation: '',
        experience: '',
        file: null,
    })
    // setFile({
    //     file: null
    // })
    alert("Your Profile Created");
   
} } else{
alert("Please fill the data");
}

    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);
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
              Contact:
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
          Specialization:
            <textarea name="specialization" value={formData.specialization} onChange={handleInputChange} />
          </label>
          <br />
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
          <button type="submit" onClick={submitData}>Submit</button>
        </div>
      </div>
      );
};

export default TherapistForm;
