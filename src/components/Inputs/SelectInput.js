import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const SelectInput = props => {
  const {
    className,
    id,
    options,
    InputLabelProps,
    InputProps,
    displayIdentifier = false,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <TextField
      select
      id={id}
      className={clsx(classes.root, className)}
      margin="normal"
      variant="outlined"
      {...rest}
      InputProps={{
        classes: {
          root: classes.root,
          input: classes.input
        },
        ...InputProps
      }}
      InputLabelProps={{
        ...InputLabelProps
      }}
      SelectProps={{
        SelectDisplayProps: {
          id: `${id}-select`
        }
      }}
      FormHelperTextProps={{
        classes: {
          root: classes.helperText
        }
      }}
    >
      {options.map((obj, idx) => (
        <MenuItem
          id={`SelectInput_${idx}_${id}`}
          classes={{
            root: classes.item
          }}
          key={`${idx}-${obj.label}`}
          value={obj.value}
        >
          <div className={classes.itemContainer}>
            {obj.image && obj.image({ size: 21, className: classes.image })}
            <div className={classes.itemTextPrimary}>
              {obj.label}
              {displayIdentifier && obj.id && (
                <Fragment>
                  <br />
                  <div
                    className={classes.itemTextSecondary}
                  >{`# ${obj.id}`}</div>
                </Fragment>
              )}
            </div>
          </div>
        </MenuItem>
      ))}
    </TextField>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 58
  },
  input: {
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    padding: 14
  },
  item: {
    fontSize: 14
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
    whiteSpace: 'nowrap'
  },
  image: {
    fill: theme.palette.primary.main,
    marginRight: theme.spacing(1.5)
  },
  helperText: {
    fontSize: 12,
    marginTop: 5
  },
  itemTextPrimary: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
    whiteSpace: 'nowrap'
  },
  itemTextSecondary: {
    fontSize: 12,
    lineHeight: 1.2,
    color: theme.palette.text.grey
  }
}));

export default SelectInput;
