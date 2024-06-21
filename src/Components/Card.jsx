import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";
import DentistaPng from "../img/doctor.jpg"

const Card = ({ id, name, username }) => {
  const { addToFavorites } = useContext(GlobalContext);
  const { theme } = useContext(GlobalContext);

  const addFav = () => {
    addToFavorites({ id, name, username });
  };

  return (
    <div className={`card ${theme === 'dark' ? 'dark' : ''}`}>
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <img src={DentistaPng} alt="Dentista" 
        style={{maxWidth: "100%", height: "auto"}}/>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};


export default Card;
