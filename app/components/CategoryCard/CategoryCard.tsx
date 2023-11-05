import css from "classnames";
import { Container, Heading, Icon, ProgressBar } from "..";
import { RandomPeople } from "../RandomPeople/RandomPeople";
import styles from "./CategoryCard.module.css";

type Props = {
  icon?: string;
  color?: string;
  category: 'books' | 'email' | 'work' | 'urgent';
  tasks: Record<'total' | 'completed', number>
};

const CategoryCard = ({ category, tasks, color }: Props): JSX.Element => {
  const average = Math.ceil(tasks.completed / tasks.total * 100);
  const isCompleted = tasks.completed === tasks.total;

  return (
    <Container className={styles.wrapper}>
      <div className={styles["header-container"]}>
        <div className={css(styles['colored-till'], { 
          [styles['books-colored-till']]: category === 'books',
          [styles['work-colored-till']]: category === 'work',
          [styles['urgent-colored-till']]: category === 'urgent',
          [styles['email-colored-till']]: category === 'email',
        })}>
          <Icon name={category} width={14} height={14} />
        </div>


        <div className={styles["avatars-container"]}>
          <RandomPeople style={{ transform: "translateX(40%)", zIndex: 2 }} />
          <RandomPeople style={{ transform: "translateX(0%)", zIndex: 1 }} />
        </div>
      </div>

      <div>
        <small>{tasks.total - tasks.completed} News</small>
        <Heading style={{ textDecoration: 'capitalize' }} variant="v500">{category}</Heading>
      </div>

      <div className={styles.footer}>
        <ProgressBar progress={isCompleted ? 100 : average} className={styles['progress-bar']} color={color} />

        <div className={css(styles['colored-till'], { 
          [styles['books-colored-till']]: category === 'books',
          [styles['work-colored-till']]: category === 'work',
          [styles['urgent-colored-till']]: category === 'urgent',
          [styles['email-colored-till']]: category === 'email',
        })}>
          <small className={styles.footer__percentage}>{tasks.completed} / {tasks.total}</small>
        </div>

      </div>
    </Container>
  );
};

export { CategoryCard };
