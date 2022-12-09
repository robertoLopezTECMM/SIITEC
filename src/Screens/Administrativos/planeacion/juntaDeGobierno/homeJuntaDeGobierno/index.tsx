import React, {useContext, useEffect} from "react";
import { HeaderBottomBorder } from "../components/headerBottomBorder";
import { ButtonPrimarys } from "../../../../../Components/Buttons/Buttons";
import "./index.css";
import { Grid } from "@mui/material";
import { CardJuntaDeGobierno } from "../components/cardJuntaDeGobierno";
import { NavigatorPlaneacion } from "../../navigatorPlaneacion";
import { Link } from "react-router-dom";
import { authContext } from "../../../../../Contexts/AuthProvider";


interface homeJuntaGobiernoProps{
  year: string;
}

const sessions = [
  { topic: "Nombre del documento", subtopic: [{title: "Nombre del anexo"}, {title: "Nombre del anexo"}]},
  { topic: "Nombre del documento", subtopic: []},
];

export const HomeJuntaDeGobierno = ({year}:homeJuntaGobiernoProps) => {
  const { auth }:any = useContext(authContext);
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

  useEffect(() => {
    console.log("YEAR: ", year)
    console.log("CURRENT YEAR: ", new Date().getFullYear())
    console.log(auth.token)
  }, [])
  
  return (
    <NavigatorPlaneacion>
    <div className="sessions" style={{ width: "80%", margin: "auto" }}>
      <div className="header">
        <HeaderBottomBorder title="Sesiones ordinarias 2022" />


        <div className="buttonHeader">
          <Link to={'/nuevaJuntaGobiernoOrdinaria'}>
            <ButtonPrimarys
              textButton={`+ Nueva sesión`}
              isCancel={false}
              isborder
              buttonOnClick={() => console.log("hi")}
            />
          </Link>

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
          <Link to={'/nuevaJuntaGobiernoExtraordinaria'}>
            <ButtonPrimarys
              textButton={`+ Nueva sesión`}
              isCancel={false}
              isborder
              buttonOnClick={() => console.log("hi")}
            />
          </Link>
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
  </NavigatorPlaneacion>
  );
};
