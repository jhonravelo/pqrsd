import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import clsx from 'clsx';

const FileGridList = props => {
  const { id, files, onDeleteFile, className = '', ...rest } = props;

  const classes = useStyles();

  return (
    <Grid container item xs={12} {...rest}>
      {files.map((file, index) => (
        <Grid
          key={`${id}-${index}`}
          sm="auto"
          xs={12}
          item
          className={className}
        >
          <Chip
            variant="outlined"
            label={file.name}
            onDelete={() => onDeleteFile(index)}
            className={clsx(classes.chip, {
              [classes.error]: file.error
            })}
            classes={{ deleteIcon: classes.deleteIcon }}
          />
          <FormHelperText error={file.error} className={classes.helper}>
            {file.errorMessage}
          </FormHelperText>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  chip: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  helper: {
    paddingLeft: 12,
    fontSize: 12,
    width: '100%'
  },
  error: {
    borderColor: 'red'
  },
  deleteIcon: {
    marginLeft: 'auto'
  }
}));

export default FileGridList;
