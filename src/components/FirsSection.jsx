import { Card } from "@material-ui/core";
import React from "react";

import tenis from "../assets/tenis.jpg";
import whey from "../assets/whey.jpg";
import camiseta from "../assets/camiseta.jpg";

function FirsSection() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Card image={tenis} name={"Tenis"} />
    </div>
  );
}

export default FirsSection;
