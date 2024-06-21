import React, {useContext} from 'react'
import Form from '../Components/Form'
import { GlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;