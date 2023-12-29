import css from "classnames";
import styles from "./Button.module.css";

type Props = {
  title?: string;
  theme?: "primary" | "outline" | "clear" | undefined;
  size?: "normal" | "small" | undefined;
  style?: Record<string, unknown> | undefined;
  className?: {};
  wrapperClassName?: {};
  children?: JSX.Element;
  onClick: () => void;
};

const Button = ({
  title,
  theme = "outline",
  size = "normal",
  style,
  children,
  className,
  wrapperClassName,
  onClick
}: Props): JSX.Element => {
  const isSmall = size === 'small';

  return (
    <div className={css(styles.wrapper, wrapperClassName)}>
      <button
        style={style}
        className={css(styles.button, {
          [styles["primary-button"]]: theme === "primary",
          [styles["outline-button"]]: theme === "outline",
          [styles["clear-button"]]: theme === "clear",
          [styles['button--small']]: isSmall
        }, className)}
        onClick={onClick}
      >
        {title}
        {children}
      </button>
    </div>
  );
};

export { Button };
