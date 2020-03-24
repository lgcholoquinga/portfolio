import React, { useState, useEffect } from "react";
import "../styles/Skill.css";
import firebase from "../firebase";

const Skill = () => {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    firebase.firestore().collection("skills").onSnapshot(snapshot => {
        const listSkill = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setSkill(listSkill);
      });
  }, []);

  return (
    <section className="container">
      <h2 className="skillTitle">Skills</h2>
      <div className="row skillContainer">
        {
          skill.map((item) => (
            <div className="col-12 col-md-3 col-sm-6" key={item.id}>
              <div className="skillC">
                <div className="skillM">
                  <div className="skill-image">
                    <img src={item.logo} alt="skill" />
                  </div>
                <div className="skill-title">
                  <h2>{item.title}</h2>
                </div>
                <div className="skill-porcent">
                  <p>
                    {item.porcentage}
                    <br />
                    Knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  );
};
export default Skill;
