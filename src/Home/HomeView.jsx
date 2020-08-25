import React from 'react';
import {Grid, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  center: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  firstRow: {
    paddingTop: '10em',
  },
}));

const HomeView = () => {
  const classes = useStyles();
  return (
    <Container component="main">
      <Grid container spacing={3} className={[classes.center, classes.firstRow]}>
        <Grid item xs></Grid>
        <Grid item xs>
          <img src="images/radio.png" alt="logo" />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <Grid container spacing={3} className={classes.center}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <h1>Music trumps</h1>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
};

export default HomeView;
