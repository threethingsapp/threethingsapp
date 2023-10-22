'use client'

import css from 'classnames';
import styles from './Button.module.css';

type Props = {
  title: string;
  theme?: 'primary' | 'outline' | undefined;
  style?: Record<string, unknown> | undefined;
};

const Button = ({ title, theme = 'outline', style }: Props): JSX.Element => {
  return (
    <div className={css(styles.wrapper)} style={style}>
      <button className={css(styles.button, {
        [styles['primary-button']]: theme === 'primary',
        [styles['outline-button']]: theme === 'outline',
      })}>{title}</button>
    </div>
  )
};

export { Button };
