// @flow
import React, { Fragment } from "react";
import Header from "./../../components/header/header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./index.css";
import PanToolIcon from "@mui/icons-material/PanTool";
import AddchartIcon from "@mui/icons-material/Addchart";
import GavelIcon from "@mui/icons-material/Gavel";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import Typography from "@mui/material/Typography";

const index = () => {
  const handleTypeRequest = (type) => {
    if (type === "search") {
        window.location = "/search";
    } else {
      localStorage.setItem("RequestType", type);
      window.location = "/request";
    }
  };

  return (
    <>
      <Fragment>
        <Header></Header>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="title-1">Hacer seguimiento a solicitud</span>
            </div>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "5px",
              marginBottom: "50px",
            }}
          >
            <Grid item xs={7}>
              <Box
                className="box-types"
                component="span"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  borderRadius: "10px",
                  height: "120px",
                  userSelect: "none",
                  backgroundColor: "#e9e9e9",
                }}
                onClick={(e) => handleTypeRequest("search", e)}
              >
                <div className="icon">
                  <ScreenSearchDesktopIcon sx={{ fontSize: 60 }} />
                </div>
                <div className="content">
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Puedes hacer seguimiento a la respuesta de la PQRSD
                    ingresando el código o radicado.
                  </Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
          <div className="row">
            <div className="col-12">
              <span className="title-1">
                Seleccione el tipo de solicitud que desea registrar
              </span>
            </div>
          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "5px",
              marginBottom: "50px",
            }}
          >
            <Grid item xs={6}>
              <Box
                className="box-types"
                component="span"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  borderRadius: "10px",
                  height: "120px",
                  userSelect: "none",
                }}
                onClick={(e) => handleTypeRequest("PE", e)}
              >
                <div className="icon">
                  <PanToolIcon sx={{ fontSize: 45 }} />
                </div>
                <div className="content">
                  <span className="title-2 padding-5">Petición</span>
                  <span className="info-small padding-5">
                    Es el derecho fundamental que tiene toda persona a presentar
                    solicitudes respetuosas a las autoridades por motivos de
                    interés general o particular y a obtener su pronta
                    resolución
                  </span>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className="box-types"
                component="span"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  borderRadius: "10px",
                  height: "120px",
                  userSelect: "none",
                }}
                onClick={(e) => handleTypeRequest("QJ", e)}
              >
                <div className="icon">
                  <AddchartIcon sx={{ fontSize: 45 }} />
                </div>
                <div className="content">
                  <span className="title-2 padding-3">Queja</span>
                  <span className="info-small padding-3">
                    Es la manifestación de protesta, censura, descontento o
                    inconformidad que formula una persona en relación con una
                    conducta que considera irregular de uno o varios servidores
                    públicos en desarrollo de sus funciones
                  </span>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className="box-types"
                component="span"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  borderRadius: "10px",
                  height: "120px",
                  userSelect: "none",
                }}
                onClick={(e) => handleTypeRequest("RC", e)}
              >
                <div className="icon">
                  <DriveFileRenameOutlineIcon sx={{ fontSize: 45 }} />
                </div>
                <div className="content">
                  <span className="title-2 padding-3">Reclamo</span>
                  <span className="info-small padding-3">
                    Es el derecho que tiene toda persona de exigir, reivindicar
                    o demandar una solución, ya sea por motivo general o
                    particular, referente a la prestación indebida de un
                    servicio o a la falta de atención de una solicitud.
                  </span>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className="box-types"
                component="span"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  borderRadius: "10px",
                  height: "120px",
                  userSelect: "none",
                }}
                onClick={(e) => handleTypeRequest("SG", e)}
              >
                <div className="icon">
                  <LightbulbIcon sx={{ fontSize: 45 }} />
                </div>
                <div className="content">
                  <span className="title-2 padding-3">Sugerencia</span>
                  <span className="info-small padding-3">
                    Es la manifestación de una idea o propuesta para mejorar el
                    servicio o la gestión de la entidad.
                  </span>
                </div>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                className="box-types"
                component="span"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  borderRadius: "10px",
                  height: "120px",
                  userSelect: "none",
                }}
                onClick={(e) => handleTypeRequest("DN", e)}
              >
                <div className="icon">
                  <GavelIcon sx={{ fontSize: 45 }} />
                </div>
                <div className="content">
                  <span className="title-2 padding-3">Denuncia</span>
                  <span className="info-small padding-3">
                    Es la puesta en conocimiento ante una autoridad competente
                    de una conducta posiblemente irregular, para que se adelante
                    la correspondiente investigación penal, disciplinaria,
                    fiscal, administrativa - sancionatoria o ético profesional.
                  </span>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    </>
  );
};

export default index;
