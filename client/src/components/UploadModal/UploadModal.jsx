import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useStyles from './styles'

import {DropzoneDialog} from 'material-ui-dropzone'


export default function UploadModal({ isUploadModalOpen, setUploadModalOpen}) {

  return (
    <div>
      <DropzoneDialog
        open={isUploadModalOpen}
        dialogTitle="Upload an Image"
        dropzoneText="Drag an image here or click"
        onSave={() => {}}
        filesLimit={1}
        showPreviewsInDropzone={true}
        showPreviews={false}
        acceptedFiles={['image/*']}

        maxFileSize={5000000}
        onClose={() => setUploadModalOpen(false)}></DropzoneDialog>

    </div>
  );
}





