import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonPrimarys } from "../../../../../Components/Buttons/Buttons";
import { NavigatorPlaneacion } from "../../navigatorPlaneacion";
import { HeaderBottomBorder } from "../components/headerBottomBorder";
import ListDocuments from "../components/listDocuments";
import { useNextSession } from "../hooks/useNextSession";
import TextField from '@mui/material/TextField';
import "./index.css";
import { ThemedH1 } from "../../../../../Components/ThemedTexts";
import { ModalNewAnexo } from "../components/modalNewAnexo";
import TemaSesionItem from "../components/temaSesionItem";


interface newJuntaGobiernoPros{
  type: 'ordinaria'|'extraordinaria';
}

export const NewJuntaDeGobierno = ({type}:newJuntaGobiernoPros) => {
  const [showModal, setShowModal] = useState(false)
  const {nextSesionName} = useNextSession('2022', type=='ordinaria'?'1':'2')
  const [temasOrdenDelDia, setTemasOrdenDelDia] = useState<any>([])


  useEffect(() => {
    console.log('NEXT SESSION NAME: ', nextSesionName)
  }, [nextSesionName])

  const saveTemasOrdenDelDia = (anexoName: string, hasSubtitles:boolean, anexoDocumentUrl:string, subtitles:any) =>{
    var temasOrdenDelDiaLocal = temasOrdenDelDia
    var temaObj = {anexoName, hasSubtitles, anexoDocumentUrl, subtitles}
    temasOrdenDelDiaLocal.push(temaObj)
    setTemasOrdenDelDia(temasOrdenDelDiaLocal)
    console.log('orden del dia local: ', temasOrdenDelDiaLocal)
  }
  
  

  return (
    <NavigatorPlaneacion>
      <div className="containerNewSession">
        <Grid container>
          <HeaderBottomBorder title={"Nueva sesion " + type} />
          <ModalNewAnexo isOpen={showModal} onCloseModal={()=>setShowModal(false)} onSubmit={saveTemasOrdenDelDia} />
          <div className="ultimaSesionContainer">
            <h5>Ultima sesion creada:</h5>
            &nbsp;
            <h5>Segunda sesion ordinaria, 15 de febrero de 2022</h5>
          </div>

          <div className="nuevaSesionContainer">
            <h5>Nueva sesion:</h5>
            &nbsp;
            <h5>{nextSesionName}</h5>
            &nbsp;
            <TextField
              id="date"
              label="Nueva sesión"
              type="date"
              defaultValue="2022-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e)=>console.log(e.target.value)}
            />
          </div>

          <div className="newAnexoButtonContainer">
            <h5>Nueva sesion:</h5>
            <ButtonPrimarys
                buttonOnClick={() => setShowModal(true)}
                textButton={" +  Nuevo anexo"}
              />
          </div>
          
          <div className="anexosContainer">
              {
                temasOrdenDelDia.map((item:any)=>{
                  return  <TemaSesionItem
                    title={item.anexoName}
                    url={item.anexoDocumentUrl}
                    isExpandable={false}
                    hasSubtitles={item.subtitles.length === 0 ? false : true}
                    subtitiles={item.subtitles}
                    hasFiles={undefined}
                    files={undefined} openFilesModal={() => console.log('hi')} openWriteCommentModal={() => console.log('hi')}
                  />
                })
              }
          </div>
          
          <div className={"create-button"}>
            <ButtonPrimarys
              buttonOnClick={() => {
                console.log("hola");
              }}
              textButton={"Crear"}
            />
          </div>
        </Grid>
      </div>
    </NavigatorPlaneacion>
  );
};
