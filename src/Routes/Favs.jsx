import React, { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import DentistaPng from "../img/doctor.jpg"

const Favs = () => {
  const { favorites, theme } = useContext(GlobalContext);

  return (
    <div className={`card-grid ${theme === 'dark' ? 'dark' : ''}`}>
      {favorites.map((dentist) => (
        <div key={dentist.id} className="card">
          <h3>{dentist.name}</h3>
          <p>{dentist.username}</p>
          <img src={DentistaPng} alt="Dentista" 
           style={{maxWidth: "100%", height: "auto"}}/>
        </div>
      ))}
    </div>
  );
};

export default Favs;
