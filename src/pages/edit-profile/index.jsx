import { Form } from "@unform/web";
import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  Header,
  Content,
  Row,
  ContentRow,
  Buttons,
} from "./styles";

import Sidebar from "../../components/sidebar";
import Input from "../../components/input";

import Button from "../../components/button";

import { AiOutlineDelete } from "../../styles/Icons";

const EditProfile = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header>
          <div>
            <Link to="/home">{"< Home "}</Link>

            <h3>Gerenciar conta</h3>
          </div>

          <Button>
            Excluir conta
            <AiOutlineDelete size={20} />
          </Button>
        </Header>

        <Content>
          <Form>
            <Row>
              <ContentRow>
                <label htmlFor="">Nome</label>
                <Input name="name" required />
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Email</label>
                <Input name="email" required />
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Nova Senha</label>
                <Input name="password" type="password" required />
              </ContentRow>
              <Input type="hidden" name="id" defaultValue={1 || undefined} />
            </Row>
            <Buttons>
              <Button type="submit">Editar Dados</Button>
              <Link to="/home">Cancelar</Link>
            </Buttons>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default EditProfile;
