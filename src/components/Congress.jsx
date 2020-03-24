import React, {useState,useEffect} from 'react';
import '../styles/Congress.css';
import firebase from '../firebase';

const Congress = () => {

    const [congress,setCongress] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('courses').onSnapshot(snapshot => {
            const listCongress = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setCongress(listCongress);
        });
    },[]);
    return (
        <section className="container">
            <h1 className="congress-title">Congress</h1>
            <div className="row congress-container">
                {
                    congress.map((item) => (
                        <div className="col-12 col-md-6" key={item.id}>
                            <div className="congress-card">
                                <div className="congress_card-image">
                                    <img src={item.logo} alt="congressImage"/>
                                </div>
                                <div className="congress_card-details">
                                    <h2 className='congress_card-title'>{item.title}</h2>
                                    <h3 className='congress_card-duration'><strong>Duration:</strong> {item.duration}</h3>
                                    <h3 className='congress_card-city'><strong>City:</strong> {item.city}</h3>
                                    <h3 className='congress_card-date'><strong>Date:</strong> {item.dateInit} to {item.dateFinish}</h3>
                                    <a className='congrescard-button' href={item.url} target="_blank" rel="noopener noreferrer">See Certificate</a>
                                </div>
                            </div>
                        </div>  
                    ))
                }
            </div>
        </section>
    );
};

export default Congress;