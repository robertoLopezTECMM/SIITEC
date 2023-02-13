import React, {useState, useContext} from 'react'
import { NavigatorConsejero } from '../../navigatorConsejero'
import { HeaderBottomBorder } from '../components/headerBottomBorder'
import TemaSesionItem from '../components/temaSesionItem'
import './index.css'
import { dataJuntaFeb2023 } from './ordenDiaData2023'

import { Button, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill'

import { collection, addDoc } from "firebase/firestore";
import {db} from '../../../../../firebase';
import { authContext } from '../../../../../Contexts/AuthProvider'
import swal from 'sweetalert'


interface modalCommentInterface{
    modalTitle:string;
    showModalComment:boolean;
    onCloseModal: () => any;
  }
  
  const ModalWriteComment = ({showModalComment, modalTitle, onCloseModal}:modalCommentInterface) =>{
    const [convertedText, setConvertedText] = useState("");
    const { auth, roll, userAndPassword }:any = useContext(authContext);

    const addComment = async (e:any) => {
      e.preventDefault();  
      console.log('AUTH: ', auth)
      console.log('ROLL: ', roll)
      console.log('userAndPassword: ', userAndPassword)
     
      try {
          const docRef = await addDoc(collection(db, "commentsJuntaFeb2023"), {
            comentarios: convertedText,
            fecha:new Date().toISOString(),
            tituloSeccion:modalTitle,
            usuario:auth.email,
            userEmail:'test@gmail.com'
          });
          if(docRef.id){
            onCloseModal()
            setConvertedText('')
            swal("¡Exito!", "Tu comentario fue agregado con èxito", "success")
          }
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
  }
  
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
          {/*<Button className="modalFilesCloseButton" onClick={onCloseModal}>Close</Button>*/}
          <Button className="modalFilesAddComent" onClick={(e)=>addComment(e)}>Agregar Comentario</Button>
        </Modal.Footer>
      </Modal>
    )
  }





export const JuntaGobierno2023 = () => {
  const [showModalWriteComment, setShowModalWriteComment] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const openWriteCommentModal = ( modalTitle:string) => {
    setModalTitle(modalTitle)
    setShowModalWriteComment(true)
    console.log('hola')
  }
  return (
    <NavigatorConsejero>
        <ModalWriteComment modalTitle={modalTitle} showModalComment={showModalWriteComment} onCloseModal={() => setShowModalWriteComment(false)} />

        <HeaderBottomBorder
            title={'Primera Sesion Ordinaria'}
            subtitle={'13 de Febrero de 2023'}
        />

        <br/>

        <div className='ordenDiaContainerFeb2023'>
        {dataJuntaFeb2023.map((tema)=>{
                    return <TemaSesionItem
                              title={tema.title}
                              url={'null'}
                              hasSubtitles={tema.documents && tema.documents.length > 1 ? true : false}
                              subtitiles={tema.documents && tema.documents.length > 1 ? tema.documents : []}
                              isExpandable={false}
                              hasFiles={tema.documents && tema.documents.length === 1 ? true : false}
                              files={tema.documents && tema.documents.length === 1 ? tema.documents : []} 
                              openFilesModal={()=>console.log('openModalFiles')}     
                              openWriteCommentModal={()=>openWriteCommentModal(tema.title)}                         
                            />
                })}
        </div>
    </NavigatorConsejero>
  )
}
