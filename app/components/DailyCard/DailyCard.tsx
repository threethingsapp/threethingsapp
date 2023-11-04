import { Container, Heading, ProgressBar } from "..";
import { RandomPeople } from "../RandomPeople/RandomPeople";
import styles from "./DailyCard.module.css";

type Props = {};

const DailyCard = ({}: Props): JSX.Element => {
  return (
    <Container height={120} className={styles.wrapper}>
      <div>
        <Heading variant="v500">Daily progress</Heading>
      </div>

      <small style={{ color: "#c1c1c1ff", marginBottom: "8px" }}>
        Here you can see your daily task progress
      </small>

      <ProgressBar progress={76} />
    </Container>
  );
};

export { DailyCard };
