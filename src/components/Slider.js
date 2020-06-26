import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Amount
      </Typography>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
      </div>
  );
}