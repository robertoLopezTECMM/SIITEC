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
  positionIndex: number;
  valueCell: { assignatureName: string };
  onSubmit: (value: string) => void;
}

export const ModalToAddAssignature = ({
  isOpen,
  onCloseModal,
  positionIndex,
  valueCell,
  onSubmit,
  handleDeleteAssignature,
}: modalProps) => {
  const [valueSelector, setValueSelector] = useState("");
  const [dataLoaded, setDataloaded] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("afteropenmodal");
  }

  useEffect(() => {
    if (isOpen) {
      if (valueCell.assignatureName === " ") {
        setValueSelector("");
      } else {
        setValueSelector(valueCell.assignatureName);
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
          onAfterOpen={afterOpenModal}
          onRequestClose={onCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
          // overlayClassName="Overlay"
        >
          <LogInContainer>
            <ThemedH1 text="Añadir asignatura" />
            <br />
            <ThemedH1 text="Asignatura:" />
            <ThemedH1 text="Horario:" />
            {isOpen && (
              <Selector
                setValueSelector={setValueSelector}
                valueSelector={valueSelector}
              />
            )}
            <hr />
            <div className="buttonsModalContainer">
              <button onClick={() => handleDeleteAssignature()}>
                Eliminar
              </button>
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
          </LogInContainer>
        </Modal>
      )}
    </>
  );
};
