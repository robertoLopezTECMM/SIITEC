import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ButtonPrimarys } from "../../../../../Components/Buttons/Buttons";
import { NavigatorPlaneacion } from "../../navigatorPlaneacion";
import { HeaderBottomBorder } from "../components/headerBottomBorder";
import ListDocuments from "../components/listDocuments";
import { useNextSession } from "../hooks/useNextSession";
import "./index.css";


interface newJuntaGobiernoPros{
  type: 'ordinaria'|'extraordinaria';
}

export const NewJuntaDeGobierno = ({type}:newJuntaGobiernoPros) => {
  const {nextSesionName} = useNextSession('2022', type=='ordinaria'?'1':'2')

  useEffect(() => {
    console.log('NEXT SESSION NAME: ', nextSesionName)
  }, [nextSesionName])
  
  

  return (
    <NavigatorPlaneacion>
      <div className={"containerNewBoard"}>
        <Grid container>
          <HeaderBottomBorder title={"Nueva sesion " + type} />
          <div className={"subtitles-container"}>
          <div className={"subtitle"}>
          <h5 >Ultima sesion creada:</h5> 
          <h5>Nueva sesion:</h5>
          </div>
          <div className={"info-subtitle"}>
          <Typography variant="h6">Segunda sesion ordinaria, 15 de febrero de 2022</Typography>
          <Typography variant="h6">{nextSesionName}, 15 de febrero de 2022</Typography>

          </div>
          </div>
          <Grid container className={"order-of-day"}>
            <div className={"container-title_order"}>
              <Typography className={"title-order"} variant="h6">Orden del dia:</Typography>
              <ButtonPrimarys
                buttonOnClick={() => {
                  console.log("hola");
                }}
                textButton={" +  Nuevo anexo"}
              />
            </div>
            <Grid container className="agenda">
              {/* <ListDocuments /> */}
            </Grid>
          </Grid>
          <div className={"create-button"}>
            <ButtonPrimarys
              buttonOnClick={() => {
                console.log("hola");
              }}
              textButton={"Crear"}
            />
          </div>
        </Grid>
      </div>
    </NavigatorPlaneacion>
  );
};
