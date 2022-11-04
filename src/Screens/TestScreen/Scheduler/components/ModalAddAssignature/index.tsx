import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ButtonPrimarys } from "../../../../../Components/Buttons/Buttons";
import { LogInContainer } from "../../../../../Components/Containers/LogInContainer/logInContainer";
import { ThemedH1 } from "../../../../../Components/ThemedTexts";
import Selector from "../../components/Selector";
import "./index.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "100%",
    height: "100%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
  },
};

interface modalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  handleDeleteAssignature: () => void;
  valueCell: {
    hour: any; assignatureName: string 
};
  onSubmit: (value: string) => void;
}

export const ModalToAddAssignature = ({
  isOpen,
  onCloseModal,
  valueCell,
  onSubmit,
  handleDeleteAssignature,
}: modalProps) => {
  const [valueSelector, setValueSelector] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [dataLoaded, setDataloaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (valueCell.assignatureName === " ") {
        setValueSelector("");
        setIsEdit(false);
      } else {
        setValueSelector(valueCell.assignatureName);
        setIsEdit(true);
      }
    } else {
      setValueSelector("");
    }
    setDataloaded(true);
  }, [isOpen, valueCell.assignatureName]);

  return (
    <>
      {dataLoaded && (
        <Modal
          isOpen={isOpen}
          onRequestClose={onCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <LogInContainer>
            <ThemedH1 text="Añadir asignatura" />
            <br />
            <ThemedH1 text="Asignatura:" />
            <ThemedH1 text={`Horario: ${isEdit ? valueCell.hour : ""}`} />
            <Selector
              setValueSelector={setValueSelector}
              valueSelector={valueSelector}
            />
            <hr />
            <div className={isEdit ? "buttonsModalContainer" : "end-container"}>
              {isEdit && (
                <button
                  className="button-delete"
                  onClick={() => handleDeleteAssignature()}
                >
                  <i className="material-icons">delete</i>
                </button>
              )}
              <div>
                <ButtonPrimarys
                  buttonOnClick={() => onCloseModal()}
                  textButton={"Cancelar"}
                  isCancel
                  isborder
                />
                <ButtonPrimarys
                  buttonOnClick={() => onSubmit(valueSelector)}
                  textButton={"Guardar"}
                  isCancel={false}
                  isborder
                />
              </div>
            </div>
          </LogInContainer>
        </Modal>
      )}
    </>
  );
};
