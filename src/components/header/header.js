import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  return (
    <>
      <nav className="nav segment">
        <div className="container">
          <div className="header-content">
            <div className="header-title">
              <h5>Aplicación</h5>
              <h3>
                PQRSD /{" "}
                <span>
                  peticiones, quejas, reclamos, sugerencias y denuncias
                </span>
              </h3>
            </div>
            <div className="header-login">
              {/* <Stack direction="row" spacing={2}>
                <Button href="/login" startIcon={<LoginIcon />}>Ingresar</Button>
              </Stack> */}
            </div>
          </div>
        </div>
      </nav>
      <div id="div-fixed"></div>
    </>
  );
};

export default Header;
