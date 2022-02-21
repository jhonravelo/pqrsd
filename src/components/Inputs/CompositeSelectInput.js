import React, { Fragment, useState, useCallback } from 'react';
import {
  makeStyles,
  MenuItem,
  Select,
  FormHelperText,
  TextField
} from '@material-ui/core';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';

const CompositeSelectInput = props => {
  const classes = useStyles();

  const {
    inputId,
    selectId,
    options,
    innerRef,
    helperText,
    error,
    TextInputProps,
    SelectInputProps,
    InputLabelProps,
    className
  } = props;

  const [focused, setFocused] = useState(false);

  const onFieldFocus = useCallback(() => setFocused(true), []);

  const onLoseInputFocus = useCallback(() => {
    if (TextInputProps && TextInputProps.onBlur) {
      TextInputProps.onBlur();
    }
    setFocused(false);
  }, [TextInputProps]);

  const onLoseSelectFocus = useCallback(() => {
    if (SelectInputProps && SelectInputProps.onBlur) {
      SelectInputProps.onBlur();
    }
    setFocused(false);
  }, [SelectInputProps]);

  return (
    <Fragment>
      <div className={clsx([className])}>
        <div
          className={clsx([
            { [classes.hovered]: !focused && !Boolean(error) },
            classes.rowContainer
          ])}
          ref={innerRef}
        >
          <TextField
            id={inputId}
            type="text"
            variant="outlined"
            margin="none"
            onFocus={onFieldFocus}
            {...TextInputProps}
            onBlur={onLoseInputFocus}
            InputProps={{
              className: clsx([{ root: classes.root, 'Mui-focused': focused }]),
              inputProps: {
                className: clsx([classes.input, classes.defaultFont])
              }
            }}
            InputLabelProps={{
              className: clsx([{ 'Mui-focused': focused }]),
              ...InputLabelProps
            }}
            className={clsx([
              classes.value,
              TextInputProps && TextInputProps.className
            ])}
            error={error}
          />
          <Controller
            as={
              <Select onFocus={onFieldFocus}>
                {options.map((obj, idx) => (
                  <MenuItem
                    classes={{
                      root: classes.item
                    }}
                    key={`${idx}-${obj.label}`}
                    value={obj.value}
                  >
                    <div
                      className={clsx([
                        classes.defaultFont,
                        error && classes.errorText
                      ])}
                    >
                      {obj.image &&
                        obj.image({ size: 21, className: classes.image })}
                      {obj.label}
                    </div>
                  </MenuItem>
                ))}
              </Select>
            }
            id={selectId}
            autoWidth
            variant="outlined"
            {...SelectInputProps}
            onBlur={onLoseSelectFocus}
            className={clsx([
              classes.selector,
              SelectInputProps && SelectInputProps.className,
              { 'Mui-focused': focused }
            ])}
            classes={{
              icon: classes.selectIcon,
              iconOutlined: classes.selectIconOutlined
            }}
            error={error}
          />
        </div>
        {helperText && (
          <FormHelperText error={Boolean(error)} className={classes.helper}>
            {helperText}
          </FormHelperText>
        )}
      </div>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 58
  },
  label: {
    fontSize: 13
  },
  helper: {
    fontSize: 11,
    margin: '5px 14px 0',
    [theme.breakpoints.up('sm')]: {
      fontSize: 12
    }
  },
  selector: {
    minWidth: '25%',
    fontSize: 14,
    '& fieldset': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeft: 0
    }
  },
  selectIcon: {
    top: 'auto'
  },
  selectIconOutlined: {
    right: 0
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 58,
    borderRadius: 5
  },
  input: {
    height: 'inherit',
    minHeight: 21
  },
  value: {
    flex: 1,
    '& fieldset': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    minHeight: 58
  },
  defaultFont: {
    fontSize: 14
  },
  errorText: {
    color: theme.palette.error.main
  },
  hovered: {
    '&:hover $value': {
      '& fieldset': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRadius: 4,
        borderColor: '#333333',
        borderWidth: 1
      }
    },
    '&:hover $selector': {
      '& fieldset': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderRadius: 4,
        borderColor: '#333333',
        borderWidth: 1
      }
    }
  }
}));

export default CompositeSelectInput;
