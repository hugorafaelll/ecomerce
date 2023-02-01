import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Exemplo from "./components/Exemplo";
import CardPadrao from "./components/CardFirstColums";
import FirsSection from "./components/FirsSection";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
      </Router>

      <Exemplo />
      <FirsSection />
    </Container>
  );
};

export default App;
