import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

import { useShowComponent } from "../../contexts/showcomponent";
import { Container, Content, Wrapper } from "./styles";

export default function Home() {
  const { component } = useShowComponent();
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <Content>{component}</Content>
      </Wrapper>
    </Container>
  );
}
