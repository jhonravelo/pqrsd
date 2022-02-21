import React from 'react';
import NumberFormat from 'react-number-format';
import TextInput from './TextInput';

function NumberFormatCustom(props) {
  const {
    inputRef,
    onChange,
    type = 'tel',
    mask = ' ',
    format = '(###) ###-####',
    ...rest
  } = props;
  return (
    <NumberFormat
      type={type}
      format={format}
      mask={mask}
      {...rest}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
    />
  );
}

export default function PhoneInput({
  type,
  format,
  mask,
  InputProps = {},
  NumberInputProps = {},
  ...rest
}) {
  return (
    <TextInput
      InputProps={{
        inputComponent: NumberFormatCustom,
        ...InputProps,
        inputProps: {
          format,
          mask,
          type,
          ...NumberInputProps
        }
      }}
      {...rest}
    />
  );
}
