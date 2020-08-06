import { FC, useContext } from "react";
import { Paper, CardActions, CardContent, Button } from "@material-ui/core";
import { stlContext } from "./STLContextProvider";
import designs, { Design } from "../utils/designs/designs";
import Popover from "./Popover";

import "../styles/card.css";

const DescriptionCard: FC<{}> = () => {
  const { current, setCurrent } = useContext(stlContext);
  const chosenDesign: Design = designs[current];

  return (
    <Paper
      elevation={2}
      style={{
        height: 330,
        width: 450,
        display: "flex",
        flexDirection: "column",
        marginRight: "12px",
      }}
    >
      <CardContent>
        <h2 className="card-title">{chosenDesign.title}</h2>
        <p className="card-caption">{chosenDesign.created_date}</p>
        <p className="card-paragraph">{chosenDesign.description}</p>
      </CardContent>
      <CardActions className="card-action">
        <div className="card-bottom-container">
          <Popover />
          <Button>Design Doc</Button>
        </div>
      </CardActions>
    </Paper>
  );
}

export default DescriptionCard;
