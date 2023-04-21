import { useState } from "react";
import "./Form.css";

const Form = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const userData = {
    name,
    email,
    phone,
    address,
  };
  onConfirm(userData);

  return (
    <div className="formulario">
      <form action="" className="form">
        <h3>Solicitud de datos</h3>
        <input
          className="datos btn btn-outline-dark"
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="datos btn btn-outline-dark"
          type="email"
          name="email"
          placeholder="Ingrese su email"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="datos btn btn-outline-dark"
          type="number"
          name="phone"
          placeholder="Ingrese su numero de teléfono"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <input
          className="datos btn btn-outline-dark"
          type="text"
          name="address"
          placeholder="Ingrese su dirección"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        {/* <button className="button-form">Finalizar Compra</button> */}
      </form>
    </div>
  );
};

export default Form;
