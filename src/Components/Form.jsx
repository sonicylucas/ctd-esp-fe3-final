import React, {useState} from "react";


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let errors = {};
    if (name.length <= 5) errors.name = "Nombre completo debe tener más de 5 caracteres";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log({ name, email });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submitted && <p>Gracias {name}, te contactaremos cuando antes vía mail.</p>}
    </div>
  );
};

export default Form;
