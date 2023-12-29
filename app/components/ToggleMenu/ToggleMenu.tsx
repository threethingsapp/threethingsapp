import { useState } from "react";
import { Button } from "@/app/components";

import styles from "./ToggleMenu.module.scss";

type Props = {
  options: {
    id: string,
    title: string,
    selected?: boolean,
  }[];
};

const ToggleMenu = ({ options }: Props): JSX.Element => {
  const [selected, select] = useState<string | undefined>(
    options.find(({ selected = false }) => selected)?.id
  );

  const handleSelection = (selected: string) => {
    select(selected);
  };

  return (
    <div className={styles.wrapper}>
      {options.map(({ id, title }) => (
        <Button
          key={id}
          title={title}
          size="small"
          theme={id === selected ? "primary" : "clear"}
          className={styles.button}
          onClick={() => handleSelection(id)}
        />
      ))}
    </div>
  );
};

export { ToggleMenu };
