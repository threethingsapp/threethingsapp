"use client";

import { Button, Layout } from "@/app/components";
import { useRouter } from 'next/navigation';

type Props = {};

const Profile = ({}: Props): JSX.Element => {
  const router = useRouter();

  const goToHome = () => router.push('/home');

  return (
    <Layout>
      <h2>Daily Progress</h2>
      <h2>create layout :)</h2>

      <Button title="back" onClick={goToHome} />
    </Layout>
  )
};

export default Profile;
