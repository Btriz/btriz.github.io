import { useState } from 'react';
import type { AlertProps } from '../components/Alert';

const useAlert = () => {
  const [alert, setAlert] = useState<AlertProps & {show: boolean}>({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }: AlertProps) => setAlert({
    show: true,
    text,
    type,
  });

  const hideAlert = () => setAlert({
    show: false,
    text: '',
    type: 'danger',
  });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
