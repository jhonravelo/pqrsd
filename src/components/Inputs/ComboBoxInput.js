import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextInput from './TextInput';

const ComboBoxInput = props => {
  const { id, options, TextInputProps = {}, className = '', ...rest } = props;

  return (
    <Autocomplete
      freeSolo
      disableClearable
      className={className}
      id={id}
      options={options}
      ListboxProps={{
        style: { maxHeight: 165 }
      }}
      renderInput={params => (
        <TextInput
          {...params}
          {...TextInputProps}
          InputProps={{
            inputProps: {
              form: {
                autocomplete: 'off'
              },
              ...params.inputProps,
              ...TextInputProps.inputProps
            },
            ...params.InputProps,
            ...TextInputProps.InputProps
          }}
        />
      )}
      {...rest}
    />
  );
};

export default ComboBoxInput;
