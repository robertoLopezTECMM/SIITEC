import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import './index.css'

interface accordionComponentProps{
    title:string;
    url: string;
    hasSubtitles: any;
    subtitiles:any;
    isExpandable: boolean
}


export const TemaSesionItem = ({title, url, isExpandable, hasSubtitles, subtitiles}:accordionComponentProps) => {
  return (
    <div className='temaSesionItemContainer'>
      <div className='nameTemaSesionItemContainer'>
        <p>{title}</p>
        {/* <ExpandMoreIcon /> */}
        <InsertCommentIcon />
        <FolderSharedIcon/>
      </div>
     {hasSubtitles?
      <div className='subtitlesItemContainer'>
        {subtitiles.map((subtitle:any)=>{
          return <p>{subtitle.Subtema}.</p>
        })}
      </div>
      :null
     
     } 

    </div>

  )
}

export default TemaSesionItem