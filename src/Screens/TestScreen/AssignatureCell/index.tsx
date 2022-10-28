import "./index.css";
import {useEffect,  useState} from 'react';

interface assignatureComponentProps {
  item: any;
  onOpenModal: () => void;
}

export const AssignatureComponent = ({
  item,
  onOpenModal,
}: assignatureComponentProps) => {

  const [assignatureName, setAssignatureName] = useState("");
  
  useEffect(() => {
    console.log("cambio")
    setAssignatureName(item.assignatureName);
  }, [item.assignatureName]);

  return (
    <div onClick={onOpenModal} className="assignatureCell">
      <i className="material-icons">add_box</i>
      {(item.assignature !== " ")? assignatureName : "1"}
    </div>
  );
};
