import { useState } from "react";
import { Container, Item } from "./styles";

import NextEvents from "../../pages/next-events";
import CreatedEvents from "../../pages/created-events";
import ActuallyEvents from "../../contexts/actuallyEvents";

import { useShowComponent } from "../../contexts/showcomponent";

const Header = () => {
  const [tabActive, setTabActive] = useState(0);
  const { setShowComponent } = useShowComponent();

  const tabs = [
    {
      id: 0,
      text: "Em andamento",
      component: <ActuallyEvents />,
    },
    {
      id: 1,
      text: "Próximos",
      component: <NextEvents />,
    },
    {
      id: 2,
      text: "Concluidos",
      component: <CreatedEvents />,
    },
  ];

  function renderComponent(id, component) {
    setTabActive(id);
    setShowComponent(component);
  }

  const tabItem = tabs.map((tab) => {
    return (
      <div key={tab.id}>
        <li>
          <Item
            onClick={() => renderComponent(tab.id, tab.component)}
            className="active"
            active={tabActive === tab.id ? true : false}
          >
            {tab.text}
          </Item>
        </li>
      </div>
    );
  });

  return (
    <Container>
      <h4>Tarefas</h4>
      <ul>{tabItem}</ul>
    </Container>
  );
};
export default Header;
