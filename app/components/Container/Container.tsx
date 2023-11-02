import css from 'classnames';
import styles from './Container.module.css';

type Props = {
  children: JSX.Element;
  height?: string;
};

const Container = ({ children, height }: Props): JSX.Element => {
  return (
    <div className={css(styles.wrapper)} style={{ height }}>
      {children}
    </div>
  );
};

export { Container };
