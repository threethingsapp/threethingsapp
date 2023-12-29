import styles from "./RandomPeople.module.scss";
import cx from 'classnames';

const getRandomImageStyle = () => {
  const rand = Math.floor(Math.random() * 16);

  return cx(styles.img, styles[`img${rand + 1}`]);
};

export const IMAGE_UTILS = { getRandomImageStyle };