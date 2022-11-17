import "./index.css";
import { RoundButtonAdd } from "../../Components/Buttons/Buttons";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { DropFileInput } from "../../Components/DropFileInput/DropFileInput";
import CheckBox from "../../Components/ChecksBox/ChecksBox";
import { HomeJuntaDeGobierno } from "../Administrativos/planeacion/juntaDeGobierno/homeJuntaDeGobierno";
import { ModalPlanEstudio } from "../Administrativos/planeacion/juntaDeGobierno/components/modalPlanEstudio";

export const TestScreen = () => {
  return (
    <>
      <HomeJuntaDeGobierno />

      {/* <ModalPlanEstudio /> */}

      {/*  
      <RoundButtonAdd icon={<AddCircleOutlineOutlinedIcon fontSize='large'/>} buttonOnClick={() => console.log('hi')}/>
    
      <DropFileInput borderColor='#00A29A' message={'seleccione el archivo'} onChangeInputFiles={()=>console.log('hi')}/>
    
      <CheckBox labelCheckBox='Tiene subtemas' onChange={()=>console.log('hi')}/> */}
    </>
  );
};
