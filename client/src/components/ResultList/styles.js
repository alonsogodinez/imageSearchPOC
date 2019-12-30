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
    padding: '48px',
    width: '100%',
    height: 'auto',
  },
  tile: {
    position: "relative",
    '&:hover:after': {
      opacity: 1,
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: 'rgba(0,0,0,0.5)',
      opacity: 0,
      transition: 'all 1s'
    }
  }
}));