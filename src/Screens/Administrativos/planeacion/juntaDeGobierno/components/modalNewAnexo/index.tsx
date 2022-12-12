import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import {
  ButtonPrimarys,
  DocumentButton,
  RoundButtonAdd,
} from "../../../../../../Components/Buttons/Buttons";
import CheckBox from "../../../../../../Components/ChecksBox/ChecksBox";
import { DropFileInput, DropFileInputButton } from "../../../../../../Components/DropFileInput/DropFileInput";
import { InputText } from "../../../../../../Components/TextInputs/TextInputs";
import { ThemedH1 } from "../../../../../../Components/ThemedTexts";
import "./index.css";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import axiosInstanceJuntaGobierno from "../../../../../../Api/axiosInstanceJuntaGobierno";
import { postFilesUrl } from "../../../../../../Api/apiRoutes";
import { authContext } from "../../../../../../Contexts/AuthProvider";
import  {PostFiles}  from "../../functions/postFiles";

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
  const { auth }:any = useContext(authContext);

  const [anexoName, setAnexoName] = useState('')
  const [hasSubtitles, setHasSubtitles] = useState(false);
  const [anexoDocumentUrl, setAnexoDocumentUrl] = useState('http://testdocumenturl.com')

  const [reRender, setReRender] = useState(1);
  
  const [subtitles, setSubtitles] = useState<any[]>([
    
  ]);

  useEffect(() => {}, [hasSubtitles]);
  
  const resetModalStates=()=>{
    setAnexoName('')
    setHasSubtitles(false)
    setAnexoDocumentUrl('')
    setSubtitles([])
  }

  const addSubtitle = () => {
    let subtitlesLocal = subtitles;
    subtitlesLocal.push({ subtitleName: "", documentUrl: null });
    setSubtitles(subtitlesLocal);
    setReRender(reRender + 1);
  };

  const onSubmitAnexo = () =>{
      onSubmit(anexoName, hasSubtitles, anexoDocumentUrl, subtitles)
      onCloseModal()
      resetModalStates()
  }

  const handleCancel = () =>{
    resetModalStates()
    onCloseModal()
  }

  const onChangeSubtitle = (subtitleKey:any, subtitleName:string) => {
    const newState = subtitles.map((obj, key) => {
      if (key === subtitleKey) {
        return {...obj, subtitleName: subtitleName};
      }
      return obj;
    });

    setSubtitles(newState);
  }

  const handleFileAnexo = (files:any) => {
    console.log(files[0])
    console.log('TOKEN: ', auth.token)
    PostFiles(postFilesUrl, files[0], auth.token)
  }

  const getAnexoFile = (anexoFile:any) =>{
    console.log('AnexoUrl: ', anexoFile)
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
              onChangeInputFiles={handleFileAnexo}
            />
          )}
          {hasSubtitles && (
            <>
              <div className="containerComponent">
                {subtitles.map((item, key) => {
                  return (
                    <div className="listSubtitles">
                      <InputText
                        labelText="Nombre del subtema"
                        textInputOnChange={(text) => onChangeSubtitle(key, text)}
                        placeholder="Escribe el nombre del subtema"
                      />
                      <DropFileInputButton message={"hola"} borderColor={""} onChangeInputFiles={getAnexoFile} />
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
              buttonOnClick={handleCancel}
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
