import { Draggable } from "@hello-pangea/dnd";
import React, { useEffect, useState } from "react";
import "./index.css";

interface assignatureCellProps {
  item: any;
  onOpenModal: () => void;
  index: number;
}

export const AssignatureCell = ({
  item,
  onOpenModal,
  index,
}: assignatureCellProps) => {
  const [assignatureName, setAssignatureName] = useState("");

  useEffect(() => {
    setAssignatureName(item.assignatureName);
  }, [item.assignatureName]);

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={`assignatureCell ${snapshot.isDragging ? "drag" : ""}`}
          onClick={onOpenModal}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {assignatureName}
          <i className="material-icons">add_box</i>
        </div>
      )}
    </Draggable>
  );
};
