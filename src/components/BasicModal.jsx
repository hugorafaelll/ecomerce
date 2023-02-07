import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import generic from "../assets/generic.png";
import Grid from "@material-ui/core/Grid";
import Rating from "@mui/material/Rating";
import { BsCart2 } from "react-icons/bs";
import { ImTruck } from "react-icons/im";
import AmountInput from "./AmountInput";
import Exemplo from "./Exemplo";
// yarn add @emotion/react @emotion/styled  @mui/material

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1300px",
  height: "620px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={8}>
              <Card
                sx={{
                  padding: "10px",
                  width: " 800px",
                  height: "600px",
                }}
              >
                <CardMedia
                  component="img"
                  alt="descrição da imagen"
                  height="auto"
                  src={generic}
                  sx={{
                    position: "relative",
                    zIndex: 0,
                    width: "800px",
                    height: "600px",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Typography id="modal-modal-title" variant="h2" component="h2">
                Title
              </Typography>
              <Rating name="read-only" value={4} sx={{ mb: 3 }} />
              <Typography id="modal-modal-description" sx={{ mb: 10 }}>
                Description Description Description Description Description
                Description Description Description Description Description
                Description Description Description Description Description
                Description Description Description Description Description
              </Typography>
              <Typography
                color="green"
                variant="h6"
                sx={[
                  Typography && {
                    "&:hover": { color: "blue" },
                    my: 4,
                  },
                ]}
              >
                <ImTruck /> Frete Gratis
              </Typography>
              <AmountInput />

              <Typography color="text.secondary" variant="h5" sx={{ my: 5 }}>
                R$ : 199,36
              </Typography>
              <Button
                color="primary"
                size="large"
                variant="filled"
                sx={[
                  Button && {
                    "&:hover": { backgroundColor: "yellow" },
                    border: "1px solid black",
                    mr: 3,
                  },
                ]}
              >
                <BsCart2 style={{ fontSize: "1.30rem", paddingRight: "8px" }} />{" "}
                Adicionar Ao Carrinho
              </Button>
              <Button
                color="primary"
                size="large"
                variant="filled"
                sx={[
                  Button && {
                    "&:hover": { backgroundColor: "yellow" },
                    border: "1px solid black",
                  },
                ]}
              >
                Comprar Agora
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}