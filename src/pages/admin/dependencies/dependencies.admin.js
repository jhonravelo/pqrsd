import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TextFieldsIcon from "@mui/icons-material/TextFields";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DependenciesAdmin = () => {
  const toolbarOptions = ["Search"];
  const [dependencies, setDependencies] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [FormData, setFormData] = useState({
    Dependencia: "",
    Correo: "",
  });

  let { Dependencia, Correo } = FormData;

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const save = () => {
    axios
      .post("http://fk-pqrsd.siipc.co/dependencies", FormData)
      .then(({ data }) => {
        handleClose();
        setLoading(true ? true : false);
      })
      .catch(({ response }) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    fetch("http://fk-pqrsd.siipc.co/dependencies/all")
      .then((res) => res.json())
      .then((res) => setDependencies(res.data.dependencies));
  }, [loading]);

  return (
    <>
      <div className="control-pane">
        <Button variant="contained" onClick={handleOpen}>
          Nueva Dependencia
        </Button>
        <div className="control-section row">
          <Divider>
            <h3>Listado de dependencias</h3>
          </Divider>
          <GridComponent
            dataSource={dependencies}
            toolbar={toolbarOptions}
            allowPaging={true}
            pageSettings={{ pageSize: 10, pageCount: 5 }}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="dependencia"
                headerText="Dependencia"
                width="170"
              ></ColumnDirective>
              <ColumnDirective
                field="detalle"
                headerText="Detalle"
                width="150"
              ></ColumnDirective>
              <ColumnDirective
                field="correo"
                headerText="Correo"
                width="180"
                textAlign="Right"
              />
            </ColumnsDirective>
            <Inject services={[Toolbar, Page]} />
          </GridComponent>
        </div>
      </div>
      <div>
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
              <Divider>
                <h5>Gestion Dependencias</h5>
              </Divider>
              <div className="row">
                <div className="col-6">
                  <TextField
                    id="dependencies"
                    label="Dependencia"
                    name="Dependencia"
                    value={Dependencia}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <TextFieldsIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </div>
                <div className="col-6">
                  <TextField
                    id="correo"
                    name="Correo"
                    value={Correo}
                    onChange={handleChange}
                    label="Correo"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </div>
              </div>

              <Divider>.</Divider>
              <Button variant="contained" onClick={save}>
                Guardar
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default DependenciesAdmin;
