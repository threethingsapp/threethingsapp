"use client";

import {
  CategoryColors,
  Container,
  Icon,
  IconNames,
  LoggedLayout,
  Pill,
  Button,
  ToggleMenu,
  Input,
} from "@/app/components";

import { Categories } from "../types";
import styles from "./page.module.scss";

type Props = {};

type ListType = {
  category: Categories;
  title: string;
}[];

const list: ListType = [
  {
    category: Categories.Books,
    title: 'Read "The Lean Startup"',
  },
  {
    category: Categories.Urgent,
    title: "Fix landing page",
  },
  {
    category: Categories.Work,
    title: "Share prototype with team",
  },
  {
    category: Categories.Urgent,
    title: "Reply to Richard",
  },
  {
    category: Categories.Work,
    title: "Finalize pitch deck",
  },
];

const CategoryIcons = {
  books: IconNames.Books,
  email: IconNames.Urgent,
  work: IconNames.Work,
  urgent: IconNames.Email,
};

const Profile = ({}: Props): JSX.Element => {
  return (
    <LoggedLayout title="Daily Progress" backButton>
      <div className={styles.container}>
        <div>
          <Input placeholder="Search" />

          <ToggleMenu
            options={[
              { title: "All", id: "all", selected: true },
              { title: "Favorites", id: "favorites" },
            ]}
          />
        </div>

        <div className={styles["list-wrapper"]}>
          {list.map(({ category, title }, index) => (
            <Container key={index} className={styles.wrapper}>
              <div className={styles.wrapper}>
                <Pill
                  color={CategoryColors[category]}
                  style={{ padding: "12px", borderRadius: "12px" }}
                >
                  <Icon name={CategoryIcons[category]} width={14} height={14} />
                </Pill>

                {title}
              </div>

              <Button onClick={() => null} theme="clear" style={{ padding: 4 }}>
                <Icon name={IconNames.Chevron} />
              </Button>
            </Container>
          ))}
        </div>
      </div>
    </LoggedLayout>
  );
};

export default Profile;
