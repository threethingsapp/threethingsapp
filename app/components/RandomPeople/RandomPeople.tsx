import css from 'classnames';
import { Avatar } from '..';
import styles from './RandomPeople.module.css';

const RandomPeople = ({ style }: any): JSX.Element => {
  const rand = Math.floor(Math.random() * 16)
  
  return <div className={css(styles.img, styles[`img${rand + 1}`])} style={style} />;
};

export { RandomPeople };
