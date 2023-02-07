import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

function AmountInput() {
  const [value, setValue] = useState(1);

  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => setValue(value - 1);

  return (
    <TextField
      label="Quantidade"
      value={value}
      type="number"
      style={{ width: "150px" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleDecrement}>
              <Remove />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleIncrement}>
              <Add />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default AmountInput;
