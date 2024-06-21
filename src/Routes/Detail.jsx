import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const { dentists } = useContext(GlobalContext);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const dentistData = dentists.find(d => d.id === parseInt(id));
    setDentist(dentistData);
  }, [id, dentists]);

  if (!dentist) return <p>Loading...</p>;

  return (
    <div>
      <h1>Detail Dentist id {id}</h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;