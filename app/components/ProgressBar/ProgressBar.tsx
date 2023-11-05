import css from 'classnames';
import styles from './ProgressBar.module.css';

type Props = {
  progress: number;
  className?: string;
};

const ProgressBar = ({ className, progress }: Props): JSX.Element => {
  return (
    <div className={css(styles.wrapper, className)}>
      <p>{progress} %</p>

      <div className={styles['bar-container']}>
        <div className={styles['bar']} style={{ width: `${progress}%`}}></div>
      </div>
    </div>
  )
};

export { ProgressBar };
