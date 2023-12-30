"use client";

import { useState } from "react";
import css from "classnames";
import styles from "./Switch.module.scss";

type Props = {};

const Switch = ({}: Props): JSX.Element => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleToggle = () => setIsSelected(!isSelected);

  return (
    <div
      onClick={handleToggle}
      className={css(styles.wrapper, { [styles.selected]: isSelected })}
    >
      <div className={styles.knob}></div>
    </div>
  );
};

export { Switch };
