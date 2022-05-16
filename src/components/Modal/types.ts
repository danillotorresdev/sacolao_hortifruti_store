import { ComponentType, Ref } from 'react';
import { IconBaseProps } from 'react-icons';

export interface IModalProps {
  title: string;
  icon?: ComponentType<IconBaseProps>;
  children: JSX.Element;
  headerContent?: JSX.Element;
  footerContent?: JSX.Element;
  ref?: Ref<HTMLDivElement>;
  showModal: boolean;
  handleShowModal: () => void;
}
