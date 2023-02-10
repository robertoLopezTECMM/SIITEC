import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { LoadingSpinner } from '../../../../../Components/LoadingSpinner';
import { authContext } from '../../../../../Contexts/AuthProvider';
import { NavigatorConsejero } from '../../navigatorConsejero';
import { HeaderBottomBorder } from '../components/headerBottomBorder';
import TemaSesionItem from '../components/temaSesionItem';
import { useActualSession } from '../hooks/useActualSession';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import './index.css'

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'



export const JuntaDeGobiernoConsejero = () => {

    const { auth }:any = useContext(authContext);
    const {actualSession, isLoading, serverError}:any = useActualSession()
    const [actualSessionState, setActualSessionState] = useState<any>()
    const [showModalFiles, setShowModalFiles] = useState(false)
    const [showModalWriteComment, setShowModalWriteComment] = useState(false)
    const [filesToShow, setFilesToShow] = useState<any>([]);
    const [modalTitle, setModalTitle] = useState('')


  useEffect(() => {
    console.log(auth.token)
    console.log('isLoading: ', actualSession)
    console.log('serverError: ', serverError)
    setActualSessionState(actualSession)
  }, [actualSession])

  const openFilesModal = (filesToShow:any[], modalTitle:string) => {
    setFilesToShow(filesToShow)
    setModalTitle(modalTitle)
    setShowModalFiles(true)
    console.log('hola')
  }

  const openWriteCommentModal = ( modalTitle:string) => {
    setModalTitle(modalTitle)
    setShowModalWriteComment(true)
    console.log('hola')
  }


  return (
    <NavigatorConsejero>
        <ModalFilesList modalTitle={modalTitle} showModal={showModalFiles} files={filesToShow} onCloseModal={() => setShowModalFiles(false)}/>
        <ModalWriteComment modalTitle={modalTitle} showModalComment={showModalWriteComment} onCloseModal={() => setShowModalWriteComment(false)} />

        <div className="juntaGobiernoDetailsContainer">
          {actualSession === undefined?<LoadingSpinner visible/>
          
          :
          <>
            <HeaderBottomBorder
                title={actualSession.Titulo}
                subtitle={actualSession.fecha}
            />

            <br/>

            <div className='ordenDiaContainer'>
                {actualSession.Temas.map((tema:any)=>{
                    return <TemaSesionItem
                              title={tema.Tema}
                              url={''}
                              hasSubtitles={tema.subtemas && tema.subtemas.length > 0 ? true : false}
                              subtitiles={tema.subtemas && tema.subtemas.length > 0 ? tema.subtemas : []}
                              isExpandable={false}
                              hasFiles={tema.archivos && tema.archivos.length > 0 ? true : false}
                              files={tema.archivos && tema.archivos.length > 0 ? tema.archivos : []} 
                              openFilesModal={()=>openFilesModal(tema.archivos && tema.archivos.length > 0 ? tema.archivos : [], tema.Tema)}     
                              openWriteCommentModal={()=>openWriteCommentModal(tema.Tema)}                        
                            />
                })}
            </div>
          </>
        }

        </div>
    </NavigatorConsejero>

  )
}



interface modalFilesListInterface{
  modalTitle:string;
  showModal:boolean;
  onCloseModal: () => any;
  files: any;
}

const ModalFilesList = ({showModal, files, modalTitle, onCloseModal}:modalFilesListInterface) =>{
  
console.log('MODAL FILES: ', files)
  

  return(
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div className='modalFilesBodyContainer'>
          {files.map((file:any)=>{
            return <ModalFileItem title={file.nombre} url={file.url}/>
          })}
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button className="modalFilesCloseButton" onClick={onCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const ModalFileItem = ({title, url}:string|any) =>{
  return(
    <div className="modalFileItemContainer">
      <a href={url} target='_blank'>
        <p> <PictureAsPdfOutlinedIcon/>  &nbsp; {title}</p>
      </a>
    </div>
  )
}



interface modalCommentInterface{
  modalTitle:string;
  showModalComment:boolean;
  onCloseModal: () => any;
}

const ModalWriteComment = ({showModalComment, modalTitle, onCloseModal}:modalCommentInterface) =>{
  const [convertedText, setConvertedText] = useState("");

  return(
    <Modal
      show={showModalComment}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div>
          <br/>
          <ReactQuill
            theme='snow'
            value={convertedText}
            onChange={setConvertedText}
            style={{minHeight: '300px', maxHeight:'500px', overflowY:'scroll'}}
            placeholder="escriba sus observaciones"
          />
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button className="modalFilesCloseButton" onClick={onCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}




