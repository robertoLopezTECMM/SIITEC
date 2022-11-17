import React from "react";
import { HeaderBottomBorder } from "../components/headerBottomBorder";
import { ButtonPrimarys } from "../../../../../Components/Buttons/Buttons";
import "./index.css";
import { Grid } from "@mui/material";
import { CardJuntaDeGobierno } from "../components/cardJuntaDeGobierno";

const sessions = [
  {
    Topic: "",
    Subtopic: [] 
  }
]

export const HomeJuntaDeGobierno = () => {
  const cardOrdinarySessions = [
    { date: "15 de febrero de 2022", title: "Primera sesion ordinaria" },
    { date: "15 de febrero de 2022", title: "Segunda sesion ordinaria" },
    { date: "15 de febrero de 2022", title: "Tercera sesion ordinaria" },
    { date: "15 de febrero de 2022", title: "Cuarta sesion ordinaria" },
    { date: "15 de febrero de 2022", title: "Quinta sesion ordinaria" },
    { date: "15 de febrero de 2022", title: "Sexta sesion ordinaria" },
  ];
  const cardExtraordinarySessions = [
    { date: "15 de febrero de 2022", title: "Primera sesion ordinaria" },
    { date: "15 de febrero de 2022", title: "Segunda sesion ordinaria" },
    { date: "15 de febrero de 2022", title: "Tercera sesion ordinaria" },
  ];

  return (
    <div className="sessions" style={{ width: "80%", margin: "auto" }}>
      <div className="header">
        <HeaderBottomBorder title="Sesiones ordinarias 2022" />
        <div className="buttonHeader">
          <ButtonPrimarys
            textButton={`+ Nueva sesión`}
            isCancel={false}
            isborder
            buttonOnClick={() => console.log("hi")}
          />
        </div>
      </div>
      <div style={{ marginBottom: "5%" }}>
        <Grid container spacing={2}>
          {cardOrdinarySessions.map((item, index) => {
            return (
              <>
                <Grid item xs={3}>
                  <CardJuntaDeGobierno date={item.date} title={item.title} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>

      <div className="header">
        <HeaderBottomBorder title="Sesiones extraordinarias 2022" />
        <div className="buttonHeader">
          <ButtonPrimarys
            textButton={`+ Nueva sesión`}
            isCancel={false}
            isborder
            buttonOnClick={() => console.log("hi")}
          />
        </div>
      </div>
      <div style={{ marginBottom: "10%" }}>
        <Grid container spacing={2}>
          {cardExtraordinarySessions.map((item, index) => {
            return (
              <>
                <Grid item xs={3}>
                  <CardJuntaDeGobierno date={item.date} title={item.title} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
