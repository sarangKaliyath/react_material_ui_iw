import "./App.css";
import { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Grid,
  styled,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    setOpen(false);
    setTimeout(() => {
      alert("Successfully Deleted");
    });
  };

  return (
    <div className="App">
      <Button
        variant="outlined"
        size="medium"
        color="success"
        startIcon={<DeleteIcon />}
        onClick={() => {
          setOpen(true);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
            <Button
              color="warning"
              variant="contained"
              onClick={() => {
                handleDelete();
              }}
            >
              Confirm Delete
            </Button>
          </Typography>
        </Box>
      </Modal>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((el) => {
            return (
              <Grid key={el} item xs={6} md={8} xl={4} sm={5} >
                <Item>xs=6 md=8</Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
