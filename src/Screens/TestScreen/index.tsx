import "./index.css";
import { CardJuntaDeGobierno } from "../Administrativos/planeacion/juntaDeGobierno/components/cardJuntaDeGobierno/index";
import { Grid } from "@mui/material";
import { RoundButtonAdd } from "../../Components/Buttons/Buttons";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { DropFileInput } from "../../Components/DropFileInput/DropFileInput";
import CheckBox from "../../Components/ChecksBox/ChecksBox";
import { HeaderBottomBorder } from "../Administrativos/planeacion/juntaDeGobierno/components/headerBottomBorder";
import { NewJuntaDeGobierno } from "../Administrativos/planeacion/juntaDeGobierno/newJuntaDeGobierno/index";
import { JuntaDeGobiernoDetails } from "../Administrativos/planeacion/juntaDeGobierno/juntaDeGobiernoDetails";
import { HomeJuntaDeGobierno } from "../Administrativos/planeacion/juntaDeGobierno/homeJuntaDeGobierno";

export const TestScreen = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {/* <HeaderBottomBorder title='Primera sesion ordinaria' subtitle='15 de febrero de 2022'/>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
        <Grid item xs={3}>
          <CardJuntaDeGobierno date='15 de febrero de 2022' title='Primera sesion ordinaria'/>
        </Grid>
      </Grid> */}
      {/* <NewJuntaDeGobierno /> */}
      
      <JuntaDeGobiernoDetails/>
      {/* <HomeJuntaDeGobierno/> */}
      {/* <RoundButtonAdd icon={<AddCircleOutlineOutlinedIcon fontSize='large'/>} buttonOnClick={() => console.log('hi')}/>
    
      <DropFileInput borderColor='#00A29A' message={'seleccione el archivo'} onChangeInputFiles={()=>console.log('hi')}/>
    
      <CheckBox labelCheckBox='Tiene subtemas' onChange={()=>console.log('hi')}/> */}
    </div>
  );
};
