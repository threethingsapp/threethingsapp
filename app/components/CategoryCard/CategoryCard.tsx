import { Button, Container, Heading, Icon, ProgressBar } from "..";
import { RandomPeople } from "../RandomPeople/RandomPeople";
import styles from "./CategoryCard.module.css";

type Props = {
  icon?: string;
  color?: string;
  category?: string;
  completed?: number;
  total?: number;
};

const CategoryCard = ({ category, completed, total }: Props): JSX.Element => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles["header-container"]}>
        <Icon name="search" />

        <div className={styles["avatars-container"]}>
          <RandomPeople style={{ transform: "translateX(40%)", zIndex: 2 }} />
          <RandomPeople style={{ transform: "translateX(0%)", zIndex: 1 }} />
        </div>
      </div>

      <div>
        <small>5 News</small>
        <Heading variant="v500">{category!}</Heading>
      </div>

      <div className={styles.footer}>
        <ProgressBar progress={89} className={styles['progress-bar']} />

        <span>{completed || 0} / {total || 0}</span>
      </div>
    </Container>
  );
};

export { CategoryCard };
