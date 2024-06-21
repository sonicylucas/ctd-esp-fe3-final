import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists, theme} = useContext(GlobalContext);

  return (
    <main className={theme === 'dark' ? 'dark' : ''}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;