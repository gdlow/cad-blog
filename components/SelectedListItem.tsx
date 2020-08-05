import { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { stlContext } from "./STLContextProvider";
import designs from '../utils/designs/designs';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    maxHeight: 330,
    overflow: 'auto',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
  },
  listSection: {
    backgroundColor: theme.palette.background.paper,
    fontSize: 12,
  },
}));

const SelectedListItem: FC<{}> = () => {
  const classes = useStyles();
  const { current, setCurrent } = useContext(stlContext);

  const handleListItemClick = (event, index) => {
    setCurrent(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="cad items" subheader={
        <ListSubheader className={classes.listSection} component="li" color='inherit'>
          Pinned Designs
        </ListSubheader>
      }>
        {designs.map((item, index) => (
          <li key={`${index}`}>
              <ListItem
                button
                selected={current === index}
                onClick={(event) => {
                  handleListItemClick(event, index);
                }}
              >
                <ListItemText primary={item.title} />
              </ListItem>
          </li>
          ))}
      </List>
    </div>
  );
}

export default SelectedListItem;