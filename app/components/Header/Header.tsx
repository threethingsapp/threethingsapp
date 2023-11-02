import Image from "next/image";
import { Avatar, Heading } from "..";
import styles from "./Header.module.css";

type Props = {
  page: string;
};

const Header = ({ page }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Heading variant="v500">{page}</Heading>

      <div className={styles["icons-container"]}>
        <Image
          src="/search.svg"
          alt="search"
          style={{ margin: "0 auto" }}
          width={24}
          height={24}
          priority
        />

        <Avatar />
      </div>
    </div>
  );
};

export { Header };
