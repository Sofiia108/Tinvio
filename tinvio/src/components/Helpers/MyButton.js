/*
import { makeStyles } from '@mui/material/styles';
import {Button} from '@mui/material';
import theme from '../../MyTheme';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const PREFIX = 'MyCard';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
}
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
  },
  [`& .${classes.cta}`]: {
    borderRadius: theme.shape.radius
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
    lineHeight: 1.7
  },
}))

const MyButton = () => {

  return (
    <>
    <Button variant="contained" className={classes.root}>
      Click me
    </Button>
    </>

  );
}

export default MyButton;

*/


