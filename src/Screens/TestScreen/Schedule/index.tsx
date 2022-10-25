import { Grid } from "@mui/material";
import { useState } from "react";
import "./index.css";
//import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { ModalToAddAssignature } from '../ModalAddAssignature';
import { AssignatureComponent } from '../AssignatureCell';

//import { semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8, semester9 } from '../../../Helpers/semesterData'
import { Monday, Thursday, Wednesday, Assignatures } from "../HelpersTest/DaysData";


import {
  semester1,
  semester2,
  semester3,
  semester4,
  semester5,
  semester6,
  semester7,
  semester8,
  semester9,
} from "../../../Helpers/semesterData";

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
    { name: <i className="material-icons">calendar_month</i> },
    { name: "Lunes" },
    { name: "Martes" },
    { name: "Miercoles" },
    { name: "Jueves" },
    { name: "Viernes" },
    { name: "Sabado" },
  ];

  const [openModal, setOpenModal] = useState(false);

  const [positionIndex, setPositionIndex] = useState(0);
  const [Day, setDay] = useState("");

  // const handlePositionIndex = (event) => {
  //   setPositionIndex(event.target.value)
  // }

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

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
      <ModalToAddAssignature onCloseModal={onCloseModal} isOpen={openModal} />

      <Grid container direction="row" className="div-grid">
        {/* <Grid direction="column" xs={2}>
            {subjects.map((item, index) => {
              return (
                <Grid item xs={10}>
                  <div key={index} className="div-cell">
                    {item.name}
                  </div>
                </Grid>
              );
            })}
          </Grid> */}

        <Grid container direction="row" className="grid-schedule" wrap="nowrap">
          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[0].name}</div>
            {hours.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div key={index} className="div-cell">
                      {item.start} - {item.end}
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[1].name}</div>
            {Monday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <AssignatureComponent
                      item={item}
                      onOpenModal={onOpenModal}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[2].name}</div>
            {Thursday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <AssignatureComponent
                      item={item}
                      onOpenModal={onOpenModal}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[3].name}</div>
            {hours.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <AssignatureComponent
                      item={item}
                      onOpenModal={onOpenModal}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[4].name}</div>
            {hours.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <AssignatureComponent
                      item={item}
                      onOpenModal={onOpenModal}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[5].name}</div>
            {hours.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <AssignatureComponent
                      item={item}
                      onOpenModal={onOpenModal}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[6].name}</div>
            {hours.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div key={index}>
                      <AssignatureComponent
                        item={item}
                        onOpenModal={onOpenModal}
                      />
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
