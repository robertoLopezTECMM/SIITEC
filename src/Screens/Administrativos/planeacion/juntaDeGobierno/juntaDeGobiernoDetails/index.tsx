import { Grid } from '@mui/material'
import React from 'react'
import { HeaderBottomBorder } from '../components/headerBottomBorder'
import ListDocuments from '../components/listDocuments';
import "./index.css";

const sessions = [
  { topic: "Nombre del documento", subtopic: [{title: "Nombre del anexo"}, {title: "Nombre del anexo"}]},
  { topic: "Nombre del documento", subtopic: []},
];

export const JuntaDeGobiernoDetails = () => {
  return (
    <div className={"containerNewBoard"} style={{width:"80%", margin:"auto"}}>
      <Grid container>
        <HeaderBottomBorder title="Primera sesion ordinaria 2022" subtitle="Martes 15 de febrero de 2022"/>
          <Grid container className="agenda">
            {sessions.map((item, index) => {
              return (
                <>
                  <Grid item xs={12}>
                    <ListDocuments topic={item.topic} subtopic={item.subtopic}/>
                  </Grid>
                </>
              );
            })}
          </Grid>
      </Grid>
    </div>
  )
}
