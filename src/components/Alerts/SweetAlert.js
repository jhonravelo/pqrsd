import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SuccessIcon from '../CustomIcons/SuccessIcon';
import InfoIcon from '../CustomIcons/InfoIcon';
import ErrorIcon from '../CustomIcons/ErrorIcon';
import WarningIcon from '../CustomIcons/WarningIcon';
import { theme } from '../../Configs/Theme';

const TypeIcon = {
  success: SuccessIcon,
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon
};

const backgroundColors = {
  success: theme.palette.success.light,
  info: theme.palette.primary.light,
  warning: theme.palette.warning.light,
  error: theme.palette.error.light
};

const SweetAlert = props => {
  const {
    id,
    type = 'info',
    noIcon = false,
    message,
    classes = {},
    onClick
  } = props;

  const baseClasses = useStyles();

  const TypeClass = {
    success: baseClasses.success,
    info: baseClasses.info,
    error: baseClasses.error,
    warning: baseClasses.warning
  };

  const Icon = TypeIcon[type];

  return (
    <div
      id={id}
      className={clsx(baseClasses.root, TypeClass[type], classes.root)}
      onClick={onClick}
    >
      <div
        className={clsx(baseClasses.messageContainer, classes.messageContainer)}
      >
        {!noIcon && (
          <Icon
            size={32}
            color={backgroundColors[type]}
            className={clsx(baseClasses.icon, classes.icon)}
          />
        )}
        <Typography className={clsx(baseClasses.message, classes.message)}>
          {message}
        </Typography>
      </div>
    </div>
  );
};

// eslint-disable-next-line no-shadow
const useStyles = makeStyles(theme => ({
  root: {
    opacity: 0.6,
    display: 'flex',
    flexShrink: 0,
    flexFlow: 'nowrap',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  info: {
    backgroundColor: backgroundColors.info,
    border: `solid 1px ${theme.palette.primary.main}`
  },
  warning: {
    backgroundColor: backgroundColors.warning,
    border: `solid 1px ${theme.palette.warning.main}`
  },
  error: {
    backgroundColor: backgroundColors.error,
    border: `solid 1px ${theme.palette.error.main}`
  },
  success: {
    backgroundColor: backgroundColors.success,
    border: `solid 1px ${theme.palette.success.main}`
  },
  message: {
    fontSize: '0.8em',
    fontWeight: 500
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  icon: {
    marginRight: theme.spacing(1),
    flexShrink: 0
  }
}));

export default SweetAlert;
