import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("KyushoWeb", "template_9lapwgl", form.current, {
        publicKey: "gEtbBkeUcP_uSN7uC",
      })
      .then(
        () => {
          alert("INFORMACION ENVIADA CON EXITO!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("ERROR al enviar el mensaje", error.text);
        }
      );
  };

  return (
    <>
      <h1>Contacto</h1>
      <div className="formulario" style={{ width: "80%" }}>
        <Form ref={form} onSubmit={sendEmail}>
          {/* <h2>Inscribete o Solicita mas informacion</h2> */}
          <Form.Group className="mb-3" controlId="formName">
            <FloatingLabel
              controlId="floatingInputName"
              label="Nombre Completo"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Nombre completo"
                name="nombre"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTel">
            <FloatingLabel
              controlId="floatingInputTel"
              label="Numero de telefono / WhatsApp"
              className="mb-3"
            >
              <Form.Control
                type="tel"
                placeholder="Numero de telefono / WhatsApp"
                name="telefono"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <FloatingLabel
              controlId="floatingInputEmail"
              label="Direccion de Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="nombre@email.com"
                name="email"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formMessage">
            <FloatingLabel
              controlId="floatingInputMessage"
              label="Mensaje (opcional)"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Mensaje (opcional)"
                name="message"
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Formulario;
