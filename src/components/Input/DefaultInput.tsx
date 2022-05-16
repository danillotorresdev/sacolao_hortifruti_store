import React, { useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  error,
  defaultValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFielld, setIsFielld] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFielld(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFielld={isFielld}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size="20" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
