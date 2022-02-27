import React, {
  useContext,
  useEffect,
  useCallback,
  useState,
  Fragment,
  useRef,
} from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Streetview from "@mui/icons-material/Streetview";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneIcon from "@mui/icons-material/Phone";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Customdroparea from "./../upload/uploadFile";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useHistory } from "react-router";

import { StepperDataContext } from "../../Contexts/StepperContext";

import FileInput from "../Inputs/FileInput";
import FileGridList from "../Inputs/File/FileGridList";
import * as yup from "yup";
import clsx from "clsx";
import SweetAlert from "../Alerts/SweetAlert";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const VALID_FILE_EXTENSIONS = ["pdf", "doc", "docx", "xls", "xlsx"];

const fileSchema = yup.array().of(
  yup.object({
    size: yup
      .number()
      // eslint-disable-next-line no-template-curly-in-string
      .test("fileSize", "${path}->Tamaño máximo: 5 MB", (value) => {
        return value <= 5012000;
      }),
    name: yup.string(),
    type: yup.string(),
    extension: yup
      .string()
      // eslint-disable-next-line no-template-curly-in-string
      .test("extension", "${path}->Archivo no permitido", (extension) =>
        VALID_FILE_EXTENSIONS.includes(extension)
      ),
    file: yup.mixed(),
  })
);

const convertBytesToMegaBytes = (bytes) =>
  Math.round((bytes / 1000000) * 100) / 100;
const MAX_TOTAL_FILE_SIZE = 50;

const FormRequest = () => {
  const [anonymousInputProps] = useRadioAnonymous("Anonymous");
  const [responseTypeInputProps] = useRadioResponseType("ResponseType");
  const { push } = useHistory();
  const classes = useStyles();
  const stepperData = useContext(StepperDataContext);
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("xs"));

  const initialFiles = stepperData.attachments || [];
  const [files, setFiles] = useState(initialFiles);
  const [totalSize, setTotalSize] = useState(
    initialFiles.reduce((total, file) => total + file.size, 0)
  );

  const [Captcha, setCaptcha] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const fileInputRef = useRef(null);

  let [FormDataa, setFormData] = useState({
    Anonymous: "ID",
    Department: "",
    City: "",
    GroupInterest: "",
    Date: "",
    Status: "",
    EthnicGroup: "",
    Inability: "",
    RequestType: "",
    PersonType: "",
    IdentificationType: "",
    Identification: null,
    FirstName: "",
    SecondName: "",
    SurName: "",
    SecondSurname: "",
    Email: "",
    Phone: null,
    Cell: null,
    Address: "",
    Country: "",
    ResponseType: "",
    Description: "",
    AcceptPolicy: "",
    Neighborhood: "",
    allAttachments: []
  });

  let {
    RequestType,
    Anonymous,
    PersonType,
    IdentificationType,
    Identification,
    FirstName,
    SecondName,
    SurName,
    SecondSurname,
    Email,
    Phone,
    Cell,
    Address,
    Country,
    Department,
    City,
    ResponseType,
    Inability,
    EthnicGroup,
    Description,
    AcceptPolicy,
    Neighborhood,
    allAttachments
  } = FormDataa;

  const handleSend = () => {
    fetch("http://fk-pqrsd.siipc.co/request/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormDataa),
    })
      .then((res) => res.text())
      .then((res) => {
        let variant = "success";
        enqueueSnackbar("Solicitud Enviada Correctamente!", { variant });
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          push("/");
        }, 1500);
      });

    // console.log(files);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...FormDataa,
      [e.target.name]: e.target.value,
    });
  };

  const onChange = (value) => {
    setCaptcha(value);
  };

  const loadDataOnlyOnce = () => {
    const type = localStorage.getItem("RequestType");
    setFormData({
      ...FormDataa,
      RequestType: type,
    });
  };

  const handleDeleteFile = useCallback(
    (fileIndex) => {
      const filteredFiles = files.filter((_file, index) => index !== fileIndex);

      const totalFilesSize = filteredFiles.reduce(
        (total, file) => total + file.size,
        0
      );

      setFiles(filteredFiles);
      setTotalSize(convertBytesToMegaBytes(totalFilesSize));
      fileInputRef.current.value = "";
    },
    [files, fileInputRef]
  );

  const parseFiles = (currentFiles, incomingFiles) => {
    const preparedFiles = incomingFiles.map((file) => {
      const { name, size, type } = file;

      const extension = name.split(".").pop().toLowerCase();

      return { name, size, type, extension, file, error: false };
    });

    const parsedFiles = currentFiles.slice();

    for (let i = 0; i < preparedFiles.length; ++i) {
      let found = false;
      for (let j = 0; j < currentFiles.length; ++j) {
        if (currentFiles[j].name === preparedFiles[i].name) {
          parsedFiles[i] = currentFiles[j];
          found = true;
          break;
        }
      }

      if (!found) {
        parsedFiles.push(preparedFiles[i]);
      }
    }

    try {
      fileSchema.validateSync(parsedFiles, {
        abortEarly: false,
      });
    } catch (err) {
      for (const errorMessage of err.errors) {
        const [identifier, message] = errorMessage.split("->");
        const index = identifier.split(".")[0];

        const idx = parseInt(index.substr(1, index.length - 1), 10);

        parsedFiles[idx].error = true;
        parsedFiles[idx].errorMessage = message;
      }
    }

    const sortedParsedFiles = parsedFiles.slice();

    sortedParsedFiles.sort((a, b) => b.error - a.error);

    return sortedParsedFiles;
  };

  const handleChangeFile = useCallback(
    (e) => {
      const inputFiles = Array.from(e.target.files);

      const parsedFiles = parseFiles(files, inputFiles);
      
      var arrayFiles = FormDataa.allAttachments;
      getBase64(inputFiles[0]).then((data) => {
        arrayFiles.push(data);
        setFormData({
          ...FormDataa,
          allAttachments: arrayFiles,
        });
      });

      const totalFilesSize = parsedFiles.reduce(
        (total, file) => total + file.size,
        0
      );

      setFiles(parsedFiles);
      setTotalSize(convertBytesToMegaBytes(totalFilesSize));
    },
    [files]
  );

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  return (
    <>
      <div className="segment">
        <div className="container">
          <div className="row-segment">
            <div className="segment">
              <FormControl>
                <FormLabel
                  className="title-radio-buttons"
                  id="demo-row-radio-buttons-group-label"
                >
                  Selecciona de que manera deseas registrar la solicitud
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="Anonymous"
                  value={Anonymous}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="ID"
                    checked={Anonymous === "ID" ? true : false}
                    control={<Radio />}
                    label="A nombre Personal"
                    {...anonymousInputProps}
                  />
                  <FormControlLabel
                    value="AN"
                    checked={Anonymous === "AN" ? true : false}
                    control={<Radio />}
                    label="Anónima"
                    {...anonymousInputProps}
                  />
                </RadioGroup>
              </FormControl>
              {Anonymous === "ID" ? (
                <span className="info-text">
                  * Se recopilan datos personales básicos de identificación que
                  son tratados conforme con la Política de Datos Personales y
                  Privacidad que puede consultar en el link de Políticas. La
                  respuesta se envía directamente a su correo electrónico o
                  dirección física, según corresponda
                </span>
              ) : (
                <span className="info-text">
                  * Si usted desea radicar una PQRS como usuario anónimo, le
                  agradecemos el registro de una dirección de correo electrónico
                  para la notificación de la respuesta.
                </span>
              )}
            </div>
            <div className="segment">
              <div className="row">
                <div className="col-12">
                  <Alert severity="info">
                    En caso que usted decida hacer uso del derecho consagrado en
                    el parágrafo de artículo 4 de la Ley 1712 de 2015: “Cuando
                    el usuario considere que la solicitud de la información pone
                    en riesgo su integridad o la de su familia, podrá solicitar
                    ante el Ministerio Público el procedimiento especial de
                    solicitud con identificación reservada.” —{" "}
                    <strong>check it out!</strong>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
          <div className="row-segment">
            <div className="segment">
              <span className="title-1">
                A continuación completa tus datos para darte respuesta a tu
                solicitud
              </span>
            </div>
          </div>
          <div className="row-segment">
            <div className="segment">
              <span className="title-2">
                Datos del solicitante <br />
                <span className="info-small">
                  Los campos en asterisco (*) son obligatorios
                </span>{" "}
              </span>
              <br />
              <br />
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                {Anonymous === "ID" ? (
                  <>
                    <div className="row">
                      <div className="col-6">
                        <FormControl
                          variant="filled"
                          sx={{ m: 1, minWidth: 240 }}
                        >
                          <InputLabel id="request-type-label">
                            Tipo solicitud
                          </InputLabel>
                          <Select
                            labelId="request-type-label"
                            id="request-type"
                            value={RequestType}
                            name="RequestType"
                            onChange={handleChange}
                            label="Tipo solicitud"
                            variant="filled"
                            inputProps={{ readOnly: true }}
                          >
                            <MenuItem value={"SE"}>
                              <em>Seleccionar</em>
                            </MenuItem>
                            <MenuItem value={"SI"}>
                              Solicitud de informacion
                            </MenuItem>
                            <MenuItem value={"PE"}>Peticion</MenuItem>
                            <MenuItem value={"QJ"}>Queja</MenuItem>
                            <MenuItem value={"RC"}>Reclamo</MenuItem>
                            <MenuItem value={"SG"}>Sugerencia</MenuItem>
                            <MenuItem value={"DN"}>Denuncia</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-6">
                        <FormControl
                          variant="filled"
                          sx={{ m: 1, minWidth: 240 }}
                        >
                          <InputLabel id="person-type-label">
                            Tipo persona *
                          </InputLabel>
                          <Select
                            labelId="person-type-label"
                            id="person-type"
                            name="PersonType"
                            value={PersonType}
                            onChange={handleChange}
                            label="Tipo persona"
                            variant="filled"
                          >
                            <MenuItem value={"SE"}>
                              <em>Seleccionar</em>
                            </MenuItem>
                            <MenuItem value={"PN"}>Persona Natural</MenuItem>
                            <MenuItem value={"PJ"}>Persona Juridica</MenuItem>
                            <MenuItem value={"NA"}>
                              Niño, niña o Adolecente
                            </MenuItem>
                            <MenuItem value={"AP"}>Apoderado</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <FormControl
                          variant="filled"
                          sx={{ m: 1, minWidth: 240 }}
                        >
                          <InputLabel id="identification-type-label">
                            Tipo identificacion *
                          </InputLabel>
                          <Select
                            labelId="identification-type-label"
                            id="identification-type"
                            name="IdentificationType"
                            value={IdentificationType}
                            onChange={handleChange}
                            label="Tipo identificacion"
                            variant="filled"
                          >
                            <MenuItem value="SE">
                              <em>Seleccionar</em>
                            </MenuItem>
                            <MenuItem value={"NT"}>NIT</MenuItem>
                            <MenuItem value={"CC"}>Cedula ciudadania</MenuItem>
                            <MenuItem value={"TI"}>Tarjeta identidad</MenuItem>
                            <MenuItem value={"CE"}>Cedula extranjera</MenuItem>
                            <MenuItem value={"PP"}>
                              Permiso Permanencia
                            </MenuItem>
                            <MenuItem value={"OT"}>Otro</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-6">
                        <TextField
                          id="identification-number"
                          type="number"
                          label="Numero identificacion *"
                          name="Identification"
                          value={Identification}
                          onChange={handleChange}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Fingerprint />
                              </InputAdornment>
                            ),
                          }}
                          variant="filled"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <TextField
                          id="first-name"
                          label="Primer nombre *"
                          name="FirstName"
                          value={FirstName}
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
                          id="second-name"
                          name="SecondName"
                          value={SecondName}
                          onChange={handleChange}
                          label="Segundo nombre"
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
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <TextField
                          id="surname"
                          name="SurName"
                          value={SurName}
                          onChange={handleChange}
                          label="Primer apellido *"
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
                          id="second-surname"
                          name="SecondSurname"
                          value={SecondSurname}
                          onChange={handleChange}
                          label="Segundo apellido *"
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
                    </div>
                  </>
                ) : (
                  <div className="row">
                    <div className="col-12">
                      <FormControl
                        variant="filled"
                        sx={{ m: 1, minWidth: 240 }}
                      >
                        <InputLabel id="request-type-label">
                          Tipo solicitud
                        </InputLabel>
                        <Select
                          labelId="request-type-label"
                          id="request-type"
                          name="RequestType"
                          value={RequestType}
                          onChange={handleChange}
                          label="Tipo solicitud"
                          inputProps={{ readOnly: true }}
                        >
                          <MenuItem value={"SE"}>
                            <em>Seleccionar</em>
                          </MenuItem>
                          <MenuItem value={"PE"}>Peticion</MenuItem>
                          <MenuItem value={"CO"}>Consulta</MenuItem>
                          <MenuItem value={"RC"}>Reclamo</MenuItem>
                          <MenuItem value={"QJ"}>Queja</MenuItem>
                          <MenuItem value={"DN"}>Denuncia</MenuItem>
                          <MenuItem value={"SG"}>Sugerencia</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="col-6">
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="country-label">Pais</InputLabel>
                      <Select
                        labelId="country-label"
                        id="country"
                        name="Country"
                        value={Country}
                        onChange={handleChange}
                        label="Pais"
                      >
                        <MenuItem value="SE">
                          <em>Seleccionar</em>
                        </MenuItem>
                        <MenuItem value="COL">Colombia</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-6">
                    <TextField
                      id="department"
                      name="Department"
                      value={Department}
                      onChange={handleChange}
                      label="Departamento"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AddLocationIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="filled"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <TextField
                      id="city"
                      name="City"
                      value={City}
                      onChange={handleChange}
                      label="Municipio"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationCityIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="filled"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      id="neighborhood"
                      label="Barrio / Vereda / Corregimiento"
                      name="Neighborhood"
                      value={Neighborhood}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Streetview />
                          </InputAdornment>
                        ),
                      }}
                      variant="filled"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="segment">
                    <TextField
                      id="direction"
                      name="Address"
                      value={Address}
                      onChange={handleChange}
                      label="Direccion"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MapsHomeWorkIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="filled"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <TextField
                      id="landline"
                      label="Teléfono fijo"
                      name="Phone"
                      value={Phone}
                      onChange={handleChange}
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIphoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="filled"
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      id="cell-phone"
                      type="number"
                      label="Teléfono celular"
                      name="Cell"
                      value={Cell}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant="filled"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="segment">
                    <TextField
                      id="email"
                      label="correo electrónico"
                      name="Email"
                      value={Email}
                      onChange={handleChange}
                      fullWidth
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
                <div className="row">
                  <div className="col-6">
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="inability-label">
                        Incapacidad que padece
                      </InputLabel>
                      <Select
                        labelId="inability-label"
                        id="inability"
                        name="Inability"
                        value={Inability}
                        onChange={handleChange}
                        label="Incapacidad que padece"
                      >
                        <MenuItem value="SE">
                          <em>Seleccionar</em>
                        </MenuItem>
                        <MenuItem value="No">Ninguna</MenuItem>
                        <MenuItem value="DF">Discapacidad Fisica</MenuItem>
                        <MenuItem value="DV">Discapacidad Visual</MenuItem>
                        <MenuItem value="DA">Discapacidad Auditiva</MenuItem>
                        <MenuItem value="DC">Discapacidad Cognitiva</MenuItem>
                        <MenuItem value="DM">Discapacidad Mental</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-6">
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 240 }}>
                      <InputLabel id="ethnic-group-label">
                        Grupo etnico
                      </InputLabel>
                      <Select
                        labelId="ethnic-group-label"
                        id="ethnic-group"
                        name="EthnicGroup"
                        value={EthnicGroup}
                        onChange={handleChange}
                        label="Departamento"
                      >
                        <MenuItem value="SE">
                          <em>Seleccionar</em>
                        </MenuItem>
                        <MenuItem value="No">Ninguno</MenuItem>
                        <MenuItem value="AC">AfroColombiano</MenuItem>
                        <MenuItem value="PI">Pueblo Indigena</MenuItem>
                        <MenuItem value="RZ">Raizal</MenuItem>
                        <MenuItem value="RM">Rom</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </Box>
            </div>
            <div className="segment">
              <div className="row">
                <div className="col-12">
                  <br />
                  <br />
                  <br />
                  <Alert severity="info">
                    <AlertTitle>IMPORTANTE:</AlertTitle>
                    Para nosotros es muy importante contar con usted. Con el fin
                    de mejorar nuestros servicios y trámites para nuestros
                    grupos de interés, hemos rediseñado nuestra página Web, a
                    través de la cual usted podrá registrar sus peticiones,
                    quejas, reclamos, sugerencias y denuncias sobre temas de
                    nuestra competencia, con el objetivo de focalizar
                    estrategias de mejora en la atención a las solicitudes. —{" "}
                    <strong>check it out!</strong>
                  </Alert>
                </div>
                <div className="col-12">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Alert severity="info">
                    <AlertTitle>INDICACIÓN A ENTIDADES:</AlertTitle>
                    <strong>
                      Si el usuario selecciona ANÓNIMA, como su manera de enviar
                      la solicitud el texto de privacidad y autorización de
                      datos debe ser:
                    </strong>
                    Confirmo que he seleccionado la opción de PQRSD Anónima, y
                    no recibiré respuesta directa. Los datos que incluya en la
                    PQRSD serán tratados conforme con la Política de Tratamiento
                    de Datos Personales, y el Aviso de —{" "}
                    <strong>check it out!</strong>
                  </Alert>
                </div>
                <div className="col-12">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Alert severity="info">
                    <AlertTitle>INDICACIÓN A ENTIDADES:</AlertTitle>
                    <strong>
                      Para el cargue de archivos, las autoridades no podrán
                      establecer restricciones técnicas
                    </strong>{" "}
                    (en lo que respecta a formatos, tamaños, cantidad de
                    documentos, entre otros) para la radicación de PQRSD, por lo
                    cual, el formulario deberá contar con las facilidades
                    necesarias para garantizar el derecho de petición. —{" "}
                    <strong>check it out!</strong>
                  </Alert>
                </div>
              </div>
            </div>
          </div>
          <div className="row-segment">
            <div className="segment">
              <div className="col-12">
                <span className="title-2">Escribe acerca de tu solicitud</span>
                <TextField
                  id="description"
                  name="Description"
                  value={Description}
                  onChange={handleChange}
                  fullWidth
                  rows={4}
                  multiline
                  variant="filled"
                />
              </div>
            </div>

            <div className="segment"></div>
          </div>
          <div className="row-segment">
            <div className="segment">
              <span className="title-2">
                Documentos adicionales <br />
                <span className="info-small">
                  Adjunte los documentos que considere necesarios para realizar
                  su Petición
                </span>
                <br />
                <br />
              </span>
              {""}

              <Grid
                item
                sm="auto"
                xs={12}
                className={classes.inputContainerItem}
              >
                <FileInput
                  id="Pqr_detail_fileinput"
                  ref={fileInputRef}
                  name="attachments"
                  accept={VALID_FILE_EXTENSIONS.map((ext) => `.${ext}`).join(
                    ","
                  )}
                  text="Adjuntar archivos"
                  inputProps={{
                    onChange: handleChangeFile,
                  }}
                  helperText={
                    <span className={classes.noWrap}>{totalSize} MB/50 MB</span>
                  }
                  error={totalSize > MAX_TOTAL_FILE_SIZE}
                  buttonProps={{
                    color: "default",
                  }}
                  multiple
                  iconVisible
                />
              </Grid>
              <Grid
                item
                sm="auto"
                xs={12}
                className={clsx(
                  classes.inputContainerItem,
                  classes.sweetAlertContainer
                )}
              >
                <SweetAlert
                  id="Pqr_Contact_alert"
                  type="info"
                  noIcon={isMobileSize}
                  message={
                    <Fragment>
                      Permitidos:{" "}
                      {VALID_FILE_EXTENSIONS.map((ext) => ` .${ext}`)}
                    </Fragment>
                  }
                  classes={{
                    root: classes.sweetAlert,
                    message: classes.sweetAlertText,
                  }}
                />
              </Grid>
              {files && files.length > 0 && (
                <FileGridList
                  id="Pqr_detail_filelist"
                  files={files}
                  onDeleteFile={handleDeleteFile}
                  className={clsx(
                    classes.inputContainerItem,
                    classes.filelistItem
                  )}
                />
              )}
            </div>
            <div className="segment"></div>
          </div>
          <div className="row-segment">
            <div className="segment">
              <div className="col-12">
                <span className="title-2">
                  Seleccione el medio por el que le gustaría recibir la
                  respuesta a su solicitud
                </span>
                <FormControl>
                  <RadioGroup
                    row
                    name="ResponseType"
                    value={ResponseType}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="DE"
                      checked={ResponseType === "DE" ? true : false}
                      control={<Radio />}
                      label="Por correo electrónico"
                      {...responseTypeInputProps}
                    />
                    <FormControlLabel
                      value="DF"
                      checked={ResponseType === "DF" ? true : false}
                      control={<Radio />}
                      label="Por correspondencia fisica"
                      {...responseTypeInputProps}
                    />
                  </RadioGroup>
                </FormControl>
                <Alert severity="info">
                  El metodo de respuesta que seleccione sera enviada
                  correspondientemente a la informacion ingresada anteriormente
                  —{" "}
                </Alert>
              </div>
            </div>

            <div className="segment"></div>
          </div>
          <div className="row-segment">
            <div className="segment">
              <span className="title-2">
                Aviso de privacidad y autorización para el tratamiento de datos
                personales
              </span>
              {""}
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  name="AcceptPolicy"
                  onChange={handleChange}
                  checked={AcceptPolicy ? true : false}
                  label="Consiento que mis datos personales sean tratados conforme con la Política de Tratamiento de
                  Datos Personales, y el Aviso de Privacidad."
                />
              </FormGroup>
            </div>
            <div className="segment"></div>
          </div>
          <div className="row-segment">
            <div className="segment">
              <ReCAPTCHA
                sitekey="6LcdykoeAAAAAPoQtEgWLKakhqUvP3Ly3AXrGd8h"
                onChange={onChange}
              />
            </div>
            <div className="segment"></div>
          </div>
          <div className="row-segment">
            <div className="segment">
              {Captcha ? (
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined">Cancelar</Button>
                  <Button variant="contained" onClick={handleSend}>
                    Enviar
                  </Button>
                </Stack>
              ) : null}
            </div>
            <div className="segment"></div>
          </div>
        </div>
      </div>
    </>
  );
};

function useRadioAnonymous(name) {
  const [value, setState] = useState("ID");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange,
  };

  return [value, inputProps];
}

function useRadioResponseType(name) {
  const [value, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange,
  };

  return [value, inputProps];
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
  inputContainer: {
    marginTop: theme.spacing(),
  },
  inputContainerItem: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(),
  },
  filelistItem: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(),
    },
  },
  filelistActive: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 58,
    },
  },
  fileButtonText: {
    color: "#626262",
  },
  sweetAlertContainer: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  sweetAlert: {
    [theme.breakpoints.up("sm")]: {
      height: 58,
    },
  },
  sweetAlertText: {
    fontSize: 14,
  },
  noWrap: {
    whiteSpace: "nowrap",
  },
}));

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <FormRequest />
    </SnackbarProvider>
  );
}
