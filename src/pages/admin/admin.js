import React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import Dns from "@mui/icons-material/Dns";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import "./admin.css";

import RequestsAdmin from "./requests/requests-admin";
import ReportsAdmin from "./reports/reports.admin";
import UsersAdmin from "./users/users.admin.js";
import DependenciesAdmin from "./dependencies/dependencies.admin";
import { useHistory } from "react-router";

const data = [
  { icon: <CoPresentIcon />, label: "Solicitudes", href: `requests` },
  // { icon: <FilePresentIcon />, label: "Reportes", href: `reports` },
  { icon: <Dns />, label: "Dependencias", href: `dependencies` },
  { icon: <People />, label: "Usuarios", href: `users` },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});
const settings = ["Cerrar sesión"];

const Admin = ({ match }) => {
  const ulStyle = {};
  const [open, setOpen] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { push } = useHistory();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (statu) => {
    setAnchorElUser(null);
    if (statu) {
      localStorage.removeItem("auth");
      push("/login");
    }
  };

  let { path } = useRouteMatch();

  return (
    <div className="control-section">
      <div id="wrapper">
        <div className="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
          <SidebarComponent id="default-sidebar">
            <Box sx={{ display: "flex" }}>
              <ThemeProvider
                theme={createTheme({
                  components: {
                    MuiListItemButton: {
                      defaultProps: {
                        disableTouchRipple: true,
                      },
                    },
                  },
                  palette: {
                    mode: "dark",
                    primary: { main: "rgb(102, 157, 246)" },
                    background: { paper: "rgb(5, 30, 52)" },
                  },
                })}
              >
                <Paper elevation={0} sx={{ maxWidth: 256 }}>
                  <FireNav component="nav" disablePadding>
                    <ListItemButton component="a" href="#">
                      <ListItemText
                        sx={{ my: 0 }}
                        primary="FK"
                        primaryTypographyProps={{
                          fontSize: 20,
                          fontWeight: "medium",
                          letterSpacing: 0,
                        }}
                      />
                    </ListItemButton>
                    <Divider />
                    <ListItem component="div" disablePadding>
                      <ListItemButton sx={{ height: 56 }}>
                        <ListItemIcon>
                          <AccountCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Bienvenido"
                          primaryTypographyProps={{
                            color: "primary",
                            fontWeight: "medium",
                            variant: "body2",
                          }}
                        />
                      </ListItemButton>
                      <IconButton
                        size="large"
                        onClick={handleOpenUserMenu}
                        sx={{
                          "& svg": {
                            color: "rgba(255,255,255,0.8)",
                            transition: "0.2s",
                            transform: "translateX(0) rotate(0)",
                          },
                          "&:hover, &:focus": {
                            bgcolor: "unset",
                            "& svg:first-of-type": {
                              transform: "translateX(-4px) rotate(-20deg)",
                            },
                            "& svg:last-of-type": {
                              right: 0,
                              opacity: 1,
                            },
                          },
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            height: "80%",
                            display: "block",
                            left: 0,
                            width: "1px",
                            bgcolor: "divider",
                          },
                        }}
                      >
                        <Settings />
                        <ArrowRight
                          sx={{ position: "absolute", right: 4, opacity: 0 }}
                        />
                      </IconButton>
                      <Menu
                        sx={{ mt: "0px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={(e) => handleCloseUserMenu(false)}
                      >
                        {settings.map((setting) => (
                          <MenuItem
                            key={setting}
                            onClick={(e) => handleCloseUserMenu(true)}
                          >
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </ListItem>
                    <Divider />
                    <Box
                      sx={{
                        bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                        pb: open ? 2 : 0,
                      }}
                    >
                      <ListItemButton
                        alignItems="flex-start"
                        onClick={() => setOpen(!open)}
                        sx={{
                          px: 3,
                          pt: 2.5,
                          pb: open ? 0 : 2.5,
                          "&:hover, &:focus": {
                            "& svg": { opacity: open ? 1 : 0 },
                          },
                        }}
                      >
                        <ListItemText
                          primary="Panel administrativo"
                          primaryTypographyProps={{
                            fontSize: 15,
                            fontWeight: "medium",
                            lineHeight: "20px",
                            mb: "2px",
                          }}
                          secondary="Solicitudes, Reportes, Dependencias, Usuarios"
                          secondaryTypographyProps={{
                            noWrap: true,
                            fontSize: 12,
                            lineHeight: "16px",
                            color: open
                              ? "rgba(0,0,0,0)"
                              : "rgba(255,255,255,0.5)",
                          }}
                          sx={{ my: 0 }}
                        />
                        <KeyboardArrowDown
                          sx={{
                            mr: -1,
                            opacity: 0,
                            transform: open ? "rotate(-180deg)" : "rotate(0)",
                            transition: "0.2s",
                          }}
                        />
                      </ListItemButton>
                      {open &&
                        data.map((item) => (
                          <ListItemButton
                            component="a"
                            key={item.label}
                            href={`${path}/${item.href}`}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        ))}
                    </Box>
                  </FireNav>
                </Paper>
              </ThemeProvider>
            </Box>
          </SidebarComponent>
          <div>
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm">
                <Switch>
                  <Route exact path={path}>
                    <RequestsAdmin />
                  </Route>
                  <Route path={`${path}/requests`}>
                    <RequestsAdmin />
                  </Route>
                  <Route path={`${path}/reports`}>
                    <ReportsAdmin />
                  </Route>
                  <Route path={`${path}/dependencies`}>
                    <DependenciesAdmin />
                  </Route>
                  <Route path={`${path}/users`}>
                    <UsersAdmin />
                  </Route>
                </Switch>
              </Container>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
