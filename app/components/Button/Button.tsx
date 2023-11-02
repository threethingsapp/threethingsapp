"use client";

import css from "classnames";
import styles from "./Button.module.css";

type Props = {
  title: string;
  theme?: "primary" | "outline" | undefined;
  size?: "normal" | "small" | undefined;
  style?: Record<string, unknown> | undefined;
};

const Button = ({
  title,
  theme = "outline",
  size = "normal",
  style,
}: Props): JSX.Element => {
  const isSmall = size === 'small';

  return (
    <div className={css(styles.wrapper)} style={style}>
      <button
        className={css(styles.button, {
          [styles["primary-button"]]: theme === "primary",
          [styles["outline-button"]]: theme === "outline",
          [styles['button--small']]: isSmall
        })}
      >
        {title}
      </button>
    </div>
  );
};

export { Button };
