import { notify } from 'react-toastify';

export const showToast = (message, type) => {
  notify.show(message, type);
};
