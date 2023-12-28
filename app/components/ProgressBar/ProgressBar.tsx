import css from 'classnames';
import styles from './ProgressBar.module.css';

type Props = {
  progress: number;
  className?: string;
  color?: string;
  showNumbers?: boolean;
};

const ProgressBar = ({ className, progress, color, showNumbers = false }: Props): JSX.Element => {
  return (
    <div className={css(styles.wrapper, className)}>
      {showNumbers && <p>{progress} %</p>}

      <div className={styles['bar-container']}>
        <div className={styles['bar']} style={{ width: `${progress}%`, backgroundColor: color  }}></div>
      </div>
    </div>
  )
};

export { ProgressBar };
