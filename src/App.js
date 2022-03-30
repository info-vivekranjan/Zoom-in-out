import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import zoomUI from "./assets/zoomUI.png";
import largeImg from "./assets/largeLogo.jpeg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
function App() {
  const [open, setOpen] = React.useState(false);
  const [scaleImg, setScaleImg] = React.useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const zoomIn = () => {
    setScaleImg(scaleImg * 1.5);
  };
  const zoomOut = () => {
    setScaleImg(scaleImg / 1.5);
  };
  const resetZoom = () => {
    setScaleImg(1);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e7973e",
      },
      secondary: {
        main: "#11cb5f",
      },
      lightBlack: {
        main: "rgba(0, 0, 0, 0.6)",
      },
    },
  });

  return (
    <div>
      <h2>Zooom In/Out</h2>

      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        {open && (
          <div className="scale-btn-cont">
            <ThemeProvider theme={theme}>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                color="lightBlack"
              >
                <Tooltip title="Zoom out" placement="top">
                  <Button
                    onClick={() => zoomOut()}
                    id="btnGroup"
                    size="small"
                  >
                    <HorizontalRuleIcon sx={{ color: "white" }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Reset zoom" placement="top">
                  <Button
                    onClick={() => resetZoom()}
                    id="btnGroup"
                    size="small"
                  >
                    <ZoomOutIcon sx={{ color: "white" }} />
                  </Button>
                </Tooltip>
                <Tooltip title="Zoom in" placement="top">
                  <Button
                    onClick={() => zoomIn()}
                    id="btnGroup"
                    size="small"
                  >
                    <AddIcon sx={{ color: "white" }} />
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </ThemeProvider>
          </div>
        )}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <img
                src={largeImg}
                alt="test"
                style={{ transform: `scale(${scaleImg})`, width: "550px" }}
              />
            </Box>
          </Fade>
        </Modal>
      </div>
      <Box style={{ textAlign: "center" }}>
        <h1>Demo</h1>
        <img src={zoomUI} alt="Demo" style={{ width: "50%" }} />
      </Box>
    </div>
  );
}
export default App;
