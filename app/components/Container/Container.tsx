import css from 'classnames';
import styles from './Container.module.css';

type Props = {
  children?: JSX.Element | JSX.Element[];
  height?: number;
  className?: string;
};

const Container = ({ children, height, className }: Props): JSX.Element => {

  return (
    <div className={css(styles.wrapper, { minHeight: `${height}px` ?? '100%' }, className)}>
      {children}
    </div>
  );
};

export { Container };
