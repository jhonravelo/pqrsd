import React from "react";
import { Divider, Typography, TextField } from "@mui/material";

const InfoRequest = ({ dataInfo }) => {
  return (
    <>
      <Divider sx={{ marginBottom: "10px" }}>DATOS BASICOS</Divider>
      <div className="row">
        <div className="col-4">
          <Typography variant="subtitle2" gutterBottom component="div">
            Nombre Completo{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Nombre Completo"
              id="filled-hidden-label-small"
              value={dataInfo?.nombre ? dataInfo?.nombre : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
        <div className="col-4">
          <Typography variant="subtitle2" gutterBottom component="div">
            Identificacion{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Identificacion"
              id="filled-hidden-label-small"
              value={dataInfo?.identificacion ? dataInfo?.identificacion : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
        <div className="col-4">
          <Typography variant="subtitle2" gutterBottom component="div">
            Tipo Persona{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Tipo Persona"
              id="filled-hidden-label-small"
              value={dataInfo?.tipoPersona ? dataInfo?.tipoPersona : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Typography variant="subtitle2">Pais </Typography>
          <TextField
            hiddenLabel
            disabled
            placeholder="Pais"
            id="filled-hidden-label-small"
            value={dataInfo?.paisDireccion ? dataInfo?.paisDireccion : ""}
            size="small"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="col-4">
          <Typography variant="subtitle2" gutterBottom component="div">
            Departamento{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Departamento"
              id="filled-hidden-label-small"
              value={dataInfo?.estadoDireccion ? dataInfo?.estadoDireccion : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
        <div className="col-4">
          <Typography variant="subtitle2" gutterBottom component="div">
            Ciudad{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Ciudad"
              id="filled-hidden-label-small"
              value={
                dataInfo?.municipioDireccion ? dataInfo?.municipioDireccion : ""
              }
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Typography variant="subtitle2">Direccion </Typography>
          <TextField
            hiddenLabel
            disabled
            placeholder="Direccion"
            id="filled-hidden-label-small"
            value={dataInfo?.direccion ? dataInfo?.direccion : ""}
            size="small"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <Typography variant="subtitle2" gutterBottom component="div">
            Correo Electronico{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Correo Electronico"
              id="filled-hidden-label-small"
              value={dataInfo?.email ? dataInfo?.email : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Typography variant="subtitle2" gutterBottom component="div">
            Barrio{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Barrio"
              id="filled-hidden-label-small"
              value={dataInfo?.barrio ? dataInfo?.barrio : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
        <div className="col-4">
          <Typography variant="subtitle2">Telefono </Typography>
          <TextField
            hiddenLabel
            disabled
            placeholder="Telefono"
            id="filled-hidden-label-small"
            value={dataInfo?.telefonoFijo ? dataInfo?.telefonoFijo : ""}
            size="small"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="col-4">
          <Typography variant="subtitle2" gutterBottom component="div">
            Celular{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Celular"
              id="filled-hidden-label-small"
              value={dataInfo?.telefonoMovil ? dataInfo?.telefonoMovil : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
      </div>
      <Divider sx={{ marginBottom: "10px", marginTop: "20px" }}>
        SOLICITUD
      </Divider>
      <div className="row">
        <div className="col-6">
          <Typography variant="subtitle2">Tipo Solicitud </Typography>
          <TextField
            hiddenLabel
            disabled
            placeholder="Tipo Solicitud"
            id="filled-hidden-label-small"
            value={dataInfo?.tipoPqrsd ? dataInfo?.tipoPqrsd : ""}
            size="small"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <Typography variant="subtitle2" gutterBottom component="div">
            Medio Respuesta{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Medio Respuesta"
              id="filled-hidden-label-small"
              value={dataInfo?.tipoRespuesta ? dataInfo?.tipoRespuesta : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Typography variant="subtitle2" gutterBottom component="div">
            Descripcion{" "}
            <TextField
              hiddenLabel
              disabled
              placeholder="Descripcion"
              id="filled-hidden-label-small"
              value={dataInfo?.descripcion ? dataInfo?.descripcion : ""}
              size="small"
              sx={{ width: "100%" }}
              multiline
            />
          </Typography>
        </div>
      </div>
    </>
  );
};

export default InfoRequest;
