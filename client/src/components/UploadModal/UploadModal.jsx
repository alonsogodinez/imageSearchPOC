import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useStyles from './styles'

import {DropzoneDialog} from 'material-ui-dropzone'


export default function UploadModal({ isUploadModalOpen, setUploadModalOpen}) {

  const uploadImages = (images) => {
    const formData = new FormData();
    images.forEach(image =>  formData.append('image', image))
    fetch("/upload", {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }

  return (
    <div>
      <DropzoneDialog
        open={isUploadModalOpen}
        dialogTitle="Upload an Image"
        dropzoneText="Drag an image here or click"
        onSave={uploadImages}
        filesLimit={3}
        showPreviewsInDropzone={true}
        showPreviews={false}
        acceptedFiles={['image/*']}
        maxFileSize={5000000}
        onClose={() => setUploadModalOpen(false)}/>

    </div>
  );
}





