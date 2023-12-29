"use client";

import { Button, Container, LoggedLayout } from "@/app/components";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const goToHome = () => router.push("/home");

  return (
    <LoggedLayout>
      <h2>Daily Progress</h2>

      <Button title="back" onClick={goToHome} />

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
