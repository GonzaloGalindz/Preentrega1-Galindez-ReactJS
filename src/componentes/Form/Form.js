import { useState } from "react";
import "./Form.css";

const Form = () => {
  const { values, setValues } = useState({
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    alert(values);
  };

  return (
    <div className="formulario">
      <form action="" onSubmit={handleForm} className="form">
        <h3>Solicitud de datos</h3>
        <input
          className="datos btn btn-outline-dark"
          type="text"
          name="Name"
          value={values.Name}
          placeholder="Ingrese su nombre"
          onChange={handleInputChange}
        ></input>
        <input
          className="datos btn btn-outline-dark"
          type="text"
          name="LastName"
          value={values.LastName}
          placeholder="Ingrese su apellido"
          onChange={handleInputChange}
        ></input>
        <input
          className="datos btn btn-outline-dark"
          type="email"
          name="Email"
          value={values.Email}
          placeholder="Ingrese su email"
          autoComplete="off"
          onChange={handleInputChange}
        ></input>
        <input
          className="datos btn btn-outline-dark"
          type="text"
          name="Phone"
          value={values.Phone}
          placeholder="Ingrese su numero de teléfono"
          onChange={handleInputChange}
        ></input>
        <input
          className="datos btn btn-outline-dark"
          type="text"
          name="Address"
          value={values.Address}
          placeholder="Ingrese su dirección"
          onChange={handleInputChange}
        ></input>
        <button className="button-form" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
