import React from "react";
import Modal from "react-modal";
import CheckBox from "../../../../../../Components/ChecksBox/ChecksBox";
import { LogInContainer } from "../../../../../../Components/Containers/LogInContainer/logInContainer";
import { InputText } from "../../../../../../Components/TextInputs/TextInputs";
import { ThemedH1 } from "../../../../../../Components/ThemedTexts";

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
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
  },
};

interface modalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onSubmit: (value: string) => void;
}

export const ModalPlanEstudio = () => {
  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={() => {
          console.log("CLOSE");
        }}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <LogInContainer>
          <ThemedH1 text="Nuevo anexo" />
          <InputText
            labelText="Nombre del anexo"
            textInputOnChange={() => console.log("hi")}
            placeholder="Escribe el nombre del anexo"
          />
          <CheckBox labelCheckBox='Tiene subtemas' onChange={()=>console.log('hi')}/>
        </LogInContainer>
      </Modal>
    </>
  );
};
