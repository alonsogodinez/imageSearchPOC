import React, { useState } from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useStyles from './styles'
import PreviewModal from '../PreviewModal/PreviewModal'

export default function ResultList({results}) {
  const classes = useStyles();
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState({})
  return (
    <div className={classes.container}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {results.map(img => (
          <GridListTile
            className={classes.tile}
            key={img.url}
            cols={img.cols || 1}
            onClick={() => {
              setPreviewImage(img)
              setPreviewModalOpen(true)
            }}
          >
            <img src={img.url} alt={img.name} />
          </GridListTile>
        ))}
      </GridList>

      <PreviewModal
        isOpen={isPreviewModalOpen}
        img={previewImage}
        setModalOpen={setPreviewModalOpen}/>
    </div>
  );
}
