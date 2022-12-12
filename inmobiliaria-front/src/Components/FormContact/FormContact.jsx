import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./formContact.css";



function FormContact() {
  const [state, handleSubmit] = useForm("xzbwnekl");
  if (state.submitting) {
    return alert("Gracias por contactarnos!");
  }

  return (
    <div>
      <div className="containerLogin" >
        <form onSubmit={handleSubmit} className="formContact">
          <label>
            <input
              className="inputForm"
              placeholder="Nombre"
              required
              type="text"
              id="nombre"
            />
            <ValidationError
              prefix="nombre"
              field="nombre"
              errors={state.errors}
            />
          </label>

          <br />

          <label>
            <input
              className="inputForm"
              placeholder="Email"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>

          <br />

          <label>
            <textarea
              className="inputForm"
              maxlength="1000"
              minLength="10"
              placeholder="Deja tu consulta aquí"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>

          <br />
          <br />
          <input
            className="btnLogin"
            type="submit"
            disabled={state.submitting}
            value="Enviar"
          />
        </form>
      </div>
    </div>
  );
}

export default FormContact;
