import React from "react";
import "./profileCard.css";
const ProfileCard = ({ title, handle, image }) => {
  return (
    <div className='profile'>
      <img src={image} alt={"image of " + image} />
      <h1>Title is {title} </h1>
      <p>Handle is {handle}</p>
    </div>
  );
};

export default ProfileCard;
