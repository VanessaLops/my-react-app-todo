import { useState } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Input from "../../components/input";
import Select from "../../components/select";
import Button from "../../components/button";
import { createTaskRequest } from "../../sagas/actions";
import { useHistory } from "react-router-dom";
import {
  Container,
  Wrapper,
  Header,
  Content,
  Row,
  ContentRow,
  Buttons,
} from "./styles.jsx";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const options = [
  { label: "Evento", value: "Evento" },
  { label: "Compromisso", value: "Compromisso" },
  { label: "Outros", value: "Outros" },
];

const CreateEvent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [taskData, setTaskData] = useState({
    name: "",
    type: options?.value,
    date: "",
    description: "",
    local: "",
    userid: uuidv4(),
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    dispatch(createTaskRequest(taskData));
    setSuccessMessage("Tarefa criada com sucesso!");
    history.push("/");
  };

  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header>
          <Link to="/home">{"< Home "}</Link>
          <h3>Criar Nova Tarefa</h3>
        </Header>

        <Content>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <ContentRow>
                <label htmlFor="">Nome</label>
                <Input
                  name="name"
                  required
                  value={taskData.name}
                  onChange={handleInputChange}
                />
              </ContentRow>

              <ContentRow>
                <label htmlFor="type">Tipo</label>
                <Select
                  name="type"
                  required
                  value={taskData.type}
                  onChange={handleInputChange}
                >
                  {options?.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </ContentRow>

              <ContentRow>
                <label htmlFor="date">Data</label>
                <Input
                  name="date"
                  required
                  type="date"
                  value={taskData.date}
                  onChange={handleInputChange}
                />
              </ContentRow>
            </Row>

            <Row>
              <ContentRow>
                <label htmlFor="">Descrição</label>
                <Input
                  name="description"
                  required
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
                  required
                  value={taskData.local}
                  onChange={handleInputChange}
                />
              </ContentRow>

              <Input type="hidden" name="userid" value={1} />
            </Row>

            <Buttons>
              <Button type="submit">Criar Tarefa</Button>

              <Link to="/home">Cancelar</Link>
            </Buttons>
          </Form>
          {successMessage && <div>{successMessage}</div>}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CreateEvent;
