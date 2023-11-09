import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import AuthProvider from "./contexts/auth";
import GlobalStyles from "./styles/GlobalStyles";
import ComponentProvider from "./contexts/showcomponent";
import { Provider } from "react-redux";
import store from './sagas/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AuthProvider>
        <ComponentProvider>
          <Router>
            <Routes />
          </Router>
        </ComponentProvider>
      </AuthProvider>
      <GlobalStyles />
    </div>
  </Provider>
  );
}

export default App;
