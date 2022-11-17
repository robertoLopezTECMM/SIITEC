import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ButtonPrimarys } from "../../../../../../Components/Buttons/Buttons";
import CheckBox from "../../../../../../Components/ChecksBox/ChecksBox";
import { DropFileInput } from "../../../../../../Components/DropFileInput/DropFileInput";
import { InputText } from "../../../../../../Components/TextInputs/TextInputs";
import { ThemedH1 } from "../../../../../../Components/ThemedTexts";
import { AddSubtitles } from "../addSubtitles";
import "./index.css";

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
  const [hasSubtitles, setHasSubtitles] = useState(false);

  useEffect(() => {}, [hasSubtitles]);

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
        <div className="mainContainer">
          <ThemedH1 text="Nuevo anexo" />
          <InputText
            labelText="Nombre del anexo"
            textInputOnChange={() => console.log("hi")}
            placeholder="Escribe el nombre del anexo"
          />
          <CheckBox
            labelCheckBox="Tiene subtemas"
            onChange={() => setHasSubtitles(!hasSubtitles)}
          />
          {!hasSubtitles && (
            <DropFileInput
              borderColor="#00A29A"
              message={"seleccione el archivo"}
              onChangeInputFiles={() => console.log("hi")}
            />
          )}
          {hasSubtitles && <AddSubtitles />}
          <div className="buttons">
            <ButtonPrimarys
              buttonOnClick={() => console.log("Cerrar modal")}
              textButton={"Cancelar"}
              isCancel
              isborder
            />
            <ButtonPrimarys
              buttonOnClick={() => console.log("Guardar anexo")}
              textButton={"Guardar"}
              isCancel={false}
              isborder
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
