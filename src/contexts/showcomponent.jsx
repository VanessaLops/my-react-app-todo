import { createContext, useState, useContext } from "react";
import ActuallyComponent from "./actuallyEvents";

const ComponentContextSidebar = createContext({});

const ShowComponent = ({ children }) => {
  const [showComponent, setShowComponent] = useState(<ActuallyComponent />);
  const [render, setRender] = useState(false);

  return (
    <ComponentContextSidebar.Provider
      value={{ component: showComponent, setShowComponent, render, setRender }}
    >
      {children}
    </ComponentContextSidebar.Provider>
  );
};

export function useShowComponent() {
  const context = useContext(ComponentContextSidebar);

  if (!context) {
    throw new Error(
      "useShowComponent must be used within an ComponentProvider"
    );
  }

  return context;
}

export default ShowComponent;
