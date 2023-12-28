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
        <Heading variant="v500" style={{ alignSelf: 'flex-start' }}>Daily progress</Heading>

        <AvatarGroup images={images} />
      </div>

      <small style={{ color: "#c1c1c1ff", margin: "6px 0 28px" }}>
        Here you can see your daily task
      </small>

      <ProgressBar progress={76} showNumbers />
    </Container>
  );
};

export { DailyCard };
