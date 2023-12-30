"use client";

import {
  Avatar,
  Button,
  Container,
  Heading,
  LoggedLayout,
  Switch,
} from "@/app/components";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

type Props = {};

const Profile = ({}: Props): JSX.Element => {
  const router = useRouter();

  const handleLogout = () => router.push("/signin");

  const userName = "Erlich Bachman";
  return (
    <LoggedLayout>
      <Avatar imageSize={180} className={styles.avatar} />

      <div style={{ textAlign: "center" }}>
        <Heading variant="v200">{userName}</Heading>

        <small>erlichbachman@piedpipier.com</small>

        <Button title="Edit Profile" onClick={() => null} theme="primary" />
      </div>

      <div>
        <label className={styles.label}>Notification</label>

        <Container className={styles.container}>
          <>Turn on Notification</>
          <Switch />
        </Container>
      </div>

      <div>
        <label className={styles.label}>Invite Link</label>
        <Container className={styles.container}>
          <>
            Invite People
            <Button
              title="invite"
              theme="primary"
              onClick={() => null}
              style={{ padding: "0 32px" }}
              size="small"
            />
          </>
        </Container>
      </div>

      <Button title="Log out" onClick={handleLogout} theme="clear" />
    </LoggedLayout>
  );
};

export default Profile;
