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
              readonly
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
              readonly
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
              readonly
              placeholder="Tipo Persona"
              id="filled-hidden-label-small"
              value={dataInfo?.typePerson_name ? dataInfo?.typePerson_name : ""}
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
            readonly
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
              readonly
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
              readonly
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
            readonly
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
              readonly
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
              readonly
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
            readonly
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
              readonly
              placeholder="Celular"
              id="filled-hidden-label-small"
              value={dataInfo?.telefonoMovil ? dataInfo?.telefonoMovil : ""}
              size="small"
              sx={{ width: "100%" }}
            />
          </Typography>
        </div>
      </div>
      <br/>
      <Divider sx={{ marginBottom: "10px", marginTop: "20px" }}>
        DATOS SOLICITUD
      </Divider>
      <div className="row">
        <div className="col-6">
          <Typography variant="subtitle2">Tipo Solicitud </Typography>
          <TextField
            hiddenLabel
            readonly
            placeholder="Tipo Solicitud"
            id="filled-hidden-label-small"
            value={dataInfo?.request_name ? dataInfo?.request_name : ""}
            size="small"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <Typography variant="subtitle2" gutterBottom component="div">
            Medio Respuesta{" "}
            <TextField
              hiddenLabel
              readonly
              placeholder="Medio Respuesta"
              id="filled-hidden-label-small"
              value={dataInfo?.typeAnswer_name ? dataInfo?.typeAnswer_name : ""}
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
              readonly
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
      <br/>
      <Divider sx={{ marginBottom: "10px", marginTop: "20px" }}>
        DOCUMENTOS ADJUNTOS
      </Divider>
      

    </>
  );
};

export default InfoRequest;
