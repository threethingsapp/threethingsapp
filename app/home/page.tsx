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
import { Categories } from "../types";

const categories = [
  {
    color: Colors.BLUE,
    category: Categories.Books,
    tasks: { completed: 1, total: 2 },
  },
  {
    color: Colors.ORANGE,
    category: Categories.Email,
    tasks: { completed: 3, total: 10 },
  },
  {
    color: Colors.VIOLET,
    category: Categories.Work,
    tasks: { completed: 4, total: 4 },
  },
  {
    color: Colors.GREEN,
    category: Categories.Urgent,
    tasks: { completed: 9, total: 18 },
  },
];

const Home = (): JSX.Element => {
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
        {categories.map(({ color, category, tasks }) => (
          <CategoryCard
            key={category}
            color={color}
            category={category}
            tasks={tasks}
          />
        ))}
      </div>

      <FooterNav />
    </Layout>
  );
};

export default Home;
