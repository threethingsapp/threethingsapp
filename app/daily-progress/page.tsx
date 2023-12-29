"use client";

import { Container, LoggedLayout } from "@/app/components";

import styles from './page.module.scss';

type Props = {};

const list = [
  {
    title: "Sausis",
  },
  {
    title: "Sausis",
  },
  {
    title: "Sausis",
  },
  {
    title: "Sausis",
  },
  {
    title: "Sausis",
  },
  {
    title: "Sausis",
  },
  {
    title: "Sausis",
  },
  {
    title: "Sausis",
  },
];

const Profile = ({}: Props): JSX.Element => {

  return (
    <LoggedLayout>
      <h2>Daily Progress</h2>

      <div className={styles['list-wrapper']}>
        {list.map(({ title }, index) => (
          <Container key={index}>
            <>{title}</>
          </Container>
        ))}
      </div>
    </LoggedLayout>
  );
};

export default Profile;
