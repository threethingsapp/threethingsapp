import css from "classnames";
import styles from "./Pill.module.css";

type Props = {
  color: string;
  children: JSX.Element;
  className?: string;
};

const Pill = ({ color, children, className }: Props): JSX.Element => {
  return (
    <div style={{ backgroundColor: color }} className={css(styles['colored-pill'], className)}>
      {children}
    </div>
  )
};

export { Pill };
