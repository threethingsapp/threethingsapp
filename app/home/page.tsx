import css from "classnames";
import {
  Button,
  Header,
  Heading,
  Layout,
  DailyCard,
  CategoryCard,
  FooterNav,
} from "@/app/components";
import { Colors } from "@/app/constants";
import styles from "./home.module.css";

type Props = {};

const Home = ({}: Props): JSX.Element => {
  const userName = "Erlich Bachman";

  return (
    <Layout>
      <Header page="home" />

      <Heading variant="v100">Hello</Heading>
      <Heading variant="v100">{userName}</Heading>

      <div className={styles["button-wrapper"]}>
        <Button title="Overview" size="small" theme="primary" />
        <Button title="Productivity" size="small" theme="clear" />
      </div>

      <div style={{ height: "140px" }}>
        <DailyCard className={css(styles.card, styles["first-card"])} />
        <DailyCard className={css(styles.card, styles["second-card"])} />
        <DailyCard className={css(styles.card, styles["third-card"])} />
      </div>

      <Heading variant="v500">Categories</Heading>

      <div className={styles["category-container"]}>
        <CategoryCard
          color={Colors.BLUE}
          category="books"
          tasks={{ completed: 1, total: 2 }}
        />
        <CategoryCard
          color={Colors.ORANGE}
          category="email"
          tasks={{ completed: 3, total: 10 }}
        />
        <CategoryCard
          color={Colors.VIOLET}
          category="work"
          tasks={{ completed: 4, total: 4 }}
        />
        <CategoryCard
          color={Colors.GREEN}
          category="urgent"
          tasks={{ completed: 9, total: 18 }}
        />
      </div>

      <FooterNav />
    </Layout>
  );
};

export default Home;
