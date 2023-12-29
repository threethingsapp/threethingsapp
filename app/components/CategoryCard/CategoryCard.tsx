import css from "classnames";
import { Container, Heading, Icon, ProgressBar, Pill, IconNames } from "..";
import { Colors } from "@/app/constants/colors";
import { IMAGE_UTILS } from "@/app/utils";
import { AvatarGroup } from "../AvatarGroup";

import styles from "./CategoryCard.module.css";

const CategoryColors = {
  'books': Colors.BLUE,
  'email': Colors.ORANGE,
  'work': Colors.VIOLET,
  'urgent': Colors.GREEN,
}

type Props = {
  icon?: string;
  color?: string;
  category: keyof typeof CategoryColors;
  tasks: Record<'total' | 'completed' | 'new', number>
  images: {
    className: string;
    image?: string | null;
  }[];
};

const CategoryCard = ({ category, tasks, color, images }: Props): JSX.Element => {
  const average = Math.ceil(tasks.completed / tasks.total * 100);
  const isCompleted = tasks.completed === tasks.total;

  return (
    <Container className={styles.wrapper}>
      <div className={styles["header-container"]}>
        <Pill color={CategoryColors[category]} style={{ padding: '12px', borderRadius: '12px' }}>
          <Icon name={category as IconNames} width={14} height={14} />
        </Pill>

        <AvatarGroup images={images} />
      </div>

      <div>
        <small style={{ color: Colors.GREY }}>{tasks.new} New</small>
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
