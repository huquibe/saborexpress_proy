import React from "react";
import { Button, Form } from "semantic-ui-react"
import "./LoginForm.scss";

export function LoginForm() {
  return (
    <Form className="login-form-admin">
      <Form.Input name="email" placeholder="correo electronico"/>
      <Form.Input name="password" type="Password" placeholder="Contraseña"/>
        <Button type="submit" content="iniciar sesión" primary fluid />              
    </Form>
  );
}
