import styles from './Input.module.scss';

type Props = {
  placeholder?: string;
};

const Input = ({ placeholder }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.input} placeholder={placeholder} />
    </div>
  )
};

export { Input };
