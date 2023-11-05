import css from 'classnames';
import styles from './Container.module.css';

type Props = {
  children: JSX.Element | JSX.Element[];
  height?: number;
  className?: string;
  style?: Record<string, string | number>;
};

const Container = ({ children, height, className, style }: Props): JSX.Element => {

  return (
    <div className={css(styles.wrapper, className)} style={{ minHeight: `${height}px` ?? '100%', ...style }}>
      {children}
    </div>
  );
};

export { Container };
