import { Container, Heading, Icon, ProgressBar, Pill } from "..";
import styles from "./CategoryCard.module.css";
import { Colors } from "@/app/constants/colors";
import { IMAGE_UTILS } from "@/app/utils";
import { AvatarGroup } from "../AvatarGroup";

const CategoryColors = {
  'books': Colors.BLUE,
  'email': Colors.ORANGE,
  'work': Colors.VIOLET,
  'urgent': Colors.GREEN,
}

type Props = {
  icon?: string;
  color?: string;
  category: 'books' | 'email' | 'work' | 'urgent';
  tasks: Record<'total' | 'completed', number>
};

const CategoryCard = ({ category, tasks, color }: Props): JSX.Element => {
  const average = Math.ceil(tasks.completed / tasks.total * 100);
  const isCompleted = tasks.completed === tasks.total;

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

  return (
    <Container className={styles.wrapper}>
      <div className={styles["header-container"]}>
        <Pill color={CategoryColors[category]}>
          <Icon name={category} width={14} height={14} />
        </Pill>

        <AvatarGroup images={images} />
      </div>

      <div>
        <small>{tasks.total - tasks.completed} News</small>
        <Heading style={{ textDecoration: 'capitalize' }} variant="v500">{category}</Heading>
      </div>

      <div className={styles.footer}>
        <ProgressBar progress={isCompleted ? 100 : average} className={styles['progress-bar']} color={color} />

        <Pill color={CategoryColors[category]}>
          <small className={styles.footer__percentage}>{tasks.completed} / {tasks.total}</small>
        </Pill>
      </div>
    </Container>
  );
};

export { CategoryCard };
