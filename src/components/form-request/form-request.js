import React, { useState, useEffect } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useHistory } from "react-router";

const FormRequest = () => {
  const [anonymousValue, anonymousInputProps] = useRadioAnonymous("Anonymous");
  const [responseTypeValue, responseTypeInputProps] =
    useRadioResponseType("ResponseType");
  const { push } = useHistory();

  const [Captcha, setCaptcha] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

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
  } = FormDataa;

  const handleSend = () => {
    fetch("http://localhost:3001/request/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormDataa),
    })
      .then((res) => res.text())
      .then((res) => {
        let variant = "success";
        enqueueSnackbar("Solicitud Enviada Correctamente!", { variant });
        push("/");
        // window.scrollTo({ top: 0, behavior: "smooth" });
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
                            <MenuItem value={"PP"}>Permiso Permanencia</MenuItem>
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
              </span>
              {""}
              <Customdroparea />
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

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <FormRequest />
    </SnackbarProvider>
  );
}
