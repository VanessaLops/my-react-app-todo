
import { Container } from "./styles";

import nodata from "../../assets/no-data.svg";

const EmptyList = () => {
  return (
    <Container>
      <img src={nodata} alt="SEM TAREFAS" />

      <p>Ops, você não tem nehuma no momento</p>
    </Container>
  );
};

export default EmptyList;
