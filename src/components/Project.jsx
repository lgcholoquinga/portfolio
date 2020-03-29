import React, {useState,useEffect} from 'react';
import '../styles/Projects.css';
import firebase from '../firebase';

const Project = () => {

    const [project, setProject] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('projects').onSnapshot(snapshot => {
            const lisProjects = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setProject(lisProjects);
        });
    },[]);

    return (
        <section className='container'>
            <h2 className='projects-title' id="project">Projects</h2>
            <div className="row">
                {
                    project.map((item) => (
                        <div className="col-12 col-md-6 project" key={item.id}>
                            <div className="project-card">
                                <div className="project-card-image">
                                    <a href="/">
                                        <img src={item.image} alt="project-logo"/>
                                    </a>
                                </div>
                                <div className="project-card-title">
                                    <p>{item.title}</p>
                                </div>
                                <div className="project-card-details">
                                    <p>{item.description}</p>
                                    <p className="project-card-sub">
                                        <strong>
                                            Skills Learned:
                                        </strong>
                                    </p>
                                    <p>{item.skill}</p>
                                </div>
                                <a href={item.url} className="project-url" target="_blank" rel="noopener noreferrer">

                                </a>
                            </div>
                        </div>
                    ))
                }
                <br />
                <br/>
            </div>
        </section>
    );
};

export default Project;