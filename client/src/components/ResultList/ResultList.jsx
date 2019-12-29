import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import useStyles from './styles'

export default function ResultList({results}) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {results.map(img => (
          <GridListTile key={img.url} cols={img.cols || 1}>
            <img src={img.url} alt={img.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
