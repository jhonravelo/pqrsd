import React from 'react';
import NumberFormat from 'react-number-format';
import TextInput from './TextInput';
export default function CurrencyInput({
  thousandSeparator = 'true',
  prefix = '$',
  type = '',
  mask = ' ',
  InputProps = {},
  ...rest
}) {
  return (
    <NumberFormat
      thousandSeparator={thousandSeparator}
      prefix={prefix}
      type={type}
      mask={mask}
      customInput={TextInput}
      InputProps={InputProps}
      {...rest}
    />
  );
}
