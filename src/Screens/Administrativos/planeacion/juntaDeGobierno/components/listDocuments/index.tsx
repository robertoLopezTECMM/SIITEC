import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";

interface ListsDocumentsProps {
  topic: string;
  subtopic: { title?: string }[];
}

const ListDocuments = ({ topic, subtopic }: ListsDocumentsProps) => {
  return (
    <Grid container className={"item-list"}>
      <div className="row-topic">
        {subtopic.length === 0 ? (
          <Typography>Nombre del documento</Typography>
        ) : (
          <>test</>
        )}
      </div>
    </Grid>
  );
};

export default ListDocuments;
