import styles from './Switch.module.scss';

type Props = {};

const Switch = ({}: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.knob}></div>
    </div>
  )
};

export { Switch };
