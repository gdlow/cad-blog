import { MouseEvent, useContext, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Popover, Typography } from "@material-ui/core";
import { stlContext } from "./STLContextProvider";
import STLViewer from "stl-viewer";
import designs, { Design } from "../utils/designs/designs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);

const STLPopover: FC<{}> = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { current, setCurrent } = useContext(stlContext);
  const chosenDesign: Design = designs[current];

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        View Model
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <STLViewer
          model={chosenDesign.stl_url}
          height={330}
          width={400}
          modelColor="#fdd017"
          backgroundColor="#eaeaea"
          rotate={false}
          orbitControls={true}
        />
      </Popover>
    </div>
  );
}

export default STLPopover;