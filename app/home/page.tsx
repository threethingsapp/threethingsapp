"use client";

import css from "classnames";
import {
  Heading,
  LoggedLayout,
  DailyCard,
  CategoryCard,
} from "@/app/components";
import { ToggleMenu } from "@/app/components";
import { MOCKS } from './mocks';

import styles from "./home.module.css";

const Home = (): JSX.Element => {
  const userName = "Erlich Bachman";

  return (
    <LoggedLayout title="Home">
      <Heading variant="v200">Hello</Heading>
      <Heading variant="v200">{userName}</Heading>

      <ToggleMenu options={MOCKS.menuOptions} />

      <div style={{ height: "190px" }}>
        <DailyCard className={css(styles.card, styles["first-card"])} />
        <DailyCard className={css(styles.card, styles["second-card"])} />
        <DailyCard className={css(styles.card, styles["third-card"])} />
      </div>

      <Heading variant="v500">Categories</Heading>

      <div className={styles["category-container"]}>
        {MOCKS.categories.map(({ color, category, tasks, participants }) => (
          <CategoryCard
            key={category}
            color={color}
            category={category}
            tasks={tasks}
            images={participants}
          />
        ))}
      </div>
    </LoggedLayout>
  );
};

export default Home;
