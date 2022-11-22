import { Grid } from "@mui/material";
import React from "react";
import { HeaderBottomBorder } from "../components/headerBottomBorder";
import ListDocuments from "../components/listDocuments";
import "./index.css";

const sessions = [
  {
    topic: "Nombre del documento",
    subtopic: [{ title: "Nombre del anexo" }, { title: "Nombre del anexo" }],
  },
  { topic: "Nombre del documento", subtopic: [] },
];

export const JuntaDeGobiernoDetails = () => {
  return (
    <div className={"containerComponent"}>
      <Grid container spacing={1}>
        <HeaderBottomBorder
          title="Primera sesion ordinaria 2022"
          subtitle="Martes 15 de febrero de 2022"
        />
          {sessions.map((item, index) => {
            return (
              <div >
                <ListDocuments topic={item.topic} subtopic={item.subtopic} />
              </div>
            );
          })}
      </Grid>
    </div>
  );
};
