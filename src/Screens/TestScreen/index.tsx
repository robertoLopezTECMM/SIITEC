import "./index.css";
import { CardJuntaDeGobierno } from "../Administrativos/planeacion/juntaDeGobierno/components/cardJuntaDeGobierno/index";
import { Grid } from "@mui/material";
import { RoundButtonAdd } from "../../Components/Buttons/Buttons";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { DropFileInput } from "../../Components/DropFileInput/DropFileInput";
import CheckBox from "../../Components/ChecksBox/ChecksBox";
import { HomeJuntaDeGobierno } from "../Administrativos/planeacion/juntaDeGobierno/homeJuntaDeGobierno";
import { ModalPlanEstudio } from "../Administrativos/planeacion/juntaDeGobierno/components/modalPlanEstudio";
import { HeaderBottomBorder } from "../Administrativos/planeacion/juntaDeGobierno/components/headerBottomBorder";
import { NewJuntaDeGobierno } from "../Administrativos/planeacion/juntaDeGobierno/newJuntaDeGobierno/index";
import { JuntaDeGobiernoDetails } from "../Administrativos/planeacion/juntaDeGobierno/juntaDeGobiernoDetails";

export const TestScreen = () => {
  return (
    <>
      {/* <HomeJuntaDeGobierno /> */}

      <ModalPlanEstudio />

      {/* <NewJuntaDeGobierno /> */}

      {/* <RoundButtonAdd icon={<AddCircleOutlineOutlinedIcon fontSize='large'/>} buttonOnClick={() => console.log('hi')}/>
    
      <DropFileInput borderColor='#00A29A' message={'seleccione el archivo'} onChangeInputFiles={()=>console.log('hi')}/>
    
      <CheckBox labelCheckBox='Tiene subtemas' onChange={()=>console.log('hi')}/> */}
    </>
  );
};
