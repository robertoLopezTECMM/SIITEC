import { Grid } from "@mui/material";
import { useState } from "react";
import "./index.css";
//import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { ModalToAddAssignature } from "../components/ModalAddAssignature";
import { AssignatureCell } from "../components/AssignatureCell";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

//import { semester1, semester2, semester3, semester4, semester5, semester6, semester7, semester8, semester9 } from '../../../Helpers/semesterData'
import {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Assignatures,
} from "../Helpers/DaysData";

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
    console.log(value);
    console.log(value);
    if (value === "") {
      setOpenModal(false);
      return;
    }
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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    var copyAssignature: string;

    if (source.droppableId === "MondayColumn") {
      if (Monday[source.index].assignatureName === " ") return;
      copyAssignature = Monday[source.index].assignatureName;
      console.log(copyAssignature);
    } else if (source.droppableId === "TuesdayColumn") {
      if (Tuesday[source.index].assignatureName === " ") return;
      copyAssignature = Tuesday[source.index].assignatureName;
      console.log(copyAssignature);
    } else if (source.droppableId === "WednesdayColumn") {
      if (Wednesday[source.index].assignatureName === " ") return;
      copyAssignature = Wednesday[source.index].assignatureName;
      console.log(copyAssignature);
    } else if (source.droppableId === "ThursdayColumn") {
      if (Thursday[source.index].assignatureName === " ") return;
      copyAssignature = Thursday[source.index].assignatureName;
      console.log(copyAssignature);
    } else if (source.droppableId === "FridayColumn") {
      if (Friday[source.index].assignatureName === " ") return;
      copyAssignature = Friday[source.index].assignatureName;
      console.log(copyAssignature);
    } else if (source.droppableId === "SaturdayColumn") {
      if (Saturday[source.index].assignatureName === " ") return;
      copyAssignature = Saturday[source.index].assignatureName;
      console.log(copyAssignature);
    }

    if (destination.droppableId === "MondayColumn") {
      Monday[destination.index].assignatureName = copyAssignature!;
    } else if (destination.droppableId === "TuesdayColumn") {
      Tuesday[destination.index].assignatureName = copyAssignature!;
    } else if (destination.droppableId === "WednesdayColumn") {
      Wednesday[destination.index].assignatureName = copyAssignature!;
    } else if (destination.droppableId === "ThursdayColumn") {
      Thursday[destination.index].assignatureName = copyAssignature!;
    } else if (destination.droppableId === "FridayColumn") {
      Friday[destination.index].assignatureName = copyAssignature!;
    } else if (destination.droppableId === "SaturdayColumn") {
      Saturday[destination.index].assignatureName = copyAssignature!;
    }

    // if (source.droppableId === 'MondayColumn') {
    //   add = assignature[source.index];
    //   assignature.splice(source.index, 1);
    // } else{
    //   add = assignature[source.index];
    //   test.splice(source.index, 1);
    // }

    // if (destination.droppableId === 'MondayColumn') {
    //   assignature.splice(destination.index, 0, add);
    // } else{
    //   test.splice(destination.index, 0, add);
    // }
  };

  return (
    <>
      <ModalToAddAssignature
        onCloseModal={onCloseModal}
        isOpen={openModal}
        positionIndex={positionIndex}
        onSubmit={onSubmit}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container direction="row" className="div-grid">
          <Grid
            container
            direction="row"
            className="grid-schedule"
            wrap="nowrap"
          >
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
              <Droppable droppableId="MondayColumn">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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
                              <AssignatureCell
                                item={item}
                                onOpenModal={onOpenModal}
                                index={index}
                              />
                            </div>
                          </Grid>
                        </>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>

            <Grid container direction="column" xs={2}>
              <div className="div-cell">{days[2].name}</div>
              <Droppable droppableId="TuesdayColumn">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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
                              <AssignatureCell
                                item={item}
                                onOpenModal={onOpenModal}
                                index={index}
                              />
                            </div>
                          </Grid>
                        </>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>

            <Grid container direction="column" xs={2}>
              <div className="div-cell">{days[3].name}</div>
              <Droppable droppableId="WednesdayColumn">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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
                              <AssignatureCell
                                item={item}
                                onOpenModal={onOpenModal}
                                index={index}
                              />
                            </div>
                          </Grid>
                        </>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>

            <Grid container direction="column" xs={2}>
              <div className="div-cell">{days[4].name}</div>
              <Droppable droppableId="ThursdayColumn">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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
                              <AssignatureCell
                                item={item}
                                onOpenModal={onOpenModal}
                                index={index}
                              />
                            </div>
                          </Grid>
                        </>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>

            <Grid container direction="column" xs={2}>
              <div className="div-cell">{days[5].name}</div>
              <Droppable droppableId="FridayColumn">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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
                              <AssignatureCell
                                item={item}
                                onOpenModal={onOpenModal}
                                index={index}
                              />
                            </div>
                          </Grid>
                        </>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>

            <Grid container direction="column" xs={2}>
              <div className="div-cell">{days[6].name}</div>
              <Droppable droppableId="SaturdayColumn">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
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
                              <AssignatureCell
                                item={item}
                                onOpenModal={onOpenModal}
                                index={index}
                              />
                            </div>
                          </Grid>
                        </>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>
          </Grid>
        </Grid>
      </DragDropContext>
    </>
  );
};
