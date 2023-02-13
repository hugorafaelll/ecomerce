import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Carrosel from "./components/Carrosel";
import FirsSection from "./components/FirsSection";

import "./App.css";

const App = () => {
  return (
    <Container maxWidth="xl">
      <Router>
        <Header />
      </Router>

      <Carrosel />
      <FirsSection />
    </Container>
  );
};

export default App;
