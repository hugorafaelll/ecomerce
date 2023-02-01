import { Card } from "@material-ui/core";
import React from "react";
import CardFirstColums from "./CardFirstColums";

import tenis from "../assets/tenis.jpg";
import whey from "../assets/whey.jpg";
import camiseta from "../assets/camiseta.jpg";
import notebook from "../assets/notebook.png";

function FirsSection() {
  return (
    <div className="firstMenu">
      <h1 style={{ justifyContent: "center" }}>Ofertas do dia</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
        }}
      >
        <CardFirstColums image={tenis} name={"Tenis"} />
        <CardFirstColums image={whey} name={"Suplementos"} />
        <CardFirstColums image={camiseta} name={"T-shirts"} />
        <CardFirstColums image={notebook} name={"Notebooks"} />
      </div>
    </div>
  );
}

export default FirsSection;
