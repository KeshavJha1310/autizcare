import { useState } from "react";
import "./therapistForm.css";
// import firebase from "firebase/app";
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
        diagnosis: '',
        age: '',
        gender: '',
        contact: '',
        healthHistory: '',
        therapyTaken: '',
        medications: '',

    });

    const submitData = async (event) => {
        event.preventDefault();
        const {
            name,
            address,
            pincode,
            diagnosis,
            age,
            gender,
            contact,
            healthHistory,
            therapyTaken,
            medications
        } = formData;
        if( name &&
            address &&
            pincode &&
            diagnosis &&
            age &&
            gender &&
            contact &&
            healthHistory &&
            therapyTaken &&
            medications &&
            file 
            )
            {
        const res = fetch(
            'https://autizcare-2af7b-default-rtdb.firebaseio.com/patientData.json', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name,
            address,
            pincode,
            diagnosis,
            age,
            gender,
            contact,
            healthHistory,
            therapyTaken,
            medications,
            })
        }
        );
        const fileRef = ref(storage,`patient/medicalHistorys/${file.name + "jkhdskhs" }`);
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
        healthHistory: '',
        therapyTaken: '',
        medications: '',
        file: null,
    })
    
    alert("Your Profile Created");
    navigate('/c/dashboard')
} } else{
alert("Please fill the data");
}

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
                        Diagnosis:
                        <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleInputChange} />
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
                    <label>
                        Contact:
                        <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} />
                    </label>
                    <br />
                </form>
            </div>
            <div className="input-container">
                <label>
                    Health History:
                    <textarea name="healthHistory" value={formData.healthHistory} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Therapy Taken:
                    <textarea name="therapyTaken" value={formData.therapyTaken} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Medications:
                    <textarea name="medications" value={formData.medications} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Upload Medical History Report:
                    <input type="file" onChange={handleFileUpload} />
                </label>
                <br />
                <button type="submit" onClick={submitData}>Submit</button>
            </div>
        </div>
    );
};

export default TherapistForm;
