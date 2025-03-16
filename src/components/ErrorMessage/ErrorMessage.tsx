import { ErrorProps } from '../../types';
import s from './ErrorMessage.module.css';

const ErrorMessage = ({
  message = 'Something went wrong! Try again later...',
}: ErrorProps) => {
  return (
    <div className={s.errorMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
