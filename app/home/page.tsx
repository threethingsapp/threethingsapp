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
import { Categories } from "../types";

import styles from "./home.module.css";
import { ToggleMenu } from "../components/ToggleMenu";

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

const menuOptions = [
  {
    id: "overview",
    title: "Overview",
    selected: true,
  },
  {
    id: "productivity",
    title: "Productivity",
  }
];

const Home = (): JSX.Element => {
  const userName = "Erlich Bachman";

  return (
    <Layout>
      <Header page="home" />

      <Heading variant="v100">Hello</Heading>
      <Heading variant="v100">{userName}</Heading>

      <ToggleMenu options={menuOptions} />

      <div style={{ height: "190px" }}>
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
