import React, { useState, useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  FormControl,
  Select,
  Button,
  Divider,
  Box,
  Backdrop,
  Fade,
  OutlinedInput,
  MenuItem,
  Typography,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Modal } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import InfoRequest from "../../../components/info-request/info-request";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const location = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  esES
);

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

function getStyles(name, dependencia, theme) {
  return {
    fontWeight:
      dependencia.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const RequestsAdmin = () => {
  const form = useRef();
  const theme = useTheme();
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState({});
  const [dependenciesSelected, setDependencia] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [isSelectorOpen, setisSelectorOpen] = useState(false);

  // Modal Boostrad
  const [showInformation, setShowInformation] = useState(false);

  const handleShowModalInformation = () => {
    setShowInformation(true);
  };
  const handleCloseModalInformation = () => setShowInformation(false);

  // Modal React Material
  const [showAssignment, setOpenAssignment] = useState(false);

  const handleOpenModalAssignment = (info) => {
    let thisdata = [];
    logs.map((e) =>
      e.idSolicitud === info?.id ? thisdata.push(Number(e.dependencia)) : false
    );

    console.log(thisdata);
    setDependencia(thisdata);
    setOpenAssignment(true);
  };
  const handleCloseModalAssignment = () => {
    setDependencia([]);
    setOpenAssignment(false);
  };

  // Dialog Finish Request
  const [openDialogFinish, setOpenDialogFinish] = useState(false);

  const handleClickOpenDialogFinish = (params) => {
    setOpenDialogFinish(params);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDependencia(value);
  };

  const handleStatus = () => {
    fetchData(
      "http://fk-pqrsd.siipc.co/request/status",
      {
        id: request?.id,
        statu: "FN",
      },
      "PATCH"
    ).then((data) => {
      setLoading(true ? true : false);
      handleClickOpenDialogFinish(false);
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 10, sortable: true },
    { field: "radicado", headerName: "Radicado", width: 130 },
    { field: "identificacion", headerName: "Identificacion", width: 120 },
    { field: "nombre", headerName: "Nombre Completo", minWidth: 150, flex: 1 },
    { field: "fecha", headerName: "Fecha", width: 150 },
    { field: "request_name", headerName: "PQRSD", width: 170 },
    {
      field: "status_name",
      headerName: "Estado",
      width: 110,
      renderCell: (params) => {
        return (
          <>
            <Chip
              label={params.row.status_name}
              size="small"
              color={
                params.row.estado === "RE"
                  ? "primary"
                  : params.row.estado === "TR"
                  ? "warning"
                  : "success"
              }
            />
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Acciones",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        let thisRow;
        const api = params.api;

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach((c) => {
            if (c.field === "id") {
              thisRow = requests.filter(
                (i) => i.id === params.getValue(params.id, "id")
              );
            }
          });

        const onClick = (param) => {
          setRequest(thisRow[0]);
          if (param === 1) {
            handleShowModalInformation();
          } else if (param === 2) {
            handleOpenModalAssignment(thisRow[0]);
          } else if (param === 3) {
            handleClickOpenDialogFinish(true);
          }
        };
        return (
          <>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Información"
            >
              <IconButton onClick={(e) => onClick(1)}>
                <InfoIcon />
              </IconButton>
            </Tooltip>

            <IconButton
              title="Asignación"
              disabled={thisRow[0]?.estado === "FN" ? true : false}
              onClick={(e) => onClick(2)}
            >
              <PersonAddAltIcon />
            </IconButton>

            <IconButton
              title="Finalizar"
              disabled={thisRow[0]?.estado === "FN" ? true : false}
              onClick={(e) => onClick(3)}
            >
              <AssignmentTurnedInIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const saveAssign = () => {
    for (const key in dependenciesSelected) {
      const dependencie = dependenciesSelected[key];

      fetchData(
        "http://fk-pqrsd.siipc.co/request/dependencies/update",
        {
          id: request?.id,
          dependencie: dependencie,
        },
        "POST"
      ).then((data) => {
        console.log(data);
      });
    }
    setLoading(true ? true : false);
    handleCloseModalAssignment();
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://fk-pqrsd.siipc.co/request/all");
      const data = await response.json();
      setRequests(data.data.requests);
    };

    const fetchDependencies = async () => {
      const response = await fetch("http://fk-pqrsd.siipc.co/dependencies/all");
      const data = await response.json();
      setDependencies(data.data.dependencies);
    };

    const fetchLogs = async () => {
      const response = await fetch("http://fk-pqrsd.siipc.co/request/logs");
      const data = await response.json();
      setLogs(data.logs);
    };

    fetchData();
    fetchDependencies();
    fetchLogs();
  }, [loading]);

  async function fetchData(url = "", data = {}, method) {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

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
      <div style={{ textAlign:"center", paddingTop: "20px" }}>
        <Typography variant="h6" gutterBottom component="div">
          Listado Solicitudes
        </Typography>
      </div>
      <div style={{ height: 400, width: "100%", paddingTop: "20px" }}>
        {/* Table List Request */}
        <ThemeProvider theme={location}>
          <DataGrid
            rows={requests}
            columns={columns}
            pageSize={5}
            initialState={{
              sorting: {
                sortModel: [
                  {
                    field: "id",
                    sort: "desc",
                  },
                ],
              },
            }}
          />
        </ThemeProvider>
      </div>
      <div>
        {/* Modal Information */}
        <Modal
          show={showInformation}
          onHide={handleCloseModalInformation}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Detalle de la PQRSD No. {request.radicado}{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InfoRequest dataInfo={request} />
          </Modal.Body>
        </Modal>

        {/* Modal Assignment*/}
        <Modal
          show={showAssignment}
          onHide={handleCloseModalAssignment}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Asignacion Dependencias</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <form ref={form}>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    Dependencias{" "}
                  </Typography>
                  <FormControl sx={{ m: 1, width: "100%" }}>
                    <Select
                      id="demo-multiple-chip"
                      multiple
                      size="small"
                      open={isSelectorOpen}
                      value={dependenciesSelected}
                      onChange={handleChange}
                      onClick={(e) => {
                        setisSelectorOpen(!isSelectorOpen);
                      }}
                      input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) =>
                            dependencies.map((dependencie) =>
                              value === dependencie.id ? (
                                <Chip
                                  key={value}
                                  label={dependencie.dependencia}
                                />
                              ) : (
                                false
                              )
                            )
                          )}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      <MenuItem disabled value="">
                        <em>Placeholder</em>
                      </MenuItem>
                      {dependencies.map((data) => (
                        <MenuItem
                          key={data.id}
                          value={data.id}
                          style={getStyles(
                            data.dependencia,
                            dependenciesSelected,
                            theme
                          )}
                        >
                          {data.dependencia}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </form>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModalAssignment}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={saveAssign}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Dialog Finish Request */}
        <Dialog
          open={openDialogFinish}
          onClose={(e) => handleClickOpenDialogFinish(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"¿Seguro desea finalizar esta solicitud?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Finalizar solicitud
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={(e) => handleClickOpenDialogFinish(false)}>
              Cancelar
            </Button>
            <Button onClick={handleStatus} autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default RequestsAdmin;
