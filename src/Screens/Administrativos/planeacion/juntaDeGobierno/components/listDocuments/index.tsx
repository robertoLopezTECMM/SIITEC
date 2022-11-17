import React from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Grid,Typography } from '@mui/material'
import "./index.css"

const ListDocuments = () => {
  return (
    <Grid container className={"item-list"}>
      <div className="row-topic">
        <Typography>i. Nombre del documento</Typography>
        <DescriptionOutlinedIcon/>
      </div>
    </Grid>
    
  )
}

export default ListDocuments