import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Carrosel from "./components/Carrosel";
import FirsSection from "./components/FirsSection";

// informaçoes do redux
import { Provider } from "react-redux";
import store from "../src/redux/store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
        </Router>

        <Carrosel />
        <FirsSection />
      </Container>
    </Provider>
  );
};

export default App;
