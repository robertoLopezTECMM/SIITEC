import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./styles.css";

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

interface selectorProps {
  setValueSelector: Dispatch<SetStateAction<string>>;
  valueSelector: string;
}

const Selector = ({ setValueSelector, valueSelector }: selectorProps) => {
  const [subject, setSubject] = useState(valueSelector);
  const [dataLoaded, setDataloaded] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    const eventValue = event.target.value;
    setSubject(eventValue.toString());
    setValueSelector(eventValue.toString());
  };

  useEffect(() => {
    setSubject(valueSelector);
    setDataloaded(true);
  }, [valueSelector]);

  return (
    <>
      {dataLoaded && (
        <div>
          <FormControl className="form-control" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              className="input-label"
              id="demo-simple-select-helper-label"
            >
              Materias
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={subject}
              label="Materias"
              onChange={handleChange}
            >
              {assignatures.map((item) => (
                <MenuItem value={item.assignatureName}>
                  {item.assignatureName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    </>
  );
};

export default Selector;
