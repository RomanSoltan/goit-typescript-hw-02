import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.css';
import { LoaderProps } from '../../types';

const Loader = ({
  height = '80',
  width = '80',
  color = '#4fa94d',
}: LoaderProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.spinner}>
        <TailSpin
          visible={true}
          height={height}
          width={width}
          color={color}
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      </div>
    </div>
  );
};

export default Loader;
