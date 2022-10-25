import { Grid } from "@mui/material";
import { useState } from "react";
import "./index.css";
//import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { ModalToAddAssignature } from '../ModalAddAssignature';
import { AssignatureComponent } from '../AssignatureCell';

//import { semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8, semester9 } from '../../../Helpers/semesterData'
import { Monday, Thursday, Wednesday, Assignatures } from "../HelpersTest/DaysData";



export const Schedule = () => {
  // cuadricula 6 x 15
  
  const hours: { start: number; end: number }[] = [];
  let h1 = 7,
    h2 = 8;
  for (let i = 0; i < 15; i++) {
    hours.push({ start: h1, end: h2 });
    h1 = h2;
    h2 = h2 + 1;
  }

  const days = [
    { name: "-" },
    { name: "Lunes" },
    { name: "Martes" },
    { name: "Miercoles" },
    { name: "Jueves" },
    { name: "Viernes" },
    { name: "Sabado" },
  ];

  const [openModal, setOpenModal] = useState(false)

  const [positionIndex, setPositionIndex] = useState(0);
  const [Day, setDay] = useState("");

  // const handlePositionIndex = (event) => {
  //   setPositionIndex(event.target.value)
  // }

  const onOpenModal = () => {
      setOpenModal(true)
  }

  const onCloseModal = () => {
      setOpenModal(false)
  }

  const onSubmit = (value:string) => {
      //const infoToModificate = Monday.find(el=> positionIndex === el.id );
    console.log(value)
    const assignature = Assignatures.find( el => value === el.name);
    console.log("value",assignature)
    console.log("position arrary",positionIndex)
    const site = Monday.find(el => el.id === positionIndex); 
    console.log("site",site)
      
    setOpenModal(false)
    
  }

  return (
    <>

      <ModalToAddAssignature 
        onCloseModal={onCloseModal}
        isOpen={openModal} 
        positionIndex={positionIndex} 
        onSubmit={onSubmit}
        />

      <Grid container direction="row" wrap='nowrap' className="div-cell">

        <Grid container direction="row" className="grid-schedule">
          <Grid>
            <div className="div-cell">{days[0].name}</div>
            {hours.map((item, index) => {
              return (
                <>
                  <Grid item xs={12}>
                    <div key={index} className="div-cell">
                      {item.start} - {item.end}
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid>
            <div className="div-cell">{days[1].name}</div>
            {Monday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div key={index} onClick={() => {
                      setPositionIndex(item.id)
                      setDay("Monday")
                    }}>
                      <AssignatureComponent item={item} onOpenModal={onOpenModal}/>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid>
            <div className="div-cell">{days[2].name}</div>
            {Thursday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div key={index} onClick={() => {
                      setPositionIndex(item.id) 
                      setDay("Thursday")}}>
                      <AssignatureComponent item={item} onOpenModal={onOpenModal}/>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid>
            <div className="div-cell">{days[3].name}</div>
            {Wednesday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div key={index} onClick={() => {setPositionIndex(item.id)}}>
                      <AssignatureComponent item={item} onOpenModal={onOpenModal}/>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
