import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import "./styles.css"

const assignatures = [
  { id: 1, assignatureName: "Calculo diferencial", semester: "1" },
  { id: 2, assignatureName: "Matematicas discretas", semester: "1" },
  { id: 3, assignatureName: "Quimica", semester: "1" },
  { id: 4, assignatureName: "Fundamentos de programación", semester: "1" },
  { id: 5, assignatureName: "POO", semester: "1" },
  { id: 6, assignatureName: "Taller de investigacion", semester: "1" },
  { id: 7, assignatureName: "Formación cívica y ética", semester: "1" },
  { id: 8, assignatureName: "Diseño y análisis de algoritmos", semester: "1" },
];

interface selectorProps{
  setValueSelector:Dispatch<SetStateAction<string>>
}

const Selector = ({setValueSelector}:selectorProps) => {
  const [subject, setSubject] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
   const eventValue=event.target.value;
    //console.log(eventValue);
    setSubject(eventValue.toString());
    setValueSelector(eventValue.toString());
  };
  

  return (
    <div>
      <FormControl className="form-control" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel className="input-label" id="demo-simple-select-helper-label">Materias</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={subject}
          label="Materias"
          onChange={handleChange}
          className="mr-4"
        >
          {assignatures.map((item) => (
            <MenuItem value={item.assignatureName}>{item.assignatureName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Selector;
