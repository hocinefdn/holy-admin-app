import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import ShopInfo from "./ShopInfo";

const ShopManagement = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-xl font-bold text-center">Gérer la boutique</h1>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Informations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ShopInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Style et design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Bientôt disponible</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Employés</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Bientôt disponible</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ShopManagement;
