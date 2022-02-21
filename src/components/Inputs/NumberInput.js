import React from 'react';
import NumberFormat from 'react-number-format';
import TextInput from './TextInput';

export default function NumberInput({
  type = 'tel',
  format = '(###) ###-####',
  mask = ' ',
  InputProps = {},
  ...rest
}) {
  return (
    <NumberFormat
      customInput={TextInput}
      type={type}
      format={format}
      mask={mask}
      InputProps={InputProps}
      {...rest}
    />
  );
}
