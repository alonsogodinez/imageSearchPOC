import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    padding:"48px",
    width: "100%",
    height: "auto",
  },
}));