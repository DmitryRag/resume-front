import { Box } from '@mui/material';
import treangle from '../../assets/treangle.svg';
import circle from '../../assets/circle.svg';
import square from '../../assets/square.svg';
import { makeStyles } from '@mui/styles';

const useStyles: () => { rotate: string, rotateReverse: string } = makeStyles({
  rotate: {
    //animation: '$spin 15s linear infinite',
    animationName: '$spin',
    animationDuration: '15s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    position: 'absolute',
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: '-1',
  },
  rotateReverse: {
    //animation: '$spin 15s linear infinite',
    animationName: '$spinReverse',
    animationDuration: '15s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    position: 'absolute',
    backgroundColor: 'transparent',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: '-1',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(360deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
  '@keyframes spinReverse': {
    '0%': {
      transform: 'rotate(-360deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
});

export default function AnimationBackgroundLayout() {
  const classes = useStyles();
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '0',
        width: '100%',
        bottom: '0',
        left: '0',
        zIndex: '-1',
        overflow: 'hidden',
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundImage: `url(${treangle})`,
          top: '18vh',
          left: '-20vw',
          width: '701px',
          height: '635px',
          animationDuration: '15s',
        }}
        className={classes.rotate}
      />

      <Box
        component="div"
        sx={{
          backgroundImage: `url(${circle})`,
          top: '-17vh',
          left: '45vw',
          width: '750px',
          height: '748px',
          animationDuration: '5s',
        }}
        className={classes.rotate}
      />

      <Box
        component="div"
        sx={{
          backgroundImage: `url(${square})`,
          left: '50vw',
          bottom: '-50vh',
          width: '710px',
          height: '769px',
          animationDuration: '20s'
        }}
        className={classes.rotate}
      />
    </Box>
  );
}
