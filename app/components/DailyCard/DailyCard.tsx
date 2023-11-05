import Image from 'next/image';
import { Container, Heading, ProgressBar } from "..";
import { RandomPeople } from "../RandomPeople/RandomPeople";
import styles from "./DailyCard.module.css";
import css from 'classnames';

type Props = {};

const DailyCard = ({}: Props): JSX.Element => {
  return (
    <Container height={120} className={styles.wrapper}>
      <div className={styles['header-container']}>
        <Heading variant="v500">Daily progress</Heading>

        <div className={styles['avatars-container']}>
          <RandomPeople style={{ transform: 'translateX(80%)', zIndex: 3 }} />
          <RandomPeople style={{ transform: 'translateX(40%)', zIndex: 2 }} />
          <RandomPeople style={{ transform: 'translateX(0%)', zIndex: 1 }} />
        </div>
      </div>

      <small style={{ color: "#c1c1c1ff", marginBottom: "8px" }}>
        Here you can see your daily task progress
      </small>

      <ProgressBar progress={76} />
    </Container>
  );
};

export { DailyCard };
