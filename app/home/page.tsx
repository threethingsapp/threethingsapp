import css from "classnames";
import { Button, Header, Heading, Layout, DailyCard, CategoryCard } from "../components";
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

      <div style={{ height: '140px' }}>
        <DailyCard className={css(styles.card, styles['first-card'])} />
        <DailyCard className={css(styles.card, styles['second-card'])} />
        <DailyCard className={css(styles.card, styles['third-card'])} />
      </div>

      <Heading variant="v500">
        Categories
      </Heading>

      <div className={styles['category-container']}>
        <CategoryCard category="Books" />
        <CategoryCard category="Email" />
        <CategoryCard category="Work" />
        <CategoryCard category="Urgent" />
      </div>
    </Layout>
  );
};

export default Home;
