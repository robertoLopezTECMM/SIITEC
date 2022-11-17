import { Grid } from '@mui/material'
import React from 'react'
import { HeaderBottomBorder } from '../components/headerBottomBorder'
import ListDocuments from '../components/listDocuments';
import "./index.css";

interface JuntaDeGobiernoDetails{
  
}

export const JuntaDeGobiernoDetails = () => {
  return (
    <div className={"containerNewBoard"}>
      <Grid container>
        <HeaderBottomBorder title="Primera sesion ordinaria 2022" subtitle="Martes 15 de febrero de 2022"/>
        <Grid container className={"order-of-day"}>
          <Grid container className="agenda">
            <ListDocuments/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
