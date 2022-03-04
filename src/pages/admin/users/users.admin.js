import React, { useState, useEffect } from "react";
import * as ReactDom from 'react-dom';
import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Inject
} from "@syncfusion/ej2-react-grids";
import { Button, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
enableRipple(true);

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

const elementAlight = {
  display: "flex",
  justifyContent: "space-between",
  padding: 10
}

const UsersAdmin = () => {
  const toolbarOptions = ["Search", "Print"];
  const searchOptions = {
    ignoreCase: true,
    operator: 'contains',
    label: "Buscar"
  };
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [FormData, setFormData] = useState({
    username: "",
    password: "",
  });

  let { username, password } = FormData;

  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const saveUser = () => {
    axios
      .post("http://fk-pqrsd.siipc.co/user", FormData)
      .then(({ data }) => {
        handleClose();
        setLoading(true ? true : false);
      })
      .catch(({ response }) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://fk-pqrsd.siipc.co/user/all");
      const data = await response.json();
      setUsers(data.data.users);
    };

    fetchData();
  }, [loading]);

  return (
    <>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" disabled>
            Admin
          </Link>
          <Link underline="hover" color="inherit" disabled>
            Home
          </Link>
          <Typography color="text.primary">Listado</Typography>
        </Breadcrumbs>
      </div>
      <Box sx={{ minWidth: 275, width: "100%" }}>
        <Card variant="outlined" sx={{ padding: "10px", width: "100%" }}>
          <div style={elementAlight}>
            <Typography variant="h6" gutterBottom component="div">
              Listado usuarios
            </Typography>
            <ButtonComponent cssClass='e-custom' onClick={handleOpen}>Nuevo usuario</ButtonComponent>
          </div>
          <div className="control-section row">
            <GridComponent
              dataSource={users}
              toolbar={toolbarOptions}
              searchSettings={searchOptions}
              allowPaging={true}
              pageSettings={{ pageSize: 10, pageCount: 5 }}
            >
              <ColumnsDirective>
                <ColumnDirective
                  field="usuario"
                  headerText="Usuario"
                  width="170"
                ></ColumnDirective>
                <ColumnDirective
                  field="esAdmin"
                  headerText="esAdmin"
                  width="150"
                ></ColumnDirective>
                <ColumnDirective
                  field="estado"
                  headerText="estado"
                  width="180"
                  textAlign="Right"
                />
              </ColumnsDirective>
              <Inject services={[Toolbar, Page]} />
            </GridComponent>
          </div>
        </Card>
      </Box>
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
                <h5>Gestion Usuarios</h5>
              </Divider>
              <div className="row">
                <div className="col-6">
                  <TextField
                    id="username"
                    label="Usuario"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </div>
                <div className="col-6">
                  <TextField
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Contraseña"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </div>
              </div>
              <Divider>.</Divider>
              <Button variant="contained" onClick={saveUser}>
                Guardar
              </Button>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default UsersAdmin;
