import { Avatar, Heading, Icon, IconNames } from "@/app/components";
import styles from "./Header.module.css";

type Props = {
  page: string;
};

const Header = ({ page }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Heading variant="v500">{page}</Heading>

      <div className={styles["icons-container"]}>
        <Icon name={IconNames.Search} />

        <Avatar />
      </div>
    </div>
  );
};

export { Header };
