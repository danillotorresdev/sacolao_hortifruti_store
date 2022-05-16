import { ToastMessage } from '../../hooks/toast';

export interface ToastContainerProps {
  messages: ToastMessage[];
}

export interface ToastProps {
  message: ToastMessage;
  style: object;
}
