import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";
const App = () => {
  return (
    <div className='Container'>
      <h1>Personal Digital Assistant</h1>
      <div className='profileContainer'>
        <ProfileCard image={Alexa} title='Alexa' handle='@alexa34' />
        <ProfileCard image={Cortana} title='Cortana' handle='@cortana93' />
        <ProfileCard image={Siri} title='Siri' handle='@siri90' />
      </div>
    </div>
  );
};

export default App;
