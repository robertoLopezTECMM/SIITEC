import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  ButtonPrimarys,
  DocumentButton,
  RoundButtonAdd,
} from "../../../../../../Components/Buttons/Buttons";
import CheckBox from "../../../../../../Components/ChecksBox/ChecksBox";
import { DropFileInput } from "../../../../../../Components/DropFileInput/DropFileInput";
import { InputText } from "../../../../../../Components/TextInputs/TextInputs";
import { ThemedH1 } from "../../../../../../Components/ThemedTexts";
import "./index.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

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

interface modalNewAnexoProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onSubmit: (anexoName: string, hasSubtitles:boolean, anexoDocumentUrl:string, subtitles:any) => void;
}

export const ModalNewAnexo = ({isOpen, onCloseModal, onSubmit}:modalNewAnexoProps) => {
  const [anexoName, setAnexoName] = useState('')
  const [hasSubtitles, setHasSubtitles] = useState(false);
  const [anexoDocumentUrl, setAnexoDocumentUrl] = useState('http://testdocumenturl.com')

  const [reRender, setReRender] = useState(1);
  
  const [subtitles, setSubtitles] = useState([
    { subtitleName: "", documentUrl: null },
  ]);

  useEffect(() => {}, [hasSubtitles]);

  const addSubtitle = () => {
    let subtitlesLocal = subtitles;
    subtitlesLocal.push({ subtitleName: "", documentUrl: null });
    setSubtitles(subtitlesLocal);
    setReRender(reRender + 1);
  };

  const onSubmitAnexo = () =>{
    onSubmit(anexoName, hasSubtitles, anexoDocumentUrl, subtitles)
    onCloseModal()
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
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
            textInputOnChange={(e) => setAnexoName(e)}
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
          {hasSubtitles && (
            <>
              <div className="containerComponent">
                {subtitles.map((item) => {
                  return (
                    <div className="listSubtitles">
                      <InputText
                        labelText="Nombre del anexo"
                        textInputOnChange={() => console.log("hi")}
                        placeholder="Escribe el nombre del anexo"
                      />
                      <DocumentButton
                        textButton={""}
                        buttonOnClick={() => console.log("FILE")}
                      />
                    </div>
                  );
                })}
              </div>

              <RoundButtonAdd
                icon={<AddCircleOutlineOutlinedIcon fontSize="large" />}
                buttonOnClick={() => addSubtitle()}
              />
            </>
          )}
          <div className="buttons">
            <ButtonPrimarys
              buttonOnClick={onCloseModal}
              textButton={"Cancelar"}
              isCancel
              isborder
            />
            <ButtonPrimarys
              buttonOnClick={() => onSubmitAnexo()}
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
