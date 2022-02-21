import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const TextInput = props => {
  const classes = useStyles();
  const {
    className = '',
    id,
    innerRef,
    InputProps,
    InputLabelProps,
    type
  } = props;

  const inputStyle = type === 'password' ? classes.password : '';
  return (
    <TextField
      id={id}
      className={className}
      margin="normal"
      variant="outlined"
      {...props}
      InputProps={{
        classes: {
          root: classes.root,
          input: clsx(classes.input, inputStyle),
          adornedEnd: classes.adornedEnd,
          inputAdornedStart: classes.inputAdornedStart
        },
        ref: innerRef,
        ...InputProps
      }}
      FormHelperTextProps={{
        classes: {
          root: classes.helperText
        }
      }}
      InputLabelProps={{
        ...InputLabelProps
      }}
    />
  );
};

const useStyles = makeStyles(() => ({
  root: {
    minHeight: 58
  },
  input: {
    height: 'inherit',
    fontSize: 14
  },
  adornedEnd: {
    paddingRight: 0
  },
  helperText: {
    fontSize: 12,
    marginTop: 5
  },
  password: {
    font: 'large Verdana,sans-serif',
    fontSize: 17
  },
  inputAdornedStart: {
    paddingLeft: 14
  }
}));

export default TextInput;
