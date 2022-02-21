import React, { Fragment } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import BaseButton from '../../components/Buttons/BaseButton';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  input: {
    display: 'none'
  },
  label: {
    textTransform: 'none',
    fontSize: 15
  },
  helper: {
    fontSize: 12
  },
  button: {
    height: 58,
    textAlign: 'center',
    width: '100%'
  },
  optionWithErrors: {
    borderColor: '#FE685E',
    borderStyle: 'solid',
    borderWidth: 1,
    '&:hover': {
      borderWidth: 2
    }
  }
}));

const FileInput = (props, ref) => {
  const classes = useStyles();
  const {
    name,
    helperText,
    error,
    accept,
    text,
    id,
    inputProps,
    buttonProps,
    multiple = false,
    iconVisible = false,
    Icon = AttachFileIcon
  } = props;
  return (
    <Fragment>
      <div className={classes.root}>
        <input
          accept={accept}
          className={classes.input}
          id={id}
          type="file"
          name={name}
          ref={ref}
          multiple={multiple}
          {...inputProps}
        />
        <label htmlFor={id} classes={classes.label}>
          <BaseButton
            className={clsx(classes.button, {
              [classes.optionWithErrors]: Boolean(error)
            })}
            variant="contained"
            color="secondary"
            component="span"
            {...buttonProps}
          >
            {iconVisible && <Icon />}
            {text}
          </BaseButton>
        </label>
        {helperText && (
          <FormHelperText error={Boolean(error)} className={classes.helper}>
            {helperText}
          </FormHelperText>
        )}
      </div>
    </Fragment>
  );
};

export default React.forwardRef(FileInput);
