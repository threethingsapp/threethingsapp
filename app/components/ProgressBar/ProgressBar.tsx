import styles from './ProgressBar.module.css';

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <p>{progress} %</p>

      <div className={styles['bar-container']}>
        <div className={styles['bar']} style={{ width: `${progress}%`}}></div>
      </div>
    </div>
  )
};

export { ProgressBar };
