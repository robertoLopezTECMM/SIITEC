import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import './index.css'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';






interface accordionComponentProps{
    title:string;
    url?: string;
    hasSubtitles: any;
    subtitiles:any;
    hasFiles:any;
    files:any;
    isExpandable?: boolean;
    openFilesModal: () => void;
    openWriteCommentModal: () => void;
}


export const TemaSesionItem = ({title, url, isExpandable, hasSubtitles, subtitiles, hasFiles, files, openFilesModal, openWriteCommentModal}:accordionComponentProps) => {
  return (
    <div className='temaSesionItemContainer'>
      <div className='nameTemaSesionItemContainer'>
        <p>{title}</p>
        {/* <ExpandMoreIcon /> */}
        <InsertCommentIcon onClick={()=>openWriteCommentModal()}/>

        {hasFiles && files.length===1?
          <a href={files[0].url} target='blank'>
            <PictureAsPdfIcon/>
          </a>
          :
          <FolderSharedIcon onClick={()=>openFilesModal()}/>
        }
        
      </div>
     {hasSubtitles?
      <div className='subtitlesItemContainer'>
        {subtitiles.map((subtitle:any)=>{
          return <SubtemaItem title={subtitle.Subtema} url={subtitle.url}/>
        })}
      </div>
      :null
     
     } 


     

    </div>

  )
}

const SubtemaItem = ({title, url}:string|any) =>{
  return(
    <div className="modalFileItemContainer">
      <a href={url} target='_blank'>
       <PictureAsPdfOutlinedIcon/>  &nbsp; {title}
      </a>
    </div>
  )
}

export default TemaSesionItem