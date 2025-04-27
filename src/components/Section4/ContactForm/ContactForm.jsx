import React from "react";
import "./ContactForm.scss"; 

const ContactForm = () => {
  return (
    <form 
      action="https://formsubmit.co/joseantonio-hb@hotmail.com" 
      method="POST"
      className="form-container"  
    >
      
      <input type="hidden" name="_captcha" value="false" />

      <div>
        <label>Nombre</label>
        <input name="name" required />
      </div>

      <div>
        <label>Email</label>
        <input name="email" type="email" required />
      </div>

      <div>
        <label>Mensaje</label>
        <textarea name="message" required />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
