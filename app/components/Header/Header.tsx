import { useRouter } from 'next/navigation';
import { Avatar, Button, Heading, Icon, IconNames } from "@/app/components";
import styles from "./Header.module.css";

type Props = {
  page: string;
};

const Header = ({ page }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <Heading variant="v500">{page}</Heading>

      <div className={styles["icons-container"]}>
        <Icon name={IconNames.Search} />

        <Button theme="clear" onClick={() => router.push('/profile')}>
          <Avatar />
        </Button>

      </div>
    </div>
  );
};

export { Header };
