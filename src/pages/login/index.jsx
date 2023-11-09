import { useContext } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

//icons/logos
import planbg from "../../assets/plan-art-bg.svg";

//styles

import { Container, Content, Background } from "./styles";
import Input from "../../components/input";
import Button from "../../components/button";
import { FiLogIn } from "../../styles/Icons";
import Logo from "../../assets/logo";
import LogoDark from "../../assets/logo-dark";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const { login, username, password } = useContext(AuthContext);

  function handleSubmit() {
    login(username, password);
  }

  return (
    <Container>
      <Background>
        <Logo alt="Gerenciamento" />
        <img src={planbg} alt="Background" />
        <p>Gerenciamento de tarefas</p>
      </Background>
      <Content>
        <LogoDark alt="Gerenciamento dark" />
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="">E-mail</label>
          <Input name="email" />
          <label htmlFor="">Senha</label>
          <Input name="password" type="password" />
          <Button icon={FiLogIn}>Entrar</Button>
          <Link to="/signup">Cadastre-se</Link>
        </Form>
      </Content>
    </Container>
  );
}
