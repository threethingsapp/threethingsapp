"use client";

import { Avatar, Button, LoggedLayout } from "@/app/components";
import { useRouter } from 'next/navigation';

import styles from './page.module.scss';

type Props = {};

const Profile = ({}: Props): JSX.Element => {
  const router = useRouter();

  const handleLogout = () => router.push('/signin');

  return (
    <LoggedLayout>
      <Avatar imageSize={240} className={styles.avatar} />

      <Button title="LogOut" onClick={handleLogout} theme="clear" />
    </LoggedLayout>
  )
};

export default Profile;
