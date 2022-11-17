import React, { useEffect, useState } from "react";
import {
  DocumentButton,
  RoundButtonAdd,
} from "../../../../../../Components/Buttons/Buttons";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import "./index.css";
import { InputText } from "../../../../../../Components/TextInputs/TextInputs";

export const AddSubtitles = () => {

  const listItems = [
    {
      item: (
        <div className="listSubtitles">
          <InputText
            labelText="Nombre del anexo"
            textInputOnChange={() => console.log("hi")}
            placeholder="Escribe el nombre del anexo"
          />
          <DocumentButton
            textButton={""}
            buttonOnClick={() => console.log("FILE")}
          />
        </div>
      ),
    },
    {
      item: (
        <div className="listSubtitles">
          <InputText
            labelText="Nombre del anexo"
            textInputOnChange={() => console.log("hi")}
            placeholder="Escribe el nombre del anexo"
          />
          <DocumentButton
            textButton={""}
            buttonOnClick={() => console.log("FILE")}
          />
        </div>
      ),
    },
  ];

  const onClickPlus = () => {
    listItems.push({
      item: (
        <div className="listSubtitles">
          <InputText
            labelText="Nombre del anexo"
            textInputOnChange={() => console.log("hi")}
            placeholder="Escribe el nombre del anexo"
          />
          <DocumentButton
            textButton={""}
            buttonOnClick={() => console.log("FILE")}
          />
        </div>
      ),
    });
  };

  return (
    <div className="containerComponent">
      {listItems.map((item) => {
        return <>{item.item}</>;
      })}

      <RoundButtonAdd
        icon={<AddCircleOutlineOutlinedIcon fontSize="large" />}
        buttonOnClick={onClickPlus}
      />
    </div>
  );
};
