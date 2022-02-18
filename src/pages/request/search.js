// @flow
import React, { Fragment, useState } from "react";
import Header from "./../../components/header/header";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import axios from "axios";
import InfoRequest from "./../../components/info-request/info-request";
import "./search.css";

const SearchRequest = () => {
  const [InputSearch, setInputSearch] = useState("");
  const [Info, setInfo] = useState({
    Info: {},
    Status: [],
  });

  const handleSearch = () => {
    axios
      .post("http://localhost:3001/request/search", {
        InputSearch: InputSearch,
      })
      .then(({ data }) => {
        const info = data.data[0][0];
        const status = data.data[1];
        setInfo({
          Info: info,
          Status: status,
        });
      })
      .catch(({ err }) => {
        console.log(err);
      });
  };

  return (
    <>
      <Fragment>
        <Header></Header>

        <div className="container">
          <div className="row">
            <div className="col-12 element-search">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <ContentPasteSearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Numero Radicado"
                  value={InputSearch}
                  onChange={(e) => setInputSearch(e.target.value)}
                  inputProps={{
                    "aria-label": "Consulta el estado de una solicitud",
                  }}
                />
                <IconButton
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              </Paper>
            </div>
          </div>
          <Divider sx={{ height: 28, m: 0.5 }} />

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "5px",
              marginBottom: "50px",
            }}
          >
            <Grid item xs={5} sx={{ textAlign: "center" }}>
              <span className="title-1">Estados de su solicitud</span>
              <Timeline position="alternate">
                {Info?.Status?.map((statu, i) => {
                  return (
                    <TimelineItem key={i}>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        {statu.fecha}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        {statu.estado === "RE" ? (
                          <TimelineDot>
                            <MarkAsUnreadIcon />
                          </TimelineDot>
                        ) : statu.estado === "TR" ? (
                          <TimelineDot>
                            <QueryBuilderIcon />
                          </TimelineDot>
                        ) : (
                          <TimelineDot color="primary">
                            <AssignmentTurnedInIcon />
                          </TimelineDot>
                        )}
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          {statu.status_name}
                        </Typography>
                        <Typography>{statu.dependencia_name}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </Timeline>
            </Grid>
            <Grid item xs={7} sx={{ textAlign: "center" }}>
              <InfoRequest dataInfo={Info?.Info} />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    </>
  );
};

export default SearchRequest;
