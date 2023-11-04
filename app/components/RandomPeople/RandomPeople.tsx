import css from 'classnames';
import styles from './RandomPeople.module.css';

const RandomPeople = (): JSX.Element => {
  const rand = Math.floor(Math.random() * 16)
  
  return <div className={css(styles.img, styles[`img${rand + 1}`])} />;
};

export { RandomPeople };
