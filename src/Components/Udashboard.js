import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import bg from '../images/welcome.jpeg';
import { useNavigate } from "react-router-dom";


const Udashboard = () => {
  const navigate = useNavigate()
const bookhandle = () =>{
  navigate('/bookPayment')
}
  const [postData, setPostData] = useState([]);

  const styles = `
  .card-list {
    position: relative;
    left: 39px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5%;
    gap: 32px;
}
.background {
  background-image: url(${bg}); /* Add the path to your background image */
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  /* Additional background styles */
}
    .autizcare {
      margin-bottom: -17px;
      margin-top: 10px;
      font-size: 2em;
      position: relative;
      font-weight: 800;
      align-items: flex-end;
      justify-content: center;
      width: 270px;
      height: 65px;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.35);
  }
    .card {
        width: calc(33.33% - 20px);
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background: #ffffff;
    }
    .card-item {
        padding: 10px;
    }
    .subtitle {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    .card p {
        margin-bottom: 8px;
    }
    @media (max-width: 1024px) {
        .card {
            width: calc(50% - 20px);
            margin-bottom: 40px;
        }
    }
    @media (max-width: 768px) {
        .card {
            width: calc(80% - 20px);
        }
    }
  `;

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const postRef = ref(db, 'therapistData');

      onValue(postRef, (snapshot) => {
        const fetchedData = [];
        snapshot.forEach(childSnapshot => {
          const keyName = childSnapshot.key;
          const data = childSnapshot.val();
          fetchedData.push({ "key": keyName, "data": data });
        });
        setPostData(fetchedData);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="background">
        <div className="autizcare">AUTIZCARE</div>
      <div className="card-list">
        {postData.map((post, index) => (
          <div className="card" key={index}>
            <div className="card-item">
              <h3 className="subtitle">Dr. {post ? post.data.name : 'Loading...'}</h3><hr/>
              <p><strong>Address:</strong> {post ? post.data.address : 'Loading...'}</p>
              <p><strong>Affiliation:</strong> {post ? post.data.affiliation : 'Loading...'}</p>
              <p><strong>Age:</strong> {post ? post.data.age : 'Loading...'}</p>
              <p><strong>Contact:</strong> {post ? post.data.contact : 'Loading...'}</p>
              <p><strong>Experience:</strong> {post ? post.data.experience : 'Loading...'}</p>
              <p><strong>Gender:</strong> {post ? post.data.gender : 'Loading...'}</p>
              <p><strong>Pincode:</strong> {post ? post.data.pincode : 'Loading...'}</p>
              <p><strong>Qualification:</strong> {post ? post.data.qualification : 'Loading...'}</p>
              <button className='primary' style={{display:'flex', justifyContent:'center' , alignItems:'center'}} onClick={bookhandle}>Book</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Udashboard;
