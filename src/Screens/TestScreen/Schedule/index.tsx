import { Grid } from "@mui/material";
import { useState } from "react";
import "./index.css";
//import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { ModalToAddAssignature } from "../ModalAddAssignature";
import { AssignatureComponent } from "../AssignatureCell";

//import { semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8, semester9 } from '../../../Helpers/semesterData'
import {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Assignatures,
} from "../HelpersTest/DaysData";

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
  const [day, setDay] = useState("");

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  // submit to add assignature in scheduleCard
  const onSubmit = (value: string) => {
    const assignature = Assignatures.find((el) => value === el.assignatureName);
    const newAssignature = assignature?.assignatureName;

    day === "Monday"
      ? Monday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        )
      : day === "Tuesday"
      ? Tuesday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        )
      : day === "Wednesday"
      ? Wednesday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        )
      : day === "Thursday"
      ? Thursday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        )
      : day === "Friday"
      ? Friday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        )
      : Saturday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        );

    setOpenModal(false);
  };
  return (
    <>
      <ModalToAddAssignature
        onCloseModal={onCloseModal}
        isOpen={openModal}
        positionIndex={positionIndex}
        onSubmit={onSubmit}
      />

      <Grid container direction="row" className="div-grid">
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
                    <div
                      key={index}
                      onClick={() => {
                        setPositionIndex(item.id);
                        setDay("Monday");
                      }}
                    >
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
          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[2].name}</div>
            {Tuesday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div
                      key={index}
                      onClick={() => {
                        setPositionIndex(item.id);
                        setDay("Tuesday");
                      }}
                    >
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

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[3].name}</div>
            {Wednesday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div
                      key={index}
                      onClick={() => {
                        setPositionIndex(item.id);
                        setDay("Wednesday");
                      }}
                    >
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

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[4].name}</div>
            {Thursday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div
                      key={index}
                      onClick={() => {
                        setPositionIndex(item.id);
                        setDay("Thursday");
                      }}
                    >
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

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[5].name}</div>
            {Friday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div
                      key={index}
                      onClick={() => {
                        setPositionIndex(item.id);
                        setDay("Friday");
                      }}
                    >
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

          <Grid container direction="column" xs={2}>
            <div className="div-cell">{days[6].name}</div>
            {Saturday.map((item, index) => {
              return (
                <>
                  <Grid item xs>
                    <div
                      key={index}
                      onClick={() => {
                        setPositionIndex(item.id);
                        setDay("Saturday");
                      }}
                    >
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
