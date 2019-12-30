import React,  {Fragment, useState} from 'react';
import useStyles from './styles'

import {DropzoneDialog} from 'material-ui-dropzone'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress'

export default function UploadModal({ isOpen, setModalOpen, addMoreResults}) {
  const [isLoading, setLoading] = useState(false)
  const classes = useStyles()
  const uploadImages = (images) => {
    const formData = new FormData();
    images.forEach(image =>  formData.append('image', image))
    setLoading(true)
    fetch("/upload", {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(({images}) => addMoreResults(images))
      .catch(error => console.error('Error:', error))
      .finally(() => {
        setLoading(false)
        setModalOpen(false);
      })
  }

  return (
    <Fragment>
      <Backdrop
        className={classes.backdrop}
        timeout={60000}
        style={{zIndex: 1301}}
        open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <DropzoneDialog
        open={isOpen}
        dialogTitle="Upload an Image"
        dropzoneText="Drag an image here or click"
        onSave={uploadImages}
        filesLimit={3}
        showPreviewsInDropzone={true}
        showPreviews={false}
        acceptedFiles={['image/*']}
        maxFileSize={5000000}
        onClose={() => setModalOpen(false)}/>

    </Fragment>
  );
}





