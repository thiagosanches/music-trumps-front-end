import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopMenuView = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Music trumps
        </Typography>
        <Button color="inherit" component={RouterLink} to="/SignIn">
          SIgn In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenuView;
