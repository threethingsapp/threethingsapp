import { useRouter } from "next/navigation";
import { Avatar, Button, Heading, Icon, IconNames } from "@/app/components";
import styles from "./Header.module.css";

type Props = {
  page: string;
  backButton?: boolean;
};

const Header = ({ page, backButton }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      {backButton && (
        <Button theme="primary" onClick={() => null} className={styles['back-button']}>
          <Icon name={IconNames.Chevron} />
        </Button>
      )}

      <Heading variant="v500">{page}</Heading>

      <div className={styles["icons-container"]}>
        <Icon name={IconNames.Search} />

        <Button theme="clear" onClick={() => router.push("/profile")} style={{ padding: 0 }}>
          <Avatar />
        </Button>
      </div>
    </div>
  );
};

export { Header };
