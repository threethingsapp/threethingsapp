import { ReactElement } from 'react';
import styles from './Layout.module.css';

type Props = {
  children: ReactElement | ReactElement[];
};

export const Layout = ({ children }: Props): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};
