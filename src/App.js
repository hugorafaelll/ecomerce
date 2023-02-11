import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Exemplo from "./components/Exemplo";
import FirsSection from "./components/FirsSection";
import { Provider } from "react-redux";
import store from "./components/redux/store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
        </Router>

        <Exemplo />
        <FirsSection />
      </Container>
    </Provider>
  );
};

export default App;
