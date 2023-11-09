import { useState } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Input from "../../components/input";
import Button from "../../components/button";

import {
  Container,
  Wrapper,
  Header,
  Content,
  Row,
  ContentRow,
  Buttons,
} from "./styles";
import { editTaskRequest } from "../../sagas/actions";
import { connect, useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const EditEvent = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [successMessage, setSuccessMessage] = useState("");
  const [taskData, setTaskData] = useState({
    name: props?.location?.state.name || "",
    type: props?.location?.state.type || "",
    date: moment(props?.location?.state.date, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    ),
    description: props?.location?.state.description || "",
    local: props?.location?.state.local || "",
    userid: props?.location?.state.userid,
  });

  const handleSubmit = () => {
    dispatch(editTaskRequest(taskData));
    setSuccessMessage("Tarefa editada com sucesso!");
    history.push("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== "userid") {
      setTaskData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Container>
      <Form initialData={taskData} onSubmit={handleSubmit}>
        <Sidebar />
        <Wrapper>
          <Header>
            <div>
              <Link to="/home">{"< Home "}</Link>
              <h3>Editar evento: {props?.location?.state.name}</h3>
            </div>
          </Header>
          <Content>
            <Row>
              <ContentRow>
                <label htmlFor="">Nome</label>
                <Input
                  name="name"
                  value={taskData.name}
                  onChange={handleInputChange}
                />
              </ContentRow>
              <ContentRow>
                <label htmlFor="date">Data</label>
                <Input
                  name="date"
                  type="date"
                  value={taskData.date}
                  onChange={handleInputChange}
                  required
                />
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Descrição</label>
                <Input
                  name="description"
                  value={taskData.description}
                  onChange={handleInputChange}
                />
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Local</label>
                <Input
                  name="local"
                  value={taskData.local}
                  onChange={handleInputChange}
                />
              </ContentRow>
            </Row>
            {successMessage && <div>{successMessage}</div>}
            <Buttons>
              <Button type="submit">Salvar alterações</Button>
              <Link to="/home">Cancelar</Link>
            </Buttons>
          </Content>
        </Wrapper>
      </Form>
    </Container>
  );
};

export default connect()(EditEvent);
