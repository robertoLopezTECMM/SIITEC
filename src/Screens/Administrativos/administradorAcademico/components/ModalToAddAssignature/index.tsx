import { Checkbox } from "@mobiscroll/react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import { TextInput } from "../../../../../Components/TextInputs/TextInputs";
import { ContainerForModal } from "../ContainersForModals/index";
import "./index.css";
import {DropFileInput} from "../../../../../Components/DropFileInput/DropFileInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "100%",
    height: "100%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
  },
};

interface modalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const ModalToAddAssignatureAdministradorAcademico = ({
  isOpen,
  onCloseModal,
}: modalProps) => {
  let subtitle = "kjdhfs";
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("afteropenmodal");
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [valueInput, setValueInput] = useState("");

  const [file, setFile] = useState("");
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <div className='modalMainContainer'>
        <h1>Modal to add asssignature administrador academico</h1>
        <button onClick={onCloseModal}>cerrar modal</button>
    </div> */}

      <ContainerForModal>
        <div className="oneColGrid">
          <h1>Nueva Asignatura</h1>
          <br />
          <form action="">
            <div className="inputContainer">
              <label className="label">Clave</label>
              <TextInput textInputOnChange={(e)=> e.valueOf}
                placeHolder="Escribe la clave"
              />
            </div>

            <div className="inputContainer">
              <label className="label">Nombre corto</label>
              <TextInput textInputOnChange={(e)=> e.valueOf}
                placeHolder="Escribe el nombre corto"
              />
            </div>

            <div className="inputContainer">
              <label className="label">Nombre completo</label>
              <TextInput textInputOnChange={(e)=> e.valueOf}
                placeHolder="Escribe el nombre completo"
              />
            </div>

            <div className="fourColGrid">
              <div>
                <label className="label">Unidades</label>
                <TextInput textInputOnChange={(e)=> e.valueOf}
                  placeHolder=""
                />
              </div>
              <div>
                <label className="label">Horas Teóricas</label>
                <TextInput textInputOnChange={(e)=> e.valueOf}
                  placeHolder=""
                />
              </div>
              <div>
                <label className="label">Horas practicas</label>
                <TextInput textInputOnChange={(e)=> e.valueOf}
                  placeHolder=""
                />
              </div>
              <div>
                <label className="label">Créditos</label>
                <TextInput textInputOnChange={(e)=> e.valueOf}
                  placeHolder="" 
                />
              </div>
            </div>

            <div className="twoColGrid">
              <div className="oneColGrid">
                <Checkbox />
                <label>Es obligatoria</label>
              </div>
              <div className="oneColGrid">
                <Checkbox  />
                <label>Es evaluada</label>
              </div>
            </div>

             
            
            <div className="oneColGris">
              <DropFileInput 
              message="Subir archivos"
              onChangeInputFiles={(e)=> e.valueOf}
              />
            </div>
            
          </form>
        </div>
      </ContainerForModal>
    </Modal>
  );
};
