"use client";

import { Button, LoggedLayout } from "@/app/components";
import { useRouter } from 'next/navigation';

type Props = {};

const Profile = ({}: Props): JSX.Element => {
  const router = useRouter();

  const handleLogout = () => router.push('/signin');
  const handleBack = () => router.push('/home');

  return (
    <LoggedLayout>
      <h2>Profile</h2>

      <Button title="Back" onClick={handleBack} />
      <Button title="LogOut" onClick={handleLogout} theme="clear" />
    </LoggedLayout>
  )
};

export default Profile;
