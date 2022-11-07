import { Grid } from "@mui/material";
import { useState } from "react";
import { ModalToAddAssignature } from "../components/ModalAddAssignature";
import { AssignatureCell } from "../components/AssignatureCell";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import swal from 'sweetalert'
import "./index.css";

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
  const [valueCell, setValueCell] = useState({
    id: 0,
    hour: "",
    assignatureName: " ",
  });
  const [day, setDay] = useState("");

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const confirmDelete = () => {
    swal({
      title: "¿Está seguro que desea eliminar esta materia?",
      icon: "warning",
      dangerMode: true,
      closeOnEsc: false,
      buttons:{
        cancel: true, 
        confirm: true
      },
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Materia eliminada correctamente", {
          icon: "success",
        });
      }
    });
  }

  //delete Assignature
  const handleDeleteAssignature = () => {
    swal({
      title: "¿Está seguro que desea eliminar esta asignatura?", 
      text: "La asignatura se eliminará de la celda",
      icon: "warning", 
      dangerMode: true, 
      closeOnEsc: false, 
      buttons: ["Cancelar", "Aceptar"]
    })
    .then((willDelete) => {
      if(willDelete){
        switch (day) {
          case "Monday": {
            Monday.map((el) =>
              el.id === positionIndex ? (el.assignatureName = " ") : " "
            );
            break;
          }
          case "Tuesday": {
            Tuesday.map((el) =>
              el.id === positionIndex ? (el.assignatureName = " ") : " "
            );
            break;
          }
          case "Wednesday": {
            Wednesday.map((el) =>
              el.id === positionIndex ? (el.assignatureName = " ") : " "
            );
            break;
          }
          case "Thursday": {
            Thursday.map((el) =>
              el.id === positionIndex ? (el.assignatureName = " ") : " "
            );
            break;
          }
          case "Friday": {
            Friday.map((el) =>
              el.id === positionIndex ? (el.assignatureName = " ") : " "
            );
            break;
          }
          case "Saturday": {
            Saturday.map((el) =>
              el.id === positionIndex ? (el.assignatureName = " ") : " "
            );
            break;
          }
          default: {
            break;
          }
        }
        swal({
          title: "Asignatura eliminada con éxito",
          icon: "success",
          timer: 1250
        });
        onCloseModal();
      }
    });
  };

  const onCloseModal = () => {
    setValueCell({
      id: 0,
      hour: "",
      assignatureName: " ",
    });
    setOpenModal(false);
  };

  // submit to add assignature in scheduleCard
  const onSubmit = (value: string) => {
    if (value === "") {
      setOpenModal(false);
      return;
    }

    const assignature = Assignatures.find((el) => value === el.assignatureName);
    const newAssignature = assignature?.assignatureName;

    switch (day) {
      case "Monday": {
        Monday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        );
        break;
      }
      case "Tuesday": {
        Tuesday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        );
        break;
      }
      case "Wednesday": {
        Wednesday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        );
        break;
      }
      case "Thursday": {
        Thursday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        );
        break;
      }
      case "Friday": {
        Friday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        );
        break;
      }
      case "Saturday": {
        Saturday.map((el) =>
          el.id === positionIndex ? (el.assignatureName = newAssignature!) : " "
        );
        break;
      }
      default: {
        break;
      }
    }

    setOpenModal(false);
  };

  //Drag and Drop function
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    let copyAssignature: string;

    switch (source.droppableId) {
      case "MondayColumn": {
        if (Monday[source.index].assignatureName === " ") return;
        copyAssignature = Monday[source.index].assignatureName;
        break;
      }
      case "TuesdayColumn": {
        if (Tuesday[source.index].assignatureName === " ") return;
        copyAssignature = Tuesday[source.index].assignatureName;
        break;
      }
      case "WednesdayColumn": {
        if (Wednesday[source.index].assignatureName === " ") return;
        copyAssignature = Wednesday[source.index].assignatureName;
        break;
      }
      case "ThursdayColumn": {
        if (Thursday[source.index].assignatureName === " ") return;
        copyAssignature = Thursday[source.index].assignatureName;
        break;
      }
      case "FridayColumn": {
        if (Friday[source.index].assignatureName === " ") return;
        copyAssignature = Friday[source.index].assignatureName;
        break;
      }
      case "SaturdayColumn": {
        if (Saturday[source.index].assignatureName === " ") return;
        copyAssignature = Saturday[source.index].assignatureName;
        break;
      }
      default: {
        break;
      }
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
  };

  return (
    <>
      <ModalToAddAssignature
        onCloseModal={onCloseModal}
        isOpen={openModal}
        valueCell={valueCell}
        onSubmit={onSubmit}
        handleDeleteAssignature={handleDeleteAssignature}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container direction="row" className="div-grid">
          <Grid
            container
            direction="row"
            className="grid-schedule"
            wrap="nowrap"
          >
            <Grid item xs={2}>
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

            <Grid item xs={2}>
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
                                setValueCell(item);
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

            <Grid item xs={2}>
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
                                setValueCell(item);
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

            <Grid item xs={2}>
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
                                setValueCell(item);
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

            <Grid item xs={2}>
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
                                setValueCell(item);
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

            <Grid item xs={2}>
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
                                setValueCell(item);
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

            <Grid item xs={2}>
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
                                setValueCell(item);
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
