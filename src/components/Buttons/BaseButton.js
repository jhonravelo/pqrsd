import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import { CircularProgress } from '@material-ui/core';

const BaseButton = props => {
  const baseClasses = useStyles();
  const {
    id,
    color = 'primary',
    variant = 'contained',
    textVariant = 'none',
    loading,
    disabled,
    className,
    size,
    fullWidth,
    progress = false,
    ...rest
  } = props;

  const coloredButton = () => {
    let colored = {};
    if (color === 'primary' && variant === 'contained') {
      colored = baseClasses.buttonPrimary;
    }
    if (color === 'secondary' && variant === 'contained') {
      colored = baseClasses.buttonSecondary;
    }
    return colored;
  };

  const textButton = () => {
    let textStyle = baseClasses.buttonText;
    if (textVariant === 'capitalize') {
      textStyle = baseClasses.buttonTextCapitalize;
    }
    return textStyle;
  };

  const sizeButton = () => {
    let sizeStyle = baseClasses.buttonBase;
    if (size === 'small') {
      sizeStyle = baseClasses.buttonSmall;
    }
    if (fullWidth) {
      sizeStyle = [sizeStyle, baseClasses.buttonFullWidth];
    }
    return sizeStyle;
  };

  return (
    <Fragment>
      <Button
        id={id}
        disabled={loading || disabled}
        variant={variant}
        color={color}
        className={clsx(sizeButton(), coloredButton(), textButton(), className)}
        {...rest}
      >
        {props.children}
        {progress && loading && (
          <CircularProgress
            size={24}
            className={baseClasses.buttonCircularProgress}
          />
        )}
      </Button>
    </Fragment>
  );
};
const useStyles = makeStyles(theme => ({
  buttonBase: {
    fontSize: 14,
    minHeight: 44,
    fontFamily: theme.typography.fontFamily,
    lineHeight: 1.29,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  buttonSmall: {
    fontSize: 13,
    minHeight: 38,
    fontFamily: theme.typography.fontFamily,
    paddingTop: theme.spacing(),
    boxShadow: 'none',
    paddingBottom: theme.spacing(),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  buttonPrimary: {
    '&:disabled': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.disabled
    }
  },
  buttonSecondary: {
    '&:disabled': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.disabled
    }
  },
  buttonProgress: {
    color: theme.palette.success.main
  },
  buttonText: {
    textTransform: 'none'
  },
  buttonTextCapitalize: {
    textTransform: 'capitalize'
  },
  buttonFullWidth: {
    width: '100%'
  },
  buttonCircularProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));
export default BaseButton;
