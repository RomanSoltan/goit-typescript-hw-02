import s from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={s.errorMessage}>
      <p>Something went wrong! Try again later...</p>
    </div>
  );
};

export default ErrorMessage;
