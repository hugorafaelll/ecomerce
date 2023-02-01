import { Card } from "@material-ui/core";
import React from "react";
import CardFirstColums from "./CardFirstColums";

import tenis from "../assets/tenis.jpg";
import whey from "../assets/whey.jpg";
import camiseta from "../assets/camiseta.jpg";
import notebook from "../assets/notebook.png";
import oferta from "../assets/oferta relampago.png";
import Fakeshop from "./Fakeshop";

function FirsSection() {
  return (
    <div className="firstMenu">
      <img
        src={oferta}
        alt="texto"
        style={{
          paddingTop: "20px",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardFirstColums image={tenis} name={"Tenis"} />
        <CardFirstColums image={whey} name={"Suplementos"} />
        <CardFirstColums image={camiseta} name={"T-shirts"} />
        <CardFirstColums image={notebook} name={"Notebooks"} />
      </div>
      <hr style={{ marginTop: "30px" }} />
      <Fakeshop />
    </div>
  );
}

export default FirsSection;
