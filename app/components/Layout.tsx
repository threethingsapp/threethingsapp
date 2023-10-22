import styles from './Layout.module.css';

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};
