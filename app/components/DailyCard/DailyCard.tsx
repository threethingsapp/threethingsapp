import css from "classnames";
import { Container, Heading, ProgressBar } from "..";
import styles from "./DailyCard.module.css";
import { AvatarGroup } from "../AvatarGroup";
import { IMAGE_UTILS } from "@/app/utils";

type Props = {
  className?: string;
};


const images = [
  { 
    className: IMAGE_UTILS.getRandomImageStyle(),
    image: null
  },
  { 
    className: IMAGE_UTILS.getRandomImageStyle(),
    image: null
  },
  { 
    className: IMAGE_UTILS.getRandomImageStyle(),
    image: null
  },
];

const DailyCard = ({ className }: Props): JSX.Element => {
  return (
    <Container height={120} className={css(styles.wrapper, className)}>
      <div className={styles['header-container']}>
        <Heading variant="v500">Daily progress</Heading>

        <AvatarGroup images={images} />
      </div>

      <small style={{ color: "#c1c1c1ff", marginBottom: "8px" }}>
        Here you can see your daily task progress
      </small>

      <ProgressBar progress={76} />
    </Container>
  );
};

export { DailyCard };
