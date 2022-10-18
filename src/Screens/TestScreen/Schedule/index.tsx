import { Grid } from "@mui/material";
import React from "react";
import "./index.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export const Schedule = () => {
  // cuadricula 6 x 15

  const subjects = [
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
    { name: "Matematicas discretas" },
  ];
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

  return (
    <Grid container direction="row" wrap='nowrap' className="div-cell">
      <Grid>
        {subjects.map((item, index) => {
          return (
            <Grid item xs={10}>
              <div key={index} className="div-cell">
                {item.name}
              </div>
            </Grid>
          );
        })}
      </Grid>

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

        <Grid >
          <div className="div-cell">{days[1].name}</div>
          {hours.map((item, index) => {
            return (
              <>
                <Grid item xs>
                  <div key={index} className="div-cell">-</div>
                </Grid>
              </>
            );
          })}
        </Grid>

        <Grid>
          <div className="div-cell">{days[2].name}</div>
          {hours.map((item, index) => {
            return (
              <>
                <Grid item xs>
                  <div key={index} className="div-cell">-</div>
                </Grid>
              </>
            );
          })}
        </Grid>

        <Grid >
          <div className="div-cell">{days[3].name}</div>
          {hours.map((item, index) => {
            return (
              <>
                <Grid item xs>
                  <div key={index} className="div-cell">-</div>
                </Grid>
              </>
            );
          })}
        </Grid>

        <Grid >
          <div className="div-cell">{days[4].name}</div>
          {hours.map((item, index) => {
            return (
              <>
                <Grid item xs>
                  <div key={index} className="div-cell">-</div>
                </Grid>
              </>
            );
          })}
        </Grid>

        <Grid >
          <div className="div-cell">{days[5].name}</div>
          {hours.map((item, index) => {
            return (
              <>
                <Grid item xs>
                  <div key={index} className="div-cell">-</div>
                </Grid>
              </>
            );
          })}
        </Grid>

        <Grid>
          <div className="div-cell">{days[6].name}</div>
          {hours.map((item, index) => {
            return (
              <>
                <Grid item xs>
                  <div key={index} className="div-cell">-</div>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};
