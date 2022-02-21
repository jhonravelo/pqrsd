import React, { useCallback, useState } from 'react';
import TextInput from './TextInput';

const TextAreaInput = (props, ref) => {
  const {
    id,
    label,
    name,
    maxLength,
    rows = 4,
    rowsMax = 4,
    margin = 'none',
    helperText,
    ...rest
  } = props;
  const [charCount, setCharCount] = useState(0);

  const onChangeTextArea = useCallback(
    e => {
      setCharCount(e.target.value ? e.target.value.length : 0);
    },
    [setCharCount]
  );

  return (
    <TextInput
      inputRef={ref}
      id={id}
      fullWidth
      multiline
      margin={margin}
      label={label}
      name={name}
      rows={rows}
      rowsMax={rowsMax}
      inputProps={{
        maxLength
      }}
      helperText={helperText || `${charCount}/${maxLength}`}
      onChange={onChangeTextArea}
      {...rest}
    />
  );
};

export default React.forwardRef(TextAreaInput);
