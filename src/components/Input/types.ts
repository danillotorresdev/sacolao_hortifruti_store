import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  ref?: React.RefObject<HTMLInputElement>;
}

export interface UnformInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  unformField?: boolean;
}

export interface ContainerProps {
  isFocused: boolean;
  isFielld: boolean;
  isErrored: boolean;
}
