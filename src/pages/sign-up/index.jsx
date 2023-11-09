import { Link } from "react-router-dom";
import { Form } from "@unform/web";

import planbg from "../../assets/plan-art-bg.svg";

import { Container, Content, Background } from "./styles";
import Logo from "../../assets/logo";
import Input from "../../components/input";

import { FiLogIn } from "react-icons/fi";
import Button from "../../components/button";

const SignUp = () => {
  return (
    <Container>
      <Background>
        <Logo alt="Gerenciamento" />
        <img src={planbg} alt="Background" />
        <p>Registre-se para entrar no painel</p>
      </Background>
      <Content>
        <h1>Cadastro</h1>
        <Form>
          <label htmlFor="name">Nome</label>
          <Input name="name" required />
          <label htmlFor="email">E-mail</label>
          <Input name="email" type="email" required />
          <label htmlFor="email">Usuário</label>
          <Input name="usuario" type="usuario" required />
          <label htmlFor="password">Senha</label>
          <Input name="password" required type="password" />
          <Button icon={FiLogIn}>Cadastrar</Button>
          <Link to="/">Fazer login</Link>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
