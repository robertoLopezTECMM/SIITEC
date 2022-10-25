import React from "react";
import "./index.css";

interface assignatureComponentProps {
  item: any;
  onOpenModal: () => void;
}

export const AssignatureComponent = ({
  item,
  onOpenModal,
}: assignatureComponentProps) => {
  return (
    <div onClick={onOpenModal} className="assignatureCell">
      <i className="material-icons">add_box</i>
    </div>
  );
};
