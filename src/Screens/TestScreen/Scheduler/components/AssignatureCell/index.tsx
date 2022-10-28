import "./index.css";
import {useEffect,  useState} from 'react';

interface assignatureCellProps {
  item: any;
  onOpenModal: () => void;
}

export const AssignatureCell = ({
  item,
  onOpenModal,
}: assignatureCellProps) => {

  const [assignatureName, setAssignatureName] = useState("");
  
  useEffect(() => {
    setAssignatureName(item.assignatureName);
  }, [item.assignatureName]);

  return (
    <div className="assignatureCell" onClick={onOpenModal}>
      <i className="material-icons" >add_box</i>
      {(item.assignature !== " ")? assignatureName : "1"}
    </div>
  );
};
