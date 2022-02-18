import React, { Suspense } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "./routes/RouteUtils";
import routes from "./routes/routes";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Suspense
          fallback={
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          }
        >
          {renderRoutes(routes)}
        </Suspense>
      </Router>
    </>
  );
}

export default App;
