import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


import useStyles from "./styles"

export default function SearchAppBar({searchText, setSearchText, setUploadModalOpen}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Image Search
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button
            variant="contained"
            color="default"
            onClick={()=> setUploadModalOpen(true)}
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
