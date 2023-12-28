import css from "classnames";
import styles from "./Pill.module.css";

type Props = {
  color: string;
  children: JSX.Element;
  style?: {};
};

const Pill = ({ color, children, style }: Props): JSX.Element => {
  return (
    <div style={{ backgroundColor: color, ...style }} className={css(styles['colored-pill'])}>
      {children}
    </div>
  )
};

export { Pill };
