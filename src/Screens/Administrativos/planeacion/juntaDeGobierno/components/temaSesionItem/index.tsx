import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css'

interface accordionComponentProps{
    title:string;
    url: string;
    isExpandable: boolean
}


export const TemaSesionItem = ({title, url, isExpandable}:accordionComponentProps) => {
  return (
    // <Accordion onClick={()=>console.log('hi')}>
    //     <AccordionSummary
    //         expandIcon={<ExpandMoreIcon />}
    //         aria-controls="panel1a-content"
    //         id="panel1a-header"
    //     >
    //     <Typography >{title}</Typography>

    //     </AccordionSummary>


    // </Accordion>

    <div className='temaSesionItemContainer'>
      <p>{title}</p>
      <ExpandMoreIcon />
    </div>
  )
}

export default TemaSesionItem